import { Footer } from "../components/Footer/Footer"
import { Timer } from "../components/Timer/Timer"
import { TopTitle } from "../components/TopTitle/TopTitle"

export const Home = () => {
	return (
		<div className="w-screen min-h-screen bg-gradient-to-b from-[#191A24] via-[#1e1f29] to-[#2b212d]">
			<div className="w-full h-screen bg-stars overflow-x-hidden flex flex-col">
				<main className="flex flex-col items-center">
					<TopTitle />
					<Timer />
				</main>
				<Footer />
			</div>
		</div>
	)
}
