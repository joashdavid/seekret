import { Input } from "antd"
import React, { useState } from "react"

import './text-field.less'

const TextField = (props: { children: any; label: string; value: string; name:string }) => {
    const [isFocus, setFocus] = useState(false)
    const { children, label, value } = props
    const labelClass =
      isFocus || (value && value.length !== 0) ? "label label-float" : "label"  
   
    return(
              
        <div
        className="float-label"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      >
        <Input className="textfield"/>
        <label className={labelClass}>OrgName</label>
        
      </div>
        
    )
}

export {TextField}


   