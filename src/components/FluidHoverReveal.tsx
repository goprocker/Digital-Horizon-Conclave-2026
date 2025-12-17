"use client";

import React, { useEffect, useRef } from "react";

/**
 * FluidHoverReveal Component
 * 
 * Implements a premium hover-based reveal interaction using fluid mask animation.
 * Features:
 * - Two-layer image stack (Base = 1.jpg, Reveal = 2.jpeg)
 * - Fluid, organic mask movement with inertia
 * - Velocity-based mask deformation
 * - Smooth easing and spring physics
 * - Global mouse tracking to handle z-index occlusion by overlay content
 */
export default function FluidHoverReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const revealImageRef = useRef<HTMLImageElement>(null);
    const requestRef = useRef<number>();

    // Animation state refs (mutable across renders without triggering re-renders)
    const state = useRef({
        mouse: { x: 0, y: 0 },
        currentPos: { x: 50, y: 50 },
        targetPos: { x: 50, y: 50 },
        currentRadius: 0,
        targetRadius: 0,
        morphPoints: [] as { angle: number; offset: number; velocity: number; targetOffset: number }[],
        morphIntensity: 0,
        isHovering: false
    });

    // Configuration
    const config = {
        ease: 0.08,           // Follow delay
        radiusEase: 0.12,     // Radius expansion speed
        maxRadius: 20,        // Max reveal size % (Small bubble)
        numPoints: 12,        // Morph smoothness
        spring: 0.15,
        friction: 0.7
    };

    useEffect(() => {
        // Initialize morph points
        const initMorphPoints = () => {
            state.current.morphPoints = [];
            for (let i = 0; i < config.numPoints; i++) {
                state.current.morphPoints.push({
                    angle: (i / config.numPoints) * Math.PI * 2,
                    offset: 0,
                    velocity: 0,
                    targetOffset: 0
                });
            }
        };

        initMorphPoints();

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            // Check if mouse is inside the container area
            // We use global window listener to catch events even if they are occurring over
            // the text content (which has a higher z-index/pointer-events-auto)
            const isInside =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (isInside) {
                if (!state.current.isHovering) {
                    state.current.isHovering = true;
                    state.current.targetRadius = config.maxRadius;
                }

                // Convert to percentage coordinates (0-100) relative to container
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                state.current.targetPos.x = x;
                state.current.targetPos.y = y;

                // Calculate movement speed for morphing intensity
                const dx = state.current.targetPos.x - state.current.currentPos.x;
                const dy = state.current.targetPos.y - state.current.currentPos.y;
                const speed = Math.sqrt(dx * dx + dy * dy);
                state.current.morphIntensity = Math.min(speed * 0.5, 3);
            } else {
                if (state.current.isHovering) {
                    state.current.isHovering = false;
                    state.current.targetRadius = 0;
                    state.current.morphIntensity = 0;
                }
            }
        };

        const updateMorphPoints = () => {
            state.current.morphPoints.forEach((point, i) => {
                // Create wave-like deformation based on movement
                const noise = Math.sin(Date.now() * 0.001 + i) * 0.5;
                point.targetOffset = (Math.random() - 0.5) * state.current.morphIntensity + noise;

                // Spring physics
                point.velocity += (point.targetOffset - point.offset) * config.spring;
                point.velocity *= config.friction;
                point.offset += point.velocity;
            });
        };

        const createMorphedPath = () => {
            const { currentRadius, currentPos, morphPoints } = state.current;

            if (currentRadius < 0.5) {
                return `circle(${currentRadius}% at ${currentPos.x}% ${currentPos.y}%)`;
            }

            const points = morphPoints.map((point) => {
                const baseRadius = currentRadius;
                const morphedRadius = baseRadius + point.offset;

                // Aspect ratio correction (assume landscape usually, but could be square)
                // For a perfect circle visual in a rectangular container, we might need adjustments,
                // but % works well for fluid shapes.

                const x = currentPos.x + Math.cos(point.angle) * morphedRadius;
                const y = currentPos.y + Math.sin(point.angle) * morphedRadius;

                return `${x}% ${y}%`;
            });

            return `polygon(${points.join(', ')})`;
        };

        const animate = () => {
            // Smooth position interpolation
            state.current.currentPos.x += (state.current.targetPos.x - state.current.currentPos.x) * config.ease;
            state.current.currentPos.y += (state.current.targetPos.y - state.current.currentPos.y) * config.ease;

            // Smooth radius interpolation
            state.current.currentRadius += (state.current.targetRadius - state.current.currentRadius) * config.radiusEase;

            // Update morph points if hovering
            if (state.current.isHovering) {
                updateMorphPoints();
            }

            // Apply clip path
            if (revealImageRef.current) {
                const clipPath = createMorphedPath();
                revealImageRef.current.style.clipPath = clipPath;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        // Start animation loop
        requestRef.current = requestAnimationFrame(animate);

        // Bind events
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-black"
        >
            {/* Base Image (Visible by default) - 1.jpg */}
            <img
                src="/1.jpg"
                alt="Digital Horizon Background"
                className="absolute inset-0 w-full h-full object-cover z-10"
                style={{ pointerEvents: 'none' }}
            />

            {/* Reveal Image (Visible on hover in mask) - 2.jpeg */}
            <img
                ref={revealImageRef}
                src="/2.jpeg"
                alt="Digital Horizon Reveal"
                className="absolute inset-0 w-full h-full object-cover z-20"
                style={{
                    clipPath: 'circle(0% at 50% 50%)',
                    pointerEvents: 'none',
                    willChange: 'clip-path' // Optimization
                }}
            />

            {/* Overlay to ensure text readability if needed, though usually handled by parent */}
            <div className="absolute inset-0 z-30 bg-black/40 pointer-events-none" />
        </div>
    );
}
