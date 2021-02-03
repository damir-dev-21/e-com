import React from 'react'

function FormErrors({formErrors}) {
    return (
        <div className="formErrors">
            {Object.keys(formErrors).map((item,i)=>{
                if(formErrors[item].length > 0){
                    return(
                    <p key={i}>{item} {formErrors[item]}</p>
                    )
                }else{
                    return '';
                }
            })}
        </div>
    )
}

export default FormErrors
