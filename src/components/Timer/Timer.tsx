import { useEffect, useState } from 'react'
import { timeCalculation } from '../../utils/timeCalculation'

export const Timer = () => {
	const [countdown, setCountdown] = useState(() => timeCalculation())
	const [flipStates, setFlipStates] = useState(Array(countdown.length).fill(false))

	useEffect(() => {
		const updateCountdown = setInterval(() => {
			const newCountdown = timeCalculation()
			setCountdown(newCountdown)

			setFlipStates((prevFlipStates) => {
				const newFlipStates = [...prevFlipStates]
				for (let i = 0; i < newCountdown.length; i++) {
					if (newCountdown[i] !== countdown[i]) {
						newFlipStates[i] = true
					}
				}
				return newFlipStates
			})

			setTimeout(() => {
				setFlipStates((prevFlipStates) => prevFlipStates.map(() => false))
			}, 500)
		}, 1000)

		return () => {
			clearInterval(updateCountdown)
		}
	}, [countdown])

	return (
		<div className="flex gap-8 uppercase font-red-hat mt-32 laptop:mt-20 tablet:scale-75 mobile:scale-100 mobile:gap-4 mobile:mt-20 ">
			{countdown.map((count, index) => {
				const timerID = ['days', 'hours', 'minutes', 'seconds']

				return (
					<div key={index}>
						{/* // flip-card */}
						<div className="text-soft-red inline-flex flex-col text-7.5xl w-40 h-40 items-center justify-center card-shadow relative leading-loose mobile:w-16 mobile:text-3xl mobile:h-16 mobile:leading-[4rem]">
							{/* top */}
							{flipStates[index] && (
								<div className="absolute bg-[#2a2c41] w-full h-1/2  top-0 flex justify-center overflow-hidden rounded-t-lg border-b border-b-black-blue origin-bottom topFlip">
									<p>{count < 10 ? `0${count}` : count}</p>
								</div>
							)}

							<div className="h-1/2  bg-[#2a2c41] w-full flex justify-center overflow-hidden rounded-t-lg border-b border-b-black-blue">
								<p className="">{count < 10 ? `0${count}` : count}</p>
							</div>
								
							{/*side dots */}
							<span className="absolute -right-1 h-3 w-3 rounded bg-dark-blue z-20 mobile:w-2 mobile:h-2" />
							<span className="absolute -left-1 h-3 w-3 rounded bg-dark-blue z-20 mobile:w-2 mobile:h-2" />

							{/* bottom */}
							{flipStates[index] && (
								<div className="absolute bg-dark-des-blue w-full h-1/2  bottom-0 flex items-end justify-center overflow-hidden rounded-b-lg origin-top bottomFlip">
									<p>
										{count < 10 && count > 1
											? `0${count - 1}`
											: count === 59
											? count
											: count === 0
											? 59
											: count + 1}
									</p>
								</div>
							)}
							<div className="h-1/2  bg-dark-des-blue w-full flex items-end justify-center overflow-hidden rounded-b-lg">
								<p className="">{count < 10 ? `0${count}` : count}</p>
							</div>
						</div>

						<p className="text-sm text-grayish text-center mt-9 tracking-widest border-teal-200 mobile:text-[0.5rem] mobile:mt-2">
							{timerID[index]}
						</p>
					</div>
				)
			})}
		</div>
	)
}
