import { createContext, useReducer } from "react";

//here no relation between usecontext and useReducer
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};



//add those args here 
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    // console.log(`${userId},${postBody},${postTitle},${reactions},[${tags}]`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title:postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload:{
        postId,
      }
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
//using default static values for component testing
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi Friends I am on the way to Mumbai for vacation hope to enjoy a lot! Peace out",
    reactions: 2,
    userId: "9",
    tags: ["vacation", "Mumbai", "Enjoy"],
  },
  {
    id: 2,
    title: "Pass hu Bhai",
    body: "Cant believe passed Btech after 4 years fun",
    reactions: 15,
    userId: "12",
    tags: ["graduating", "Pass", "Btech", "unbelievable"],
  },
];
export default PostListProvider;
