import type { Metadata } from "next"
import { Button, type ButtonType } from "@team-menyala/clover/src/components/button";
import { ReactNode } from "react";
import ToggleableButton from "@/components/toggleable-button";

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
            // with icons
            [
                <Button size="lg" arrow={true} key="primary-icon-lg">Primary</Button>,
                <Button arrow={true} key="primary-icon-md">Primary</Button>,
                <Button size="sm" arrow={true} key="primary-icon-sm">Primary</Button>,
            ],
            // loading
            [
                <Button size="lg" arrow={true} loading={true} key="primary-icon-lg">Primary</Button>,
                <Button arrow={true} loading={true} key="primary-icon-md">Primary</Button>,
                <Button size="sm" arrow={true} loading={true} key="primary-icon-sm">Primary</Button>,
            ],
        ]
    },
    {
        name: "Secondary",
        variants: [
            // normal
            [
                <Button variant="secondary" size="lg" key="secondary-normal-lg">Secondary</Button>,
                <Button variant="secondary" key="secondary-normal-md">Secondary</Button>,
                <Button variant="secondary" size="sm" key="secondary-normal-sm">Secondary</Button>,
            ],
            // disabled
            [
                <Button variant="secondary" size="lg" disabled key="secondary-disabled-lg">Disabled</Button>,
                <Button variant="secondary" disabled key="secondary-disabled-md">Disabled</Button>,
                <Button variant="secondary" size="sm" disabled key="secondary-disabled-sm">Disabled</Button>,
            ],
            // with icons
            [
                <Button variant="secondary" size="lg" arrow={true} key="secondary-icon-lg">Secondary</Button>,
                <Button variant="secondary" arrow={true} key="secondary-icon-md">Secondary</Button>,
                <Button variant="secondary" size="sm" arrow={true} key="secondary-icon-sm">Secondary</Button>,
            ],
            // loading
            [
                <Button variant="secondary" size="lg" arrow={true} loading={true} key="secondary-icon-lg">Secondary</Button>,
                <Button variant="secondary" arrow={true} loading={true} key="secondary-icon-md">Secondary</Button>,
                <Button variant="secondary" size="sm" arrow={true} loading={true} key="secondary-icon-sm">Secondary</Button>,
            ],
        ]
    },
    {
        name: "Danger",
        variants: [
            // normal
            [
                <Button variant="danger" size="lg" key="danger-normal-lg">Danger</Button>,
                <Button variant="danger" key="danger-normal-md">Danger</Button>,
                <Button variant="danger" size="sm" key="danger-normal-sm">Danger</Button>,
            ],
            // disabled
            [
                <Button variant="danger" size="lg" disabled key="danger-disabled-lg">Disabled</Button>,
                <Button variant="danger" disabled key="danger-disabled-md">Disabled</Button>,
                <Button variant="danger" size="sm" disabled key="danger-disabled-sm">Disabled</Button>,
            ],
            // with icons
            [
                <Button variant="danger" size="lg" arrow={true} key="danger-icon-lg">Danger</Button>,
                <Button variant="danger" arrow={true} key="danger-icon-md">Danger</Button>,
                <Button variant="danger" size="sm" arrow={true} key="danger-icon-sm">Danger</Button>,
            ],
            // loading
            [
                <Button variant="danger" size="lg" arrow={true} loading={true} key="danger-icon-lg">Danger</Button>,
                <Button variant="danger" arrow={true} loading={true} key="danger-icon-md">Danger</Button>,
                <Button variant="danger" size="sm" arrow={true} loading={true} key="danger-icon-sm">Danger</Button>,
            ],
        ]
    },
    {
        name: "Outline",
        variants: [
            // normal
            [
                <Button variant="outline" size="lg" key="outline-normal-lg">Outline</Button>,
                <Button variant="outline" key="outline-normal-md">Outline</Button>,
                <Button variant="outline" size="sm" key="outline-normal-sm">Outline</Button>,
            ],
            // disabled
            [
                <Button variant="outline" size="lg" disabled key="outline-disabled-lg">Disabled</Button>,
                <Button variant="outline" disabled key="outline-disabled-md">Disabled</Button>,
                <Button variant="outline" size="sm" disabled key="outline-disabled-sm">Disabled</Button>,
            ],
            // with icons
            [
                <Button variant="outline" size="lg" arrow={true} key="outline-icon-lg">Outline</Button>,
                <Button variant="outline" arrow={true} key="outline-icon-md">Outline</Button>,
                <Button variant="outline" size="sm" arrow={true} key="outline-icon-sm">Outline</Button>,
            ],
            // loading
            [
                <Button variant="outline" size="lg" arrow={true} loading={true} key="outline-icon-lg">Outline</Button>,
                <Button variant="outline" arrow={true} loading={true} key="outline-icon-md">Outline</Button>,
                <Button variant="outline" size="sm" arrow={true} loading={true} key="outline-icon-sm">Outline</Button>,
            ],
        ]
    },
    {
        name: "Ghost",
        variants: [
            // normal
            [
                <Button variant="ghost" size="lg" key="ghost-normal-lg">Ghost</Button>,
                <Button variant="ghost" key="ghost-normal-md">Ghost</Button>,
                <Button variant="ghost" size="sm" key="ghost-normal-sm">Ghost</Button>,
            ],
            // disabled
            [
                <Button variant="ghost" size="lg" disabled key="ghost-disabled-lg">Disabled</Button>,
                <Button variant="ghost" disabled key="ghost-disabled-md">Disabled</Button>,
                <Button variant="ghost" size="sm" disabled key="ghost-disabled-sm">Disabled</Button>,
            ],
            // with icons
            [
                <Button variant="ghost" size="lg" arrow={true} key="ghost-icon-lg">Ghost</Button>,
                <Button variant="ghost" arrow={true} key="ghost-icon-md">Ghost</Button>,
                <Button variant="ghost" size="sm" arrow={true} key="ghost-icon-sm">Ghost</Button>,
            ],
            // loading
            [
                <Button variant="ghost" size="lg" arrow={true} loading={true} key="ghost-icon-lg">Ghost</Button>,
                <Button variant="ghost" arrow={true} loading={true} key="ghost-icon-md">Ghost</Button>,
                <Button variant="ghost" size="sm" arrow={true} loading={true} key="ghost-icon-sm">Ghost</Button>,
            ],
        ]
    },
    {
        name: "State",
        variants: [
            [
                <ToggleableButton size="lg" key="test-normal-lg">Click Me</ToggleableButton>,
                <ToggleableButton variant="secondary" size="lg" key="test-secondary-lg">Click Me</ToggleableButton>,
                <ToggleableButton variant="danger" size="lg" key="test-danger-lg">Click Me</ToggleableButton>,
            ],
            [
                <ToggleableButton variant="outline" size="lg" key="test-outline-lg">Click Me</ToggleableButton>,
                <ToggleableButton variant="ghost" size="lg" key="test-ghost-lg">Click Me</ToggleableButton>,
            ]
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
                            <div className="flex flex-wrap gap-4" key={`row:${rowIndex}`}>
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