

// reuse prop type from dom elements

import type { ComponentProps, CSSProperties } from "react";

// fisrt component props
type ButtonBasedProps = ComponentProps<"button">;
type buttonProps = ButtonBasedProps & {
  variant?: "primary" | "secondary";
};


export const Button = ({variant= "primary", style, ...rest }: buttonProps) => {
    const base: CSSProperties = {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
    }
    return <button style={{...base, ...style}}{...rest}/>
}