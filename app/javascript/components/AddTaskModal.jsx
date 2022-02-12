import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";



class AddTaskModal extends React.Component {
	formRef = React.createRef();
	state = {
		visible: false,
	};

	onFinish = (values) => {
		const url = "api/v1/tasks/create";
		fetch(url, {
			method: "post",
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

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New Task ..."
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="title"
							label="Title"
							rules={[
								{ required: true, message: "Please input your daily task" },
							]}
						>
							<Input placeholder="Input your daily task" />
						</Form.Item>

						<Form.Item
							name="description"
							label="Description"
							rules={[
								{ required: true, message: "Please input your description!" },
							]}
						>
							<Input placeholder="Input your description" />
						</Form.Item>					

						

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default AddTaskModal;