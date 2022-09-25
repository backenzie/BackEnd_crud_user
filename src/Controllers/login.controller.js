import { createLoginService } from "../Services/login/createLogin.service";

export const loginController = async (req, res) => {
  try {
    const { email, password } = await req.validatedBody;
    const token = await createLoginService(email, password);
    return res.json({ token });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
