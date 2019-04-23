import React, { Component } from 'react';
import  {Modal} from 'react-bootstrap';

export default class ContainerModal extends Component {
    render() {
        return (
            <Modal
            size="lg"
            show={this.props.showModal}
            onHide={this.props.handleModalClose}
            aria-labelledby="modal"
            >
            <Modal.Header closeButton>
            <Modal.Title id="modal">
                {this.props.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.content}</Modal.Body>
            </Modal>
        )
    }
}
