import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

/*const Profile = ({
  user: { fullNAME, bio, profession },
  showAlert,
  children,
}) => {*/
  const Profile = (props) => {
  console.log(props);
  return (
    <div className="card" style={myStyle}>
      <h3 className="card-header" style={{ color: "blue" }}>
        {props.user.fullNAME}
        <span style={{ marginLeft: 300 }}>{props.children}</span>
      </h3>
      <div className="card-body">
        <h5 className="card-title">{props.user.bio}</h5>
        <p className="card-text">{props.user.profession}</p>
        <a
          href="#!"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            props.showname();
          }}
        >
          It's me
        </a>
      </div>
    </div>
  );
};
Profile.propTypes = { user: PropTypes.object.isRequired,showname: PropTypes.func.isRequired };
Profile.defaultProps = {
  user: { fullNAME: "admin", bio: "admin", profession: "admin" },
};
const myStyle = { width: "50vw", marginLeft: 300 };

export default Profile;


