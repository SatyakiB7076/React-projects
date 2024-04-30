import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { PostList} from '../Store/Post-list-store';


function Post({ post }) {
  const {deletePost}=useContext(PostList)
  const handleDelete = () => {
    deletePost(post.id)
  };

  return (
    <center>
      <div className="card post-card" key={post.id}>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post["body"]}</p>

          {post.tags.map((item, index) => (
            <span key={index} className="badge text-bg-primary mx-1 hashtag">
              {item}
            </span>
          ))}

          <hr />

          <button type="button" className="btn btn-primary position-relative">
            <SlLike />
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              {post.reactions}
            </span>
          </button>
          <button
            type="button"
            className="btn btn-danger position-relative mx-1"
            onClick={handleDelete}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </center>
  );
}

export default Post;
