/**
 * 
 * @param {*} param0 
 * @param {*} param0 
 * @param {*} param0 
 * @returns 
 */
function Comment({comment, replies, currentUserId, deleteComment}) {
    const tenMinutes = 30000;
    const timePassed = new Date() - new Date(comment.createdAt) > tenMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    return (
        <div className="comment">
            <div className="comment-root">
                <div className="comment-header">
                    <div className="comment-user-info">
                        <div className="comment-user-image-svg">
                            <img src="/user.svg" alt="User profile icon" />
                        </div>
                        <div className="comment-author">{comment.username}</div>
                    </div>
                    <div className="comment-info-date">
                        {createdAt}
                    </div>
                </div>
                <div className="comment-content">{comment.body}</div>
                <div className="comment-footer">
                    <div className="comment-actions">
                        {canReply && <div className="comment-action-button">Reply</div>}
                        {canEdit && <div className="comment-action-button">Edit</div>}
                        {canDelete && <div className="comment-action-button" onClick={() => deleteComment(comment.id)}>Delete</div>}
                    </div>
                </div>
            </div>
            {replies.length > 0 && (
                <div className="comment-root-replys">
                    <div className="comment-replies-list">
                        {replies.map(reply => (
                            <Comment 
                                comment={reply} key={reply.id} 
                                replies={[]} 
                                currentUserId={currentUserId}
                                deleteComment={deleteComment}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Comment;
