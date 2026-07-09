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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM5QLYJ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T082859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5ujPGxHsfGgFACzXT%2B0q5fmAVCkgi3wjlFojnXdr9fAiBHQzdPFqSkbhVtDA0EP9xHK3qdClEjsUqyrG5vLNVYJSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwKu9gAZ182PRPrrKtwDfKWpyaghJheCVjtjHXinu8e17r6Lu%2BgkfxOzQUW6TGTjdMg5rPjBlb%2BU5LVWPNGW9PrKUXuEPdsaAuUDfdNPjkTXoSWEgw2cs2zr%2FwhFw3egTnKLFqcW%2F%2FMUFIPPAyFP1BrkbghZhitD8%2BPAf8FODPklvzMF6sD3HkKxWoGb7o13PTJAid4tLmB1HNh8HGszTwXvspyWkv5wF9DQvkIRN7BSO%2B1U6d3WNXzjSLX7BSRHn25Xkf3froVMnqUuIirvsfPppec5HiCppB%2FiLmaQ1xGRve%2BqwR%2BnGOzTCrw9CX%2BRQXYUcULNcOIV0B%2BH%2BaiPS9vifOmIvVNd2wlYEwys0ob8WQZK5bnQ6R%2F4Gl1flQJenbNnzE2ukRkbX78UMX9ImvGL2GqZEu1pA8XW7xpQSjpy0SoexXOZh4SBlnn05Bv7yUVJ3NsNTBmI2s%2F9g2%2FAS4dS%2BmiPzXbqZJLT%2FqmE1MhLHXWAsb%2FN45J%2FG1FafT3hCa%2B9785ZLMbFJPqPrAIcZfIkk77hd1mYHREb4Y5l2tSYyZ5DbMfaCwR19RHn3dG7%2BYfnvC4P7s5SllI15%2FlwfW2IPUn3wyM3elXG1zRrD4aP55uCIP6OO0AOOmsCWhZUw15WG2dx2CbpPIEw1aG90gY6pgHKhSQJPTisbMCRtA6%2BTddV6MorYhV4Kn3eeEvq%2BbavjLyAXxaOw6nrBDD2Kbz8HewXg%2B93HqBPWoe3CAYZ4IR8k0ZrPJvwE24bmLnVbcFZD6WXoe1O8f9NJNZAIyzAAJ2ZfPunIaWVyEYhOtBpG8S%2Fte087gS90CeTJI0KAW4lH2VVCRV67cnGNyG5RwyHf7hpnzagvsfgEbNfcNzCVVihi2kgoApL&X-Amz-Signature=2ffb8d4ae35d046d04de68a9393880ad26342551e724538f24ec5969e139bf7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
