import { UserCard } from "./components/01_RequiredOptionalProps"
import { GreetA, GreetB } from "./components/02_DefaultProps"
import { Pannel, RequiredChildrenPanel } from "./components/03_ChildrenReactNode"
import { Badge } from "./components/04_As_constVariables"


function App() {


  return (
    <>
     {/* <UserCard id="1" name="Abdulfatai" subTitle={<p>Nested P</p>} /> 
     <GreetA />
     <GreetA name="Abdulfatai"/>
     <GreetB name="Olarewaju"/> */}
     <Pannel title="Panel" children={
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
     }/>
     <RequiredChildrenPanel title="hello" children={<p>Children</p>}/>
     <RequiredChildrenPanel title="hello">
      Some contents here
      </RequiredChildrenPanel>

      <Badge label="Hello"/>
    </>
  )
}

export default App
