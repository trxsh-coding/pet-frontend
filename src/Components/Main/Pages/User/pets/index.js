import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import ReusableButton from "../../../../Reusable/Button";
import PetShortAnnotation from "../../Pet/annotation/shortAnnotation";
import pet from "../../../../../Assets/svg/pet.svg";
import ReusableModal from "../../../../Reusable/Modal";
import ReusableForm from "../../../../Reusable/Form";
import {createPet} from "../../../../../store/modules/old/pet";
import {useDispatch} from "react-redux";
import '../styles.scss'
import Spinner from "../../../../Reusable/Spinner";

function UserPets({pets, id, current, loading}) {
    const form = { name:'', type:'', ages:''};
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const renderPetsMap = _ => {
        return pets && pets.length ? pets.map(pet =>
            <div className='mb-10' key={pet._id}>
                <PetShortAnnotation
                    avatar={pet.avatar}
                    name={pet.name}
                    type={pet.type}
                    ages={pet.ages}
                    id={pet._id}
                />
            </div>
        ) : <span className='mt-15'>Питомцы ещё не созданы</span>;
    }

    const create = async form => {
        const status = await dispatch(createPet({...form, ...{ownerId:id}}));
        if(status) setModal(false);
    };

    return (
        <div className="user-pets">
            <span>Питомцы</span>
            <div className="pets-section mt-10 flex relative">
                {loading ? <div className='transform-center'> <Spinner/> </div> : renderPetsMap()}
            </div>
            <div className="add-button-block mt-10">
                {current &&
                    <ReusableButton action={() => setModal(true)}>
                        <div className='flex-align-center pointer'>
                            <img  src={pet} alt='add'/>
                            <span className='pl-10'>Добавить</span>
                        </div>
                    </ReusableButton>
                }
            </div>
            <ReusableModal visible={modal} onClose={() => setModal(false)} title='Добавить питомца'>
                <ReusableForm primary form={form}  onSubmit={create} addStyles={{width:'70%'}}/>
            </ReusableModal>
        </div>
    );
}

export default withRouter(UserPets);
