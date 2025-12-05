import { useEffect, useRef } from "react";
import balon from "../../assets/balon.png";
import "../../styles/home.css";

function BouncingBall() {
    const ballRef = useRef(null);
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const ball = ballRef.current;

        let x = 50;
        let y = 0;
        let vx = (Math.random() * 0.6 + 0.4) * (Math.random() < 0.5 ? -1 : 1);
        let vy = 0;
        let gravity = 0.5;

        function animate() {
            const ballWidth = ball.offsetWidth;
            const ballHeight = ball.offsetHeight;

            const ground = window.innerHeight - ballHeight * 3.5;

            // si está siendo arrastrado, pausamos física
            if (!dragging.current) {
                vy += gravity;
                x += vx;
                y += vy;

                if (y >= ground) {
                    y = ground;
                    vy = -(Math.abs(vy) * 0.9 + Math.random() * 3);
                }

                if (x <= 0 || x >= window.innerWidth - ballWidth) {
                    vx = -vx * (Math.random() * 0.3 + 0.9);
                }

                ball.style.transform = `translate(${x}px, ${y}px)`;
            }

            requestAnimationFrame(animate);
        }

        animate();

        // ---- Drag handlers ---- //

        function onMouseDown(e) {
            dragging.current = true;

            const rect = ball.getBoundingClientRect();
            offset.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            // detener movimiento vertical para evitar saltos
            vy = 0;
            vx = 0;
        }

        function onMouseMove(e) {
            if (!dragging.current) return;

            const newX = e.clientX - offset.current.x;
            const newY = e.clientY - offset.current.y;

            x = newX;
            y = newY;

            ball.style.transform = `translate(${x}px, ${y}px)`;
        }

        function onMouseUp() {
            if (!dragging.current) return;
            dragging.current = false;

            // al soltar, el balón continúa con velocidad vertical hacia abajo
            vy = 0;
            vx = (Math.random() * 1 + 0.5) * (Math.random() < 0.5 ? -1 : 1);
        }

        // Event listeners
        ball.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            ball.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

    }, []);

    return <img ref={ballRef} src={balon} alt="ball" className="ball" draggable="false" />;
}

export default BouncingBall;
