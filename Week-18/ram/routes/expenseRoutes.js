const express = require('express');
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.authenticate, expenseController.createExpense);
router.get('/', authMiddleware.authenticate, expenseController.getExpenses);
router.put('/:id', authMiddleware.authenticate, expenseController.updateExpense);
router.delete('/:id', authMiddleware.authenticate, expenseController.deleteExpense);

module.exports = router;
