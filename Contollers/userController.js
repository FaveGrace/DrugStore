const userService = require('../Service/userService');

exports.createUser = async (req, res) => res.json(await userService.createUser(req.body));

exports.getAllUsers = async (req, res) => res.json(await userService.getAllUsers());

exports.getUserById = async (req, res) => res.json(await userService.getUserById(req.params.id));

exports.updateUser = async (req, res) => res.json(await userService.updateUser(req.params.id, req.body));

exports.deleteUser = async (req, res) => res.json(await userService.deleteUser(req.params.id));