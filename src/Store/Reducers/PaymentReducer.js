const initState = {
  payments: [
    { id: "1", payment: "300" },
    { id: "2", payment: "300" },
    { id: "3", payment: "300" },
  ],
};
const PaymentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PAYMENT":
      console.log("Post Applied", action.payment);
      return state;
    case "CREATE_PAYMENT_ERROR":
      console.log(" Post Applied error", action.err);
      return state;
    default:
      return state;
  }
};

export default PaymentReducer;
