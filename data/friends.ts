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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAREUP7Y%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T175649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDxINXfJWB2kT%2FnyFEvp2TyMNgsvsmrirgTv8y0R9CCvAIhAISY8fiSoshULW5XgRPWW8td82citGufk9dt1YUR6YQIKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BAHWg04uS%2F5bAQOQq3AN2U2tENZeLcXwRVHWvsyjJKxhIng59gBrGGa1P4jKIZZ6m7TS2iAW2NhHJt0LmEyX3EpgxNdupvYQ8Z2%2BWqZOKUXkM2ng45Iw71n4w6%2FDg0Tqi4NcWJNAesA8Ggi8WmY29mDuse33HObKwh912nGI3qUagHxhnVCFzrRw3B7l3LCozB843%2Bkxzh5wXFjXilzA6QNp2V%2FfSNto%2FeSuCYfB%2Fz7GuVQMS18j14jnYTwtg4HwzO9oVvg20t0xzG20wigTZMDy7WhillzgyoANnS1Hc0UejgSbzyZ17GwFIbYpWr6EtQSffC5I9BAgmp1IHAAusUx2uS2KeOZGC1bULUPp9rhGMTrzry5Vb8eLfLGVTVm6Q97MrRqXddJXP6ebyhZAJU8D9nLZev1IrGXmnQV3UK8llj%2BEC2sbr7MjZYQbSUhYRlV34g9iK5mdQ5KFvWoOLS7bfzJ1iSf8MVQUUuVGQ2H3lQodHonH9tY7FOSR6gPSKhESOV5R55%2FTzYaoi7FRguFimk9iznqqnAalkQhX6VuOQBwCal8FFpX86GdbYN19KLguAdq2jsRf7RuwVCtSV2cvLde9mrCMGSJZG7onK3MKQQzoj7XW%2FLTA4D%2B%2BSvXsNZhQCSZDawr53LDDc1o%2FSBjqkARNcdu602jz6aUtwLme3u3SvV%2FBxQVDKxhSzUCD7kAU7sUdv3OlX2cMQSqfPPuN5DeNYLdl%2BFdn9rGfZmqvnHobaEZrF2p8R0JiVQ0Namb0yH3hEl1H%2BVqcVel3J0lGHiK%2B8OFcRppsQiaa1Bxh6pMXrv5VuvIyjORohN5UCXqvJrtvk0bvfcYstFd0sIov90uTt6y8FbXFZzWHYh0M8pJWM2BHg&X-Amz-Signature=d05c64a7010848ec9bf5618314d5c4da9de7a60cfcc303ea490de877818e3793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
