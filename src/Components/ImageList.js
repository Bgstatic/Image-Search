import React from 'react';
import './ImageList.css';
import  Image from './Image';

 const ImageList = ({images}) => {

     const list = images.map(image => {

        return(

            <Image key= {image.id} image = {image} />
        )
     });

    return (
        <div className = "ImageList-container">
            {list}
        </div>
    )
}

export default ImageList;