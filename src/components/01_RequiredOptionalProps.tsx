import type { ReactNode } from "react";



interface UserCardPros {
    id : string;
    name? : string;
    subTitle? : ReactNode
}

export function UserCard({id, name, subTitle}: UserCardPros){
    const displayName = name ?? "Guest"

    return (
        <div>
            <strong>{id}</strong>
            <p>{displayName}</p>
            {
                subTitle ? <p>{subTitle}</p> : null
            }
        </div>
    )
}