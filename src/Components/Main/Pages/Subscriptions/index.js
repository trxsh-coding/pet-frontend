import React, {useEffect} from 'react';
import {getSubscriptions} from "../../../../store/modules/user";
import {useDispatch, useSelector} from "react-redux";
import './styles.scss'
import PetShortAnnotation from "../Pet/annotation/shortAnnotation";
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import ShortPet from "./annotation/shortPet";
function Subscriptions(props) {

    const dispatch = useDispatch();
    const items = useSelector(s => s.user.subscriptions);
    const subscriptions = useSelector( s => items.map(el => s.pet.data[el]))

    async function initialize() {
        await dispatch(getSubscriptions())
    }
    //
    const SubscriptionsMap = _ =>subscriptions.map(pet => {
        return <ShortPet url={pet.avatar} name={pet.name} id={pet.id}/>
    })
    const RenderShortPets = _ => subscriptions.length ? <SubscriptionsMap /> : <span>У вас еще нет подписок</span>

    useEffect(() => {
       initialize().then(callback => console.log(callback))

    }, []);
    return (
        <ComponentWrapper title='Подписки'>
            <div className='flex'>
                <RenderShortPets />
            </div>
        </ComponentWrapper>
    );
}

export default Subscriptions;
