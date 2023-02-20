import React, {useState} from "react"; 
import {ButtonGreen,ButtonRed} from '../../components/Button/Button'
import "./Count.css"



const Count = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
      }
    function decrement() {
        setCount(count - 1)
    }
    return(
      <div className="count__container ">
          <h1 className='count__title'>Current count: {count} </h1>
          <div className="button__container">
            <ButtonGreen onClick={increment}>Increment</ButtonGreen>
            <ButtonRed onClick={decrement}>Decrement</ButtonRed>
          </div>
      </div>

      )
}
export default Count