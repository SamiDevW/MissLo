class DatabaseError extends Error {
    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }
}
const errorHandler = (err) => {
    if (err.code === 'P2025') {
        throw new DatabaseError(404, 'élément introuvable')
    }
    if (err.code === 'P2002') {
        throw new DatabaseError(400, 'élément already exists')
    }
    else {
        throw new DatabaseError(500, 'Database error')
    }
}
export default errorHandler;