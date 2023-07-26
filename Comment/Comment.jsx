import React from "react";

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
    starContainer: {
        display: "flex",
        alignItems: "center",
      },
      star: {
        fontSize: 18,
        color: "#FFD700",
        marginRight: 4,
      },
      ratingContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 8,
      },
      ratingText: {
        marginLeft: 4,
        color: "gold",
        fontWeight: "bold",
      },
    };
    
    function Comment(props) {
      const renderRating = () => {
        if (props.rating && props.rating >= 1 && props.rating <= 5) {
          return (
            <div style={styles.ratingContainer}>
              <span>Rating:</span>
              <span style={styles.ratingText}>{props.rating}</span>
            </div>
          );
        }
        return null;
      };
    
      return (
        <div style={styles.wrapper}>
          <div style={styles.imageContainer}>
            <img
              src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
              style={styles.image}
              alt="Profile"
            />
          </div>
    
          <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
            {renderRating()}
          </div>
        </div>
      );
    }
    
    export default Comment;