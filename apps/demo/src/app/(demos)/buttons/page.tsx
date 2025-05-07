import type { Metadata } from "next"
import { Button, type ButtonType } from "@team-menyala/clover/src/button";
import { ReactNode } from "react";

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
                <Button size="lg" key="primary-normal-lg">Primary</Button>,
                <Button key="primary-normal-md">Primary</Button>,
                <Button size="sm" key="primary-normal-sm">Primary</Button>,
            ],
            // disabled
            [
                <Button size="lg" disabled key="primary-disabled-lg">Disabled</Button>,
                <Button disabled key="primary-disabled-md">Disabled</Button>,
                <Button size="sm" disabled key="primary-disabled-sm">Disabled</Button>,
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