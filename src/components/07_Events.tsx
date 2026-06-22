import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent, type MouseEvent } from "react"



export function formExample(){

    function handleNameChange(event : ChangeEvent<HTMLInputElement>){
        setName(event.currentTarget.value)
        setName(event.target.value)
    }

    function handleButtonClick(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault()
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>){
        // whenever user will press enter you want to do something
        // event.key === 'Enter' ? do this : do that
    }

    function handleFinalSubmit(event : FormEvent<HTMLFormElement>){
        event.preventDefault()
        // you can just do submit the form
    }
    function handleColorChange(event: ChangeEvent<HTMLSelectElement>){
        
    }
    const [name, setName] = useState('')
    const [color, setColor] = useState('red')
    return (
        <form onSubmit={handleFinalSubmit}>
            <input type="text" 
            value={name}
            placeholder="Enter your name"
            onChange={handleNameChange}
            onKeyDown={handleKeyDown} //for keydown
            />
            <select name="" id="" value={color} onChange={handleColorChange}>
                <option value="red"></option>
            </select>
            <button type="submit" onClick={handleButtonClick}>Click</button>
        </form>
    )
}