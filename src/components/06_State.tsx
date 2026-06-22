import { useState } from "react"



export function Counter(){
    const [count, setCount] = useState(0) //infrered as a number
    return (
        <div>
                {count}
        </div>
    )
}



// loader can be union. -> meaning
// idle state, loading state, success state, error state

type LoadState = 
| {status: 'idle'}
| {status: 'loading'}
| {status: 'success'; data:string}
| {status: 'error'; message:string}


function heavyDeafult(): number{
    return 100
}
type User = {
    name : string
}
export function LoaderDemo(){
    const [state, setState] = useState<LoadState>({status: 'idle'})

    const [n,setN] = useState<number>(()=>heavyDeafult())
    
    // use should not use null directly like this->
    // const [user, setUser] = useState(null) ❌ just create a user type
    const [user, setUser] = useState<User | null>(null) //✅



    async function  fetchData(){
        //when we are doing api, we can just simply take status when fetching
        setState({status : 'loading'}) 

        // api successful? 
        setState({status : 'success', data : 'fetched successfully'})

        // similarly for catched block we do the smaething
        setState({status : 'error', message : 'failed to fetch data'})

    }

    return <div>Loader</div>
}
