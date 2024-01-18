const userService = require("./userService");

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg});
        } else {
            res.send({ "status": false, "message": result.msg});
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": result.msg});
    }
}

module.exports = {loginUserControllerFn};