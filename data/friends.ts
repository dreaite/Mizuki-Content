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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2XFEBR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T154710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFPAmN%2Ff6zbGOK5eCTsWGtbKJVgCfD2RPlc%2B7dob7anJAiB6TAWSb6T%2BumElT9E2BCzENW1MCCMOz21JFMsgNUkWRSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNDi6Jb8V67yF3iiiKtwD2FhTJo2MJHl5FXCXqAB0WTjPclXCAReYcGmVkZ1FsRBSBt1YUu28nMYc7vjUgbxDQmLKbF5wUiO00PtLqA9%2FD9bL3DUrn2vNRynHESAWSGKzORSQQHE8tJ02PgDhGRYkOEnULKnnJLt1FcpFnc4iDbS0mh9RbjGgxOgF9MLkHzIZMIsL2%2FSjdT8MrSqFgoweHudsJ9E48skd%2Bo3lb0Qf%2FuNHWXNMHJHnGyv9vOl9n8OO5n2yYcTCRhTyNMw%2Bi05BYAcbNcrO3wyBjAzibYC5o6C7%2F0qO3K%2FoKy7FfnaCvvphrDVTErAKhDi%2BeY2lt7UBX5yutsYS2XsRmqXpr2o2HNUjJ5%2BXXnfVrxfNehvFgLow3i9VxQ8W9E6EhnodoAD40Z4it6i27mOtc4HcNE%2BJ9zn2bklzjAgGKAyPiSX9iOyKBa2KcxFPqkg02TzyvIeM2N7KiuNpj6EPf%2FmPBVxASf62sHKtvTyu82p9qCSmj6p%2F6hoeNhyBeA62JCA4fEclu3wVvwYoQaZlOuDEvWsW%2Bsy5oMscKwNXs0%2FEy%2F6h%2BqoLwfgRo9HW94xGx%2FoFsNDX0BwxZxPunsj%2FvopF3g3yoeWcGSODio6dZc8toq1wzYlhhqosvfTdH91ukUow%2F8WD0wY6pgFE9TOQ6hL8nTswNjp9ux2GojH0s0yl7AT9IC8qU4%2FO4zx72RvokB%2B4JjCdLqyDTJq5EQ%2BQLsKFxUHosGD2ykhS9Z5eiZMzS2rrAdIQ6BbwDgNGKdF7u6lF%2BtQY2EQlXjcF27PuiyuXD8ByDlo%2FcW%2BHyqSS6tU3%2FQQH5FDF%2BEVkN4Ci9G8x0MwEJYuGoKmT%2FsZ4Gm2UGaoQy%2FFyF7ZY3gYjooie3Kn4&X-Amz-Signature=9d84e3bff7d6b8f57c4176171f2f32112232f07b8ce8d8016af63f30ab835162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
