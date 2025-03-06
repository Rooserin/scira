import { MouseEvent as ReactMouseEvent } from 'react';

export const useDraggableScroll = () => {
    const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
        const ele = e.currentTarget;
        const startX = e.pageX - ele.scrollLeft;
        
        const handleMouseMove = (e: MouseEvent) => {
            ele.scrollLeft = e.pageX - startX;
        };
        
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return {
        onMouseDown: handleMouseDown,
        style: { cursor: 'grab' } as const
    };
};