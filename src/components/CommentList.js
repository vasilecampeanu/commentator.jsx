// In this file we implement the comment list component

import { useEffect, useState } from 'react';
import { getComments as getCommentsApi } from '../db/api';
import Comment from './Comment';

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

    console.log('backendComments', backendComments);

    // We use useEffect because, we want to fetch data as an effect
    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        }); // The api is returning a promise
    }, []); // We pass empty array this means that will be trigered only once after monting the compionent

    // Return a comment list
    return (
        <div className="comment-list">
            <div className="list-title">Comments</div>
            <div className="list-container">
                {rootComments.map((rootComment) => (
                    <Comment key={rootComment.id} comment={rootComment}/> // It needs an unique key
                ))}
            </div>
        </div>
    );
}

export default CommentList;
