import React from "react";
import Comment from "./Comment";

function Commentlist({ comment, deleteComment }) {
    return (
        <div>
            <h2>Comments:</h2>
            {Commentlist.map((comment) => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    deleteComment={deleteComment}
                />
            ))}
        </div>
    );
}

export default CommentList;