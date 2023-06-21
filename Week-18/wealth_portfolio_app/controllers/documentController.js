const Document = require('../models/document');
const uploadMiddleware = require('../middleware/uploadMiddleware');

exports.uploadDocument = async (req, res) => {
  try {
    await uploadMiddleware.single('document')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const { type } = req.body;
      const { file } = req;

      if (!type || !file) {
        return res.status(400).json({ error: 'Type and file are required' });
      }

      const document = new Document({
        user: req.user._id,
        type,
        filePath: file.path,
        originalName: file.originalname,
      });

      await document.save();
      res.status(201).json({ message: 'Document uploaded successfully', document });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ user: req.user._id });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
