import User from "../Models/userSchema.js";
import asyncHandler from "../Services/asyncHandler.js";
import CustomError from "../utils/customError.js";



export const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
}

/*
 @signupUser
 route := http://localhost:4000/api/v1/signup
 params:= name, email, password
 details:= new user
*/
const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError('Please fill all the fields', 400);
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError('User already exists', 400);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();
  user.password = undefined;

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user,
      token,
    },
  });
});

export default signupUser;



// Register a new user
// const signupUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await User.create({ name, email, password });
//     res.status(201).json({ user });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to register user" });
//   }
// };

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
    console.error(error);
    res.status(500).json({ error: "Failed to login user" });
  }
};


//logout
 const logoutUser = async (req, res) => {
  try {
 
    // Remove tokens from the user (if you're using tokens)
    const user = req.user;
    user.tokens = [];

    // Save the user with updated tokens
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to logout user" });
  }
};



export { signupUser, loginUser , logoutUser};
