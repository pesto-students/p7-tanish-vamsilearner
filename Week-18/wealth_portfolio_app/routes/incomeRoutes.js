const express = require('express');
const incomeController = require('../controllers/incomeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.authenticate, incomeController.createIncome);
router.get('/', authMiddleware.authenticate, incomeController.getIncomes);
router.put('/:id', authMiddleware.authenticate, incomeController.updateIncome);
router.delete('/:id', authMiddleware.authenticate, incomeController.deleteIncome);

module.exports = router;
