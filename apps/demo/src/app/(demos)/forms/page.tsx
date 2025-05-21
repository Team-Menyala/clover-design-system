import type { Metadata } from "next"
import { CheckboxForm, NameForm, RadioForm, SelectForm } from "./renderer"

export const metadata: Metadata = {
    title: "Forms"
}

export default function Demo() {
    return (
        <div className="flex gap-8 flex-col max-w-md">
            <h2>Forms</h2>

            <NameForm />
            <SelectForm />
            <CheckboxForm />
            <RadioForm />
        </div>
    )
}