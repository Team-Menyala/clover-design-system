import type { Metadata } from "next"
import { Button, type ButtonType } from "@team-menyala/clover/src/button";
import { ReactNode } from "react";
import { start } from "@/components/loading";

export const metadata: Metadata = {
    title: "Buttons"
}

type ButtonGroup = {
    name: string;
    variants: ButtonType[][];
};

const buttons: ButtonGroup[] = [
    {
        name: "Primary",
        variants: [
            // normal
            [
                <Button size="lg">Primary</Button>,
                <Button>Primary</Button>,
                <Button size="sm">Primary</Button>,
            ],
            // disabled
            [
                <Button size="lg" disabled>Disabled</Button>,
                <Button disabled>Disabled</Button>,
                <Button size="sm" disabled>Disabled</Button>,
            ],
        ]
    }
];

export default function Demo() {
    return (
        <div className="flex gap-8 flex-col">
            <h2>Buttons</h2>

            {buttons.map((group) => (
                <div className="flex flex-col gap-2" key={`variant:${group.name.toLowerCase()}`}>
                    <p className="text-2xl font-medium">{group.name}</p>
                    <div className="flex flex-wrap gap-4 flex-col">
                        {group.variants.map((variantRow, rowIndex) => (
                            <div className="flex gap-4" key={`row:${rowIndex}`}>
                                {variantRow.map((buttonVariant, buttonIndex) => (
                                    <div key={`button:${rowIndex}-${buttonIndex}`}>
                                        {buttonVariant as ReactNode}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}