import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";

const { Item } = Form;
const { Option } = Select;

class AddTaskModal extends React.Component {
  formRef = React.createRef();

  handleCancel = () => {
    this.props.toggleVisibility();
  }

  onFinish = (values) => {
    fetch(this.props.url, {
      method: this.props.method,
      headers: {       
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();

          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        this.props.reloadTasks();
      })
      .catch((err) => console.error("Error: " + err));
  };

  render() {
    let { header, visible } = this.props;
    let { title, description} = this.props.task;

    var initialValues = {
      title: title,
      description: description,      
    };

    return (
      <>
        <Modal title={header} visible={visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" initialValues={initialValues} onFinish={this.onFinish}>
            <Item name="title" label="Title" rules={[{ required: true, message: "Please input your title!" }]}>
              <Input placeholder="Input your title" />
            </Item>
    
            <Item name="description" label="Description" rules={[{ required: true, message: "Please input your description!" }]}>
              <Input placeholder="Input your description" />
            </Item>     
    
            <Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default AddTaskModal;