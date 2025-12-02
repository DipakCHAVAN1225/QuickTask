const express = require('express');
const router = express.Router();
const { getItems, createItem, deleteItem } = require('../controllers/itemController');
const auth = require('../middleware/authMiddleware');

router.get('/', getItems);
router.post('/', auth, createItem);
router.delete('/:id', auth, deleteItem);

module.exports = router;
