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
    login, email, password, street, house, coord
  } = req.body;
  console.log(coord.pos);
  if (login && email && password && street && house && coord) {
    try {
      const findUser = await User.findOne({ where: { email } });
      if (findUser) {
        res.sendStatus(401);
      } else {
        const user = await User.create({ login, email, password: sha256(password) });
        const address = await Address.create({ street, house, coord: coord.pos });
        const UserAddress = await User_Address.create({ userId: user.id, addressId: address.id });
        res.sendStatus(201);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }
});

module.exports = router;
