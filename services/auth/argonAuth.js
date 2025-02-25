import argon2 from 'argon2';
const hashPassword = async (password) => {
    try {
        const hashedPassword = await argon2.hash(password);
        return hashedPassword;
    } catch (err) {
        console.error(err);
    }
}
const checkPassword = async (hashedPassword, password) => {
    try {
        const match = await argon2.verify(hashedPassword, password)
        return match
    } catch (err) {
        console.error(err);
    }
}
export { hashPassword, checkPassword };