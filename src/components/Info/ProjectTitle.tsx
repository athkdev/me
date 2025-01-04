import { ReactElement, ReactNode } from "react";
import localFont from 'next/font/local';

const geist = localFont({
    src: [
        {
            path: '../../../public/fonts/Geist[wght].woff2',
            style: 'normal'
        },
    ],
})

interface TProjectTitleProps {
    children: ReactNode
    url: string
    onHover: (url: string) => any
}

export default function ProjectTitle({children, onHover, url}: TProjectTitleProps):ReactElement  {
    return <h3 onMouseEnter={() => onHover(url)} className={`text-3xl font-bold hover:bg-white hover:text-black ${geist.className}`}>{children}</h3>;
}