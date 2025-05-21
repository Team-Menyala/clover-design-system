'use client';

import { useState } from 'react';
import { Button } from '@team-menyala/clover/src/components/button';
import { type ButtonType } from '@team-menyala/clover/src/components/button';

export default function ToggleableButton(props: ButtonType) {
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    };
    
    return (
        <div className="flex flex-col gap-4">
        <Button loading={loading} onClick={handleClick} {...props} />
        </div>
    );
}