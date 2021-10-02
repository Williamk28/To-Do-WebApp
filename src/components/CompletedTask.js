import React from 'react'

export const CompletedTask = (props) => {
    return (
        <li>
            {props.taskObj.text}
        </li>
    )

}
