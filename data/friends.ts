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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMQ6PUQ%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T071845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICl6XE2%2FdqEtynvsWxHKY4bKH0%2F3rdkIKIKZ6JxFYj0LAiB2LLw18sKe%2BM7vz61ZVkq4c6fI9yKyN69Q0zMl3TtZCyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6IKur8EwNlF4dZrDKtwDXpexVjQjrRDePE1xr1HjrPo4356bkZF79MOmKOU5oMjDjMJJfjG1B488guy9aIitsiJO5F0cYENllxSVd%2FBdR54ZE1znD5q2JbnI6yyY7sv9nivtoXHyZpHep9eVlaut6NClrMlFU8xnyDekCKznvR41LU2d%2BT67eRoViuSfNn3TgVK2joI1EiMiPS90ZaJlHkzMsV5mQHQF58nkMo6GBsC%2Bo3E0ElFj3G2OMmxgiXMPltQ5ObS6yqU%2BX3lLxpQKzbMs6qLl36NC1ua%2B43k75SM%2Fy0z7yAA1s0F3a2ckW8QTDceinrzlj7aURbuIt0bgpMjpwzCT173fcuAvK4qb6ww5Mg1UoNZSqRtKH%2BcT4zAXBmRgK1z%2B4Dh%2B0RpJ9zsaxH618qvbmah6yuIvLQSUSVSJzNUw8HpR1%2Fu2hlYcAtBdce9JX43Od1Ui99caDc3NnPKVS4FLksIXbhdedV9ADG1wc3Z9sE6idJJ8OstzXdaDHQRl1gKYGkrvy9bF2pUHukdqwarIL65P3gnKUnJDrD6exhk2N8hrBuHLXC3OIpUPSl9Qz4WPWMclt2aM%2F78jFevyyHXjzHbInYedMpWqCS0mGJ5Hrv1m4fzzjYCdE%2F%2F5p4alhW96Q6N99JYw0cOR0wY6pgG%2F45tJIrtUb9E9Zawp00gjBCNC6jvojyPwLo5IB1srsIBcdgKV0SyQpprQSCT7fBN13wkCzjm29k97owu%2BrpafQXvYvHN%2Buczoc72bzZyDWjjI0cKwYRLGfawrWI9saahYLCY8hWoe%2F0hAPCWSnhF2fjv9a%2FYj4V0SbIZZyzsVJc1G38SAXf7PXn%2B06C8Idi%2FWg%2BsSZjpAV3WjqnRGpPzzuxVPV2Oj&X-Amz-Signature=8c3dea72b790ead8989bcea71918c5e0d404286da41de309147fdd0c5e18c25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
