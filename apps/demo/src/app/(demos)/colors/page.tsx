import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Colors"
}

type ColorVariant = {
    label: string;
    className: string;
    theme?: "light" | "dark";
};

type ColorGroup = {
    name: string;
    variants: ColorVariant[];
};

const colors: ColorGroup[] = [
    {
        name: "Primary",
        variants: [
            { label: "Green Lighter", className: "bg-primary-lighter", theme: "light" },
            { label: "Green Light", className: "bg-primary-light", theme: "light" },
            { label: "Green", className: "bg-primary" },
            { label: "Green Dark", className: "bg-primary-dark" },
            { label: "Green Darker", className: "bg-primary-darker" }
        ]
    },
    {
        name: "Secondary",
        variants: [
            { label: "Orange Lighter", className: "bg-secondary-lighter", theme: "light" },
            { label: "Orange Light", className: "bg-secondary-light", theme: "light" },
            { label: "Orange", className: "bg-secondary" },
            { label: "Orange Dark", className: "bg-secondary-dark" },
            { label: "Orange Darker", className: "bg-secondary-darker" }
        ]
    },
    {
        name: "Danger",
        variants: [
            { label: "Red Lighter", className: "bg-danger-lighter", theme: "light" },
            { label: "Red Light", className: "bg-danger-light", theme: "light" },
            { label: "Red", className: "bg-danger" },
            { label: "Red Dark", className: "bg-danger-dark" },
            { label: "Red Darker", className: "bg-danger-darker" }
        ]
    },
    {
        name: "Neutral",
        variants: [
            { label: "Gray Light", className: "bg-gray", theme: "light" },
            { label: "Gray", className: "bg-gray-dark" },
            { label: "Dark", className: "bg-gray-darker" }
        ]
    }
];

export default function Demo() {
    return (
        <div className="flex gap-8 flex-col">
            <div>
                <h2>Colors</h2>
                <p>(Hover to see the classes)</p>
            </div>

            {colors.map((group) => (
                <div className="flex flex-col gap-2" key={`variant:${group.name.toLowerCase()}`}>
                    <p className="text-2xl font-medium">{group.name}</p>
                    <div className="flex flex-wrap gap-4 text-sm sm:text-base text-center">
                        {group.variants.map((variant) => (
                            <div 
                                className={`w-20 sm:w-28 h-20 sm:h-28 ${variant.className} rounded-md font-normal shadow-xs flex justify-center items-center flex-col text-${variant.theme === "light" ? 'foreground' : 'background'} transition-all duration-500 ease-in-out relative overflow-hidden group`} 
                                key={`color:${variant.className}`}
                            >
                                <p className="mx-2 sm:mx-4 transform group-hover:-translate-y-12 select-none opacity-100 group-hover:opacity-0 transition-all duration-500 h-12 flex justify-center items-center cursor-default">
                                    {variant.label}
                                </p>
                                <p className="mx-2 sm:mx-4 absolute top-16 sm:top-20 left-0 right-0 transform group-hover:-translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-500 h-12 flex justify-center items-center">
                                    {variant.className.slice(3)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}