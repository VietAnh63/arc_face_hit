const fs = require("fs");
const formidable = require("formidable");
const scp = require("node-scp");
const Api = require("../../routers/api");
module.exports.upload = function (req, res, next) {
  return res.render("upload");
};

module.exports.postImage = async function (req, res, next) {
  var form = formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    var member_id = fields.student_id;
    var member_image = fields.img_0;

    params = { member_id, member_image };
    result = await Api.addFace(params);
    console.log("Ket qua them mat:", result);
    res.send(result.data);
  });
};
