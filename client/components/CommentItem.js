import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useState } from "react";
import styles from "../styles/styles.module.scss";
import { updateComment } from "../utils/comments";

function CommentItem({ comment, removeComment }) {
  const { title, text, productId } = comment;
  const [inputChange, setInputChange] = useState({
    isEditing: false,
    title: "",
    text: "",
    productId,
  });
  const [serverComment, setServerComment] = useState(comment);

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value,
    });
  };

  const onEditItem = () => {
    setInputChange({
      isEditing: true,
      title,
      text,
      productId,
    });
  };

  const onSaveChangedItem = () => {
    const updatedComment = {
      title: inputChange.title,
      text: inputChange.text,
      productId,
    };
    updateComment(comment._id, updatedComment);
    setInputChange({
      ...updatedComment,
      isEditing: false,
    });
    setServerComment(updatedComment);
  };

  const inputTitle = (
    <input onChange={onInputChange} name="title" defaultValue={title} />
  );
  const inputText = (
    <input onChange={onInputChange} name="text" defaultValue={text} />
  );

  const deleteComment = () => {
    removeComment(comment._id);
  };
  return (
    <>
      <div className={styles.comments}>
        <li>
          <h3>{inputChange.isEditing ? inputTitle : serverComment.title}</h3>
          {inputChange.isEditing ? inputText : serverComment.text}
        </li>
        <div>
          {inputChange.isEditing ? (
            <SaveOutlined onClick={onSaveChangedItem} />
          ) : (
            <EditOutlined onClick={onEditItem} />
          )}
          <DeleteOutlined onClick={deleteComment} style={{paddingLeft: 20}} />
        </div>
      </div>
      <Divider style={{ border: "1px solid blue" }} />
    </>
  );
}

export default CommentItem;
