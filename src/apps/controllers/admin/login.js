const mongoose = require("mongoose")
const Admin = mongoose.model("Admin")
    // const Category = mongoose.model("Category")
module.exports.login = function(req, res) {
    // Category.find().exec((err, data)=>{
    //      console.log(data);

    // })
    res.render("admin/pages/login", { error: "" })
}

module.exports.postLogin = async function(req, res) {
    const email = req.body.mail
    const pass = req.body.pass

    const admin = await Admin.findOne({ admin_mail: email })
        //console.log(email)
    let error

    if (!admin) {
        error = "Tai khoan khong hop le"
    }

    if (!error && admin.admin_pass !== pass) {
        error = "Mat khau khong hop le"
    }

    if (!error) {
        req.session.admin = admin
            //console.log(req.session.user)
        return res.redirect("/")
    }
    res.render("admin/pages/login", {
        error
    })

}
module.exports.logout = function(req, res) {
    req.session.destroy()
    res.redirect("/login")
}