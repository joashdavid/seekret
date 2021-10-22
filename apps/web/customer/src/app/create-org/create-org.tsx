import globalStyles from '../app.module.less'
import orgStyles from './create-org.module.less'
import { Select} from 'antd'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './create-org.module.less'
import TextField from '../components/text-field/text-field'
import { createOrganizationApi } from './api'

const CreateOrg = () => {
    const [orgName, setOrgName] = useState("")
    const [shortName, setShortName] = useState("")
    const [theme , setTheme] = useState('') 
    const { Option } = Select 
    const history = useHistory() 
    const themeList = [
        {
            "color": "Teal",
            "hexcode": "008080"
        },
        {
            "color": "Turquoise",
            "hexcode": "40E0D0"
        },
        {
            "color": "Chartreuse",
            "hexcode": "7FFF00"
        },
        {
            "color": "Sienna",
            "hexcode": "A0522D"
        }
    ]
    
    const getOrgName = (data:string) => {
        setOrgName(data)
    }
    const getShortName =(data: string) => {
        setShortName(data)
    }
    const getTheme = (data:string) => {
        setTheme(data)
    }

    const createOrganization = async() => {
        const response = await createOrganizationApi(orgName,shortName,theme)
        console.log(response)
        if(response.success){
            history.push('/dashboard')
        }
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
                onUserInput={getShortName}
                label="Short name"
                name="shortName"
                type="text"
                img={''}
                value = {shortName}
                />

                <Select className={styles.dropDown} placeholder='Choose a theme' 
                defaultValue={themeList[0].hexcode} onChange={getTheme}>
                    {themeList .map(theme =>{
                       return ( <Option value={theme.hexcode}>{theme.color}</Option>)
                    })}
                </Select>
                {/* <TextField label="Organization Name" name="Organization Name"  value={orgName}>
                
                </TextField>

                <TextField label="Short Name" name="Short Name"  value={shortName}>
                
                </TextField>

                <TextField label="Choose a theme" name="Choose a theme"  value={theme}>
                
                </TextField> */}
        
                <input type="Button" className={globalStyles.formButton} onClick={createOrganization} value="CONTINUE"/>
            </div>
            </div>
            </div>
            </div>
    )
}
export {CreateOrg}
