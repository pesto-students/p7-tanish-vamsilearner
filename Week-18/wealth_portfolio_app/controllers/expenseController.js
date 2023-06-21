const Expense = require('../models/expense');

// ...

exports.createExpense = async (req, res) => {
  try {
    const expense = new Expense({ ...req.body, user: req.user._id });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateExpense = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['category', 'amount', 'date'];
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).json({ error: 'Invalid updates' });
  }

  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user._id });

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    updates.forEach((update) => (expense[update] = req.body[update]));
    await expense.save();

    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ...
