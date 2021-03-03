const initState = {
  posts: [
    { id: "1", title: "Math and Science Teacher", content: "Blah Blah Blah" },
    { id: "2", title: "Math and Science Teacher", content: "Blah Blah Blah" },
    { id: "3", title: "Math and Science Teacher", content: "Blah Blah Blah" },
  ],
};
const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case "APPLY_POST":
      console.log("Post Applied", action.applyPost);
      return state;
    case "APPLY_POST_ERROR":
      console.log(" Post Applied error", action.err);
      return state;
    default:
      return state;
  }
};

export default PostReducer;
