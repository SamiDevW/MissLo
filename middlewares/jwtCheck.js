import jwt from 'jsonwebtoken';
const jwtCheck = (req, res, next) => {
    if (!req.cookies?.token) return res.status(401).json({ message: "Vous n'êtes pas connécté" })
    try {
        const { token } = req.cookies;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            req.user = decoded
            next()
        }
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "Vous n'êtes pas connécté" })
    }

}
export default jwtCheck;