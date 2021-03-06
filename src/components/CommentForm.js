import { useState } from "react";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",
}) => {
    const [text, setText] = useState(initialText);
    
    // If in the trext area is no text
    const isTextareaDisabled = text.length === 0;
    
    const onSubmit = (event) => {
        event.preventDefault(); // Prevent dending by default
        handleSubmit(text);
        setText(""); // Emty text area
    };

    return (
        <form onSubmit={onSubmit}>
            <textarea
                className="comment-form-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="actions">
                <button className="comment-form-button" disabled={isTextareaDisabled}>
                    {submitLabel}
                </button>
                {hasCancelButton && (
                    <button
                        type="button"
                        className="comment-form-button comment-form-cancel-button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
            </div>    
        </form>
    );
};

export default CommentForm;
