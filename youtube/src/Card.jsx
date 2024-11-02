function Card() {
	const videos = [
		{
			id: 1,
			image: '../src/assets/img1.jpg',
			name: 'AWARD WINNING ARIARIA PRAISE ⁠@femi_lazarus @thelightnationgloba MStixx',
			views: '302K views ▪ 2 years ago',
			icon: '../src/assets/img1.jpg',
		},
		{
			id: 2,
			image: '../src/assets/img3.jpg',
			name: 'Good Vibes Music 🌻 Top 100 Chill Out Songs Playlist | New Tiktok Songs With Lyrics Dreamy Vibez',
			views: '302K views ▪ 2 years ago',
			icon: '../src/assets/img3.jpg',
		},
		{
			id: 3,
			image: '../src/assets/img3.jpg',
			name: ' Osuporu is out! | THE PEOPLE’S LAWYER | Layi WasabiAWARD WINNING ARIARIA PRAISE ⁠@femi_lazarus @thelightnationgloba MStixx',
			icon: '../src/assets/img3.jpg',
			views: '302K views ▪ 2 years ago',
		},
		{
			id: 4,
			image: '../src/assets/img3.jpg',
			name: ' Osuporu is out! | THE PEOPLE’S LAWYER | Layi WasabiAWARD WINNING ARIARIA PRAISE ⁠@femi_lazarus @thelightnationgloba MStixx',
			icon: '../src/assets/img3.jpg',
			views: '302K views ▪ 2 years ago',
		},
		{
			id: 5,
			image: '../src/assets/img3.jpg',
			name: ' Osuporu is out! | THE PEOPLE’S LAWYER | Layi WasabiAWARD WINNING ARIARIA PRAISE ⁠@femi_lazarus @thelightnationgloba MStixx',
			icon: '../src/assets/img3.jpg',
			views: '302K views ▪ 2 years ago',
		},
		{
			id: 6,
			image: '../src/assets/img3.jpg',
			name: ' Osuporu is out! | THE PEOPLE’S LAWYER | Layi WasabiAWARD WINNING ARIARIA PRAISE ⁠@femi_lazarus @thelightnationgloba MStixx',
			icon: '../src/assets/img3.jpg',
			views: '302K views ▪ 2 years ago',
		},
	];
	return (
		<div className="space-y-8">
			<div className="grid lg:grid-cols-3 grid-cols-2  gap-4">
				{videos.map((video, id) => (
					<div key={id}>
						<div className="space-y-2 ">
							<img
								className="rounded-xl h-auto w-screen"
								src={video.image}
								alt={video.name}
							/>
							<div className="flex space-x-2">
								<img className="rounded-full w-10 h-10" src={video.icon} />
								<div>
									<p className="font-semibold text-sm">{video.name}</p>
									<p className="font-normal text-sm">{video.views}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Card;
