import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class UserDetail extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 8 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const backFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 0,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...backFormItemLayout}>
          <Button onClick={handle}>返回</Button>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="登录名"
        >
          {getFieldDecorator('LoginName', {
            rules: [{
              required: true, message: '请输入登录名',
            }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="姓名"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入姓名',
            }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('sex', {
            rules: [{
              required: true, message: '请选择性别',
            }],
          })(
            <RadioGroup>
              <Radio value="1">男</Radio>
              <Radio value="0">女</Radio>
            </RadioGroup>,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    );
  }
}

export default connect()(Form.create()(UserDetail));
