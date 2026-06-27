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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLYAOWML%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T120950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy8iCmQGDJh3ji2d9x67i6ZLreb7g%2BK0NLO46mQ%2FZ1XQIhAJUtmOv2jBKle1di3BHL8n%2F%2FE%2FraCl6vSgSp7TfoeiEHKv8DCHsQABoMNjM3NDIzMTgzODA1Igx8wtetXfUUKNJSAqUq3ANDaMj95DLKLZ5PLdsSMgfUoHxPsE9jAWQKi0B8ZfFZRQRABTpEuTHZJWfYZ0TK2q3KNUs5%2BBPb82%2F1M%2BuQS6aL7plwT9kCaq6ywFTv743MCkc1R%2B3%2BmdGgJVMlOr6KKoAgq%2F9iLy4jfBSWvTNzN5fUHvKHXdNdIiOveQ8ie8mZ4rHeQNBLEWoeKbOCWTpnenRKK%2FaOnDyycDLhAf3SfGJV9CcevgUNw4aeh%2BpS312%2BwJDSSCDB66Qxs6QsT47UZ6ZbrTUtmn9dFs%2FqJ8hnY%2B4tIKk0YSX7laevHLmrxWDsyxCLWMFlGMaWkIQOmhWs%2FQefEC6oCF9pYF3Ve0pby9V8NEUolRc286cDFdfO1CL%2BZerKGrb4uYubTkQZwDv3L8g9TsCuxpJZODI5fN7%2BeDDHidSkj5xJW3eaCXcLNRiRVyQznocsq4PKbmfnJVL1u2ReOj7MaLCuFQzA%2BzdDxAAfuDtyCk4ohkNkAsDUhWaHhRYfUvjOsKaPPAvKTxQTGwq8mv0sIg8Tnox%2BvNVQFaMlWBQHe7TwJRNwQvsMGfG7Iu5FJELVSLwRL6BGIfRPpCWpXEC%2BusfuTpuVWLneM%2FwncX8MIqBJJxmcAKKAYPpZIcEb6rG85wGfO4r1yTD2yP7RBjqkAdPdDN8U6G2XUerzevn84ZUD%2F2X%2FAxhso0Axqk7nQ%2FnAGaCmhujzRxdOUp4Cmv3KuKiIfMvNM6z1P%2BnSf09B7EHFo87WCtCgZrLL2lS%2BMtlBbvt6%2FqVKPT79SdSK7GuIW3EBoZ36kMcyk%2BLn7wP3BaZHTw%2BgMDCSLmzZ431jIE7ZNfp3Mt9FgpireG95YRltLClY%2BF6Y6bsShM7bJ1EZ7b1XNxjb&X-Amz-Signature=2bf193b62dd780f463179beb5042907b09dafba2c3094a12625810ab24e11a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
