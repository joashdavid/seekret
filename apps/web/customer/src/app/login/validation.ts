const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const passwordformat = /^[\u0021-\u007E]{8,64}$/

const validate = (email: string, password: string): boolean => {
  if (mailformat.test(email) && passwordformat.test(password)) {
    return true
  }
  return false
}

export { validate }
