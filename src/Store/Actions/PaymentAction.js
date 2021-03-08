export const createPayment = (payment, postId, postTitle,teacherId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const studentId = getState().firebase.auth.uid;
    firestore
      .collection("payments")
      .add({
        ...payment,
        studentFirstName: profile.firstName,
        studentLastName: profile.lastName,
        studentId: studentId,
        applyPostId: postId,
        postTitle: postTitle,
        teacherId,teacherId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PAYMENT", payment });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PAYMENT_ERROR", err });
      });
  };
};
