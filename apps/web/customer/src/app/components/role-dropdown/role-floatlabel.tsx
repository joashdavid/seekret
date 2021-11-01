
import React, { useState, ReactChild } from "react"

import "./role-floatlabel.css"

const RoleFloatLabel = (props: { children: ReactChild; label:
     string; isChecked: boolean; name:string }) => {
  const [isFocus, setFocus] = useState(false)
  const { children, label, isChecked } = props

  const labelClass =
    isFocus || (isChecked) ? "label label-float" : "label"
    

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      {isChecked ? <label className={labelClass}></label> 
      : <label className={labelClass}>{label}</label>}
      
    </div>
  )
}

export default RoleFloatLabel
