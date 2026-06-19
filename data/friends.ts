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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XXKJEE%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T220508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJn5jl0AdOGaV7LGKMpWtIwW2AdhNcGw6L0zMhm8HpvAiEAj%2Bbm%2FuNt7OFU4gWPCN66XzRbyXnYPEQ%2BuRUYax%2FUvRYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbaD9k6dNgSNdN3DCrcAxUoDKryiOxEaKUE2MbWMzFubIn0WLbljuGGsqFN8XTWwTU2HUXs7IeH5NtMugFMWdVBRSOQti2yYDEl3MbARsqYuik1OX7wHv3tGXJfpuBVn7g3V65e4jgnJmxnBmq9yDkRHsCOoY4SWAp8jViuF%2BYcCXELm6VmQsE%2Bgf4DuQJzoBbnRNGN2KRqhYQFaLYWtgnEcy5aJt2zGY0GzvNo8S5FTMscbHY6Axsv7OpxFjdIWBNrOmAvkXhPzCAkNDYcTvsGLi48zCHsDsAGjm28MGmjBvaU%2FznO0PRo64tuG%2BZncP%2B1m6di0FEB3NwALkyF74ZCchvQ5tnZcy8F%2BtUhznSbglzwKI3UCCJCHJ6JNwvugWa7Snzhrq%2F8%2B%2BYf%2BlmV7xffXyG23aiphdwsjkSX9xI9C7rPmAiBF4Arm%2F%2BASxrDnPHnC43utcLP5go669beD89z6BrRWEpa1hBtRR8AXPf8xxX0YJ0oUupJTTP0XaTGbyk67WJv0dzDdQ9%2F2eANhKl%2Fb7c3L0%2BzJi85Pl5BTdrV8DdEz5iAYAdHmMqmwcCaliBIvd3CSwbbCftY5yoWtglHX6yX%2FBCv4GLrW046Tu7XbBBIlIL7s6hGsg5nd%2BSJl4MGzbS2WD17STUhMK3f1tEGOqUBYE0Qo1ejmWhDdfIP3ltQ0BJr3LXM508wZgwAmS4pyom4gxJIRNOrRYpKbm5rbKE%2B6OW3sEIt%2FnXiezOZbBMwqetTfaVREeJ52xHbkryK990BW2S8VF7X3WPX2Jt0OWkAyl%2F3z5qZqmzt%2B6KTpUCtA7AFKcpGtotTF9gB6YpBez5rfky9PqBTiARcANNZcgHHDVHMo1ih7afmxoZFRJokIszmQY5h&X-Amz-Signature=80383f340ce123c6413309a0a2668920a264b86233d0940497e43ff15325dc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
