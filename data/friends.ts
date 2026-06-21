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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UJFQGE%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T155340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIA0HJr8Bu2K6NbVJvKUvbMHV0Edb2PAtzESJUXsO48CjAiEAmhgbmilla%2BULUBgJolrQUT49NDI%2B2r1HUvgNOzB0CAoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzlcLiPR3JdSP8Q4CrcA18WvWVXmf2jZT2TQvkT3OUNpCK5EZt7SxvCQyrSZrFsOeEHT7EDEJH9pRuCZeM3Oz8fQW9fte7IM%2BKnP38ai8EtbIyFT0JBRQBv%2F2MdLnzbgOTC2BsPCudrFEa9nYwSk5tcwV7%2FZYSZwYYoxjocwNY5rGFoZjXTTJsRQqKCCybuepr8vyWN0p70yV4YYGhGK%2Fsmop17pGdaHD4j9oj372xRBDg%2Ff3yOcjJ5mp7IHeNfPmRt0GivDZZiU%2BOiAicUvvpXW4lfZSvGqHQhGMesJr%2F4pM3OCFTmk8kZn3Ojd2XXm6XdxHknmETC9wmK9MBq36BVHg2rdWXj6xicrXlpIho2NS0WftvxfLsYNoUDoQuvr%2B%2B%2BX80oeZJ61%2FLnn33KUSn36GmhxVqCciBL7%2BAY%2FfscTdDTRFsm8Dl5XpGQEQtzvi0O01uQlnLnuLM%2Bvoj6svUS6nMr2nMgZLUw6j1WwvjwfQcyn5lZbSHU1wKx9%2BMzVdjNtEdEF12YktgKHFtMeznAX6QcBxA%2F2VSzbwBJ1rwf9k2lUKk%2BPydHUE7VE3RjRgDuwWzprSgeA2GqPYml9ZG7GgL%2FtKvHyXRFGS5Tc%2BpdtSBc3Pp480G4Vfj9xycJe36bxvtsYt%2F75dp9MNac39EGOqUB0iz5dzTgXGbF6VmsbO7g5%2ByrRh8UMVrqtJhJfTv2T75Un4%2FUbI9Mbxi9EabfSrJLTKrK4FrHzB92wkVXp1YoHfVMRaTxzgm6pYf%2BfHG%2Bjcrf%2Fc5pZuAL5XlOe5ZBbGXZGNXF8QJRXMDARRjSkBtKiUYzyeR9RlqAF0ozyHob2ItndiIJ7UfTJfLUQ%2BCa7VaxhCJVy0oNlRSsN4usGk8tCb3yDb6m&X-Amz-Signature=7ac655bc0d1017629bb4736c1a6baaf3e4ea402976803b3cfcfb80a223daebf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
