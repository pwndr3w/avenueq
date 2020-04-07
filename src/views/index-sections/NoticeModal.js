// JavaScript source code
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Draggable from 'react-draggable';
import { isMobile } from 'react-device-detect';
import SetCookie from "./SetCookie.js";
class ModalExample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: true   
            , check: false
        };

        this.toggle = this.toggle.bind(this);
        this.isCheck = this.isCheck.bind(this);
    }
    isCheck() {
        this.setState(prevState => ({
            check: !prevState.check
            ,modal: prevState.check
        }));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        let positionModal;
        let xWidth = -(window.innerWidth / 2 - 300);
        if (isMobile) {
            positionModal = { x: 0, y: 100 }
        }
        else {
            positionModal = { x: xWidth , y: 100 }
        }

        return (
            <div>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={positionModal}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <Modal aria-labelledby="contained-modal-title-vcenter"
                        isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="handle">극장 공지사항</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </ModalBody>
                        <ModalFooter>                            
                            <Button color="primary" onClick={this.isCheck}>오늘 하루동안 이 창을 열지 않음</Button> {this.state.check
                                ? 'Checked'
                                : '오늘 하루 열지 않기'
                            }
                            <Button color="secondary" onClick={this.toggle}>닫기</Button>
                        </ModalFooter>
                    </Modal>
                </Draggable>
            </div>
        );
    }
}

export default ModalExample;