import React from "react"

function Palindrome({ inputs }){

    const palindromeCheck = () => {
        const reverse = inputs.split('').reverse().join('')

        if(inputs === reverse){
            return "Word is a palindrome!"
        } else {
            return "Word is not a palindrome!"
        }
    }

    return (
        <>
            <h1>Palindrome Check</h1>
            <p>Word = { inputs }</p>
            <p>{ palindromeCheck() }</p>
        </>
    )
}

export default Palindrome