import React from "react";

const FormInput = ({title, description, handleChange, inputName, children}) => {
  return (
      <>
          <div className="Vopros">
              <p className="one">{title}</p>
              <p className="podheader">{description}</p>
              {!children && <input className="first" type="text" placeholder="Введите ответ" onChange={handleChange}
                                   name={inputName}/>
              }
              { children }
          </div>
      </>
  )
}

export default FormInput;