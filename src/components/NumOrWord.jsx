import React from 'react'
import { useParams } from 'react-router-dom'

const NumOrWord = () => {

    const {input} = useParams()

    return (
        <>
            {
            isNaN(+input)?
            <h2>The word is: {input}</h2>
            :<h2>The number is: {input}</h2>
            }
        </>
    )
}

export default NumOrWord