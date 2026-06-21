


const VARIANTS = ["primary", "secondary", "ghost"] as const

type variant = typeof VARIANTS[number]

type BadgeProps = {
    label : string;
    variant? : variant
}


export function Badge({label, variant="primary"}: BadgeProps){

    const styles : Record<variant, React.CSSProperties> = {
        primary: {
            color : 'red'
        },
        secondary: {
            color : 'blue'
        },
        ghost: {
            color : 'green'
        }
    }
    return <span style={styles[variant]}>{label}</span>
}