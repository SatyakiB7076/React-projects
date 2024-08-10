import React, { useContext, useRef } from "react";

import {PostList} from "../Store/Post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    //setting the inputs blank after read
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
// calling the addPost function and passing them as arg
    addPost(userId,postBody,postTitle,reactions,tags)
  };
  return (
    <form className="create-post mx-5 my-3" onSubmit={handleSubmit}>
      <center className="createPost">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
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
            ref={postTitleElement}
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
            ref={postBodyElement}
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
            ref={reactionsElement}
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
            ref={tagsElement}
            placeholder="add tags here with a comma.."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          post
        </button>
      </center>
    </form>
  );
}

export default CreatePost;
