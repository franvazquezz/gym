import {Link, useParams} from "react-router-dom";
import plan from "../assests/plan.json";
import {useEffect, useState} from "react";

const DiaDetail = () => {
	const {id} = useParams();
	const [diff, setDiff] = useState(null);
	const [initial, setInitial] = useState(null);

	const tick = () => {
		setDiff(new Date(+new Date() - initial));
	};

	const start = () => {
		setInitial(+new Date());
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

	const timeFormat = (date) => {
		if (!date) return "00:00:00";

		let mm = date.getUTCMinutes();
		let ss = date.getSeconds();
		let cm = Math.round(date.getMilliseconds() / 10);

		mm = mm < 10 ? "0" + mm : mm;
		ss = ss < 10 ? "0" + ss : ss;
		cm = cm < 10 ? "0" + cm : cm;

		return `${mm}:${ss}`;
	};

	return (
		<div>
			<section class="mx-auto max-w-screen-xl bg-white">
				<div class="mx-auto max-w-screen-xl flex-wrap px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
					<div class="mt-12 text-center">
						<a
							href="/"
							class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]">
							Ir a inicio
						</a>
					</div>
					{plan.map((day, index) => {
						if (day.id === parseInt(id))
							return (
								<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
									<div class="mx-auto max-w-lg text-center">
										<h2 class="text-3xl font-bold sm:text-4xl font-[Poppins]">{`Día ${id} - ${day.name}`}</h2>
									</div>
									<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
										<h2 class="mt-4 mb-4 text-xl text-center font-bold text-black font-[Poppins]">
											{day.warmup?.name}
										</h2>
										{day.warmup?.ejercicios.map((ej, index) => {
											return (
												<article class="relative overflow-hidden rounded-lg shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10">
													<img
														alt="Office"
														src={
															ej.gif
																? ej.gif
																: "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"
														}
														class="absolute inset-0 h-full w-full object-cover"
													/>

													<div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
														<div class="p-4 sm:p-6">
															<h2 class="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
															<p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
																{ej.series && ej.repeticiones && (
																	<p class="mt-1 text-sm  text-white font-[Poppins]">
																		{ej.repeticiones && `${ej.repeticiones} repeticiones`} x{" "}
																		{ej.series && `${ej.series} series`}
																	</p>
																)}
																{ej.series && ej.time && (
																	<p class="mt-1 text-sm text-white font-[Poppins]">
																		{ej.time && `${ej.time}`} x {ej.series && `${ej.series} series`}{" "}
																	</p>
																)}
																{!ej.series && ej.repeticiones && (
																	<p class="mt-1 text-sm  text-white font-[Poppins]">
																		{ej.repeticiones && `${ej.repeticiones} repeticiones`}
																	</p>
																)}
																{!ej.series && ej.time && (
																	<p class="mt-1 text-sm text-white font-[Poppins]">
																		{ej.time && `${ej.time}`}{" "}
																	</p>
																)}
															</p>
														</div>
													</div>
												</article>
											);
										})}

										<h2 class="mt-4 mb-4 text-xl text-center font-bold text-black font-[Poppins]">
											{day.anaerobico?.name}
										</h2>

										{day.anaerobico?.ejercicios.map((ej, index) => {
											return (
												<div>
													<article class="relative overflow-hidden rounded-lg shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10">
														<img
															alt="Office"
															src={
																ej.gif
																	? ej.gif
																	: "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"
															}
															class="absolute inset-0 h-full w-full object-cover"
														/>

														<div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
															<div class="p-4 sm:p-6">
																<h2 class="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
																<p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
																	{ej.series && ej.repeticiones && (
																		<p class="mt-1 text-sm  text-white font-[Poppins]">
																			{ej.repeticiones && `${ej.repeticiones} repeticiones`} x{" "}
																			{ej.series && `${ej.series} series`}
																		</p>
																	)}
																	{ej.series && ej.time && (
																		<p class="mt-1 text-sm text-white font-[Poppins]">
																			{ej.time && `${ej.time}`} x {ej.series && `${ej.series} series`}{" "}
																		</p>
																	)}
																	{!ej.series && ej.repeticiones && (
																		<p class="mt-1 text-sm  text-white font-[Poppins]">
																			{ej.repeticiones && `${ej.repeticiones} repeticiones`} x{" "}
																			{ej.series && `${ej.series} series`}
																		</p>
																	)}
																	{!ej.series && ej.time && (
																		<p class="mt-1 text-sm text-white font-[Poppins]">
																			{ej.time && `${ej.time}`} x {ej.series && `${ej.series} series`}{" "}
																		</p>
																	)}
																</p>
															</div>
														</div>
													</article>
												</div>
											);
										})}
									</div>
								</div>
							);
					})}

					<div
						onClick={start}
						className="w-72 h-72 ml-10 bg-white rounded-full flex justify-center border-4 border-emerald-500 items-center text-center p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
						<h1 className="text-center text-emerald-500 shadow-sm text-6xl  rounded-full font-[Poppins]">
							{timeFormat(diff)}
						</h1>
					</div>

					<div class="mt-12 text-center">
						<a
							href="/"
							class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]">
							Ir a inicio
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DiaDetail;
