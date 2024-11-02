import React, { useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { CiMenuBurger } from 'react-icons/ci';
import { BsFillMusicPlayerFill } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { FaMicrophone } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import { MdOutlineVideoCall } from 'react-icons/md';
import { PiVideoBold } from 'react-icons/pi';
import { AiOutlineLike } from 'react-icons/ai';
import Card from './Card';
import { MdHistory } from 'react-icons/md';
import { PiPlaylistDuotone } from 'react-icons/pi';
import { GoVideo } from 'react-icons/go';
import { MdOutlineWatchLater } from 'react-icons/md';

function Navbar() {
	const [isToggle, setIsToggle] = useState(true);
	const handleToggle = () => {
		setIsToggle((prevstate) => !prevstate);
	};
	const videos = [
		{
			name: 'All',
			link: 'google.com',
		},
		{
			name: 'Gaming',
			link: 'google.com',
		},
		{
			name: 'Music',
			link: 'google.com',
		},
		{
			name: 'Skills',
			link: 'google.com',
		},
		{
			name: 'Podcast',
			link: 'google.com',
		},
		{
			name: 'Contemporary Worship Music',
			link: 'google.com',
		},
		{
			name: 'Blind Audition',
			link: 'google.com',
		},
		{
			name: 'Percussion',
			link: 'google.com',
		},
		{
			name: 'Highlight Films',
			link: 'google.com',
		},
		{
			name: 'Afrobeat',
			link: 'google.com',
		},
		{
			name: 'Martial Art',
			link: 'google.com',
		},
		{
			name: 'Voice',
			link: 'google.com',
		},
		{
			name: 'Podcast',
			link: 'google.com',
		},
	];
	const contents = [
		{
			icon: <IoMdHome className="w-6 h-6" />,
			name: 'HOME',
			link: 'google.com',
		},
		{
			icon: <BsFillMusicPlayerFill className="w-6 h-6" />,
			name: 'Shorts',
			link: 'google.com',
		},
		{
			icon: <PiVideoBold className="w-6 h-6" />,
			name: 'Subscriptions',
			link: 'google.com',
		},
		{
			icon: <IoPersonCircleOutline className="w-6 h-6" />,
			name: 'You',
			link: 'google.com',
		},
	];
	const content2 = [
		{
			icon: <IoMdHome className="w-6 h-6" />,
			name: 'HOME',
			link: 'google.com',
		},
		{
			icon: <BsFillMusicPlayerFill className="w-6 h-6" />,
			name: 'Shorts',
			link: 'google.com',
		},
		{
			icon: <PiVideoBold className="w-6 h-6" />,
			name: 'Subscriptions',
			link: 'google.com',
		},
	];
	const content1 = [
		{
			tittle: 'You >',
		},
		{
			icon: <MdHistory className="w-6 h-6" />,
			name: 'History',
			link: 'google.com',
		},
		{
			icon: <PiPlaylistDuotone className="w-6 h-6" />,
			name: 'Playlists',
			link: 'google.com',
		},
		{
			icon: <GoVideo className="w-6 h-6" />,
			name: 'Your videos',
			link: 'google.com',
		},
		{
			icon: <MdOutlineWatchLater className="w-6 h-6" />,
			name: 'Watch Later',
			link: 'google.com',
		},
		{
			icon: <AiOutlineLike className="w-6 h-6" />,
			name: 'Liked videos',
			link: 'google.com',
		},
	];
	const content3 = [
		{
			tittle: 'Subscription>',
		},
		{
			icon: <IoPersonCircleOutline className="w-10 h-10" />,
			link: 'google.com',
			name: 'Google',
		},
		{
			icon: <IoPersonCircleOutline className="w-10 h-10" />,
			link: 'google.com',
			name: 'MOUAU',
		},
		{
			icon: <IoPersonCircleOutline className="w-10 h-10" />,
			link: 'google.com',
			name: 'W-COIN',
		},
		{
			icon: <IoPersonCircleOutline className="w-10 h-10" />,
			link: 'google.com',
			name: 'Hamster Kombat',
		},
	];
	return (
		<div className="p-4">
			{/* 1 */}
			<div className="py-3 space-y-2 fixed bg-white top-0 right-4 left-4">
				{/* a */}
				<div className="flex justify-between items-center">
					{/* toggle */}
					<div className="flex space-x-6 ">
						<button onClick={handleToggle}>
							{isToggle ? (
								<CiMenuBurger className="w-6 h-6" />
							) : (
								<CiMenuBurger className="w-6 h-6" />
							)}
						</button>
						<div className="flex space-x-1">
							<img className="w-8 h-8" src="./src/assets/youtube.png" />
							<p className="font-bold text-xl">YouTube</p>
						</div>
					</div>
					{/* input */}
					<div className="flex">
						<div className="flex">
							<input
								type="text"
								className="border border-gray-400 w-96 h-10 rounded-s-2xl shadow-lg"
							/>
							<button className=" border border-gray-300 h-10 rounded-e-3xl px-3 bg-gray-200 shadow-lg">
								<CiSearch className="w-8 h-8" />
							</button>
						</div>
						<button className=" border border-gray-400 h-9 w-9 p-2 bg-gray-1 bg-gray-200	00 rounded-3xl ml-4">
							<FaMicrophone />
						</button>
					</div>
					{/* video */}
					<div className="flex space-x-6">
						<button>
							<MdOutlineVideoCall className="h-8 w-8" />
						</button>
						<button>
							<FaRegBell className="h-6 w-6	" />
						</button>
					</div>
				</div>

				{/* b */}
				<div className="flex p-2 gap-2 justify-stretch ml-20">
					{videos.map((video, index) => (
						<a
							className="bg-gray-100 p-1 rounded-md text-nowrap"
							href={video.link}
							key={index}
						>
							{video.name}
						</a>
					))}
				</div>
			</div>

			{/* 2 */}
			<div className="flex my-28">
				{isToggle ? (
					<div className="fixed top-16">
						<div className="space-y-10">
							{contents.map((content, index) => (
								<a
									href={content.link}
									key={index}
									className="hover:bg-gray-100 rounded-md flex flex-col items-center"
								>
									<div>{content.icon}</div>
									<p className="text-xs">{content.name}</p>
								</a>
							))}
						</div>
					</div>
				) : (
					<div className="fixed top-16 w-52 bg-white h-screen hover:overflow-scroll">
						<div className="space-y-5 my-4">
							{content2.map((content, index) => (
								<a
									href={content.link}
									key={index}
									className="hover:bg-gray-100 rounded-md flex items-center space-x-5"
								>
									<div>{content.icon}</div>
									<p className="text-sm font-medium">{content.name}</p>
								</a>
							))}
						</div>

						<div className="border-t border-gray-400 my-4"></div>

						<div className="space-y-5 my-4">
							{content1.map((content, index) => (
								<div key={index} className="flex flex-col">
									<p className="font-semibold hover:bg-gray-200 rounded-md">
										{content.tittle}
									</p>
									<a
										href={content.link}
										className="hover:bg-gray-100 rounded-md flex items-center space-x-5"
									>
										<div>{content.icon}</div>
										<p className="text-sm font-medium">{content.name}</p>
									</a>
								</div>
							))}
						</div>

						<div className="border-t border-gray-400 my-4"></div>

						<div className="space-y-5 my-4 mb-20">
							{content3.map((content, index) => (
								<div key={index} className="flex flex-col">
									<p className="font-semibold hover:bg-gray-200 rounded-md">
										{content.tittle}
									</p>
									<a
										href={content.link}
										className="flex space-x-4 items-center rounded-md hover:bg-gray-200"
									>
										<div>{content.icon}</div>
										<p className="font-medium text-sm "> {content.name}</p>
									</a>
								</div>
							))}
						</div>
					</div>
				)}
				<div className="ml-20">
					<Card />
				</div>
			</div>
		</div>
	);
}
export default Navbar;
