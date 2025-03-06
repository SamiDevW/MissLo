import jwt from 'jsonwebtoken';
const jwtSign = ({ idUser }) => {
    return jwt.sign(
        {
            idUser
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
}
export { jwtSign };