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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSEPDD4W%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T043700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDl7jfrKo88T8HlqEV03pjiwbnor0at%2FYeYixNHQTVJgwIgZiXn%2FBtr646n0dab5LI1dCvbVK5kkqWbpwbaJvN%2Fn5kq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO2Fdt6VLj%2BeuSNp%2BSrcA56Vga8olbk7HeIUaBcDF1xlv9BSWJQqPpu8u%2ByA%2Buu2cuzaGah3yj4rQ2CNfUQtZtNE1N4SduVLVCBb0bUwTJuF6uahYlFCJAEQknfYthU%2Bf3rFmvGrWHWKPFdGr%2BJiYunf0XzZKXWU9AUVcidikjuR4SFHbfJDDKCqbT7mdadaob6OwJZFrQ3XLH%2FhqZIZcqORUGaxEnfhtl72rnAk7klnT78kdWfGZg0eunHPjwqX1IOo7RDbbNDRVoF3bFX1YU09FgEZdY6glBjhV4tTOFf5LANamS6q3dYfCw0LVFfbwmoKe4d47CNr%2BchGEappnkjvwR9TrvFTlLM4mF5CD5JZ8ugZ5HsQTozG%2BERuMK7u7X7PAlzQNh8FUpEecqigtYu1jK%2FZ%2B%2BTiWsLtpRNcdNf98m9KmumbRTtB2oWk%2F3qwMb0V6Qo%2Bv1dGDEiQPSx38RB3FsSziW481zH0Md3ByY5dhliVDleskSbaHNTIDrVsjvBO8czQPbNGCSXHQ7QJksrlpj2P3%2FaXq8HtPk9%2BFl8xftQrQvCaxCjxoXKoHNlfL1hk6C%2FbzIeyIEzSkwVd1H2p1RWpS8Bu0btRkqsPTahcG%2F9S0ZJEN1xFTYOkGMUem9COXObCD%2BJ0CyjQMN6sm9MGOqUBri0YFrCgiwJsw0ssnwyYSpJIUaeUTN0NWQIhQgriClH3louAW2eGuO2SiBB0sN5qMbu2PNgcwMUbzFT4nmkfcFWAvVJp92U8%2FvPfdWQ0kEcl1%2BIrvtSj6fTALnWVxFs0ycs6KQxmNiBOk8CpwXYMPKer9wffXYioHYeObSd1iclNTFcOCNVkBMW1Y1qY1yBuEVq2BoMTy2mASRYWaFZbxOTWvsc0&X-Amz-Signature=56c381202d7c3b37d5fac2d60cdc3971d7f7a9db7b832a08e0c366e8c331aae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
