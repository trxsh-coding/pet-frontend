import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import ReusableButton from "../../../../Reusable/Button";
import PetShortAnnotation from "../../Pet/shortAnnotation";
import pet from "../../../../../Assets/svg/pet.svg";
import ReusableModal from "../../../../Reusable/Modal";
import ReusableForm from "../../../../Reusable/Form";
import {createPet} from "../../../../../store/modules/old/pet";
import {useDispatch} from "react-redux";
import '../styles.scss'

function UserPets({pets}) {
    const form = { name:'', type:'', ages:'' };
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const renderPetsMap = _ => pets ? pets.map(pet =>
        <div className='mb-10'>
            <PetShortAnnotation
                key={pet._id}
                avatar={pet.avatar}
                name={pet.name}
                type={pet.type}
                ages={pet.ages}
            />
        </div>
    ) : 'У вас пока что нет питомцев';

    const create = async form => {
        const status = await dispatch(createPet(form));
        console.log(status)
        if(status) setModal(false);
    };

    return (
        <div className="user-pets">
            <span>Питомцы</span>
            <div className="pets-section mt-10 flex">
                {renderPetsMap()}
            </div>
            <div className="add-button-block mt-10">
                <ReusableButton action={() => setModal(true)}>
                    <div className='flex-align-center pointer'>
                        <img  src={pet} alt='add'/>
                        <span className='pl-10'>Добавить</span>
                    </div>
                </ReusableButton>
            </div>
            <ReusableModal visible={modal} onClose={() => setModal(false)} title='Добавить питомца'>
                <ReusableForm primary form={form}  onSubmit={create} addStyles={{width:'70%'}}/>
            </ReusableModal>
        </div>
    );
}

export default withRouter(UserPets);
