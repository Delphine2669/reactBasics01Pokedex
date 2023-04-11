import React from "react"

function Button({ previous, disabledPrevious, next, disabledNext }) {
    return <>
        <button onClick={previous}>Precedent</button>
        <button onClick={next}>Suivant</button>

    </>

}

export default Button