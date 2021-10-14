import React from "react"

function Palindrome({ inputs }){

    const palindromeCheck = () => {
        const reverse = inputs.split('').reverse().join('')

        if(inputs == reverse){
            return "Sõna on palindroom!"
        } else {
            return "Sõna pole palindroom!"
        }
    }

    return (
        <>
        <h1>Palindrome Check</h1>
        <p>Sõna = { inputs }</p>
        <p>{ palindromeCheck() }</p>
        </>
    )
}

export default Palindrome