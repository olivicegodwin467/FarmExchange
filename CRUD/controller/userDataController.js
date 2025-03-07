import UserData from "../models/userDataModel.js";
import userModels from "../models/userModels.js";

export const createUserData = async (req, res) => {
  try {
    const { userId, address, phoneNumber, bio } = req.body;

    // Check if user exists
    const user = await userModels.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create user data
    const userData = new UserData({ userId, address, phoneNumber, bio });
    await userData.save();

    return res.status(201).json({ message: "User data saved successfully", userData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const fetchUserData = async (req, res) => {
  try {
    const userData = await UserData.find();
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const fetchOneUserData = async (req, res) => {
  try {
    const userData = await UserData.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const { address, phoneNumber, bio } = req.body;

    const userData = await UserData.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }

    userData.address = address;
    userData.phoneNumber = phoneNumber;
    userData.bio = bio;

    await userData.save();
    return res.status(200).json({ message: "User data updated successfully", userData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeUserData = async (req, res) => {
  try {
    const userData = await UserData.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }

    await userData.remove();
    return res.status(200).json({ message: "User data deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


