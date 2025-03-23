import React, { useEffect, useRef } from 'react';
import './index.scss';

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size to window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Matrix characters
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
        const charArray = chars.split('');
        const fontSize = 10;
        const columnSpacing = 15;
        const columns = canvas.width / columnSpacing;
        const drops = [];
        const speed = 0.4;

        // Initialize drops with random starting positions
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        let lastTime = 0;
        const FPS = 60;
        const frameInterval = 1000 / FPS;

        // Drawing function
        const draw = (currentTime) => {
            animationFrameRef.current = requestAnimationFrame(draw);

            // Control frame rate
            if (currentTime - lastTime < frameInterval) return;
            lastTime = currentTime;

            // More transparent black background for subtler fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // More transparent green text with varying opacity
            ctx.font = fontSize + 'px monospace';

            // Loop over drops
            for (let i = 0; i < drops.length; i++) {
                // Calculate opacity based on position (fade out at bottom)
                const opacity = Math.min(0.25, Math.max(0.05, 1 - (drops[i] * fontSize) / (canvas.height * 0.8)));
                ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;

                // Random character
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * columnSpacing, drops[i] * fontSize);

                // Reset drop to top with random delay if it reaches bottom
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = -1;
                }
                drops[i] += speed;
            }
        };

        // Start animation
        animationFrameRef.current = requestAnimationFrame(draw);

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="matrix-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1
            }}
        />
    );
};

export default MatrixBackground; 