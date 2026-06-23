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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSE4GEZ%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T155010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCvaTgkAIuogeIDuSFoz2Z93%2BGj7AZwJwvB1VA5hca2VgIhAJzv%2BhrKn6ecLiH%2BzA0OPNxbHad9QrrHVAGmEsTS4TsgKv8DCCEQABoMNjM3NDIzMTgzODA1IgyEJf4Q%2FiouurpXOgkq3ANtvBVJsPx48L0TXuuBFnIkVbhtR6jufgyk6zTAvy283vPSNLV3pzG9S8ZT9iQzwDseAlgXdspH7hveVi8MxAIFZLIJbGSvHA1VuC%2BG4%2BgiSuiVl3OYh%2FN5P43H8kpE2PmZnQuUWzGW%2BdcMBqp1g92kG64AA4BKZo1enONgC6SgDV3F9YPRdfj1wPGj24mUFGU2O%2FgtIHyd8nWcX5q7OtdrKazItsEfygDjGNbCwcIrjulI7iNBwf7sySF4D6tkwBTY0Whf53bYiWyfrT7FboOHBoH6xU48uTDL%2BFuyxptUnK4XnYZLySFOihXI0AOq3skk1wjb%2By0214FiKPqo7QrixMeZCN0ATAP6IDXlQbGm%2Br0v4AolYAqJiH1P9lYVk9bm%2FVEw471jMwcQeFg1FPWUqmqHTdoUqThxsxrQ5DC7Wms0l%2BwfrQ5Abnf2d9FhVWeI3wetX8K1EHV6TtfdsIDQknAgGDI2foDEjWdK5jrnDO6BiuGjzG6m5rB3AJQ5IrJibBU5zpfyT3uBSglVzypCaZ1eVUN%2FV0lVD9AWFpluzRiAUwJQ%2BNP4ylZgIu7BMWwYh7fFzebTnn5hO4vZXQFOpSgXpYpvG8MXzihZvxKEPhztZ14k7POFTQbl0zCN0erRBjqkATh0nwjt6r6qciTtDyF6qQGmH1wEcm%2B2aN%2BeklXKZ6aoYv%2FZlbyHr0KDFmHo1QWU8bM0Nti8cB1x8OMDNkoIk6gV6ZeNkJX1OX2sK7MevoREHIAqin69It6dyJhuqfwPHEfJIhj%2FBDVHnmTcWaH8WWDOK7xGR5bpIuCvT7RAfUu5KWveLDhDUA27iEvh%2FWYWLcThJ9oUDCd9MnJNOxJr5TR7m19G&X-Amz-Signature=1ed71d142d38cdd872fe3aa5ccef5bfb08f3a5acf2efc92048df6dfb54bb2124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
