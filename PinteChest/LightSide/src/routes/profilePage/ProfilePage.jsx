import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from "react";
import Feed from "../../components/feed/Feed";
import Boards from "../../components/boards/Boards";

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path={"/general/noAvatar.png"}
        alt=""
      />
      <h1 className="profileName"></h1>
      <span className="profileUsername">@</span>
      <div className="followCounts">followers · followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Follow</button>
          <button>Message</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Feed /> : <Boards />}
    </div>
  );
};

export default ProfilePage;
