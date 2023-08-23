import plan from "../assests/plan.json";
import {Link} from "react-router-dom";

const Plan = () => {
	// 	const dispatch = useDispatch()
	// 	const handleUser = (e) => {
	// 		dispatch(activeUserAction(e.target.value))
	// 		console.log(e.target.value);
	// 	}
	// 	const [userData, setUserData] = useState({
	// 		nombre: "",

	// 	})
	return (
		<div className=" min-w-screen bg-white min-h-screen flex flex-col justify-between">
      <>{plan.map(plan => plan)}</>
		</div>
	);
};

export default Plan;
