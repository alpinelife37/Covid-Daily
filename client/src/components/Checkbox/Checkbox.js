import React from 'react'

export const CheckBox = props => {
    return (
     <label className="checkMarkContainer">{props.name}
       <input key={props.id} onClick={props.handleCheckBox} type="checkbox" checked={props.isChecked} value={props.value} name={props.name} />
       <span className="checkmark"></span>
     </label>
    )
}

export default CheckBox;