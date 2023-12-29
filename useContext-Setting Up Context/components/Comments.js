import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function Comments({ paused }) {
    const [comments, setComments] = useState([]);

    function addComment(comment) {
        setComments((comments) => {
            return [...comments, coment];
        });
    }

    function deleteComment(id) {
        setComments((coments) => {
            return comments.filter((coment) => comment.id !== id);
        });
    }

    return (
        <div>
            <CommentList comments={comments} deleteComment={deleteComment} />
            <CommentForm addComment={addComment} paused={paused} />
        </div>
    );
}
export default Comments;