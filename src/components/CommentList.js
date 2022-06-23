// In this file we implement the comment list component

import {useEffect, useState} from 'react';
import {getComments as getCommentsApi, createComment as createCommentApi, deleteComment as deleteCommentApi} from '../db/api';
import Comment from './Comment';
import CommentForm from './CommentForm';

/**
 * Gets the current id from App.js
 * @param {unsignedInt} currentUserId
 * @returns 
 */
function CommentList({currentUserId}) {
    // Use stats gets an empty array by default because our comment list is blank
    const [backendComments, setBackendComments] = useState([]);
    
    // Root comments are those who have the parrent id equal to null
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );

    // Reply have a parrent id value different from null 
    const getReplies = commentId => {
        return backendComments.filter(
            backendComment => backendComment.parentId === commentId
        ).sort(
            (a, b) => (
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            )
        );
    }

    // Logging
    // console.log('backendComments', backendComments);

    // Add comment
    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId).then(comment => {
            // We set the new comment at the beginning
            setBackendComments([comment, ...backendComments]) // Update backend comments
        })
    }

    // Delete Comments
    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            deleteCommentApi(commentId).then(() => {
                const updateBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updateBackendComments);
            });
        }
    }

    // We use useEffect because, we want to fetch data as an effect
    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        }); // The api is returning a promise
    }, []); // We pass empty array this means that will be trigered only once after monting the compionent
    
    // Return a comment list
    return (
        <div className="comment-list">
            <div className="comment-list-title">Comments</div>
            <div className="content-composer-container">
                <div className="comment-form-title">Write a comment</div>
                <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            </div>
            <div className="comment-list-container">
                {rootComments.map((rootComment) => (
                    // Look into lazy loading
                    <Comment 
                        key={rootComment.id} 
                        comment={rootComment} 
                        replies={getReplies(rootComment.id)} 
                        currentUserId={currentUserId}
                        deleteComment={deleteComment}
                    /> // It needs an unique key
                ))}
            </div>
        </div>
    );
}

export default CommentList;
