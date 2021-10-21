/* eslint-disable @typescript-eslint/no-unused-vars */
import globalStyles from '../app.module.less'
import orgStyles from './create-org.module.less'
import { Checkbox, Divider} from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { TextField } from '../components/text-field-nosuffix'
import TextField from '../components/text-field/text-field'

const CreateOrg = () => {
    const [orgName, setOrgName] = useState("")
    const [shortName, setShortName] = useState("")
    const [theme , setTheme] = useState('')   
    
    const getOrgName = (data:string) => {
        setOrgName(data)
    }
    const getShortName =(data: string) => {
        setShortName(data)
    }
    const getTheme = (data:string) => {
        setTheme(data)
    }
    return(
        <div className={globalStyles.containers}>
        <div className={globalStyles.flex}>
            <div className={globalStyles.wallpaper}>
            <img
            src="./assets/cyc-img.svg" className={globalStyles.wallpaper}
            alt=""
           />
           <p className={globalStyles.para1}>
           Welcome to  <span className={globalStyles.para2}>Cyclops</span>
           <p className={globalStyles.text}>
                Lorem ipsum dolor sit amete consectetur adipiscing elit sed eiusmod
                tempor incididunt ut labore et dolore magna aliqua minim labore veniam. 
            </p>
           </p>
           
            </div>
            <div className={globalStyles.formStructure}>
                <div className={globalStyles.formheader}>
                
                <p className={globalStyles.formcontent}> Get started! </p>
                <p className={orgStyles.orgGuide}>
                Let’s get you started on Cyclops. Create your organisation as a first step.
                </p>
                <TextField
                onUserInput={getOrgName}
                label="Organization name"
                name="orgName"
                type="text"
                img={''}
                value = {orgName}
                />
                 <TextField
                onUserInput={getOrgName}
                label="Short name"
                name="shortName"
                type="text"
                img={''}
                value = {shortName}
                />
                 <TextField
                onUserInput={getOrgName}
                label="Choose a theme"
                name="theme"
                type="text"
                img={''}
                value = {theme}
                />
                {/* <TextField label="Organization Name" name="Organization Name"  value={orgName}>
                
                </TextField>

                <TextField label="Short Name" name="Short Name"  value={shortName}>
                
                </TextField>

                <TextField label="Choose a theme" name="Choose a theme"  value={theme}>
                
                </TextField> */}
        
                <input type="Button" className={globalStyles.formButton} value="CONTINUE"/>
            </div>
            </div>
            </div>
            </div>
    )
}
export {CreateOrg}
