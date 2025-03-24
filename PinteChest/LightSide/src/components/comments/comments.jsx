import "./comments.css";
import EmojiPicker from "emoji-picker-react";
import Image from "../Image/image";

const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">4 comments</span>
        <div className="comments">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUserName">Jogn</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nobis?
            </p>
            <span className="commentTime">1hour ago</span>
          </div>
        </div>
      </div>
      <form action="" className="commentForm">
        <input type="text" placeholder="add a comment" />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
