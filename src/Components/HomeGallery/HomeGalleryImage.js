import React from 'react';

const HomeGalleryImage = ({hgimage}) => {
    return (
        <div>
            <img src={hgimage.imagePath} alt="" className='rounded-md shadow-md'/>
        </div>
    );
};

export default HomeGalleryImage;