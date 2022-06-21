// Thi file contains the main function
import CommentList from './components/CommentList';

/**
 * Commentator's main function
 * @returns Returns a comment list
 */
function App() {
    return (
        // This containers contains the application
        <div className="commentator-inner-wrapper">
            {/* Render comments */}
            {/* Takes as argument current user ID */}
            <CommentList currentUserId="1" />
        </div>
    );
}

export default App;
