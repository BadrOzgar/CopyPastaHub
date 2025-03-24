import React from "react";
import "./postInteractions.css";
import Image from "../image/image";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="" />
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
      </div>
    </div>
  );
};

export default PostInteractions;
