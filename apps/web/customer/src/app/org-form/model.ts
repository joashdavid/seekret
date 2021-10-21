interface CreateOrganisationModel  {
    orgName:string;
    shortName:string;
    theme:string;

}

interface ThemeModel{
    color:string;
    hexcode:string;
}

export {CreateOrganisationModel, ThemeModel}
