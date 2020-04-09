import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import { isMobile } from 'react-device-detect';

const CastingTable = (props) => {
  return (
      <Table responsive style={{ textAlign: 'center', color:"white", whiteSpace:"nowrap" }}>
      <thead>
        <tr>
          <th>날짜</th>
          <th>시간</th>
          <th>Princeton</th>
          <th>Kate</th>
          <th>Brian</th>
          <th>Eve</th>
          <th>Rod</th>
          <th>Nicky</th>
          <th>Gary</th>
          <th>Lucy</th>
          <th>Trekkie</th>
          <th>Bears</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">4.25(토)</th>
          <td>12:00</td>
          <td>황두현</td>
          <td>이신정</td>
          <td>김연천</td>
          <td>김보연</td>
          <td>김준범</td>
          <td>이원종</td>
          <td>김설이</td>
          <td>안상현</td>
          <td>김무준</td>
          <td>김재혁&박은영</td>
        </tr>
        <tr>
          <th scope="row">4.25(토)</th>
          <td>15:30</td>
          <td>양희승</td>
          <td>민다희</td>
          <td>양정모</td>
          <td>이유미</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
          <td>윤한솔&이한솜</td>
        </tr>
        <tr>
          <th scope="row">4.25(토)</th>
          <td>19:00</td>
          <td>황두현</td>
          <td>홍세나</td>
          <td>김연천</td>
          <td>임겨레</td>
          <td>김준범</td>
          <td>이원종</td>
          <td>김설이</td>
          <td>안상현</td>
          <td>김무준</td>
          <td>김민성&조희령</td>
        </tr>
        <tr>
          <th scope="row">4.26(일)</th>
          <td>11:30</td>
          <td>양희승</td>
          <td>민다희</td>
          <td>양정모</td>
          <td>이유미</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
          <td>윤한솔&이한솜</td>
        </tr>
        <tr>
          <th scope="row">4.26(일)</th>
          <td>15:00</td>
          <td>황두현</td>
          <td>이신정</td>
          <td>김연천</td>
          <td>김보연</td>
          <td>김준범</td>
          <td>이원종</td>
          <td>김설이</td>
          <td>안상현</td>
          <td>김무준</td>
          <td>김재혁&박은영</td>
        </tr>
        <tr>
          <th scope="row">4.26(일)</th>
          <td>18:30</td>
          <td>양희승</td>
          <td>홍세나</td>
          <td>양정모</td>
          <td>임겨레</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
          <td>박국희&이기림</td>
        </tr>
      </tbody>
    </Table>
  );
}

function CastingCalendar() {
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById("sliderRegular")
  //       .classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderRegular"), {
  //       start: [0],
  //       connect: [true, false],
  //       step: 0.5,
  //       range: { min: 0, max: document.getElementsByClassName('table-responsive'). }
  //     });
  //   }
  // });
    return (
        <>
    <div
        className="section"
        style={{backgroundColor : "#df5d07", fontSize: isMobile?"10px":"14px"}}
        id="calendar-section"
      >
        <Container>
            <Row className="justify-content-center mb-3">
              <Col className="text-center" lg="12" md="12" sm="10" xs="10">
                <img src={require('assets/img/calendar_title.png')} ></img>              
              </Col>
            </Row>    
            {isMobile ?
              <>
                <div className="slider" id="sliderRegular"></div>
                <Row className="justify-content-center">
                  <Col className="text-center" lg="10" md="10" sm="10" xs="10">
                    <span style={{color:"white"}}>{"<<하단을 좌우로 움직이시면 전체 캘린더를 보실 수 있습니다>>"}</span>
                    {/* <img src={require('assets/img/cast_leftbtn.png')}></img>               */}
                  </Col>
                </Row>                    
              </>
              :
            ""
            }
                    <br></br>
            <br></br>
            <CastingTable />     
        </Container>
      </div>
        </>
    );
}
export default CastingCalendar;