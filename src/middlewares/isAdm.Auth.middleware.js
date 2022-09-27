import "dotenv/config";

export const isAdmAuth = (req, res, next) => {
  const adm = req.user.isAdm;

  if (adm) {
    next();
  } else {
    return res.status(403).json({
      message: "you don't have permission",
    });
  }
};
