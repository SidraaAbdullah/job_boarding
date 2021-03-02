const initState = {
  posts: [
    { id: "1", title: "Math and Science Teacher", content: "Blah Blah Blah" },
    { id: "2", title: "Math and Science Teacher", content: "Blah Blah Blah" },
    { id: "3", title: "Math and Science Teacher", content: "Blah Blah Blah" },
  ],
};
const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("Post Created", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("Create post error", action.err);
      return state;
    default:
      return state;
  }
};

export default PostReducer;
