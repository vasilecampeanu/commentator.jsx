// Fetch comments
import { useEffect, useState } from 'react';
import { getComments as getCommentsApi } from '../db/api';

/**
 * Gets the current id from App.js
 * @param {unsignedInt} currentUserId
 * @returns 
 */
function CommentList({currentUserId}) {
    // Use stats gets an empty array by default because our comment list is blank
    const [backendComments, setBackendComments] = useState([]);
    
    console.log("backendComments", backendComments);

    // We use useEffect because, we want to fetch data
    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendComments(data);
        }); // The api is returning a promise
    }, []); // We pass empty array this means that will be trigered only once after monting the compionent

    // Return a comment list
    return (
        <div className="commentList">
        </div>
    );
}

export default CommentList;
