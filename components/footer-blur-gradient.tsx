'use client';

interface BlurGradientProps {
    position?: 'bottom' | 'top' | 'left' | 'right';
    intensity?: number;
    height?: string;
}

export function FooterBlurGradient({
                                       position = 'bottom',
                                       intensity = 1,
                                       height = 'h-48'
                                   }: BlurGradientProps) {
    const layers = 8;
    const maxBlur = 10 * intensity;

    const getGradient = (layerIndex: number) => {
        const start = (layerIndex * 12.5);
        const mid1 = (layerIndex * 12.5) + 12.5;
        const mid2 = (layerIndex * 12.5) + 25;
        const end = ((layerIndex + 1) * 12.5) + 12.5;

        switch (position) {
            case 'bottom':
                return `linear-gradient(rgba(0, 0, 0, 0) ${start}%, rgb(0, 0, 0) ${mid1}%, rgb(0, 0, 0) ${mid2}%, rgba(0, 0, 0, 0) ${end}%)`;
            case 'top':
                return `linear-gradient(rgba(0, 0, 0, 0) ${100 - end}%, rgb(0, 0, 0) ${100 - mid2}%, rgb(0, 0, 0) ${100 - mid1}%, rgba(0, 0, 0, 0) ${100 - start}%)`;
            case 'left':
                return `linear-gradient(90deg, rgba(0, 0, 0, 0) ${start}%, rgb(0, 0, 0) ${mid1}%, rgb(0, 0, 0) ${mid2}%, rgba(0, 0, 0, 0) ${end}%)`;
            case 'right':
                return `linear-gradient(90deg, rgba(0, 0, 0, 0) ${100 - end}%, rgb(0, 0, 0) ${100 - mid2}%, rgb(0, 0, 0) ${100 - mid1}%, rgba(0, 0, 0, 0) ${100 - start}%)`;
            default:
                return '';
        }
    };

    const getBlurValue = (layerIndex: number) => {
        return (maxBlur / layers) * (layerIndex + 1);
    };

    const positionClass = {
        bottom: 'bottom-0 w-full',
        top: 'top-0 w-full',
        left: 'left-0 h-full',
        right: 'right-0 h-full',
    }[position];

    return (
        <div
            className={`pointer-events-none fixed ${positionClass} ${height} z-50 overflow-hidden`}
            style={{
                [position === 'bottom' || position === 'top' ? 'height' : 'width']:
                    position === 'left' || position === 'right' ? height : height
            }}
        >
            {Array.from({ length: layers }).map((_, index) => (
                <div
                    key={index}
                    className="absolute inset-0"
                    style={{
                        zIndex: index + 1,
                        opacity: 1,
                        maskImage: getGradient(index),
                        WebkitMaskImage: getGradient(index),
                        backdropFilter: `blur(${getBlurValue(index)}px)`,
                        willChange: 'auto',
                    }}
                />
            ))}
        </div>
    );
}