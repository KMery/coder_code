const { Router } = require('express');
const router = Router();

const { getItems, getRandomItem, getVisits } = require('../controllers/controller');

router.get('/items', getItems);

router.get('/item-random', getRandomItem);

router.get('/visitas', getVisits);

module.exports = router;