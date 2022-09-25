export const isAdmAuth = (req, res, next) => {
  let userIsAdm = req.body.isAdm;

  if (userIsAdm === false) {
    return res.status(401).json({
      message: "you dont have permission!",
    });
  }

  next();
};
