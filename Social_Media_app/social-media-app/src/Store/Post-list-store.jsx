import { createContext, useReducer } from "react";

//here no relation between usecontext and useReducer
export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});

const PostListReducer=(currPostList,action)=>{
    return currPostList;
}

const addPost=()=>{

};
const deletePost=(postId)=>{
console.log(`deleted post with id ${postId}`);
};
const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(PostListReducer,DEFAULT_POST_LIST)


return <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>
}
//using default static values for component testing
const DEFAULT_POST_LIST=[{
    id:1,
    title:'Going to Mumbai',
    body:'Hi Friends I am on the way to Mumbai for vacation hope to enjoy a lot! Peace out',
    reactions:2,
    userId:'9',
    tags:["vacation","Mumbai","Enjoy"]
},{
    id:2,
    title:'Pass hu Bhai',
    body:'Cant believe passed Btech after 4 years fun',
    reactions:15,
    userId:'12',
    tags:["graduating","Pass","Btech","unbelievable"]
}]
export default PostListProvider;