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

export interface FetchPlanesOptions {
    manufacturer?: string;
    model?: string;
    engine_type?: string;
    min_speed?: number;
    max_speed?: number;
    min_range?: number;
    max_range?: number;
    min_length?: number;
    max_length?: number;
    min_height?: number;
    max_height?: number;
    min_wingspan?: number;
    max_wingspan?: number;
    limit?: number;
}

export interface PlaneResponseProps {
    manufacturer: string;
    model: string;
    engine_type: string;
    max_speed_knots: string;
    ceiling_ft: string;
    gross_weight_lbs: string;
    length_ft: string;
    height_ft: string;
    wing_span_ft: string;
    range_nautical_miles: string;
    engine_thrust_lb_ft?: string;
    cruise_speed_knots?: string;
    takeoff_groundstring_run_ft?: string;
    landing_ground_roll_ft?: string;
    empty_weight_lbs?: string;
    stall_knots?: string;
    rate_of_climb_ft_per_min?: string;
    takeoff_over_50ft_ft?: string;
    landing_over_50ft_ft?: string;
    image?: string;
    photographer?: string;
    photographerUsername?: string;
};

export interface PlaneImageResponseProps {
    manufacturer: string;
    model: string;
    image: string;
    photographer?: string;
    photographerUsername?: string;
};