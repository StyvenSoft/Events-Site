const userCtr = {};
const User = require('../models/User');

userCtr.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtr.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('Create User Router')
};

userCtr.deleteUser = (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('Delete User')
};

module.exports = userCtr;