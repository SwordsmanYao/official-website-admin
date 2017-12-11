import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Route, Redirect } from 'dva/router';
import { connect } from 'dva';

import styles from './BasicLayout.less';
import UserList from '../routes/User/UserList';
import UserDetail from '../routes/User/UserDetail';

const { Sider, Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.PureComponent {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Layout className={styles.layout}>
        <Sider>
          <Menu
            onClick={this.handleClick}
            style={{ width: 200, minHeight: '100%' }}
            defaultSelectedKeys={['/user-list']}
            defaultOpenKeys={['sub2']}
            mode="inline"
          >
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>组织机构</span></span>}>
              <Menu.Item key="/user-list">用户管理</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className={styles.layout}>
          <Header>header</Header>
          <Content className={styles.content}>
            <Switch>
              <Route path="/user-list" key="/user-list" exact component={UserList} />
              <Route path="/user-detail" key="/user-detail" exact component={UserDetail} />
              <Redirect exact from="/" to="/user-list" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(BasicLayout);
