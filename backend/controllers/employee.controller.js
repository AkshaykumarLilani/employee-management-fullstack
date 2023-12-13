const asyncHandler = require("express-async-handler");

const getAllEmployees = asyncHandler((req, res, next) => {
    return res.status(200).json({
        employees: [{uid: req.userid}]
    })
})

module.exports = {
    getAllEmployees
}