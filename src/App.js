import React, { Component } from 'react'
import "./App.css";
import ModalApp from './components/ModalApp'

export default class App extends Component {
	state = {
		modalVisible: false,
		users: [
			{firstname: 'Jamshidbek', lastname: 'Murodillayev', address: 'Namangan', age: '21'}
		]
	}
	toggleModal = () => {
		this.setState({
			modalVisible: !this.state.modalVisible
		})
	}
	deleteUser = (index) => {
		const { users } = this.state
		users.splice(index, 1)
		this.setState({
			users
		})
	}
	render() {
	  const {modalVisible, users} = this.state
	return (
		<div className="container mt-3">
			<button className='btn btn-success' onClick={this.toggleModal}>Open Modal</button>
			<ModalApp modalVisible={modalVisible} toggleModal={this.toggleModal} users={users}/>
			<table className='table table-bordered table-hover table-stripped mt-3'>
				<thead>
					<tr>
						<th>T/R</th>
						<th>Firstname</th>
						<th>Lastname</th>
						<th>Address</th>
						<th>Age</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item, index) => {
						return <tr key={index}>
							<td>{index + 1}</td>
							<td>{item.firstname}</td>
							<td>{item.lastname}</td>
							<td>{item.address}</td>
							<td>{item.age}</td>
							<td>{<button className='btn btn-danger' onClick={() => this.deleteUser(index)}>Delete</button>}</td>
						</tr>
					})}
				</tbody>
			</table>
    </div>
  );
  }
}
