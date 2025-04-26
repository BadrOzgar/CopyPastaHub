import Image from "../../components/image/image";
import "./CreatePage.css";

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 MB and files
            less than 200 MB.
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="Description">Description</label>
            <textarea
              rows="6"
              type="text"
              placeholder="Add a Description"
              name="Description"
              id="Description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="Link">Link</label>
            <input type="text" placeholder="Add a Link" name="Link" id="Link" />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Board</label>
            <select name="board" id="board">
              <option value="board1">Board 1</option>
              <option value="board2">Board 2</option>
              <option value="board3">Board 3</option>
            </select>
          </div>

          <div className="createFormItem">
            <label htmlFor="tags">Tagged Topics</label>
            <input type="text" placeholder="Add a Tags" name="tags" id="tags" />
            <small>People wont see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
