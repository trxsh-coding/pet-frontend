import Cropper from 'react-easy-crop'
import React, {useCallback, useState} from "react";
import getCroppedImg from "./cropImage";
import '../reusable.scss'
import ReusableButton from "../Button";


function ReusableCrop(props) {
    const {
        image,
        type,
        onAction,
        withButton = true,
        children,
        height='300px'
    } = props;
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                rotation
            )
            onAction(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation])

    const CropDimensions = _ => {
        let CropValues = {
            aspect:null,
            cropShape:null,
            showGrid:null
        }
        switch (type) {
            case 'avatar':
                CropValues.aspect = 1;
                CropValues.showGrid = false;
                CropValues.cropShape = 'round';
                break
            case 'background':
                CropValues.aspect = 5/2;
                CropValues.showGrid = true;
                CropValues.cropShape = 'rect';
                break
            default:
                CropValues.aspect = 3/3;
                CropValues.showGrid = true;
                CropValues.cropShape = 'rect';
                break
            }
            return CropValues;
    }

    return (
            <div className='crop-wrapper' >
                <div className='modal-container relative' style={{height:height}}>
                    <div className="crop-container">
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={CropDimensions().aspect}
                            cropShape={CropDimensions().cropShape}
                            showGrid={CropDimensions().showGrid}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>

                </div>
                {children}
                <ReusableButton action={() => showCroppedImage()} styles={{marginTop:'20px'}}>
                    Сохранить
                </ReusableButton>
            </div>

    )
}
export default ReusableCrop;