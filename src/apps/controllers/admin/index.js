const Api = require("../../../routers/api")


module.exports.dashboard = function(req, res) {
    res.render("admin/pages/dashboard")
}

module.exports.listuser = async function(req, res) {
    const dataMember = await Api.listMember()
    listMember = dataMember.data.ret_msg
    res.render("admin/pages/list_user", listMember)
}

module.exports.listadmin = async function(req, res) {
    const dataUser = await Api.listUser()
    listUser = dataUser.data.ret_msg
    res.render("admin/pages/list_admin", listUser)
}

