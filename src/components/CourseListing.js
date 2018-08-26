import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const CourseListing = props => {
  return (
    <Link
      to={`/learn/${props.id}`}
      className="card d-flex flex-row mx-5 my-3 max-width-half border-primary listing">
      <div>
        <img src="https://www.fillmurray.com/284/196" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </Link>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...state.courses[ownProps.id],
});

export default connect(mapStateToProps)(CourseListing);
