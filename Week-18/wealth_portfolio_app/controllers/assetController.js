const Asset = require('../models/asset');

// ...

exports.createAsset = async (req, res) => {
  try {
    const asset = new Asset({ ...req.body, user: req.user._id });
    await asset.save();
    res.status(201).json(asset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.find({ user: req.user._id });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateAsset = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'type', 'value'];
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).json({ error: 'Invalid updates' });
  }

  try {
    const asset = await Asset.findOne({ _id: req.params.id, user: req.user._id });

    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    updates.forEach((update) => (asset[update] = req.body[update]));
    await asset.save();

    res.json(asset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!asset) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    res.json(asset);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ...
