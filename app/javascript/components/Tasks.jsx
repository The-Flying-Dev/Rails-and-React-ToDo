import { Table, message, Checkbox, Popconfirm } from "antd";
import React from "react";
import AddTaskModal from "./AddTaskModal";

class Tasks extends React.Component {
	
	columns = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "",			
			key: "action",
			render: (e) => (
			    <Checkbox 
				    onChange={() => e.target.checked}
			    >
				  Complete
				</Checkbox>
			),

		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this task?"
					onConfirm={() => this.deleteTask(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		tasks: [],
	};

	componentDidMount() {
		this.loadTasks();
	}

	loadTasks = () => {
		const url = "api/v1/tasks/index";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("Network error.");
			})
			.then((data) => {
				data.forEach((task) => {
					const newEl = {
						key: task.id,
						id: task.id,
						title: task.title,
						description: task.description,						
					};

					this.setState((prevState) => ({
						tasks: [...prevState.tasks, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadTasks = () => {
		this.setState({ tasks: [] });
		this.loadTasks();
	};

	deleteTask = (id) => {
		const url = `api/v1/tasks/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadTasks();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.tasks}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddTaskModal reloadTasks={this.reloadTasks} />
			</>
		);
	}
}

export default Tasks;