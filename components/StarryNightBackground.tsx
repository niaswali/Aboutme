import React, { useRef, useEffect } from 'react';

const StarryNightBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const numStars = 200;
        const starColor = '#fef3c7'; // amber-100 for a warm, thematic glow

        // Define a Star class
        class Star {
            x: number;
            y: number;
            radius: number;
            vx: number;
            opacity: number;
            opacityDirection: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 1.5 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.opacityDirection = 1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(254, 243, 199, ${this.opacity})`;
                ctx.fill();
            }

            update() {
                this.x += this.vx;

                // Twinkling effect
                if (this.opacity > 0.7 || this.opacity < 0.2) {
                    this.opacityDirection *= -1;
                }
                this.opacity += 0.005 * this.opacityDirection;


                if (this.x < -this.radius) {
                    this.x = canvas.width + this.radius;
                }
            }
        }

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        
        // Initialize
        handleResize();
        animate();

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default StarryNightBackground;