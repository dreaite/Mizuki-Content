// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "且听书吟",
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSIX7AK%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T075032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDejuwglCVR3JNKijiqX2aqLDhrmF2eu833VmTCRYq9LwIgKR5D4sxINZ6t3fNhSI%2FQpawqQELUHISlFzjXpBsoB8Uq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLXnJlUJ4%2FXwRKjqZCrcA4HkH1M9TtXncrvorPlEjcmHxxVqHLIV5xCrs7gIoLTK6Q2ZeIZ2cPJJfI2qljTv9PSQ0Of1YE%2BrJ5aPfN7FG7wzOzh705UlAHprm1Fz5dOUuYk6wQe9HWfPdEfmvOx87RPnONNXuflIC40sYbCv3AwOmP7pwSBcrdkBD0%2BFfKDdOvchRjZebkr5dX3C5I2OSF9yyFuxrOQ8ZUGHbBjpPUmXg4a6bRUUb8qEOTjj8hlT4ia49XJNv8mBBHkcn9I3%2BQ7FepCBW1LO8teX5h5YEbjQgDtTB3u9nAwERB6VHDRkDjKWh%2Bp5uxuEmirbcM7YJdKV7qvcfeDz5ZXBs%2BJGQ0FOGxljRxfybta2VnmkeVZQkHZ9Ur5%2BbiIvFlN6%2FAYao%2FA7n0ccW7jdatmPfD%2BiKoJZ4bKPBYUkZhnpbzf2E2pDOkY6jkBexLFEN7bhF7cSswLvvxgLlft6sHgHh0a2rQDsnyreM%2Ba1KSEG%2Fr4PVUqVENKWJP7oqsFudk3%2Fm%2Fd2fPJf6K73wegoXbBMtZTQkLUkvb7o5QiSa%2B5IB%2FNoB1M7x2cPiV8AQSqHqAfK0%2B79Q3t%2FyRzOgaTmMbvef6n2FGewfC%2BBlZHaYHX8UtKsFiGSXDz20qSLg%2Fam%2BU2KMJL%2F%2FdEGOqUBjT%2FLx31wOSF3Y0IpUTrQR2ADBPYvfqoYEmfNVMPttLs7EN92EjqlUmpS707GMouD7jSAym%2BdKBJpFbwIjFOvgjktgePqwSYLs01jPNhBCMz9evH2fJcS7IbOYOC0czKdQ37taSIZ6A0X4cqCPLtc1cxkSTaP3XDKNPfvVDGCk%2Bx33mFZnVh2A%2FMDYiCdwMegmAktJQulMwM%2FaM0OQD35mTMSEkCp&X-Amz-Signature=cb3ce8b987d64ec1adf1b742a716169116f5ca2c01ea851ee219d1e2f3276809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
		desc: "诗与梦想的远方",
		siteurl: "https://yufan.me",
		tags: [],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
