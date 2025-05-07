'use client';

import NextLink from 'next/link';
import { start } from './loading';

export default function Link(props: React.ComponentProps<typeof NextLink>) {
    return <NextLink onClick={() => start()} {...props} />;
}