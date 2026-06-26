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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKQKILOJ%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T185331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZF5b0kH5Ms%2FgzPgemXJdGPfUVr%2Fv7NlOLEInzexEHlAIhAPdd4NPq5QAL0FgK5PwYoqswT7JD17mBQSw%2B%2BMh262uKKv8DCGsQABoMNjM3NDIzMTgzODA1IgzeGXIid7etuGerd%2B8q3ANLWidZOOhy%2FVqs3kbo3F41xLtPopzUqfK5Sdzfjsq7CbXWEaCznnjqSJ374TH5thqWRFilt5TmS53LDOSIvBqwHiGjgg6nwX%2BeKuN6ZEsP2jcZ4%2BDDzWPSvxEcJXYbvHDFbrjbAjcvuJ4IUoteJ9xGzWaE74tNzxIEPp1CoYGGMGUgIbfHsdx4SfosTs%2BRj9K11jhBOsQ4ctR7ozhaI6Oh%2FSTivuF26XyT1aO6snx7ikmfYKIGsw1a4cTSZG2h8ZpwCD1w3NCCbifu%2FeiAt9gPaBFbblCiY3ajrC49vTe6JA1dz4PT6MUYTCl8i3vFY1UPC6KLrxTrABGiDghQcp%2BXza3h4Mn1US7K8qz3fO2IH8luH7yYoAMfnlreKAep7T%2FeliW9lNJkNUboaAgXIo7ZVmalldcm%2BhBYy9RiO8jBErRDrjF3Ox494EZUhC%2FXnXSRytcDSD6Yn%2FVmG7K657t0x5ic0TtLGgZGlT1KvTdkKwkjHZR%2FTBEGAoclbkdSsPSruogmEXhYpAFcEu98kfsmAjqM%2FcLy4Ii9z%2Bg4p7SJFibw7dnlkUgBcnCDpxNUvHnNtzKbeXBWJTQ%2BqS4jsryBIrAtBwdjDTY%2FNZq794VnvLugx1nksS5Xli%2FRQjDbgPvRBjqkAYZpJupl899wz6CKyvNE2X%2B5Sq1Wj4Y8cdvm55IuldxwoTRWEeINkTZbANTjMNqsqNFIG3X3NU63fZ8VX7Axcpx5oSol2zRwGsmdSWhpNrrjJIaOTZL7J6M0Z9IQmjnZZQckBBmHX3DTTUVNBQwhD2ro2LKuTJkVygXZO%2Fkxw%2BN7T14e2JASBtqnY%2BtbyvNyQ6kvcJazMQAFK2Tz3iRCWPWETk%2FH&X-Amz-Signature=bc38486dc5cd0d1230687e8a6ac105d1edfe524bba0247f32cc0eb001da2f6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
