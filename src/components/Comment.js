function Comment({comment, replies}) {
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
                        {comment.createdAt}
                    </div>
                </div>
                <div className="comment-content">{comment.body}</div>
                <div className="comment-footer"></div>
            </div>
            {replies.length > 0 && (
                <div className="comment-replys">
                    <div className="replies-list">
                        {replies.map(reply => (
                            <Comment comment={reply} key={reply.id} replies={[]}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Comment;
