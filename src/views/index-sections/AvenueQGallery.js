import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { Row, Col, Container } from "reactstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import IndexNavbar from "components/Navbars/IndexNavbar.js";          // 맨 윗줄 메뉴바

export const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];

function AvenueQGallery() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>          
    <IndexNavbar />
      <div className="wrapper">
          <Row className="justify-content-md-center">
              <Col className="text-center" lg="6" md="6">
                  <h1 className="title">Team A</h1>
              </Col>
          </Row>
           <div className="section section-team text-center">
              <Container>
                <div>
                  <Gallery photos={photos} onClick={openLightbox} />
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </div>

              </Container>
          </div>
      </div>
  </>
  );
}

export default AvenueQGallery;