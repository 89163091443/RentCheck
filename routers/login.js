const router = require('express').Router();
const sha256 = require('sha256');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('login');
});
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (user.password === sha256(password)) {
          req.session.user = {};
          req.session.user.id = user.id;
          req.session.user.email = user.email;
          res.sendStatus(201);
        } else {
          res.sendStatus(401);
        }
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }
});

module.exports = router;
