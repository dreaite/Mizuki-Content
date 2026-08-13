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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7SMCQ2%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T234200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDVbSM2kinc%2B9SNY9QXbyou9eurbMvtfEU455KdS%2Bz9OAiEAhBFQWMtWJ5mrBLi7eXpWxFf0aNpTsoBhqAfwScpFkpIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFLDmRCuutnC9IICyrcAxA3rqkMlSvjI8elUyutkJ7CpMe%2Bllddgy%2BzZELskFrwS5TBwOt1KTO3V60gBuKupvzpTplBl33FXKmERodweKRYCJzBRi04etVAupYYqks13zu1CxhpQgCa6HOq6HOmEiLGMFcEZVUDlLyYBHAzzWSz9rLy0%2BfQUAQI7iexDkZ3flFeMW3p5pyUqd6OnwG9rEozVjeTZRi8ysJr63D1oHGbewga7WYxBtljZWMJJlS7Q5Tfzi%2BR1hiz8EioAAPR9iJFdm4TlRz6Ase5Y%2BOMv9qjNqsxGpbYXcdRBRDolzNAt8EFavJf6PuS3D72HNYXcUDxijbMwcIaBlJ7uzWcEMrbKZMTm4t3kcY67762DsqvNrRviFQsgzhd0yxNZxpkH1%2Bqi6mxP3qVzfUQwRpxNzhyzhjoj9xh9Dw8vJmvpxYapxiFEkwlQlYeX5jhgfyzZ%2FZhX3vHbQTkIytti2yXQDwgQi%2BbITJdi%2FfV7sUMxlAU%2FKGzLfeS8eAN74fekKBysqZ9hs%2BBWNcqzXTphobKYsfIXKr4Atzsjw9Pmkx5JepDY7VEfffIAzgRySprQRy1Cf0M24UzR1KARZ0js3hhxAv8OTRSBPqQ3TqJHlQ9Fyf9L3%2BqkQ8M8IGYRyMiMM3f%2BNMGOqUBNUoZvz9nRaljRyQEMMqdFzOh9G0JJfj6da0Aj9HXgqvK5sjVM2SfJmFmeGq3PCvrSLEUJQ2Zc8UZG%2BR%2FnxLpeTRHIqQGIu6%2BvIlFEy4HxcMPz%2FtDQdxIbiKoeGeKGdZzLTB5plZUlK09HnHu3qFw5DqyhqOhC3Yxen%2B5piWNdyXn557ih5G2nWucBVIbpwFIdNHx%2BTfBqgXk7t0Ef8mOlHuZPuIj&X-Amz-Signature=3157956fd60215b508ab7ebee355e1903d5a1fd06d018adcf92d881a3efc9875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
