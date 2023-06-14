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

  res.cookie("token",token,cookieOptions)

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user,
      token,
      user
    },
  });
});

/*
 @loginUser
 route := http://localhost:4000/api/v1/login
 params:=  email, password
 details:= new user
*/

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError('Please provide email and password', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    throw new CustomError('Invalid email or password', 401);
  }

  const token = user.getJwtToken();
  user.password = undefined;

  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    data: {
      user,
      token,
      user
    },
  });
});





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
