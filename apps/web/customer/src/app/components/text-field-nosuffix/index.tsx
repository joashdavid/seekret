import { Input } from "antd"
import React, { useState } from "react"

import './text-field.less'

const TextField = (props: { label: string; value: string; name:string }) => {
    const [isFocus, setFocus] = useState(false)
    const { label, value } = props
    const labelClass =
      isFocus || (value && value.length !== 0) ? "label label-float" : "label"  
   
    return(
              
        <div
        className="float-label"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        <Input className="textfield"/>
        <label className={labelClass}>{props.label}</label>
        
      </div>
        
    )
}

export {TextField}

