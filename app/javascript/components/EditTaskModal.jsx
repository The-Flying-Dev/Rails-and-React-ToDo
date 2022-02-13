import React from "react";
import { Button } from "antd";

import AddTaskModal from "./AddTaskModal";

class EditTaskModal extends AddTaskModal {
  state = {
    visible: false
  };

  toggleModal = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    return(
      <>
        <Button onClick={this.toggleModal}>{this.props.label}</Button>
        <AddTaskModal 
          task={this.props.task} header={this.props.header} method={this.props.method} url={this.props.url} visible={this.state.visible}
          reloadTasks={this.props.reloadTasks} toggleVisibility={this.toggleModal}
          footer={null}
        />
      </>
    );
  }
}

export default EditTaskModal;