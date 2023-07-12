import React from 'react'
import { useParams } from 'react-router-dom'

const Custom = () => {

    const {input, color, bgColor} = useParams()

    const style = {
        color: `${color}`,
        background: `${bgColor}`,
        border: 'solid black 1px',
        padding: '15px'
    }

    return (
        <>
            <h2 style={style}>The word is: {input}</h2>
        </>
    )
}

export default Custom