import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ModalApp extends Component {
  state = {
    firstname: "",
    lastname: "",
    address: "",
    age: "",
  };
  AddUser = () => {
    const { users } = this.props;
    const { firstname, lastname, address, age } = this.state;
    if (firstname && lastname && address && age) {
      users.push({ firstname: firstname, lastname: lastname, address: address, age: age });
      this.setState({
        users,
      });
      this.props.toggleModal();
    }
    this.setState({
      firstname: "",
      lastname: "",
      address: "",
      age: "",
    });
  };
  render() {
    const { modalVisible, toggleModal } = this.props;
    return (
      <Modal isOpen={modalVisible} toggle={toggleModal}>
        <ModalHeader>
          <h1>AddUser</h1>
        </ModalHeader>
        <ModalBody>
          <form>
            <input
              onChange={(e) => {
                this.setState({
                  firstname: e.target.value,
                });
              }}
              type="text"
              placeholder="Firstname..."
              className="form-control my-2"
            />
            <input
              onChange={(e) => {
                this.setState({
                  lastname: e.target.value,
                });
              }}
              type="text"
              placeholder="Lastname..."
              className="form-control my-2"
            />
            <input
              onChange={(e) => {
                this.setState({
                  address: e.target.value,
                });
              }}
              type="text"
              placeholder="Address..."
              className="form-control my-2"
            />
            <input
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
              type="text"
              placeholder="Age..."
              className="form-control my-2"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" onClick={this.AddUser}>
            save
          </button>
          <button className="btn btn-danger" onClick={toggleModal}>
            close
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
