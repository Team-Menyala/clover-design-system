import { forwardRef, type SVGProps } from 'react';

export const LoadingIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 3c4.97 0 9 4.03 9 9" transform="rotate(360 12 12)"></path></svg>);
});