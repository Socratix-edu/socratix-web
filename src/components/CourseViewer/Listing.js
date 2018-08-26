import React from 'react';
import {connect} from 'react-redux';

const LessonListing = props => {
  return (
    <div className="container border border-secondary py-2 px-0 mx-5 my-1">
      <div className="row">
        <div className="col-md-4">
          <img src="https://www.fillmurray.com/300/200" className="border border-dark" />
        </div>
        <div className="col">
          <h4>{props.title}</h4>
          <p>
            {props.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae arcu sed purus finibus viverra. Pellentesque condimentum interdum elit, ac luctus est malesuada sed. Nullam cursus, lectus a molestie interdum.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...state.lessons[ownProps.id]
});

export default connect(mapStateToProps)(LessonListing);

