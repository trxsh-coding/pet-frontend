import React, {useState} from "react";
import fluffy from './fluffy.jpg'
import next from './next.jpg'

import arrow from './arrow.svg'
import './style.scss'
import ReusableImage from "../Image";
function ReusableSwiper(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {
        width = '200px',
        height='200px',
        children
    } = props;

    const imgArray = [{
        imgUrl:fluffy
    }, {
        imgUrl:next
    }, {
        imgUrl:fluffy
    }]

    function slideNext(e) {
        if(e){
            setCurrentIndex(currentIndex + 1)
        } else if(currentIndex <= imgArray.length) {
            setCurrentIndex(currentIndex - 1)
        }
    }
    return (
        <div className='wrapper-swiper'
        >
            {   currentIndex > 0 &&
                    <img src={arrow} width={25} height={25} onClick={() => slideNext(0)}/>
            }
            <ReusableImage width={width} height={height} link={imgArray[currentIndex].imgUrl} />
            {   currentIndex < imgArray.length - 1  &&
                <img src={arrow} width={25} height={25} style={{transform:'scale(-1)'}} onClick={() => slideNext(1)}/>
            }

        </div>
    )
}

export default ReusableSwiper;