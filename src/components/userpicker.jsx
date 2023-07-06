// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { activeUserAction } from '../redux/actions'
import plan from "../assests/plan.json";
import {Link} from "react-router-dom";

const User = () => {
// 	const dispatch = useDispatch()
// 	const handleUser = (e) => {
// 		dispatch(activeUserAction(e.target.value))
// 		console.log(e.target.value);
// 	}
// 	const [userData, setUserData] = useState({
// 		nombre: "",

// 	})
	return (
		<div className=" min-w-screen bg-white min-h-screen">
			<section className="">
				<div className="mt-8 grid grid-cols-1 gap-8">
					<h1 className="justify-center text-3xl flex font-bold text-indigo-600 sm:text-3xl font-[Poppins] mt-0">
						Plan de gimansio
					</h1>
					<h2 className="justify-center text-xl flex font-bold text-indigo-600 sm:text-xl font-[Poppins]">
						Prof. Luca Lopensino
					</h2>
					<div className="m-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
						<Link
							to={`/home/pancho`}
						>
							<div
								className="block rounded-xl border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
								href="">
								<h2 className="mt-4 text-2xl font-bold text-center text-black font-[Poppins] mb-2">
									{plan[0][0].name}
								</h2>
							</div>
						</Link>
						<Link
							to={`/home/gonza`}
						>
							<div
								className="block rounded-xl border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
								href="">
								<h2 className="mt-4 text-2xl font-bold text-center text-black font-[Poppins] mb-2">
									{plan[1][0].name}
								</h2>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default User;
