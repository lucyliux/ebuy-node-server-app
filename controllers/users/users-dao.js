import usersModel from "./users-model.js";
export const createUser = async (user) => await usersModel.create(user);
export const findUserByUsername = async (username) => await usersModel.findOne({ username });
export const findUserByCredentials = ({ username, password }) => usersModel.findOne({ username, password });
export const updateUser = (user) => usersModel.updateOne({ username: user.username }, user);
