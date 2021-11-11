const userCtrl = {};

userCtrl.getUsers = (req, res) => res.json({users: []})

userCtrl.getUser = (req, res) => res.json({user_id: 1234})

userCtrl.createUser = (req, res) => res.json({message: 'User Created'})

userCtrl.deleteUser = (req, res) => res.json({message: 'User Deleted'})

userCtrl.updateUser = (req, res) => res.json({message: 'User Updated'})


module.exports = userCtrl;