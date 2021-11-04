import { useState } from "react"
import Fun from "../components/Fun"
import Palindrome from "../components/Palindrome"

function Main(){
    const [magicNumber, setMagicNumber] = useState(0)
    const [show, setShow] = useState(true)

    return(
        <div className="App">
            <Fun 
                magicNumber={magicNumber} 
                setMagicNumber={setMagicNumber}
                show={show}
                setShow={setShow}
            />
            <br/>
            <br/>
            { show && <h1>Magic Number<br/>{ magicNumber }</h1> }
            <br/>
            <Palindrome inputs="vanav"/>
        </div>
    )
}

export default Main