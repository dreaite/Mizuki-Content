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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2U2CUGA%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqvGpReTa29Gf0IQGqhgsO7F9Bd6BbfDmgcO3jgdsSiwIhAJKtf1tu%2BfCQ3xG0zM4Fak1Q6FDz1di97jgBYJxmwpARKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKwjowQL9aGdH5JHUq3AN%2BEgZelyaOXwF%2B%2Bc1LzG69dXJNui7ZkTLTzpZYZiTuMLJyvNVeBCqFs9TlbUweKAUDVloML%2FYm3AtuBdSWdbLQuNObWADIyvHA1ns3PBxOfWxKTYCmir2JSCtDlNr5HXim1T%2FfGO1N%2FXf%2B1u%2Fj%2FIPpJ8pDrPWthVVUL%2Bcf%2FHAUB0Fsb3WOh3qwWk6GasJ%2BR%2Fx74p9rXHtLTuT6py7b%2BLTkAJhZvcbqM0olco9YTvTsH4m%2B0pBCRs%2BL5QnKVIbMrE1slRldRVLEZua5E0ADuzk2x22AgYSkn7YwkH%2FvWv1xXYcsqNUKBFsrVeEH%2B9JvcovE0JfsUNVVIcPNpu7iKQVQJZRmy7vw4iumZfaPQ%2BvXpjhg3D4XEx9EH6LvHziY8pyTDMckjdehrcXQP8v7214WfFhmiyMR5RoKXSq5rf%2Fowzb302DfsOtcaauQstDywtWGyIE9cJZbcGu63omV1wIqo25M%2FxXaYSF8EKV1gzT2qf%2FhZg6ZhEjd7u%2F3KD9L2U%2BAZki25J6vrr4Z0nNmMIpuNfkSAUEUzkBgysNk1gXZpU%2BHQs6KevvC5teYBGlJNCPhXca1iOWdJUVJ8Iw%2BbWO1DBS61ihMkWBZAeIumwLxWPbSXj0GNMI813dTMTC1tubTBjqkAXPiqwfNBxTgFVy5h%2FmHIZ6gmS%2BE4Jqj3eCj3K6LWO%2FPZ1MLOipUqP9k%2BECaWTYhun42iYEgDETRGxPyvySYFm6MMIfTvQ%2B2lWO8zg%2B6JcjfQmBHJD%2FORw6NGhMbitJcQyspYUOGF9ZOv4mGdhR7N1ouQjqUyr2F%2BrYZevNcH156Qy0SMzBlyWhtsVicmjrGvdGdAwsvifCE%2BXXg4zIwugRUBT4t&X-Amz-Signature=eb2424b0791ec10668bd60e2bdc1070a03e995465e47a64917a3aea1b6506dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
