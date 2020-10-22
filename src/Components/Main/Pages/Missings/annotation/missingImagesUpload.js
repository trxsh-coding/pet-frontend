import React, {useContext, useState} from "react";
import ReusableUpload from "../../../../Reusable/Upload";
import imageIcon from "../../../../../Assets/svg/image.svg"
import '../styles.scss'
import ResponsiveContext from "../../../../../Context/responsiveContext";
function MissingsImagesUpload({upload}) {

    const [images, setImagesUri] = useState([
        {
            uri:null
        },
        {
            uri:null
        },
        {
            uri:null
        },
        {
            uri:null
        },
    ]);
    function onUpload(index, e){
        let newArray = [...images];
        newArray[index].uri = URL.createObjectURL(e);
        setImagesUri(newArray)
        upload(index, e)
    }
    const mobile = useContext(ResponsiveContext)
    const ImagesMap = _ => {
        const BackgroundedImage = ({index}) => !images[index].uri ?
            <div className='upload-wrapper  flex-center flex-align-center ' >
                <img src={imageIcon} alt="imageIcon"/>
            </div> : <img src={images[index].uri} width={mobile ? '100%' : 165} height={165}/>


        return images.map( (el, index) =>

                <div className={`relative ${!mobile ? 'mr-30 ' : ''} pointer mb-30`}>
                    <ReusableUpload withHover={false} action={(e) => onUpload(index, e) }>
                        <BackgroundedImage index={index}/>
                    </ReusableUpload>
                </div>
        )
    }
    return <ImagesMap />
}
export default MissingsImagesUpload