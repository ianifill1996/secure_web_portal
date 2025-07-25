import express from 'express';
import Bookmark from '../models/Bookmark.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Secure all routes
router.use(protect);

// Create
router.post('/', async (req, res) => {
  const bookmark = await Bookmark.create({ ...req.body, user: req.user._id });
  res.json(bookmark);
});

// Get all
router.get('/', async (req, res) => {
  const bookmarks = await Bookmark.find({ user: req.user._id });
  res.json(bookmarks);
});

// Get one
router.get('/:id', async (req, res) => {
  const bookmark = await Bookmark.findOne({ _id: req.params.id, user: req.user._id });
  if (!bookmark) return res.status(404).json({ message: 'Not found' });
  res.json(bookmark);
});

// Update
router.put('/:id', async (req, res) => {
  const bookmark = await Bookmark.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  res.json(bookmark);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Bookmark.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ message: 'Deleted' });
});

export default router;
