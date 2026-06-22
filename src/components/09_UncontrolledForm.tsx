// remember we have alraed discused the controlled form 07_Events.tsx

import { useRef, type FormEvent } from "react"

// now -> uncontrolledForm 

// the different, for control the values comes from state while uncontrolled dont, it keeps it's values using default values, default check
function getString(fd: FormData, key: string): string | null {
    const result = fd.get(key)
    return typeof result === 'string' ? result : null
}
function getNumberValue(fd: FormData, key:string): number | null {
 const extractStringValueFisrt = getString(fd, key)
 if(extractStringValueFisrt === null) return null
 const convertToNumber  = Number(extractStringValueFisrt)
 return Number.isFinite(convertToNumber) ? convertToNumber : null
}
export function UncontrolledForm(){
    // remember unctrolled are usually handled using ref because ref are used for direct node access and also not required for your fom data
    const formRef = useRef<HTMLFormElement | null>(null)

    function handleFormSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        const fd = new FormData(e.currentTarget)
        const extractName = getString(fd, 'name') ?? 'No name'
        const extractNumber = getNumberValue(fd, 'age')
    }
    return (
        <form action="" onSubmit={handleFormSubmit} ref={formRef}>
            <input name="name" defaultValue='Guest' />
            <input type="number" name="age" defaultValue='18' min={0} />
            <button type="submit">Submit</button>
        </form>
    )
}