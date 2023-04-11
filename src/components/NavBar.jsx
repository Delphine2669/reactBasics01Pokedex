import React from "react"

function Button({ previous, disabledPrevious, next, disabledNext }) {
    return <>
        <button onClick={previous} disabled={disabledPrevious}>Precedent</button>
        <button onClick={next} disabled={disabledNext}>Suivant</button>

    </>

}

export default Button