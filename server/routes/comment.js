// routes/comment.js
import express from 'express';
import Comment from '../models/Comment.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

// Post a new comment
router.post('/add-comment', checkAuth, async (req, res) => {
    const { content, chapterId, parentId } = req.body;
    try {
        const comment = new Comment({
            content,
            chapterId,
            parentId,
            createdBy: req.user.userId
        });
        await comment.save();
        res.status(201).json({ success: true, comment });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add comment', error });
    }
});

// Get all comments for a chapter
router.get('/comments/:chapterId', checkAuth, async (req, res) => {
    const { chapterId } = req.params;
    try {
        const comments = await Comment.find({ chapterId }).populate('createdBy', 'username');
        const nestComments = (comments, parentId = null) =>
            comments.filter(comment => comment.parentId === parentId).map(comment => ({
                ...comment._doc,
                children: nestComments(comments, comment._id)
            }));

        const nestedComments = nestComments(comments);
        res.json({ success: true, comments: nestedComments });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get comments', error });
    }
});

// Update a comment
router.put('/update-comment/:commentId', checkAuth, async (req, res) => {
    const { commentId } = req.params;
    const { content } = req.body;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });
        res.json({ success: true, updatedComment });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update comment', error });
    }
});

// Delete a comment
router.delete('/delete-comment/:commentId', checkAuth, async (req, res) => {
    const { commentId } = req.params;
    try {
        await Comment.findByIdAndDelete(commentId);
        res.json({ success: true, message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete comment', error });
    }
});

export { router as CommentRouter };
