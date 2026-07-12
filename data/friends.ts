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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z675FWVE%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T205149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDpaxjkS04SDTcq9Xn%2BrPQISZkt9t159fVgFHkKytZ%2FHAIhAK0E3J52gBw7fKJH7zWo7YlHJDC8deZcq1nNAFYlOFQXKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7zux9sT%2F%2FtnJwobsq3AMuZXvB0CypUlHHW3Vy6MDWO%2BgUDjPY6PuKKSBPMGp5dxJA7vqgVq7H7iPJRnrjTAZFhLfzJ5ADKT0fSXDhPz2Xk1WPXj9W8YILV6qm4yYlwf1gZOuGLqMN6NddVTri8bDLA4toHx02Z0SHmohLx03jC8DoKkIqN3%2BtK4RJKRQ%2FO75Vls%2BCWEj34XXTKVk6myaRib0h5ov5ZlKdIF28Z6K6QZbuSqIyTvAqcfpleuQ4inKMP1JJSUoG56t%2FnXKVwTc1MHcDbzHqTB9LmdqH5R1UTGTg2zebX%2FFGMH5gW7Nv9oHpkWql7W5kdRFBpVVw0jv1hSv%2FvGp64Cq44%2B131ojqrpp2fDdH5aETsY2acmNAhIA%2BKv3GzMBcDT%2FOBF548%2B0JqfS7BeWXSs%2FeQSOh9dLHIeRKAT44uYQPR1fa9fjPfiBqsN3R%2Fmy1ESIx67JzlUR%2BYBWBwU9f0ZXCzywK9pBjw8WhFYKcXLudNir2%2Fp3A2a1enSV33qX0zsmqrQYdQ%2F8FyGX1db6o8GUdt29%2BquJwT9XMqCq0RvN9dZtubv0lkOgxGXHGJ41gqNwsev3WOx77td9h7OgiSdod2VjC5kf7RAK%2FnaGnluRI1pSEWaiDhhtVEr6AAJpAQadUkDCE88%2FSBjqkAffCcIff%2FdOh%2BATjVeaBBQVcWIrO6u22oSPKNe11BXIwLVFXyTjVgipuS1qJZ8QLPjW9QvHnbKAPvcsRMMlfllyH%2BcOXoQ6VkFyVJfd2Yk1jvT4xdjHUV%2F017%2Fmuqt09y9tc4fvlPeZV2xd6Ay%2BoZ85LusSuOSuG75wf2fNrfMtuSOBERMP4ARkh2QDIh4gpNIpZFNWJGb%2B1EmkIIo5gFqjeB3%2Bg&X-Amz-Signature=2725ff4b648216045a2b91e0b171760731eb3c3515c83e6be9e09515e36c18ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
