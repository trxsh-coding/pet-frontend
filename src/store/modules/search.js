import Reducer from "../reducer";
import Actions from "../action";

export const search = new Reducer('_SEARCH', {data:{}, searchValue:''});

export const searchActions = new Actions('search', search)




export default search.create();
