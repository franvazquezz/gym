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
		<div className=" min-w-screen bg-white min-h-screen flex flex-col justify-between">
			<section className="">
				<div className="grid grid-cols-1 gap-8">
					<h1 className="justify-center text-3xl flex font-bold text-indigo-600 sm:text-3xl font-[Poppins] mt-10">
						Gym Bro
					</h1>
					
					<div className="m-8 grid grid-cols-1 gap-8 place-items-center">
						<Link to={`/home/pancho`}>
							<div
								className="block rounded-xl min-w-[300px] lg:w-[480px] border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
								href="">
								<h2 className="mt-4 text-2xl font-bold text-center text-black font-[Poppins] mb-2">
									{plan[0][0].name}
								</h2>
							</div>
						</Link>
						<Link to={`/home/gonza`}>
							<div
								className="block rounded-xl min-w-[300px] lg:w-[480px] border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
								href="">
								<h2 className="mt-4 text-2xl font-bold text-center text-black font-[Poppins] mb-2">
									{plan[1][0].name}
								</h2>
							</div>
						</Link>
					</div>
				</div>
			</section>
			<footer>
				<div class=" bg-indigo-600 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
					<h2 data-aos="zoom-out" class="font-bold text-5xl sm:text-3xl aos-init aos-animate">
						Let's Talk
					</h2>
					<div class=" flex items-center justify-center gap-8 sm:gap-5">
						<a
							data-aos="fade-up"
							data-aos-duration="1000"
							target="_blank"
							rel="noreferrer"
							href="https://telegram.me/FranciscoVazquezz"
							class="box font-medium text-white flex items-center justify-center flex-col aos-init aos-animate">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 448 512"
								class=" text-black text-3xl hover:scale-125 cursor-pointer"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
							</svg>
							<p>Telegram</p>
						</a>
						<a
							data-aos="fade-up"
							data-aos-duration="1200"
							target="_blank"
							rel="noreferrer"
							href="https://api.whatsapp.com/send/?phone=5493518051907&amp;text&amp;type=phone_number&amp;app_absent=0"
							class="box font-medium text-white flex items-center justify-center flex-col aos-init aos-animate">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 512 512"
								class=" text-black text-3xl hover:scale-125 cursor-pointer"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
							</svg>
							<p>WhatsApp</p>
						</a>
						<a
							data-aos="fade-up"
							data-aos-duration="1400"
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/panchovazquez_"
							class="box font-medium text-white flex items-center justify-center flex-col aos-init aos-animate">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 24 24"
								class=" text-black text-3xl hover:scale-125 cursor-pointer"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<g>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										fill-rule="nonzero"
										d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
								</g>
							</svg>
							<p>Instagram</p>
						</a>
					</div>
					<div class="sm:text-[12px]">
						| Copyright © <span>- 2023 Francisco Vazquez -</span> All rights reserved |
					</div>
				</div>
			</footer>
		</div>
	);
};

export default User;
