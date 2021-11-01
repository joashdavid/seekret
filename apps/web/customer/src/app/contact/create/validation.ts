const userformat = /^.{3,256}$/
const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const phoneFormat = /^[0-9]{4,15}$/

const validate = (
  name: string,
  email: string,
  mobileNumber: string,

): string => {
  const phonenumber = mobileNumber.replace(/\s/g, '')
  if (name && email &&  phonenumber) {
    if (
      userformat.test(name) &&
      mailformat.test(email) &&
      phoneFormat.test(phonenumber)
    )
      return 'none'
  } else {
    return 'invalid'
  }
  return "invalid"
}

export {validate}
