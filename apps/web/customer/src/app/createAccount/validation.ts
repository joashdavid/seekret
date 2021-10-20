const userformat = /^.{3,256}$/
const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const passwordformat = /^[\u0021-\u007E]{8,64}$/
const phoneFormat = /^[0-9]{10,12}$/

const validate = (
  name: string,
  email: string,
  mobileNumber: string,
  password: string,
  confirmPassword: string,
  isAgreed: boolean
): string => {
  const phonenumber = mobileNumber.replace(/\s/g, '')
  if (name && email && password && phonenumber && password && confirmPassword && isAgreed) {
    if (
      userformat.test(name) &&
      mailformat.test(email) &&
      phoneFormat.test(phonenumber) &&
      passwordformat.test(password) &&
      passwordformat.test(confirmPassword) &&
      (password === confirmPassword)
    )
      return 'valid'
  } else {
    return 'invalid'
  }
  return "invalid"
}

export default validate
