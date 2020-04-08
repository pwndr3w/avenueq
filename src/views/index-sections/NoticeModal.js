// JavaScript source code
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isMobile } from 'react-device-detect';
import { useCookies } from 'react-cookie';

function NoticeModal(){

    const [modal, setModal] = useState(true);
    const [cookie, setCookie] = useCookies(['modal']);
    const toggle = () => setModal(!modal);
    const closeForToday = () => {
        setCookie('modal', true, { path: '/', maxAge: 86400 });
        toggle();
    }
    if (!cookie.modal) {
        setCookie('modal', false, { path: '/' });
    }
    const modalStyle = isMobile ? {}:{
        position: 'absolute',
        left: 7 + '%',
        top: 5 + '%'
    };
        return (
            <div>
                <Modal isOpen={modal} scrollable={true} toggle={toggle} style={modalStyle}>
                {/* <ModalHeader toggle={toggle}><h3>공연 안내</h3></ModalHeader> */}
                <ModalBody>
                    <h5 style={{color:'red'}}><strong>15세 이상 관람가 안내</strong></h5> 
                    <span>
                            - 본 공연의 <strong>원작</strong>은 어른들의 은밀하고도 거친 장면이 포함된 <strong>19세 이상 관람가</strong> 작품입니다. 2020 러비스 프로젝트 {"<애비뉴 큐>"}는 연출진 및 배우들이 직접 번역하며, 
                            <strong>다소 선정적이거나 폭력적인 장면 및 언사를 삭제하긴 하였으나 원작의 메시지를 살리기 위하여 <span style={{color:'red'}}>15세 이상 관람가 수준으로 조정하여 각색</span></strong>되었습니다. 
                        <br></br><br></br>- 15세 미만의 학생 또는 어린이가 보기에 <strong><u>부적절한 장면, 언어 사용</u></strong>이 있을 수 있으니 부모님께서는 각별히 주의 바랍니다. 
                        <br></br><br></br>- <strong><u>부모님과 동반입장의 경우, 입장은 허용하고 있으나</u></strong> 다시 한번 말씀드리지만 본 극은 15세 이상 관람가임을 알려드립니다.<br></br><br></br>
                        </span>
                        <h5 style={{color:'red'}}><strong>신종 코로나 바이러스 감염증 대처 계획 안내</strong></h5> 
                        <span>
                            2020 러비스 프로젝트{"<애비뉴큐>"}가 공연되는 예술나무씨어터에서는 <strong>신종 코로나 바이러스 감염증 대처</strong>를 아래와 같이 실행합니다. 
                            <br></br><br></br>1. 예술나무씨어터는 코로나 발생 초기부터 <strong>자체방역</strong>을 하고 있습니다. 
                            <br></br><br></br> - <strong>멸균공기청정기</strong> : 미국 NASA에서 우주인을 위해 개발된 <span style={{color:'red'}}><strong>첨단 AIROCIDE 공기청정기</strong></span>를 객석 양쪽에 설치하여 <span style={{color:'red'}}><strong>멸균</strong></span>공간으로 관리하고 있습니다. 
                            <br></br> - <strong>스모그방역</strong> : 소독 <span style={{color:'red'}}><strong>포그머신</strong></span>을 활용하여 공연장을 관리하고 있습니다
                            <br></br> - <strong>일반방역</strong> : 인체에 무해한 <span style={{color:'red'}}><strong>소독액</strong></span>을 공연전과 공연후에 <span style={{color:'red'}}><strong>관객석에 도포</strong></span>하고 있습니다.
                            <br></br> - <strong>입장관리</strong> : 입장 전 관람객분들의 <span style={{color:'red'}}><strong>체온을 측정 후 입장</strong></span>을 안내해드리고 있으며, 공연장 내/외부에 비치된 <span style={{color:'red'}}><strong>손소독제</strong></span> 사용 후 입장이 가능합니다. 
                            <br></br><br></br>2. <strong>건물 자체 방역</strong> : 엘리베이터등을 포함한 모든곳에 수시로 방역을 진행하고 있으며, 건물 내부는 <span style={{color:'red'}}><strong>마스크 필수 착용</strong></span>을 원칙으로 운영중입니다.
                            <br></br>따라서 관람객 여러분들 또한 마스크를 착용하지 않으실 경우 (<span style={{color:'red'}}><strong><u>입장이 제한될 수 있음</u></strong></span>)을 안내드립니다.                                  
                            <br></br>
                            <br></br>공연 기간동안 철저한 위생/방역 관리로 안전한 공연 관람을 위해 최선을 다하겠습니다. 관객분들의 양해와 협조 부탁드립니다. 
                        </span>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={closeForToday}>오늘 하루 보지 않기</Button>{' '}
                <Button color="secondary" onClick={toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
}

export default NoticeModal;

// class NoticeModal{

//     constructor(props) {
//         //super(props);

//         this.state = {
//             modal: true   
//             , check: false
//         };

//         this.toggle = this.toggle.bind(this);
//         this.isCheck = this.isCheck.bind(this);
//     }
//     isCheck() {
//         this.setState(prevState => ({
//             check: !prevState.check
//             ,modal: prevState.check
//         }));
//     }
    
//     toggle() {
//         this.setState(prevState => ({
//             modal: !prevState.modal
//         }));
//     }
//     render() {
//         let positionModal;
//         let xWidth = -(window.innerWidth / 2 - 300);
//         if (isMobile) {
//             positionModal = { x: 0, y: 100 }
//         }
//         else {
//             positionModal = { x: xWidth , y: 100 }
//         }

//         return (
//             <div>
//                 <Draggable
//                     axis="both"
//                     handle=".handle"
//                     defaultPosition={positionModal}
//                     position={null}
//                     grid={[25, 25]}
//                     scale={1}
//                     onStart={this.handleStart}
//                     onDrag={this.handleDrag}
//                     onStop={this.handleStop}>
//                     <Modal aria-labelledby="contained-modal-title-vcenter"
//                         isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                         <ModalHeader toggle={this.toggle} className="handle">극장 공지사항</ModalHeader>
//                         <ModalBody>
//                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                      </ModalBody>
//                         <ModalFooter>                            
//                             <Button color="primary" onClick={this.isCheck}>오늘 하루동안 이 창을 열지 않음</Button> {this.state.check
//                                 ? 'Checked'
//                                 : '오늘 하루 열지 않기'
//                             }
//                             <Button color="secondary" onClick={this.toggle}>닫기</Button>
//                         </ModalFooter>
//                     </Modal>
//                 </Draggable>
//             </div>
//         );
//     }
// }

// export default NoticeModal;