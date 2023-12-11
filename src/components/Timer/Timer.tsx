import { useEffect, useState } from 'react'
import { timeCalculation } from '../../utils/timeCalculation'

export const Timer = () => {
	const [countdown, setCountdown] = useState(() => timeCalculation())

	useEffect(() => {
		const updateCountdown = setInterval(() => {
			setCountdown(timeCalculation())
		}, 1000)

		return () => {
			clearInterval(updateCountdown)
		}
	}, [])

	return (
		<div className="flex gap-8 mt-40 uppercase font-red-hat mobile:gap-4 mobile:mt-20">
			{countdown.map((count, index) => {
				const timerID = ['days', 'hours', 'minutes', 'seconds']

				return (
					<div key={index}>
						<div className="w-40 h-40 flex items-center justify-center relative mb-5 overflow-hidden shadow-2xl card-shadow rounded-lg text-soft-red text-7.5xl bg-dark-des-blue  mobile:w-[75px] mobile:h-[75px] mobile:text-4xl mobile:mb-3">
							<span className="absolute -right-1 h-3 w-3 rounded bg-dark-blue z-20 mobile:w-2 mobile:h-2" />
							<span className="absolute -left-1 h-3 w-3 rounded bg-dark-blue z-20 mobile:w-2 mobile:h-2" />
							<h2 className="flex items-center justify-center after:absolute after:w-full after:h-1/2 after:top-0 after:opacity-25 after:bg-dark-blue">
								{count < 10 ? `0${count}` : count}
							</h2>
						</div>
						<p className="text-sm text-grayish text-center tracking-widest border-teal-200 mobile:text-[0.5rem] ">
							{timerID[index]}
						</p>
					</div>
				)
			})}
		</div>
	)
}
