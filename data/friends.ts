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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RIMUH2%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T180255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCiNgST2pTD02tb%2Bb9Ql3VPnGxBPFjU3ZTvM0oS0AVr3wIgP9SdfbmacqUmHNeM2IU%2F7YbmuQA0ZegkpQ2XKDGT9p0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPSEodl%2FaOxvqH1paCrcA%2F49ag9JMlbRL%2BLrxH3e1DhdkyhkJPeyPGdTKpJUvQ%2FyXKnJgug0jWZTQmHnrh2p1G%2F6oTmNDq8oSvuITOlOEBNcT3PZ0z55DY4zg3IM6sjD4WsdnMn%2FlvlRD5jdd3WprI0kVtF0ynA63FXDBAHpBAAe5kvbvUnwUJ94ZIbtcB0qxNoHxgTwp7sIutKhWMnLQ2IhtiMsSbVNO8pqcvsnLoTGLAW0SEiMnYx9rkOPkN2t2n81CU0R%2BhyB4O0HfFyuNqwHXrkQpspEaNNG6BmeHBqE5tCtNh%2FeKuxhhXYtmsf4HfPhCOzekZ%2FFeTyAEeMWmkqeYav6LCfOPV7pk%2FSiB08wt6uoR0P%2B3uxC8zF9c5iwpIXrnUBnBVQkhA8x87rKDGemRohQ3lvrv2f1us7ANBhHUFRpZZxlxQwY913ETSiSuw5XIYlBw5v8t6lnPTCdCj5vFy1Cl5rzv%2BMVjChOzOrxqyls49gf%2BI54ZTHLd46S1fGCaSf9L4muVmXwPLawiK7sVfCuEIvBrbjxky7bPIx9paDIEbQKw5BgaD8opai%2BlrAXYuDUCUaun%2BZ7r6u%2Fhki6IAJjOWXdNJenWXl0kf3iph4eNc3WUBnoe9C%2Frslo7RVorRxPsBIoabHuMOnwk9MGOqUBnPq2%2FyfJzXJ%2Bj%2Fhf2r1Ev7uVLke5VJZHYlDpT%2B0naCNcXox0WJ4mIqHaBGGdIuOv4lPN9%2F6QSQi1C6u%2FFnIlac%2BZcleVyA0FKT1yTG87YbLgPHvA2PExKJmmkQ%2F9uS8%2FMOOTwvbnfMGM%2Bpo5hzA%2Fq%2FAgfXiE%2BkfqSPlqmkzlCZAMeXQTPu%2FB7qC4x9GfVrjdsaEvZUD34%2BM%2FWXpGn8vUdeyiOPKh&X-Amz-Signature=fc1612f04ddb294af5ca9a923007498a56f7b5d950b0e54da59868e63f3ebc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
