import type { PropsWithChildren, ReactNode } from "react";


type pannelProps = {
    title : string;
    children? : ReactNode
}


export function Pannel({title, children}:pannelProps){
    return (
        <section>
            <h1>{title}</h1>
            <div>{children ?? <em>No children present here</em>}</div>
        </section>
    )
}


interface RequiredChildrenProps extends PropsWithChildren{
    title : string;
    children: ReactNode
}

export function RequiredChildrenPanel({title, children}:RequiredChildrenProps){
    return (
        <section>
            <h1>{title}</h1>
            <div>{children}</div>
        </section>
    )
}