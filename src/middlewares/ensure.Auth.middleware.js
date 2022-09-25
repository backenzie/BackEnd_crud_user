import { jwt } from "jsonwebtoken";
import "dotenv/config";

export const ensureAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Missing token authorization!",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return response.status(403).json({
        message: "Unauthorized",
      });
    }
    request.user = {
      id: decoded.sub,
    };
    next();
  });
};
