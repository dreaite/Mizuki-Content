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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITH7AXL%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T202143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6GvNLJTY48mSncek6cVhp79E96YhOwJxl%2BidnQtvrfAiAMFxXMXJtjhWhjtehUNhmjzU73ybOygm9w23a4ujsEmyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9dj4T7b1oVau9qxYKtwDtyNoJTNMpPkcltn0O6G1aXcLF9wDRvUeHeo41CA9CNYWe2cTRcL301yiZru%2FPJP%2BIRYDJyFg0TspEoomz36jZCAoJIEkSGbUphwWupqIf%2FDN9HUPv8dJlhAN9NP8bIQ%2BHc2S9rv%2FJhikzYicrsPmPNBXe0VoCSFqp7rITudrQWxyEQJZmCwaq4P03xyezwp0wl3XFHThnRBLwShWDMWv9hTX1uuh8rPxUTMSTovhiXNrY9YqbjZhROM%2F1uvwFV1ahgVrsUBlFjeDEcmlbg%2BAcrQJDuWxi0iH2gtT6AY33XnsTbExES9fK0gUQHfwl8SAwi7FU28wLoSh92N%2BK2u3OTyid%2BS9JHViES4Ice0bdejlb5LOj8TFeZoRSfkTPf4twlty73yGzaz%2FNO5nK4kg0n%2FUwZ12Z10vZFJe%2B6U9xIYwTx5mDw7lVNZJlVUC%2BqsRqgqQQZ6c7Lqx8zsApltbUtkEqmh%2B0X%2B6dAVNyyw%2BHr9ctavHGPvWAS5G5IWfuDsJ6kPdNGL34G%2FJ9FyvzEyV7Je0awYjKtuLN%2Bx4gUdO2HkpoPcx0Osm%2FmAO2n1ooYiakuZ0CHeNUX4tg%2F1EScy4PpkLOHGSCQOD2F57UdVOZBsZQLRENqcd6J8ee%2BMwwMm60gY6pgH%2BeP6KzNWsosXwEcrsxDyG4kqeUNkMWdP9xGdEKPVPNn7qETorY4hxyU0w7sqESy8EY1kTDVpqu8zEvGIwbMYmbcLdO9wzFraXFK2j4u3WFjDGTPjVBjZVbTMvyk5quo6aZxsomufKuXSr3gBMAPp0iyxsiXLZA44Dk%2FEKoVUbz42gmk2IZwIzzKnZSsqX1TmPivXXMIFyq5eaROkvfUBjm%2B4kHMwq&X-Amz-Signature=2c2b5209457e26a713247980302b2d541a5c3d3af703e5d35ec8b45c8b0b7939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
