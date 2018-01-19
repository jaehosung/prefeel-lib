import React from 'react';
import { connect } from 'react-redux';
import styles from './MainPage.scss';

const mapStateToProps = (state) => {
  return {
    library: state.library,
  }
};

const mapDispatchToProps = (dispatch) => ({

});

class MainPage extends React.Component {
  render () {
    return (
      <div className="main-page">
        <div className="main-header">
          <h1>
            prefeel-lib
          </h1>
          <p>
            A web application for practicing several libraries
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  (dispatch) => ({

  })
)(MainPage);
