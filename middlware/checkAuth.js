const checkAuth = (req, res, next) => {
  if (!req.session.user?.id) {
    return res.sendStatus(401);
  }
  return next();
};

module.exports = checkAuth;
