import React, {useContext} from 'react'
import ReusableInput from "../../../../Reusable/Input";
import ResponsiveContext from "../../../../../Context/responsiveContext";

function InputSection({action, errors}) {
    const mobile = useContext(ResponsiveContext)
    return (
        <div>
            <div className='mb-20'>
                <div  className={`mb-15 ${mobile? 'text-left' : 'text-center'}`}><span>Заголовок</span></div>
                <ReusableInput
                    type='textarea'
                    children={true}
                    onChange={(e) =>action('title', e)}
                />
                <span className='error-span'>{errors?.title}</span>
            </div>
            <div className='mb-20'>
                <div  className={`mb-15 ${mobile? 'text-left' : 'text-center'}`}><span>Информация</span></div>
                <ReusableInput
                    type='textarea'
                    children={true}
                    fixedSize={mobile ? 86 : 150}
                    onChange={(e) =>action('description', e)}
                />
                <span className='error-span'>{errors?.description}</span>
            </div>
            <div className='flex-align-center'>
                <div className='pr-15'><span>Вознаграждение: </span></div>
                <ReusableInput
                    children={true}
                    placeholder={''}
                    styles={{width:100, flex: mobile ? 1 : 0.2}}
                    onChange={(e) =>action('reward', e)}
                />
                <span className='error-span'>{errors?.reward}</span>
            </div>
        </div>
    )
}

export default InputSection