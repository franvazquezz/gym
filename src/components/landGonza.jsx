// import { useSelector } from "react-redux";
import api from "../assests/plan.json";
import {Link} from "react-router-dom";

const LandGonza = () => {
	// const { activeUser } = useSelector(state => state)
	// console.log(activeUser);
	return (
		<div>
			<section className="bg-white">
				<div className="mx-auto min-w-screen px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
					<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-2">
						<div className="px-24">
							<a
								href="/"
								className="block text-center rounded bg-pink-600 px-6 py-3 m-8 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]">
								Ir a inicio
							</a>
						</div>

						{api[1][0].plan.map((day, index) => {
							return (
								<div key={index} className="mx-auto min-w-screen px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
									<Link to={`/detail/gonza/${day.id}`}>
										<div
											className="block rounded-xl border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
											href="">
											<div className="mx-auto max-w-lg text-center">
												<h2 className="text-3xl font-bold sm:text-4xl  text-black font-[Poppins]">{`Día ${day.id}`}</h2>
											</div>
											<h2 className="mt-4 text-xl font-bold text-black font-[Poppins] mb-2">{day.name}</h2>
											<img
												alt=""
												src={day.img && day.img}
												className="max-w-48 max-h-48 content-center rounded-2xl ml-12"
											/>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandGonza;
