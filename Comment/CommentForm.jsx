import React, { useState } from "react";

const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 16,
    },
    input: {
      marginBottom: 8,
      padding: "8px 12px",
      fontSize: 16,
      borderRadius: 4,
      border: "1px solid #ccc",
    },
    textarea: {
      marginBottom: 8,
      padding: "8px 12px",
      fontSize: 16,
      borderRadius: 4,
      border: "1px solid #ccc",
    },
    starsContainer: {
      marginBottom: 8,
    },
    star: {
      fontSize: 24,
      color: "#FFD700",
      cursor: "pointer",
      marginRight: 4,
    },
    button: {
      padding: "8px 16px",
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: 4,
      cursor: "pointer",
    },
  };
  
  function CommentForm(props) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onAddComment(name, comment, rating);
      setName("");
      setComment("");
      setRating(0);
    };
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            onClick={() => handleRatingChange(i)}
            style={{
              ...styles.star,
              color: i <= rating ? "#FFD700" : "gray",
            }}
          >
            &#9733;
          </span>
        );
      }
      return stars;
    };
  
    return (
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          style={styles.input}
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={handleCommentChange}
          style={styles.textarea}
        />
        <div style={styles.starsContainer}>{renderStars()}</div>
        <button type="submit" style={styles.button}>
          Add Comment
        </button>
      </form>
    );
  }
  
  export default CommentForm;