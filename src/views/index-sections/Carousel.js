import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";
import CastImg from "./CastImg"

function CastImgLayout({ src }) {
  const korean = src.split("/")[0];
  const english = src.split("/")[1];

  return (
      <>
          <Col className="text-center" lg="4" md="6" sm="6" xs="6">
              <CastImg src={korean} />
              <br></br>
              <br></br>
              <h3 className="description font-weight-bold">{korean}</h3>      
        <h6 className="description" style={{ position: "relative", top: "-20px" }}>{english}</h6>      
          </Col>            
      </>
  );
}

// core components

const items = [
  {
    castName:"Princeton",
    src:["황두현/Duhyun Hwang ", "양희승/Huiseung Yang"]
  },
  {
    castName:"Kate Monster",
    src:["이신정/Sinjeong Lee","민다희/Dahee Min", "홍세나/Serena Hong"]
  },
  {
    castName:"Brian",
    src:["김연천/Yeoncheon Kim","양정모/Leo Yang"]
  },
  {
    castName:"Christmas Eve",
    src:["김보연/Boyeon Kim","이유미/Yumi Lee","임겨레/Kyeorei Lim"]
  },
  {
    castName:"Rod",
    src:["김준범/Junbeom Kim","박상호/Sangho Park"]
  },
  {
    castName:"Nicky",
    src:["이원종/Wonjong Lee","황지상/Jisang Hwang"]
  },
  {
    castName:"Gary Coleman",
    src:["김설이/Seolyi Kim","김지언/Jieon Kim"]
  },
  {
    castName:"Lucy",
    src:["안상현/Sanghyeon An"]
  },
  {
    castName:"Trekkie Monster",
    src:["김무준/Mujun Kim","유병선/Byungsun Yu"]
  },
  {
    castName:"Bad Idea Bears & Ensemble",
    src:["김재혁/Jaehyeok Kim","박은영/Eunyoung Park","김민성/Minsung Kim","조희령/Heeryeong Jo","윤한솔/Hansol Yun","이한솜/Hansom Lee","박국희/Kukhee Park","이기림/KiRim Lee"]
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div data-background-color="black" className="clear-filter" id="carousel" filter-color="white">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center mt-5" lg="12" md="12">
              <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <img src={require('assets/img/cast_leftbtn.png')} style={{}}></img>
                </a>
                <img src={require('assets/img/cast_title.png')} ></img>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <img src={require('assets/img/cast_rightbtn.png')} style={{}}></img>
                </a>

            </Col>
          </Row>      
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                {/* <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                /> */}
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                  <Row className="justify-content-center">
                      <Col className="text-center" lg="12" md="12">
                          <h2 className="title">{item.castName}</h2>
                      </Col>
                  </Row>
                  <Row className="justify-content-center">
                      {item.src.map(src => (
                          <CastImgLayout src={src}/>  
                      ))}
                  </Row>
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          </Container>
      </div>
    </>
  );
}

export default CarouselSection;
