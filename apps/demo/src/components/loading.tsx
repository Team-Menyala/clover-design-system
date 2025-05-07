'use client';

import nProgress from 'nprogress';
import { useEffect } from 'react';

nProgress.configure({
    showSpinner: false,
    parent: '#progress',
});

export const start = nProgress.start;

export default function Loaded({ children }: { children?: React.ReactNode }) {
    useEffect(() => {
        nProgress.done();
    });

    return children;
}