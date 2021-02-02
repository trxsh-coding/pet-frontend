import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import React, {useContext, useEffect, useRef, useState} from "react";
import ReusableModal from "../../../Reusable/Modal";
import MissingCreateForm from "./annotation/missingCreateForm";
import {GET_LIST} from "../../../../store/types";
import {missingActions} from "../../../../store/modules/missings";
import {useDispatch, useSelector} from "react-redux";
import ResponsiveContext from "../../../../Context/responsiveContext";
import plus from '../../../../Assets/svg/plus2.svg'
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";
import { useHistory } from "react-router-dom";
import ReusableButton from "../../../Reusable/Button";
import MapList from "../../../Reusable/MapList";
function MissingAds(props) {

    const [modal, setModal] = useState(false)
    const mobile = useContext(ResponsiveContext)
    const dispatch = useDispatch();
    const missings = useSelector( s => s.missing.data || [])
    const history = useHistory();
    const [coordinates, setCoordinates] = useState(null)
    useEffect(() => {
        dispatch(missingActions[GET_LIST]())
        getCurrentGeolocation()
    },[])

    const MissingCoordinates =  Object.values(missings).map( el => {
        return {
            position:el.coordinates,
            id:el.id
        }

    })

    const getCurrentGeolocation = () => {
        const geo = navigator.geolocation.getCurrentPosition((item) => {
            const {coords} = item;
            const coordinates = {
                lat:coords.latitude,
                lng:coords.longitude
            }
            setCoordinates(coordinates)
        }, (error) => {
            let defaultCords = {
                lat:62.17171309758767,
                lng:99.94080602174323
            }
            setCoordinates(defaultCords)
        })
    }
    const AddNewMissingBlock = _ => mobile &&
        <div style={{padding:'16px'}} className='flex-align-center flex-between pointer' onClick={() => setModal(true)}>
            <span className='mr-15'>Добавить объявление</span>
            <img src={plus} alt="add-icon"/>
        </div>

    return coordinates && (
        <>
            {!mobile && <ShortAnnotation />}
            <ComponentWrapper styles={{justifyContent:'center', display:'flex'}}>
                <ReusableButton action={() => setModal(true)}>
                    Разместить объявление
                </ReusableButton>


            </ComponentWrapper>
            <ReusableModal visible={modal}
                           height='fit-content'
                           styles={{position:'absolute'}}
                           onClose={() => setModal(false)}
                           title='Создание объявления' >
                <MissingCreateForm />
            </ReusableModal>
            <div className="mapListWrapper">
                <MapList
                    cords={coordinates}
                    items={MissingCoordinates}
                    action={(id) => history.push(`/missing/${id}`) }
                    height={'480px'}
                />
            </div>
            <AddNewMissingBlock />
        </>
    )
}

export default MissingAds