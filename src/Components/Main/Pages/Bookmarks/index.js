import React, {useContext, useEffect} from "react";
import {getBookmarksFeed} from "../../../../store/modules/user";
import {useDispatch, useSelector} from "react-redux";
import ShortPost from "../Pet/Feed/shortPost";
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";
import ResponsiveContext from "../../../../Context/responsiveContext";

const Bookmarks = () => {
    const dispatch = useDispatch();

    async function initialize() {
        await dispatch(getBookmarksFeed());
    }
    const current = useSelector(s => s.user.current || {});
    const user = useSelector(s => s.user.data[current] || {});
    const items = useSelector(s => s.user.bookmarks || []);
    const posts = useSelector(s => s.post.data || []);
    const {username, background, id} = user;


    useEffect(() => {
        initialize().then(callback => console.log(callback))

    }, []);

    const postList = Object.values(items).map(el => posts[el]);

    const RenderBookmarkFeed = _ => postList.map(el => {
        return postList.length ? (
            <ShortPost content={el.content} id={el.id}/>
        ) : <span>Лента пока что пуста...</span>
    })
    const mobile = useContext(ResponsiveContext);
    return (
        <>
            {!mobile &&
            <ShortAnnotation
                username={username}
                background={background}
                id={id}
            />}
            <div className='mt-60 main-feed'>
                <RenderBookmarkFeed/>
            </div>
        </>
    )
}
export default Bookmarks;