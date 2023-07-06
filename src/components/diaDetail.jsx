import api from "../assests/plan.json";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const DiaDetail = () => {
	const {id} = useParams();
	const [diff, setDiff] = useState(null);
	const [initial, setInitial] = useState(null);
	const [isRunning, setIsRunning] = useState(false);

	const tick = () => {
		setDiff(new Date(+new Date() - initial));
	};

	const start = () => {
		setIsRunning(true);
		setInitial(+new Date());
	};

	const stop = () => {
		setIsRunning(false);
	};

	useEffect(() => {
		if (initial) {
			requestAnimationFrame(tick);
		}
	}, [initial]);

	useEffect(() => {
		if (diff) {
			requestAnimationFrame(tick);
		}
	}, [diff]);

	useEffect(() => {
		if (isRunning) {
			requestAnimationFrame(tick);
		}
	}, [isRunning]);

	const timeFormat = (date) => {
		if (!date || !isRunning) return "00:00:00";
		else {
			let mm = date.getUTCMinutes();
			let ss = date.getSeconds();
			let cm = Math.round(date.getMilliseconds() / 10);

			mm = mm < 10 ? "0" + mm : mm;
			ss = ss < 10 ? "0" + ss : ss;
			cm = cm < 10 ? "0" + cm : cm;

			return `${mm}:${ss}`;
		}
	};useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll({
				lenisOptions: {
					duration: 1,
				},
			});
		})();
	}, []);

	return (
		<div key="asd">
			<section key="asds" className="mx-auto min-w-screen bg-white">
				<div
					data-scroll
					data-scroll-speed="0.3"
					key="asdss"
					className="mx-auto min-w-screen grid grid-cols-1 place-items-center px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
					{api[0][0].plan.map((day, index) => {
						if (day.id === parseInt(id))
							return (
								<div key={index} className="mx-auto min-w-screen grid grid-cols-1">
									<div className="mx-auto text-center">
										<h2 className="text-3xl font-bold sm:text-4xl font-[Poppins]">{`Día ${id} - ${day.name}`}</h2>
									</div>
									<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
										<h2 className="mt-4 mb-4 text-xl text-center font-bold text-black font-[Poppins]">
											{day.warmup?.name}
										</h2>
										{day.warmup?.ejercicios.map((ej, index) => {
											return (
												<article
													key={index}
													className="relative overflow-hidden rounded-lg shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10">
													<img
														alt="Office"
														src={
															ej.gif
																? ej.gif
																: "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"
														}
														className="absolute inset-0 h-full w-full object-cover"
													/>

													<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
														<div className="p-4 sm:p-6">
															<h2 className="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
															<p className="mt-2 line-clamp-3 text-sm text-white/95 font-[Poppins]">
																{ej.series &&
																	ej.repeticiones &&
																	`${ej.repeticiones && `${ej.repeticiones} repeticiones`} x${" "}
																		${ej.series && `${ej.series} series`}`}
																{ej.series &&
																	ej.time &&
																	`${ej.time && `${ej.time}`} x ${ej.series && `${ej.series} series`}${" "}`}
																{!ej.series &&
																	ej.repeticiones &&
																	`${ej.repeticiones && `${ej.repeticiones} repeticiones`}`}
																{!ej.series && ej.time && `${ej.time && `${ej.time}`}`}
															</p>
														</div>
													</div>
												</article>
											);
										})}

										<h2 className="mt-4 mb-4 text-xl text-center font-bold text-black font-[Poppins]">
											{day.anaerobico?.name}
										</h2>

										{day.anaerobico && day.anaerobico?.ejercicios.map((ej, index) => {
											return (
												<div key={index}>
													<article className="relative overflow-hidden rounded-lg shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10">
														<img
															alt="Office"
															src={
																ej.gif
																	? ej.gif
																	: "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"
															}
															className="absolute inset-0 h-full w-full object-cover"
														/>

														<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
															<div className="p-4 sm:p-6">
																<h2 className="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
																<p className="mt-2 line-clamp-3 text-sm text-white/95 font-[Poppins]">
																	{ej.series &&
																		ej.repeticiones &&
																		`${ej.repeticiones && `${ej.repeticiones} repeticiones`} x${" "}
																			${ej.series && `${ej.series} series`}`}
																	{ej.series &&
																		ej.time &&
																		`${ej.time && `${ej.time}`} x ${ej.series && `${ej.series} series`}${" "}`}
																	{!ej.series &&
																		ej.repeticiones &&
																		`${ej.repeticiones && `${ej.repeticiones} repeticiones`} x ${" "}
																			${ej.series && `${ej.series} series`}`}
																	{!ej.series &&
																		ej.time &&
																		`${ej.time && `${ej.time}`} x ${ej.series && `${ej.series} series`}${" "}`}
																</p>
															</div>
														</div>
													</article>
												</div>
											);
										})}
										<h4 className="mt-4 mb-4 text-sm text-center font-bold text-black font-[Poppins]">Descanso 2 minutos</h4>
										<h2 className="mt-4 mb-4 text-xl text-center font-bold text-black font-[Poppins]">
											{day.aerobico?.name}
										</h2>

										{day.aerobico && day.aerobico?.ejercicios.map((ej, index) => {
											return (
												<div key={index}>
													<article className="relative overflow-hidden rounded-lg shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10">
														<img
															alt="Office"
															src={
																ej.gif
																	? ej.gif
																	: "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"
															}
															className="absolute inset-0 h-full w-full object-cover"
														/>

														<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
															<div className="p-4 sm:p-6">
																<h2 className="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
																<p className="mt-2 line-clamp-3 text-sm text-white/95 font-[Poppins]">
																	{ej.series &&
																		ej.repeticiones &&
																		`${ej.repeticiones && `${ej.repeticiones} repeticiones`} x${" "}
																			${ej.series && `${ej.series} series`}`}
																	{ej.series &&
																		ej.time &&
																		`${ej.time && `${ej.time}`} x ${ej.series && `${ej.series} series`}${" "}`}
																	{!ej.series &&
																		ej.repeticiones &&
																		`${ej.repeticiones && `${ej.repeticiones} repeticiones`} x ${" "}
																			${ej.series && `${ej.series} series`}`}
																	{!ej.series &&
																		ej.time &&
																		`${ej.time && `${ej.time}`} x ${ej.series && `${ej.series} series`}${" "}`}
																</p>
															</div>
														</div>
													</article>
												</div>
											);
										})}
										<h4 className="mt-4 mb-4 text-sm text-center font-bold text-black font-[Poppins]">Descanso 2 minutos</h4>
									</div>
									<div className="m-auto">
										<div className="w-80 h-80 mt-4 sm:mx-16 bg-white rounded-full flex flex-col justify-center items-center border-4 border-emerald-500 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
											<span className="bg-white h-24 w-24 rounded-full"></span>
											<h1
												onClick={start}
												className="text-center text-emerald-500 shadow-sm text-6xl rounded-full font-[Poppins]">
												{timeFormat(diff)}
											</h1>
											<button onClick={stop} className="bg-white rounded-full h-24 w-24 shadow-xl">
												Stop
											</button>
										</div>
									</div>
								</div>
							);
					})}
				</div>
			</section>
		</div>
	);
};

export default DiaDetail;
