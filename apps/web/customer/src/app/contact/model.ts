interface ContactTableModel {
  orgId: string;
  contactId: string;
  key: number
  name: string
  contactType: string
  role: string
  phoneNumber: number
  lastModified: string
  status: string
  action: string
  userStatus:string
}

interface ContactModel {
  contactId: string
  contactName: string
  contactType: string
  modifiedAt: string
  orgId: string
  phoneNo: string
  roles: string[]
  status: string
}

interface BankModel {
  imgUrl: string
  bank: string
}

export { ContactTableModel, ContactModel, BankModel }
