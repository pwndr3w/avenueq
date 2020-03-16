import React from "react";

const imgStyle = {
    borderImage: "require('assets/img/logo.png') 30 round"
}

function CastImg(props) {
    return (
     <>
            <img className="rounded img-raised" src={require("assets/img/" + props.src)} width="80%" style={imgStyle}>
            </img>
    </>
    );
}

export default CastImg;