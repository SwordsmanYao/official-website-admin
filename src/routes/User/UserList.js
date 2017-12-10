import React from 'react';
import { connect } from 'dva';

class UserList extends React.PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetch',
    });
  }

  render() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetch',
    });
    return (
      <div>test</div>
    );
  }
}

export default connect(state => ({
  userList: state.user.list,
}))(UserList);
