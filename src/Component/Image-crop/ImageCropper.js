import React, {useState} from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import demoImage from "../../Image/r1.jpg";


function ImageCropper() {
  return (
    <div><img src={demoImage} alt="" /></div>
  )
}

export default ImageCropper