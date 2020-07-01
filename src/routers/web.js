const { Router } = require("express")
const router = Router()
const path = require("path")
const checkLogin = require("../apps/middlewares/check-login")
const checkLogout = require("../apps/middlewares/check-logout")

const { AdminController, LoginController } = require("../apps/controllers")
router.route("/login").get(checkLogin, LoginController.login).post(checkLogin, LoginController.postLogin)
router.use("/", checkLogout)
router.use("/logout", LoginController.logout)


router.get("/", AdminController.dashboard)
router.get("/list-user", AdminController.listuser)
router.get("/list-admin", AdminController.listadmin)

router.get("/camera", AdminController.getCamera)

module.exports = router