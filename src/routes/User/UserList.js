import React from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';
import styles from './UserList.less';

class UserList extends React.PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetch',
    });
  }
  gotoUserDetail = () => {
    const { history } = this.props;
    history.push('/user-detail');
  }
  render() {
    const columns = [
      { title: '登录名', dataIndex: 'LoginName', key: 'LoginName' },
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '性别', dataIndex: 'sex', key: 'sex' },
      { title: '更新时间', dataIndex: 'updatedTime', key: 'updatedTime' },
      {
        title: 'Action',
        key: 'operation',
        render: () => <a>action</a>,
      },
    ];

    const { userList } = this.props;
    return (
      <div>
        <div className={styles.toolbar}>
          <Button onClick={this.gotoUserDetail}>添加</Button>
        </div>
        <Table columns={columns} dataSource={userList} bordered scroll={{ x: 1000 }} />
      </div>
    );
  }
}

export default connect(state => ({
  userList: state.user.list,
}))(UserList);
