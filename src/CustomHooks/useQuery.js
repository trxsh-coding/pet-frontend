import {useLocation} from "react-router-dom";

const  useQuery = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const state = location.state
    return {query, state}
}
export default useQuery;