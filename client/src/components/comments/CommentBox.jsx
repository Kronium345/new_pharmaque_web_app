import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import './commentStyles.css';
import Action from './Action';

const CommentBox = ({ comment, chapterId }) => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const [comments, setComments] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
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

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    const onAddComment = async () => {
        if (editMode) {
            await axios.put(`/api/update-comment/${comment._id}`, { content: inputRef?.current?.innerText })
                .then(response => {
                    setInput('');
                    setEditMode(false);
                    fetchComments();
                }).catch(error => console.error('Failed to update comment', error));
        } else {
            await axios.post('/api/add-comment', {
                content: input,
                chapterId: chapterId,
                parentId: comment?._id || null
            }).then(response => {
                setInput('');
                setShowInput(false);
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

    const renderComments = (comments) => {
        return comments.map(cmnt => (
            <div key={cmnt._id} className="commentContainer">
                <span contentEditable={editMode && comment?._id === cmnt._id} suppressContentEditableWarning={editMode && comment?._id === cmnt._id} style={{ wordWrap: "break-word" }} ref={inputRef}>{cmnt.content}</span>
                <div style={{ display: 'flex', marginTop: '5px' }}>
                    {editMode && comment?._id === cmnt._id ? (
                        <>
                            <Action className="reply" type="Save" handleClick={onAddComment} />
                            <Action className="reply" type="Cancel" handleClick={() => {
                                if (inputRef.current) inputRef.current.innerText = cmnt.content;
                                setEditMode(false);
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
                                handleClick={handleNewComment} />
                            <Action className="reply" type="Edit" handleClick={() => {
                                setEditMode(true);
                            }} />
                            <Action className="reply" type="Delete" handleClick={() => handleDelete(cmnt._id)} />
                        </>
                    )}
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {showInput && (
                        <div className="inputContainer">
                            <input type="text" className="inputContainer__input" autoFocus onChange={(e) => setInput(e.target.value)} />
                            <Action className="reply" type="Reply" handleClick={onAddComment} />
                            <Action className="reply" type="Cancel" handleClick={() => {
                                setShowInput(false);
                                if (!cmnt?.items?.length) setExpand(false);
                            }} />
                        </div>
                    )}
                    {renderComments(cmnt.replies || [])}
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
                            <Action className="reply comment" type="Comment" handleClick={onAddComment} />
                        </div>
                    </>
                ) : (
                    <>
                        <span contentEditable={editMode} suppressContentEditableWarning={editMode} style={{ wordWrap: "break-word" }} ref={inputRef}>{comment.name}</span>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            {editMode ? (
                                <>
                                    <Action className="reply" type="Save" handleClick={onAddComment} />
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
                                        handleClick={handleNewComment} />
                                    <Action className="reply" type="Edit" handleClick={() => {
                                        setEditMode(true)
                                    }} />
                                    <Action className="reply" type="Delete" handleClick={handleDelete} />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            {renderComments(comments)}
        </div>
    )
}

export default CommentBox;
