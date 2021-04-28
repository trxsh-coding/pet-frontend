import {useSelector} from "react-redux";

const useCurrentUser = () => {
		const current = useSelector(s => s.user.current);
		const user = useSelector(s => s.user.data[current] || {});
		return {user, current};
};

export default useCurrentUser;
