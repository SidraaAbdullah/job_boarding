export const applyPosts = (applyPost) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("applyPost")
      .add({
        ...applyPost,
        authorId: authorId,
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
