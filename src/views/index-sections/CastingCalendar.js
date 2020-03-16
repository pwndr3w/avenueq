import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

const dividerStyle = {
    marginTop:"-6vh"
}

const CastingTable = (props) => {
  return (
      <Table responsive style={{ textAlign: 'center', color:"white" }}>
      <thead>
        <tr>
          <th>날짜</th>
          <th>시간</th>
          <th>Princeton</th>
          <th>Kate </th>
          <th>Brian</th>
          <th>Eve</th>
          <th>Rod</th>
          <th>Nikky</th>
          <th>Gary</th>
          <th>Lucy</th>
          <th>Trekky</th>
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
        </tr>
        <tr>
          <th scope="row">4.25(토)</th>
          <td>15:00</td>
          <td>양희승</td>
          <td>민다희</td>
          <td>양정모</td>
          <td>이유미</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
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
        </tr>
        <tr>
          <th scope="row">4.26(일)</th>
          <td>12:00</td>
          <td>양희승</td>
          <td>민다희</td>
          <td>양정모</td>
          <td>이유미</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
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
        </tr>
        <tr>
          <th scope="row">4.26(일)</th>
          <td>19:00</td>
          <td>양희승</td>
          <td>홍세나</td>
          <td>양정모</td>
          <td>임겨레</td>
          <td>박상호</td>
          <td>황지상</td>
          <td>김지언</td>
          <td>안상현</td>
          <td>유병선</td>
        </tr>
      </tbody>
    </Table>
  );
}

function CastingCalendar() {
    return (
        <>
    <div
        className="section"
        style={{backgroundColor : "#df5d07"}}
        id="calendar-section"
      >
        <Container>
            <Row className="justify-content-md-center">
                <Col className="text-center" lg="12" md="12">
                            <h1 className="title" style={{color:"white"}}>Casting Calendar</h1>
                          
                </Col>
                    </Row>    
                    <br></br>
                    <br></br>
            <CastingTable />        
        </Container>
      </div>
        </>
    );
}
export default CastingCalendar;