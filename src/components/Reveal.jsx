import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }) {
    const [visible, setVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${className} fade-in ${visible ? "visible" : ""}`}
        >
            {children}
        </div>
    );
}

export default Reveal;