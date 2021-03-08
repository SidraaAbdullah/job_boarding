import { Link } from "react-router-dom";
import PaymentSumary from "../JobPayment/PaymentSummary";

const PaymentLists = (props) => {
  const { payments } = props;
  return (
    <ul className="apply-list section">
      {payments &&
        payments.map((payment) => {
          return (
            <Link to="/">
              <PaymentSumary payment={payment} />
            </Link>
          );
        })}
    </ul>
  );
};

export default PaymentLists;