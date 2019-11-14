
import React,{Component} from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

class MyComponent extends Component {

    render() {

        const images = [
            {
                original: "../../assets/fotoKartkiWidget.jpg",
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];

        return (
            <ImageGallery items={images} showFullscreenButton={false}     />
        );
    }

}
export default MyComponent