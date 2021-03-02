import moment from "moment";

const ProjectSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>
          Posted By : {post.authorFirstName} {post.authorLastName}{" "}
        </p>
        <p className="grey-text">
          {moment(post.createdAt.toDate().toString()).calendar()}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
