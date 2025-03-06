export const isValid = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isEmailValid) return "Email not VALID"
    //if(!isPasswordValid) return "Password not VALID"
    return null
}