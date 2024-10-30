import dynamic from 'next/dynamic'

export const DynCanvas = dynamic(() => import('./Canvas'), { ssr: false });