const express = require('express');
const documentController = require('../controllers/documentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', authMiddleware.authenticate, documentController.uploadDocument);
router.get('/', authMiddleware.authenticate, documentController.getDocuments);

module.exports = router;
