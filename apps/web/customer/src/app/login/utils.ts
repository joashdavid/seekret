const storeInBrowser = (key:string,value:string) => {
    localStorage.setItem(key,value)

}

const getDataFromBrowser = (key:string) => {
    if(localStorage.getItem(key)){
        return localStorage.getItem(key)
    }
    return 
    
}
 
export {storeInBrowser,getDataFromBrowser}
