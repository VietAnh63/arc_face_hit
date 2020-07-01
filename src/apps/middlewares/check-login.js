module.exports = function(req, res, next) {
    if (req.session.admin) {
        //console.log("sssss", req.session.user)
        return res.redirect("/")
    }
    next()
}