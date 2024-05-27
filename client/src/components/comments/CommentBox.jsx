import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import './commentStyles.css';
import Action from './Action';

const CommentBox = ({ comment, chapterId }) => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(null); // Change this to null initially
    const [expand, setExpand] = useState(false);
    const [comments, setComments] = useState([]);
    const [editCommentId, setEditCommentId] = useState(null); // Track which comment is being edited
    const inputRef = useRef(null);

    useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editMode]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        if (!chapterId) {
            console.error("Chapter ID is undefined");
            return;
        }

        try {
            const response = await axios.get(`/api/comments/${chapterId}`);
            if (response.data.success) {
                setComments(response.data.comments);
            }
        } catch (error) {
            console.error('Failed to fetch comments', error);
        }
    };

    const handleNewComment = (parentId = null) => {
        setExpand(!expand);
        setShowInput(parentId);
    };

    const onAddComment = async (parentId = null) => {
        if (editMode) {
            await axios.put(`/api/update-comment/${editCommentId}`, { content: input })
                .then(response => {
                    setInput('');
                    setEditMode(false);
                    setEditCommentId(null);
                    fetchComments();
                }).catch(error => console.error('Failed to update comment', error));
        } else {
            await axios.post('/api/add-comment', {
                content: input,
                chapterId: chapterId,
                parentId: parentId || null
            }).then(response => {
                setInput('');
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
        return comments
            .filter(comment => comment.parentId === parentId)
            .map(cmnt => (
                <div key={cmnt._id} className="commentContainer">
                    <span contentEditable={editMode && editCommentId === cmnt._id} suppressContentEditableWarning={editMode && editCommentId === cmnt._id} style={{ wordWrap: "break-word" }} ref={editMode && editCommentId === cmnt._id ? inputRef : null}>{cmnt.content}</span>
                    <div style={{ display: 'flex', marginTop: '5px' }}>
                        {editMode && editCommentId === cmnt._id ? (
                            <>
                                <Action className="reply" type="Save" handleClick={() => onAddComment(cmnt.parentId)} />
                                <Action className="reply" type="Cancel" handleClick={() => {
                                    if (inputRef.current) inputRef.current.innerText = cmnt.content;
                                    setEditMode(false);
                                    setEditCommentId(null);
                                }} />
                            </>
                        ) : (
                            <>
                                <Action className="reply" type={<>
                                    {
                                        expand ? (
                                            <img src={upArrow} alt="icon" width="10px" height="10px" />
                                        ) : (
                                            <img src={downArrow} alt="icon" width="10px" height="10px" />
                                        )
                                    } {""}
                                    Reply
                                </>}
                                    handleClick={() => handleNewComment(cmnt._id)} />
                                <Action className="reply" type="Edit" handleClick={() => {
                                    setEditMode(true);
                                    setEditCommentId(cmnt._id);
                                    setInput(cmnt.content);
                                }} />
                                <Action className="reply" type="Delete" handleClick={() => handleDelete(cmnt._id)} />
                            </>
                        )}
                    </div>
                    <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                        {showInput === cmnt._id && (
                            <div className="inputContainer">
                                <input type="text" className="inputContainer__input" autoFocus value={input} onChange={(e) => setInput(e.target.value)} />
                                <Action className="reply" type="Reply" handleClick={() => onAddComment(cmnt._id)} />
                                <Action className="reply" type="Cancel" handleClick={() => {
                                    setShowInput(null);
                                    if (!cmnt?.items?.length) setExpand(false);
                                }} />
                            </div>
                        )}
                        {renderComments(comments, cmnt._id)}
                    </div>
                </div>
            ));
    };

    return (
        <div className="row mt-3">
            <div className={comment?.id === 1 ? "inputContainer" : "commentContainer"}>
                {comment?.id === 1 ? (
                    <>
                        <div className="col-sm-1 ">
                            <img
                                src="/images/DummyAvatar.png"
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
                            <Action className="reply comment" type="Comment" handleClick={() => onAddComment(null)} />
                        </div>
                    </>
                ) : (
                    <>
                        <span contentEditable={editMode} suppressContentEditableWarning={editMode} style={{ wordWrap: "break-word" }} ref={inputRef}>{comment.name}</span>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            {editMode ? (
                                <>
                                    <Action className="reply" type="Save" handleClick={() => onAddComment(comment._id)} />
                                    <Action className="reply" type="Cancel" handleClick={() => {
                                        if (inputRef.current)
                                            inputRef.current.innerText = comment.name;
                                        setEditMode(false)
                                    }} />
                                </>
                            ) : (
                                <>
                                    <Action className="reply" type={<>
                                        {
                                            expand ? (
                                                <img src={upArrow} alt="icon" width="10px" height="10px" />
                                            ) : (
                                                <img src={downArrow} alt="icon" width="10px" height="10px" />
                                            )
                                        } {""}
                                        Reply
                                    </>}
                                        handleClick={() => handleNewComment(comment._id)} />
                                    <Action className="reply" type="Edit" handleClick={() => {
                                        setEditMode(true);
                                        setEditCommentId(comment._id);
                                        setInput(comment.content);
                                    }} />
                                    <Action className="reply" type="Delete" handleClick={() => handleDelete(comment._id)} />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            {renderComments(comments)}
        </div>
    );
};

export default CommentBox;
