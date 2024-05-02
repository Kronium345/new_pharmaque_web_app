import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../../assets/down-arrow.svg';
import upArrow from '../../assets/up-arrow.svg';
import './commentStyles.css';
import Action from './Action';

const CommentBox = ({ comment, handleInsertNode, handleEditNode, handleDeleteNode }) => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    }
    
    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");    
        }
        if (editMode) setEditMode(false);
    }

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    }

    return (
        <div className="row mt-3">
            <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
                {comment.id === 1 ? (
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
                                        if(inputRef.current)
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
            <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                {showInput && (
                    <div className="inputContainer">
                        <input type="text" className="inputContainer__input" autoFocus onChange={(e) => setInput(e.target.value)} />
                        <Action className="reply" type="Reply" handleClick={onAddComment} />
                        <Action className="reply" type="Cancel" handleClick={() => {
                            setShowInput(false);
                            if (!comment?.items?.length) setExpand(false);
                        }} />
                    </div>
                )}
                {comment?.items?.map((cmnt) => {
                    return <CommentBox 
                    key={cmnt.id}
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    handleDeleteNode={handleDeleteNode}
                     comment={cmnt} />
                })}
            </div>
        </div>
    )
}

export default CommentBox;
