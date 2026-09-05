export const checkValidData= (email,password)=>{
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!isEmail) return "Invalid email format" ;
    if (!isPassword) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character" ;
    return null;
}