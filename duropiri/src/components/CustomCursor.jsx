"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 }); // Centering the cursor

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                ease: 'power3.out',
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const scaleCursorUp = () => {
            gsap.to(cursorRef.current, {
                scale: 3, // Larger scale for hover
                ease: 'power3.out',
                duration: 0.5,
            });
        };

        const scaleCursorDown = () => {
            gsap.to(cursorRef.current, {
                scale: 1, // Return to original scale
                ease: 'power3.out',
                duration: 1,
            });
        };

        const elements = document.querySelectorAll('a,');
        elements.forEach(el => {
            el.addEventListener('mouseover', scaleCursorUp);
            el.addEventListener('mouseout', scaleCursorDown);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            elements.forEach(el => {
                el.removeEventListener('mouseover', scaleCursorUp);
                el.removeEventListener('mouseout', scaleCursorDown);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed w-5 h-5 rounded-full bg-light-accent/50 dark:bg-dark-accent/50 pointer-events-none"
            style={{
                zIndex: 9999,
            }}
        ></div>
    );
}
