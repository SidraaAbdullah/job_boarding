export const applyPosts = (applyPost, postId, stdId,postTitle) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const teacherId = getState().firebase.auth.uid;

    firestore
      .collection("applyPost")
      .add({
        ...applyPost,
        teacherId: teacherId,
        postId: postId,
        studentId: stdId,
        postTitle:postTitle,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "APPLY_POST", applyPost });
      })
      .catch((err) => {
        dispatch({ type: "APPLY_POST_ERROR", err });
      });
  };
};
