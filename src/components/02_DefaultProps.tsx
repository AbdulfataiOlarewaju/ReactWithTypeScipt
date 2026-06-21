

type GreetProps = {
     name? : string;
     shout? : boolean;
}

// always safe your data or else typeSript will know the type

export function GreetA({name = 'Guest', shout = false}: GreetProps){
    const text = shout? name.toUpperCase() : name

    return <p>hi {text}</p>
}

// another way 
export function GreetB(props : GreetProps){
    const name = props.name ?? 'Guest'
    const shout = props.shout ?? false
     const text = shout? name.toUpperCase() : name

    return <p>hi {text}</p>

    
}