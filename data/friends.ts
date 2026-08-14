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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2R72K5%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T232248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCGG%2BXZC5QrxCo9lxucNIj5kOG%2BvufQJUKw6PeCitucEAIgfhSO5237QqQl3Q0%2FdT17Dj433AWz2FB%2BRF6TNy1jGjoq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDPDwEZDiHaPSUqeubSrcA9BcSjFQkZJakvqRzfC%2Bjimn43FvTVwP8ky8rF7iu6NUk%2BG%2BXCsTwCf%2Ft9yGJL%2BJaVZxiiZQOFc%2FWPniaZj16oLfKQHLG4OjZoiZHDZvulkPWDT4lTbmr%2BULQnGe7FsYAs99lk6OMt2mDPAO7Ut3YLpvMZ3a5XWVKe%2BME7FcU%2Ftsv7x%2B7NmWAPKM27LvIKxXFdzFJD0nzGPiMNaQT30C75ARFDVTJVNizqcwHPxACfEAnEUeU0%2FPmqUpeMhU1Ki32eqOJJHvApZmA%2BtIM6clTE904t7F2QQaHjuGAGZtQNxScvI3AC1StREc8ijSjnQa8%2FYa4wH44fwmx1e45OCLPFI976xFq9cAkMJ4m6PxXrcw%2FybB3V7QXH9aQs6YXVlCa97JBYJq91pBs7AnjicBIUp5I9%2BHpERV26Gdo%2F6%2F01DoYHxL7BFc6aOZEbUeZWKlCZQ3Aul3kYdIVkG%2FIancKCRYtI0WX1r3U01j21iVkqaFzM4vlj83g%2Fj2YQg6wbUBUDX6xco3srdmbFMH2FExVp27%2F%2Bj1JReljAqt5E5o7lov1WeAu5T4JivCPQ4Bxd7f05Gw%2FINu5T%2BpRb%2BXpOYDU719wtRLeJa2ooyWfblprGimKPWjGD1FAXfw12l0MIzD%2FtMGOqUBBuT6xrFSXUJKFW63ffb6DOhnjDUs3srD4IW7669Z6f7nshaUqPPhbt6m9MN70w75BAnNvP6ZwV9a4VR4cWpCStt%2F2SMW1xLCIK2Vs0%2BlomhxqrXWE2JmWwpRScUSKQsTH5lVePxjqZKfauZ5DVfx5AttDciWeYqN4EkaQzI%2BaXAy0bOZ%2F7WhPRN0cw5j44yxzgDL8UJytXV4DxyXbUm7OoKxvqPN&X-Amz-Signature=0c1b8e78413299e6cf684eb29e69e5f90c839d148dfa5009f317c1802d0f6bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
