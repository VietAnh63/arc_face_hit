module.exports.dashboard = function(req, res) {
    res.render("admin/pages/dashboard")
}

module.exports.listuser = function(req, res) {
    res.render("admin/pages/list_user")
}

module.exports.listadmin = function(req, res) {
    res.render("admin/pages/list_admin")
}

module.exports.getCamera = async function(req, res) {

    const path = "/Users/admin/DeepLearning/Recog_LandMark1/NhanDien.py"
    const path2 = "/Users/admin/DeepLearning/Recog_LandMark1"
    const path3 = "/Applications/anaconda3/bin/python3"

    const { spawn } = require('child_process');

    // let { PythonShell } = require("python-shell")
    // var options = {
    //     args: [req.query.firstname, req.query.listname]
    // }

    // PythonShell.run(path, function(err, data) {
    //         if (err) res.send(err)
    //         res.send(data.toString())
    //     })
    // console.log(__dirname)


    // var exec = require('child_process').exec;
    // exec('pwd', {
    //     cwd: path2
    // }, async function(error, stdout, stderr) {
    //     const ls = spawn(path3, [path]);

    //     ls.stdout.on('data', (data) => {
    //         console.log(`stdout: ${data}`);
    //     });
    // });
    const pythonProcess = spawn(path3, [path])
    pythonProcess.stdout.on('data', (data) => {
        console.log("It worked!")

        res.end();
    });
    console.log(pythonProcess)
    res.render("admin/pages/dashboard", { pythonProcess })

}