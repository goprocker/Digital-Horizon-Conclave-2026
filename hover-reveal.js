class FluidReveal {
    constructor() {
        this.imageStack = document.getElementById('imageStack');
        this.maskCircle = document.getElementById('maskCircle');
        this.topImage = document.querySelector('.top-image');

        // Mouse position tracking
        this.mouse = { x: 0, y: 0 };
        this.currentPos = { x: 50, y: 50 };
        this.targetPos = { x: 50, y: 50 };

        // Radius tracking with inertia
        this.currentRadius = 0;
        this.targetRadius = 0;

        // Morphing effect points for organic deformation
        this.morphPoints = [];
        this.numPoints = 12;
        this.morphIntensity = 0;

        // Animation parameters
        this.ease = 0.08; // Lower = more delay/smoothness
        this.radiusEase = 0.12;
        this.maxRadius = 20;
        this.isHovering = false;

        // Initialize morph points
        this.initMorphPoints();

        // Bind events
        this.bindEvents();

        // Start animation loop
        this.animate();
    }

    initMorphPoints() {
        for (let i = 0; i < this.numPoints; i++) {
            this.morphPoints.push({
                angle: (i / this.numPoints) * Math.PI * 2,
                offset: 0,
                velocity: 0,
                targetOffset: 0
            });
        }
    }

    bindEvents() {
        this.imageStack.addEventListener('mouseenter', (e) => {
            this.isHovering = true;
            this.targetRadius = this.maxRadius;
        });

        this.imageStack.addEventListener('mouseleave', (e) => {
            this.isHovering = false;
            this.targetRadius = 0;
            this.morphIntensity = 0;
        });

        this.imageStack.addEventListener('mousemove', (e) => {
            const rect = this.imageStack.getBoundingClientRect();

            // Convert to percentage coordinates (0-100)
            this.targetPos.x = ((e.clientX - rect.left) / rect.width) * 100;
            this.targetPos.y = ((e.clientY - rect.top) / rect.height) * 100;

            // Update custom cursor position
            const cursor = this.imageStack;
            cursor.style.setProperty('--cursor-x', `${e.clientX - rect.left}px`);
            cursor.style.setProperty('--cursor-y', `${e.clientY - rect.top}px`);

            // Calculate movement speed for morphing intensity
            const dx = this.targetPos.x - this.currentPos.x;
            const dy = this.targetPos.y - this.currentPos.y;
            const speed = Math.sqrt(dx * dx + dy * dy);
            this.morphIntensity = Math.min(speed * 0.5, 3);
        });
    }

    updateMorphPoints() {
        this.morphPoints.forEach((point, i) => {
            // Create wave-like deformation based on movement
            const noise = Math.sin(Date.now() * 0.001 + i) * 0.5;
            point.targetOffset = (Math.random() - 0.5) * this.morphIntensity + noise;

            // Apply spring physics for organic movement
            const spring = 0.15;
            const friction = 0.7;

            point.velocity += (point.targetOffset - point.offset) * spring;
            point.velocity *= friction;
            point.offset += point.velocity;
        });
    }

    createMorphedPath() {
        if (this.currentRadius < 0.5) {
            return `circle(${this.currentRadius}% at ${this.currentPos.x}% ${this.currentPos.y}%)`;
        }

        // Create organic blob shape using morph points
        const points = this.morphPoints.map((point, i) => {
            const baseRadius = this.currentRadius;
            const morphedRadius = baseRadius + point.offset;

            const x = this.currentPos.x + Math.cos(point.angle) * morphedRadius;
            const y = this.currentPos.y + Math.sin(point.angle) * morphedRadius;

            return `${x}% ${y}%`;
        });

        // Create smooth polygon path
        return `polygon(${points.join(', ')})`;
    }

    animate() {
        // Smooth position interpolation with easing
        this.currentPos.x += (this.targetPos.x - this.currentPos.x) * this.ease;
        this.currentPos.y += (this.targetPos.y - this.currentPos.y) * this.ease;

        // Smooth radius interpolation
        this.currentRadius += (this.targetRadius - this.currentRadius) * this.radiusEase;

        // Update morph points for organic deformation
        if (this.isHovering) {
            this.updateMorphPoints();
        }

        // Apply the morphed clip-path to reveal bottom image
        const clipPath = this.createMorphedPath();
        this.topImage.style.clipPath = clipPath;

        // Update SVG mask circle (for goo effect)
        this.maskCircle.setAttribute('cx', this.currentPos.x);
        this.maskCircle.setAttribute('cy', this.currentPos.y);
        this.maskCircle.setAttribute('r', this.currentRadius);

        // Continue animation loop
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FluidReveal();
});
