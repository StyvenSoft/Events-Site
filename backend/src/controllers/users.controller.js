const userCtr = {};

userCtr.getUsers = (req, res) => res.send('User Router');

userCtr.createUser = (req, res) => res.send('Create User Router');

userCtr.deleteUser = (req, res) => res.send('Delete User Router');

module.exports = userCtr;