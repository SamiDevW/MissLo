const checkRoleAsso = (req, res, next) => {
    if (req.role !== "association") return res.status(403).json({ message: "Vous n'avez pas les autorisations nécessaires" })
    next()
}
const checkRoleBene = (req, res, next) => {
    if (req.role !== "benevole") return res.status(403).json({ message: "Vous n'avez pas les autorisations nécessaires" })
    next()
}
export { checkRoleAsso, checkRoleBene };