import User from "../Models/userSchema.js";

// Register a new user
const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};



// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Compare entered password with the hashed password in the database
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }
    // Generate JWT token
    const token = user.getJwtToken();
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to login user" });
  }
};

export { signupUser, loginUser };



