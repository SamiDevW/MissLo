const checkRoleAsso = (req, res, next) => {
    if (req.user.user_role !== "association") return res.status(403).json({ message: "Vous n'avez pas les autorisations nécessaires" })
    next()
}
const checkRoleBene = (req, res, next) => {
    if (req.user.user_role !== "benevole") return res.status(403).json({ message: "Vous n'avez pas les autorisations nécessaires" })


    next()
}
export { checkRoleAsso, checkRoleBene };