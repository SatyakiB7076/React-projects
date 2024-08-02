import React from "react";

function CreatePost() {
  return (
    <form className="create-post mx-5 my-3">
      <center className="createPost">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your userId here.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today.."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="title"
            placeholder="Tell us more about it.."
            rows={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            No of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="These many people reacted to the post.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Hash Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="add tags here.."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </center>
    </form>
  );
}

export default CreatePost;
