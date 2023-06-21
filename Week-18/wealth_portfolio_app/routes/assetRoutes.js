const express = require('express');
const assetController = require('../controllers/assetController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', authMiddleware.authenticate, assetController.createAsset);
router.get('/', authMiddleware.authenticate, assetController.getAssets);
router.put('/:id', authMiddleware.authenticate, assetController.updateAsset);
router.delete('/:id', authMiddleware.authenticate, assetController.deleteAsset);

module.exports = router;