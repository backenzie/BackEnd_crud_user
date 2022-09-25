import express from "express";
import "dotenv/config";
import userRoutes from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});

export default app;
