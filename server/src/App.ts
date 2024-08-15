import Component, { componentObjByUuid } from "component";
import JSON5 from "json5"
export class App extends Component {
  protected onStart(): void {
    console.log(JSON5.stringify(JSON5.parse("{\"a\": 1, \"b\": 2// 注释\n}")));
    world.say("hello world!")
  }

  protected onUpdate(deltaTime: number): void {
    
  }
  
}