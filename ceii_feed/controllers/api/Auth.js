const userService = require("../../services/User");
const { createToked} = require("../../utils/JWTUtils");
const controller = {};


controller.register = async (req, res) => {
    const fieldsValidation = userService.verifyRegisterFields(req.body);
    if (!fieldsValidation.success) {
        return res.status(400).json(fieldsValidation.content);
    }
    try {
        const { username, email } = req.body;

        const userExists = await userService.findOneUsernameEmail(username, email);
        if (userExists.success) {
            return res.status(409).json({
                error: "user already exists :P"
            });
        }
        const userRegistered = await userService.register(req.body);
        if (!userRegistered) {
            return res.status(409).json(userRegistered.content);
        }
        return res.status(201).json(userRegistered.content);
    } catch (error) {
        return res.status(500).json({
            error: "internal server error controller"
        })
    }
};

controller.login = async (req, res) => {
    const fieldsValidation = userService.verifyLoginFields(req.body);
    if (!fieldsValidation.success) {
        return res.status(400).json(fieldsValidation.content);
    }

    try {
        const { identifier, password } = req.body;
        const userExists = await userService.findOneUsernameEmail(identifier, identifier);
        if (!userExists) {
            return res.status(404).json(userExists.content);
        }

        const user = userExists.content;

        if(!user.comparePassword(password)){
            return res.status(403).json({
                error:"incorrect password"
            });
        }
        return res.status(200).json({
            token: createToked(user._id)
        });

    } catch (error) {
        return res.status(500).json({
            error: "internal server error controller login"
        });
    }
};
module.exports = controller;