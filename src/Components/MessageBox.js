import React from 'react'

function MessageBox({message,clss}) {
    return (
        <div className='messageBox'>
            <div className={clss}>
            <h5>{message}</h5>
            </div>
        </div>
    )
}

export default MessageBox
