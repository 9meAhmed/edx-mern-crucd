import { createUser } from "../services/userService.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

export const createUser = async (req, res, next) => {
  const newUser = await createUser(req.body);
  handleResponse(res, 201, "User created successfully", newUser);
};
