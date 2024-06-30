import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './commentStyles.css';
import Action from './Action';
import { getImageUrl } from '../../utils';

const CommentBox = ({ comment, chapterId, profile }) => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(null); // Track which comment is being replied to
    const [comments, setComments] = useState([]);
    const [editCommentId, setEditCommentId] = useState(null); // Track which comment is being edited
    const [editInput, setEditInput] = useState(''); // Input field for editing comments
    const [replyInputs, setReplyInputs] = useState({}); // Input fields for replies

    useEffect(() => {
        fetchComments();
    }, [chapterId]);

    const fetchComments = async () => {
        if (!chapterId) {
            console.error("Chapter ID is undefined");
            return;
        }

        try {
            const response = await axios.get(`/api/comments/${chapterId}`);
            if (response.data.success) {
                const nestedComments = nestComments(response.data.comments);
                setComments(nestedComments);
            }
        } catch (error) {
            console.error('Failed to fetch comments', error);
        }
    };

    const nestComments = (comments, parentId = null) => {
        if (!comments || !Array.isArray(comments)) return [];
        return comments
            .filter(comment => comment.parentId === parentId)
            .map(comment => ({
                ...comment,
                replies: nestComments(comments, comment._id)
            }));
    };

    const handleNewComment = (parentId = null) => {
        setShowInput(parentId);
        setInput('');  // Clear the main input when replying
    };

    const handleReplyInputChange = (parentId, value) => {
        setReplyInputs({ ...replyInputs, [parentId]: value });
    };

    const onAddComment = async (parentId = null) => {
        const content = parentId ? replyInputs[parentId] : input;
        if (editMode) {
            await axios.put(`/api/update-comment/${editCommentId}`, { content: editInput })
                .then(response => {
                    setEditInput('');
                    setEditMode(false);
                    setEditCommentId(null);
                    fetchComments();
                }).catch(error => console.error('Failed to update comment', error));
        } else {
            await axios.post('/api/add-comment', {
                content,
                chapterId: chapterId,
                parentId: parentId || null
            }).then(response => {
                if (parentId) {
                    setReplyInputs({ ...replyInputs, [parentId]: '' });
                } else {
                    setInput('');
                }
                setShowInput(null);
                fetchComments();
            }).catch(error => console.error('Failed to add comment', error));
        }
    };

    const handleDelete = async (commentId) => {
        await axios.delete(`/api/delete-comment/${commentId}`)
            .then(response => {
                fetchComments();
            }).catch(error => console.error('Failed to delete comment', error));
    };

    const renderComments = (comments, parentId = null) => {
        if (!comments || !Array.isArray(comments)) return null;

        return comments
            .filter(comment => comment.parentId === parentId)
            .map(cmnt => (
                <div key={cmnt._id} className="commentContainer">
                    <div className="row">
                        <div className="col-sm-1">
                            <img
                                src={profile.avatar ? getImageUrl(profile.avatar) : "/images/DummyAvatar.png"}
                                className="midsizeicon mb-3"
                                alt="icon"
                            />
                        </div>
                        <div className="col-sm-11">
                            <span className="fs-5 fw-bold mediumbluetext">{profile.username}</span>
                            <br />
                            <span className="fs-5 navybluetext">{cmnt.content}</span>
                            <p>
                                <button className="buttonstyle"><img src="/images/ThumbsUp.png" className="moderateicon mx-3 my-3" /></button>
                                <button className="buttonstyle"><img src="/images/ThumbsDown.png" className="moderateicon mx-3 my-3" /></button>
                                <span className="fw-bold fs-5 removeunderline navybluetext" onClick={() => handleNewComment(cmnt._id)}>Reply</span>
                                <span className="fw-bold fs-5 removeunderline navybluetext floatright mx-4 my-2">Report</span>
                                <span className="fw-bold fs-5 removeunderline navybluetext mx-4 my-2" onClick={() => {
                                    setEditMode(true);
                                    setEditCommentId(cmnt._id);
                                    setEditInput(cmnt.content);
                                }}>Edit</span>
                                <span className="fw-bold fs-5 removeunderline navybluetext mx-4 my-2" onClick={() => handleDelete(cmnt._id)}>Delete</span>
                            </p>
                        </div>
                    </div>
                    {editMode && editCommentId === cmnt._id && (
                        <div className="inputContainer">
                            <input type="text" className="inputContainer__input" autoFocus value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                            <Action className="reply" type="Save" handleClick={() => onAddComment(null)} />
                            <Action className="reply" type="Cancel" handleClick={() => {
                                setEditMode(false);
                                setEditCommentId(null);
                            }} />
                        </div>
                    )}
                    {showInput === cmnt._id && (
                        <div className="inputContainer">
                            <input type="text" className="inputContainer__input" autoFocus value={replyInputs[cmnt._id] || ''} onChange={(e) => handleReplyInputChange(cmnt._id, e.target.value)} />
                            <Action className="reply" type="Reply" handleClick={() => onAddComment(cmnt._id)} />
                            <Action className="reply" type="Cancel" handleClick={() => setShowInput(null)} />
                        </div>
                    )}
                    <div className="replies">
                        {renderComments(cmnt.replies, cmnt._id)}
                    </div>
                </div>
            ));
    };

    return (
        <div className="row mt-3">
            <div className="col-sm-1">
                <img
                    src={profile?.avatar ? getImageUrl(profile.avatar) : "/images/DummyAvatar.png"}
                    className="midsizeicon mb-3"
                    alt="icon"
                />
            </div>
            <div className="col-sm-11">
                <div className="form">
                    <textarea
                        className="form-control fs-5"
                        rows="2"
                        id="comment"
                        placeholder="Write a comment"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                </div>
                <div className='d-flex justify-content-start'>
                    <Action className='btn btn-deactivated fw-bold fs-5 mt-3 mb-4 px-3 py-2 comment' type='Post Comment' handleClick={() => onAddComment(null)} />
                </div>
            </div>
            {renderComments(comments)}
        </div>
    );
};

export default CommentBox;
