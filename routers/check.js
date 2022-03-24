const router = require('express').Router();
const checkAuth = require('../middlware/checkAuth');
const { User } = require('../db/models');
const { Address } = require('../db/models');
const { User_Address } = require('../db/models');

router.get('/', checkAuth, async (req, res) => {
  if (req.session.user?.id) {
    const { id } = req.session.user;
    const user = await User.findOne({ where: { id } });
    const address = await User.findAll({ include: Address, where: { id: user.id }, raw: true });
    res.render('check', { address, name: user.login, user: user.id });
  }
});

module.exports = router;
