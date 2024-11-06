import dynamic from 'next/dynamic';

export const Canvas = dynamic(() => import('./StaticCanvas'), { ssr: false });
