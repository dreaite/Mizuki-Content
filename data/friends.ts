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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637LDDGSD%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T175206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEm3jYnedrg3hr7Ju0e80JrcoXjOhnKN1%2FX%2F4gru7O6PAiEA5JNc4M%2BxUK4QsxVHrGOLl4UTYKhg22ebW8PpUAxnABcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSqZRTkXvu85r9B2ircA35x%2Bj70BQvd%2Bi5KQyxX3keaf8mQZguAHK2VMOZ%2FhqdkZ%2FNFBm8m9hbdgNlt1GzJZAzy%2Bulz219x%2B8X3rR1piY8Ki26oEr3qcXg2zeZgDqBT8ki5apbAs3IDeS5Axe0rxyMKW%2F1WrRZelcbBuKC9buFnTicHJ51enaro0FbLy7bYVD4vDsN240zgdDZIc%2FuljxYmGHYasv8h%2BvaZMAJ49S3GfY30pBPA1C2bFWWOmaOjpq5C4K0X5ORK%2B4bTYBXNrJadup89QZ4a97G%2BKkQug2Cg1IAJ62fkELYrAgYI2MCeujOAcTPeS4eN%2B7mkzbtlChgifimdhqglinfArzvvyMi7tWrvD5pqXo9ksawp9JM0qGbfumN5PcKzF5vZGRzYPhD7t%2BGKSauefwCq0mpaImL1m8H6svb1%2FZFnLbCHZ8bZH4ptD%2FSu%2F14JLMRrI6j3ZRHHuLySlDwGRAbiT%2Ba%2BJfHxtJktc7rCgajReHzQiIp0N5HkSRl0VM9u%2BG%2B4At684ZVlh7tcuTCm7UYQcVukDdtoDAyqdt8Xn1DJLr4xeA767NZoNWkuH6Xd95XulkO1Ceql6nsTLPM7fJnyPtpaBcOR2YYl9r5KdagnhKehgqMwid3LXAQPuX0VTUOcMPv159MGOqUB2fCxOCkWwGRWJFqY54l59bS3tRsRv%2BmHfP%2Bhs9sD7bmX4n4KXFZDk3YZ20t%2Bs%2BoPJRSSIWvFmSLizcFLD6xZJO9%2BAf4iQDbNacWBp0FGmIIgvhs0pSiq3mJSMFBLlsP1rGWt%2Bg02tNUY5I8Y%2FvdWjjbtNIh2P1UEk5ihrNBDxrcpQ56ljgsh4Iw4G21GrvZZLLaN6vEmOVaRKYIGCaLjMyp8iCoV&X-Amz-Signature=b07ab227a4052b47d96b0df9e8223981c94de410b08d590c8af2aed8c0038818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
