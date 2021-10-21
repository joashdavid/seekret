
import React, { useState, ReactChild } from "react"

import "./float-label.css"

const FloatLabel = (props: { children: ReactChild; label: string; value: string; name:string }) => {
  const [isFocus, setFocus] = useState(false)
  const { children, label, value } = props

  const labelClass =
    isFocus || (value && value.length !== 0) ? "label label-float" : "label"

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  )
}

export default FloatLabel
