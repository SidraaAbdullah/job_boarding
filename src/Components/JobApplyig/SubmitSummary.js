import moment from "moment";

const DetailSummary = ({ applyPost }) => {
  console.log(applyPost);
  return (
    <li key={applyPost.id}>
      <span className="center">
        {applyPost.name} is applied for {applyPost.postTitle}
      </span>
      <div>
        <p className="grey-text pb-3">
          {moment(applyPost.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </li>
  );
};

export default DetailSummary;
