import React from 'react'

export const CheckBox = props => {
    return (
     <label style={{ fontSize: 20, width: "auto" }} className="checkMarkContainer">{props.name}
       <input readOnly={true} key={props.id} onClick={props.handleCheckBox} type="checkbox" checked={props.isChecked} value={props.value} name={props.name} />
       <span className="checkmark"></span>
     </label>
    )
}

export default CheckBox;