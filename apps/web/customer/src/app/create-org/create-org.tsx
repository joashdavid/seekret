import globalStyles from '../app.module.less'
import orgStyles from './create-org.module.less'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {TextFieldNoSuffix} from '../components/text-field-nosuffix'
import { createOrganizationApi, getThemeApi } from './api'
import { ThemeModel } from './model'
import { ThemeDropDown } from '../components/theme-dropdown'

const CreateOrg = () => {
    const [orgName, setOrgName] = useState("")
    const [shortName, setShortName] = useState("")
    const [theme , setTheme] = useState('') 
    const [themeList ,setThemeList] = useState<ThemeModel[]>([])
    const history = useHistory() 
    const getThemeData = async() => {
        const response = await getThemeApi()
        setThemeList(response.data)
        console.log(response)
    }
    useEffect(() => {
        getThemeData()
    },
    [])
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
                <TextFieldNoSuffix
                onUserInput={getOrgName}
                label="Organization name"
                name="orgName"
                type="text"
                value = {orgName}
                />

                 <TextFieldNoSuffix
                onUserInput={getShortName}
                label="Short name"
                name="shortName"
                type="text"
                value = {shortName}
                />
                <ThemeDropDown label="Choose a theme" themeList = {themeList} onChange={getTheme} value={theme}/>
        
                <input type="Button" className={globalStyles.formButton} onClick={createOrganization} value="CONTINUE"/>
            </div>
            </div>
            </div>
            </div>
    )
}
export {CreateOrg}
