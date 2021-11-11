const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.json(user);
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    console.log(newUser);
    res.json({message: 'User Created'})
}

userCtrl.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'})
}

userCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    await User.findByIdAndUpdate(req.params.id, {username});
    res.json({message: 'User Updated'})
}


module.exports = userCtrl;