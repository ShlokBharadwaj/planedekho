import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { MouseEventHandler } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size: "default" | "sm" | "lg" | "icon";
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
};

export interface CustomFilterProps {
    title: string;
};

export interface SearchBarProps {
    className?: string;
};

export interface ManufacturerSearchProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
};