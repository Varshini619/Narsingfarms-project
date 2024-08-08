import Curosal from "./Curosal"
import './Home.css'
import Course from "./Course"
import Scroll from "./scroll"
let Home=()=>{
    return(
      <div>
        <Scroll/>
        <Curosal/>
        <Course/>
      </div>
    )
  }
  export default Home