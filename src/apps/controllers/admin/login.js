const Api = require("../../../routers/api");

module.exports.login = function (req, res) {
  res.render("admin/pages/login", { error: "" });
};

module.exports.postLogin = async function (req, res) {
  const user_name = req.body.mail;
  const user_pass = req.body.pass;
  const params = { user_name, user_pass };
  const result = await Api.checkLogin(params);
  const status = result.data.ret_code;

  let error;

  if (status === "E1") {
    error = "Tài khoản mật khẩu không hợp lệ";
  } else if (status === "E0") {
    if (!error) {
      req.session.admin = params;
    }
    return res.redirect("/");
  } else {
    error = "Lỗi hệ thống";
  }
  res.render("admin/pages/login", {
    error,
  });
};
module.exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/login");
};
