import { IoLogoFacebook } from 'react-icons/io'
import { FaPinterest } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

export const Footer = () => {
	return (
		<footer className="bg-hills w-screen h-52 bg-cover bg-no-repeat mt-auto flex justify-center items-center mobile:bg-right-bottom">
			<ul className="flex gap-8 text-4xl text-grayish mobile:text-3xl">
				<li className='hover:text-soft-red cursor-pointer'>
					<IoLogoFacebook />
				</li>
				<li className='text-[34px] hover:text-soft-red cursor-pointer mobile:text-[28px]'>
					<FaPinterest />
				</li>
				<li className='hover:text-soft-red cursor-pointer'>
					<FaInstagram />
				</li>
			</ul>
		</footer>
	)
}
