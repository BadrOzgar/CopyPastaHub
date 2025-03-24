import "./Boards.css";
import Image from "../image/image";

const Boards = () => {
  return (
    <div className="collections">
      {/* COLLECTION */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Boards;
