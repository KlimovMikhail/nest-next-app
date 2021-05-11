/* eslint-disable react/button-has-type */
import { useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/styles.module.scss";
import CommentItem from "./CommentItem";
import { deleteComment } from "../utils/comments";

function CommentPage({ comments, productId }) {
  const [serverComments, setServerComments] = useState(comments);
  const [inputChange, setInputChange] = useState({title: '', text: ''});

  const addComment = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/comments`, {
        title: inputChange.title,
        text: inputChange.text,
        productId,
      });
      setServerComments([...serverComments, response.data]);
      setInputChange({
        title: "",
        text: "",
        productId,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addComment();
    setInputChange({
      title: "",
      text: "",
      productId,
    });
  };

  const removeComment = async (id) => {
    const res = await deleteComment(id);

    const newArr = serverComments.filter((c) => c._id !== res._id);
    setServerComments(newArr);
  };

  return (
    <MainLayout>
      <div className={styles.comment_page}>
        {serverComments.length ? (
          <ul>
            {serverComments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                removeComment={removeComment}
              />
            ))}
          </ul>
        ) : (
          <p>Product has no comments</p>
        )}

        <form className={styles.form} onSubmit={onFormSubmit}>
          <input
            name="title"
            placeholder="title"
            value={inputChange.title}
            onChange={onInputChange}
          />
          <textarea
            name="text"
            placeholder="comment"
            value={inputChange.text}
            onChange={onInputChange}
          />
          <button>Add comment</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default CommentPage;
