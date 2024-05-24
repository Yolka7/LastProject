import React from "react";

const FormTextarea = ({title, description, handleChange, inputName, children, defaultValue, disabled}) => {
    console.log("FormTextarea", title, description, handleChange, inputName, children, defaultValue, disabled)
    return (
        <>
            <div className="Textarea">
            <div className="Vopros">
                <p className="one">{title}</p>
                <p className="podheader">{description}</p>
                {!children &&
                    <label>
                    <textarea className="first" type="text" placeholder={!defaultValue ? "Введите ответ" : defaultValue}
                           onChange={handleChange}
                           name={inputName}
                           disabled={disabled} rows={4} cols={82} />
                  </label>


                }
                {children}
            </div>
            </div>
        </>
    )
}

export default FormTextarea;
