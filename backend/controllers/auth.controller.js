const asyncHandler = require('express-async-handler');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { createUser, getUserByEmail } = require('../services/user.service');

const signupController = asyncHandler(async (req, res, next) => {
    const body = req.body;
    if (!body.email || !body.password) {
        throw new Error("Email and password, both are required");
    }

    const alreadyRegisteredUser = await getUserByEmail(body.email);
    if (alreadyRegisteredUser){
        res.status(400);
        throw new Error("This email is already registered");
    }

    const user = createUser(body);
    await user.save();
    const userToSend = user.toObject();
    delete userToSend.password;
    return res.status(201).json(userToSend);
})

const loginController = asyncHandler(async (req, res, next) => {
    const body = req.body;
    if (!body.email || !body.password) {
        throw new Error("Email and password, both are required");
    }
    console.log(body);

    const desiredUser = await getUserByEmail(body.email);

    if (!desiredUser){
        throw new Error("This email is not registered, please sign up first.");
    }

    const passwordMatches = bcryptjs.compareSync(body.password, desiredUser.password);

    if (!passwordMatches){
        throw new Error("Incorrect email or password");
    }

    const userid = desiredUser._id;
    const token = jwt.sign({userid}, process.env.JWT_SECRET);

    const userObject = desiredUser.toObject();
    delete userObject.password;

    const dataToSend = {
        token,
        user: userObject
    }

    return res.status(200).json(dataToSend);
})

module.exports = {
    signupController,
    loginController
}