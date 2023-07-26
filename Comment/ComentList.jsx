import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentList() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (name, comment, rating) => {
    const newComment = { name, comment, rating };
    setComments([...comments, newComment]);
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          comment={comment.comment}
          rating={comment.rating}
        />
      ))}
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
}

export default CommentList;