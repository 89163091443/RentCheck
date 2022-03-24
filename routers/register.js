const router = require('express').Router();
const sha256 = require('sha256');
const { User } = require('../db/models');
const { Address } = require('../db/models');
const { User_Address } = require('../db/models');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  const {
    login, email, password, street, house,
  } = req.body;
  // console.log('===>', login, email, password, street, house);
  if (login && email && password && street && house) {
    try {
      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        res.sendStatus(401);
      } else {
        const user = await User.create({ login, email, password: sha256(password) });
        // console.log('======>', user);
        const address = await Address.create({ street, house });
        // console.log('======>', address);

        const UserAddress = await User_Address.create({ userId: user.id, addressId: address.id });
        res.sendStatus(201);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }
});

module.exports = router;
