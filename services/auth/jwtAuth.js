import jwt from 'jsonwebtoken';
const jwtSign = ({ idUser, user_role }) => {
    return jwt.sign(
        {
            idUser,
            user_role
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
}
export { jwtSign };