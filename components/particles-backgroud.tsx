'use client';

import React, { useEffect } from 'react';

interface Particle {
    id: number;
    left: number;
    top: number;
    size: number;
    opacity: number;
    scale: number;
    duration: number;
    delay: number;
    note: string;
    rotation: number;
}

const NOTES = ['♪', '♫', '♬', '♩'];

const generateParticles = (count: number): Particle[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 150,
        size: Math.random() * 14 + 4, // 10px à 24px
        opacity: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 0.3 + 1,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 5,
        note: NOTES[Math.floor(Math.random() * NOTES.length)],
        rotation: Math.random() * 40 - 20, // -20° à +20°
    }));
};

export function ParticlesBackground() {
    const [particles, setParticles] = React.useState<Particle[]>([]);

    useEffect(() => {
        setParticles(generateParticles(25));
    }, []);

    return (
        <div className="fixed z-0 inset-0 overflow-hidden pointer-events-none">
            <style>{`
                @keyframes floatNote {
                    0% {
                        transform: translate(0, 0) scale(1) rotate(var(--rotation));
                        opacity: 0;
                    }
                    10% {
                        opacity: var(--particle-opacity);
                    }
                    50% {
                        transform: translate(var(--tx), var(--ty)) scale(var(--particle-scale)) rotate(calc(var(--rotation) + 10deg));
                        opacity: var(--particle-opacity);
                    }
                    90% {
                        opacity: var(--particle-opacity);
                    }
                    100% {
                        transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2)) scale(var(--particle-scale)) rotate(calc(var(--rotation) - 10deg));
                        opacity: 0;
                    }
                }

                .music-note {
                    position: absolute;
                    will-change: transform;
                    animation: floatNote linear infinite;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                    color: rgba(200, 170, 255, 0.9);
                    text-shadow: 0 0 8px rgba(168, 130, 255, 0.4);
                    font-family: serif;
                    user-select: none;
                }
            `}</style>

            {particles.map((particle) => {
                const tx = (Math.random() - 0.5) * 150;
                const ty = (Math.random() - 0.5) * 150;
                return (
                    <div
                        key={particle.id}
                        className="music-note"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            fontSize: `${particle.size}px`,
                            opacity: particle.opacity,
                            '--particle-opacity': particle.opacity,
                            '--particle-scale': particle.scale,
                            '--tx': `${tx}px`,
                            '--ty': `${ty}px`,
                            '--rotation': `${particle.rotation}deg`,
                            animation: `floatNote ${particle.duration}s linear ${particle.delay}s infinite`,
                        } as React.CSSProperties}
                    >
                        {particle.note}
                    </div>
                );
            })}
        </div>
    );
}