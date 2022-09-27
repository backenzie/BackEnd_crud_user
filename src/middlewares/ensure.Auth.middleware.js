import Jwt from "jsonwebtoken";
import "dotenv/config";

export const ensureAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing token authorization!",
    });
  }

  token = token.split(" ")[1];

  Jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
    };

    next();
  });
};
