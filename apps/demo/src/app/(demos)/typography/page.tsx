import type { Metadata } from "next"
import { createElement } from "react";

export const metadata: Metadata = {
    title: "Typography",

}

type Typography = {
    label: string;
    className?: string;
};

const headings: (Typography & { element?: string; })[] = [
    { label: "Jumbo 1", className: "text-7xl" },
    { label: "Jumbo 2", className: "text-6xl" },
    { label: "Heading 1", element: "h1" },
    { label: "Heading 2", element: "h2" },
    { label: "Heading 3", element: "h3" },
    { label: "Heading 4", element: "h4" },
    { label: "Heading 5", element: "h5" },
    { label: "Heading 6", element: "h6" },
];

const subtitles: Typography[] = [
    { label: "Subtitle 1", className: "subtitle text-2xl" },
    { label: "Subtitle 2", className: "subtitle text-xl" },
    { label: "Subtitle 3", className: "subtitle text-lg" },
    { label: "Subtitle 4", className: "subtitle" },
];

const bodies: Typography[] = [
    { label: "Body 1", className: "text-2xl" },
    { label: "Body 2", className: "text-xl" },
    { label: "Body 3", className: "text-lg" },
    { label: "Body 4", className: "" },
];

const variants: Typography[] = [
    { label: "Primary", className: "subtitle text-2xl font-medium" },
    { label: "Secondary", className: "text-2xl font-medium" },
];

const TransitionText = ({ label, className }: Typography & { element?: string }) => (
    <div className={`${className} relative group pr-4 h-[1.5em] overflow-hidden transition-all duration-500 ease-in-out`}>
        <p className="absolute inset-0 transform group-hover:-translate-y-full select-none opacity-100 group-hover:opacity-0 transition-all duration-500">
            {label}
        </p>
        <p className="absolute top-full left-0 right-0 transform group-hover:-translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500 italic">
            {className || "(default, no classes)"}
        </p>
    </div>
);

export default function Demo() {
    return (
        <div className="flex gap-8 flex-col">
            <div>
                <h2>Typography</h2>
                <p>(Hover to see the element/classes)</p>
            </div>

            <div className="flex flex-wrap gap-x-24">
                <div className="flex-1 min-w-[240px]">
                    {headings.map(({ label, className, element }) => (
                        <div key={label}>
                            {createElement(
                                element || 'h1',
                                {
                                    className: `${className ?? ''} relative group pr-4 overflow-hidden transition-all duration-500 ease-in-out`,
                                    key: label
                                },
                                <>
                                    <span className="block transform group-hover:-translate-y-full select-none opacity-100 group-hover:opacity-0 transition-all duration-500">
                                        {label}
                                    </span>
                                    <span className="absolute top-full left-0 transform group-hover:-translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500 italic">
                                        {className || `<${element}>`}
                                    </span>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex-1 min-w-[240px]">
                    {subtitles.map((typography) => (
                        <TransitionText key={typography.label} {...typography} />
                    ))}
                    {bodies.map((typography) => (
                        <TransitionText key={typography.label} {...typography} />
                    ))}
                </div>
            </div>

            <div className="mt-4">
                {variants.map((typography) => (
                    <TransitionText key={typography.label} {...typography} />
                ))}
            </div>
        </div>
    );
}
