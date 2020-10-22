import ReusableModal from "../../../../Reusable/Modal";
import React from 'react'
import ReusableImage from "../../../../Reusable/Image";
function ModalLikes({visible, likes, action}) {
    const RenederLikesList = _ => likes &&
        Object.values(likes).map(el => {
            console.log(el)
            const author = el.creatorId
            return (
                <div className='flex-align-center'>
                    <ReusableImage
                        link={author.avatar}
                        fromServer
                        rounded
                        size={45}
                    />
                    <span className='ml-15'>{author.username}</span>
                </div>

            )
        })
    return (
        <div>
            <ReusableModal
                title='Питомцы'
                visible={visible}
                rounded
                styles={{position:'fixed'}}
                onClose={() => action(false)}>
                <div className='self-start flex-1 flex-column'>
                    <RenederLikesList />
                </div>
            </ReusableModal>
        </div>
    )
}
export default ModalLikes