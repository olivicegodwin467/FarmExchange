import userModels from "../models/userModels.js";

export const create = async (req, res) => {
  try {
    // Check if the user already exists BEFORE creating a new user
    const { email, name, password, isAdmin } = req.body;
    
    const userExist = await userModels.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user only if they don’t exist
    const user = new userModels({ name, email, password, isAdmin });
    const newUser = await user.save();
    
    return res.status(201).json(newUser); // Send only ONE response
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await userModels.find();
    if (users === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchOne = async (req, res) => {
  try {
    const user = await userModels.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await userModels.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const user = await userModels.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    return res.status(200).json({ message: "User removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};