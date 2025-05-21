"use client";
import {
    Form,
    FormInput,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormSelect,
    FormControl,
} from "@team-menyala/clover/src/components/form"

import {
    SelectContent,
    SelectItem
} from "@team-menyala/clover/src/components/select";

import { Checkbox } from "@team-menyala/clover/src/components/checkbox"
import { RadioGroup, RadioGroupItem } from "@team-menyala/clover/src/components/radio-group"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

export function NameForm() {
    const formSchema = z.object({
        name: z.string().min(1, {
            message: "Name must be filled.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onTouched",
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    return <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => { })}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormDescription>Example text helper.</FormDescription>
                        <FormInput placeholder="Enter your name" {...field} />
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    </Form>
}

export function SelectForm() {
    const formSchema = z.object({
        category: z.string().min(1, {
            message: "Category must be selected.",
        }).refine(value => ["inside", "outside"].includes(value), {
            message: "Invalid option.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onTouched",
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: "",
        },
    })

    return <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => { })}>
            <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>City Category</FormLabel>
                        <FormSelect
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            placeholder="Select a category"
                            {...field}
                        >
                            <SelectContent>
                                <SelectItem value="inside">Inside City</SelectItem>
                                <SelectItem value="outside">Outside City</SelectItem>
                                <SelectItem value="option_3">Option 3</SelectItem>
                            </SelectContent>
                        </FormSelect>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    </Form>
}

export function CheckboxForm() {

    const options = [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "native", label: "Native" },
        { value: "anomaly", label: "Anomaly" },
    ]

    const formSchema = z.object({
        languages: z.array(z.string()).min(2, {
            message: "At least two language must be selected.",
        }).refine(values => values.every((val) => options.some((option) => (option.value == options[3].value ? 'anomaly_value' : option.value) === val)),
        {
            message: "Invalid option.",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onSubmit",
        resolver: zodResolver(formSchema),
        defaultValues: {
            languages: [],
        },
    })

    return <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => { })}>
            <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                    <FormItem onBlur={field.onBlur}>
                        <div>
                            <FormLabel className="text-base">Languages</FormLabel>
                            <FormDescription>
                                Choose language you like.
                            </FormDescription>
                        </div>
                        {options.map((option) => (
                            <FormItem key={option.value} className="flex flex-row items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        id={option.value}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                        
                                        onCheckedChange={(checked) => {
                                            if (checked) {
                                                field.onChange([...field.value, option.value])
                                            } else {
                                                field.onChange(field.value.filter((value) => value !== option.value))
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormLabel htmlFor={option.value} className="text-sm data-[error=true]:text-unset font-normal">
                                    {option.label}
                                </FormLabel>
                            </FormItem>
                        ))}
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    </Form>
}

export function RadioForm() {
    const formSchema = z.object({
        fruit: z.string().min(1, {
            message: "Please select a fruit.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        mode: "onTouched",
        resolver: zodResolver(formSchema),
        defaultValues: {
            fruit: "",
        },
    })

    return <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => { })}>
            <FormField
                control={form.control}
                name="fruit"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Favorite Fruit</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="apple" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Apple
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="banana" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Banana
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="orange" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        Orange
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    </Form>
}

