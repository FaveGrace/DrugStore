const {User} = require('../Models/userSchema');

exports.createUser = async (userData) => user = await User.create({ ...userData, password: hashedPassword });

exports.getAllUsers = async () => await User.find();

exports.getUserById = async (id) => await User.findById(id);

exports.updateUser = async (id, userData) => await User.findByIdAndUpdate(id, userData, { new: true });

exports.deleteUser = async (id) => await User.findByIdAndDelete(id);
