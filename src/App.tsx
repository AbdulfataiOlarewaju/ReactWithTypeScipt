import { UserCard } from "./components/01_RequiredOptionalProps"
import { GreetA, GreetB } from "./components/02_DefaultProps"
import { Pannel, RequiredChildrenPanel } from "./components/03_ChildrenReactNode"
import { Badge } from "./components/04_As_constVariables"
import { Button } from "./components/05_ComponentProps"
import { Counter } from "./components/06_State"


function App() {


  return (
    <>
     {/* <UserCard id="1" name="Abdulfatai" subTitle={<p>Nested P</p>} /> 
     <GreetA />
     <GreetA name="Abdulfatai"/>
     <GreetB name="Olarewaju"/> */}
     {/* <Pannel title="Panel" children={
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
     }/> */}
     {/* <RequiredChildrenPanel title="hello" children={<p>Children</p>}/>
     <RequiredChildrenPanel title="hello">
      Some contents here
      </RequiredChildrenPanel>

      <Badge label="Hello"/>
      <Badge label="Hello" variant="ghost"/> */}

      {/* <Button variant="primary" onClick={()=> alert("clicked")}>Text</Button> */}
      <Counter/>
    </>
  )
}

export default App
