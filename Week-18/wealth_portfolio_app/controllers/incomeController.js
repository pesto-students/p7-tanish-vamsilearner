const Income = require('../models/income');

// ...

exports.createIncome = async (req, res) => {
  try {
    const income = new Income({ ...req.body, user: req.user._id });
    await income.save();
    res.status(201).json(income);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user._id });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateIncome = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['source', 'amount', 'date'];
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).json({ error: 'Invalid updates' });
  }

  try {
    const income = await Income.findOne({ _id: req.params.id, user: req.user._id });

    if (!income) {
      return res.status(404).json({ error: 'Income not found' });
    }

    updates.forEach((update) => (income[update] = req.body[update]));
    await income.save();

    res.json(income);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!income) {
      return res.status(404).json({ error: 'Income not found' });
    }

    res.json(income);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ...
