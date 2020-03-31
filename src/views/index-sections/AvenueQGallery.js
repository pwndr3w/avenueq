import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { Container } from "reactstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import IndexNavbar from "components/Navbars/IndexNavbar.js";          // 맨 윗줄 메뉴바


export const photos = [
    {
      src: require("../../assets/img/gallery/3.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/2.jpg"),
      width: 4,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/4.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/5.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/6.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/7.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/8.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/9.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/10.jpg"),
      width: 3,
      height: 2
    },
    {
      src: require("../../assets/img/gallery/11.jpg"),
      width: 3,
      height: 2
    },
    {
      src: require("../../assets/img/gallery/12.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/13.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/14.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/15.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/16.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/1.jpg"),
      width: 3,
      height: 2
    },
    {
      src: require("../../assets/img/gallery/17.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/18.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/19.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/20.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/21.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/22.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/23.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/24.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/25.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/26.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/27.jpg"),
      width: 3,
      height: 2
    },
    {
      src: require("../../assets/img/gallery/28.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/29.jpg"),
      width: 2,
      height: 3
    },
    {
      src: require("../../assets/img/gallery/30.jpg"),
      width: 2,
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

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  

  return (
    <>          
    <IndexNavbar />
      <div className="wrapper">
           <div className="section section-download text-center" data-background-color="black">
          <Container
          >
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