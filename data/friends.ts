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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IEE4V6Y%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T000513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDnXxcsUKvW5r7b1IIfR%2BOx%2FKfL6Kz%2BNXSa5pYlVk0l2AIgDIF7QmsLz%2FLm2m258jZgBlrSM0BtG08j5nwImwHLgL0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAKFbp6fkTA2sEgvDSrcA5gitmsHccT2D8A6CKkh6uk6LA%2BPEEmhw5y8%2BihCHE15FyyPJE5YScUkFJK3UwQfZ2U7qN%2BuqyTa%2F4O7wXgcPZ6TF3jKD4XRwcpYfFokaiCU9ABFWeNbwbhVmIaopLmPmLS99Bs3QOWT1apEoke%2FATIb9R7p7%2FkUP3%2FgQXJ%2F%2BYt6OPHG8ZdawqF3CDiR5WA9lxL0wEEQt%2BGn5MD5CERiVEPKjmKPD3aYMgdFF4HIIZbM8AjrlIzLyCzMHXQztAN9RFaE8HwXgrnxhMI9yqfsay3Vrtku44GNhZVxd3kYED4zljezzRUeeLC3hhqkBJ%2FN3aKQnpUWx55sBr9xygAzJUESLrXSyl5E9X6P2kyc709cs375t%2FCbKNnmGa0q5ONDvT24nFiTFJyUvjjOlsXWPjt%2BkGXTOCoexJiX70VtW8E7LiUgyyjwEaOfzihyEO8apefmaZ%2BvRUSeJop47By7dCCSTVLlZ5UH7hnOt%2Bn3Tgev4BUJCOhb8oz41%2FeCFmZtTTwqP5PHW7DJQcGu4ocfDBwXpgDHZOJt8FuD56lExRMjkoVCK3PYkcSZLcrxPJbOEpYNqv%2Bl1%2Box8GI7tgpMGsl5g%2BTld4Kq0oHTHzs%2BlVCnshabaKeCfEraYR27MI3mj9MGOqUBCCIGX%2BhbkGI8TNP67Q0bq3WhnFKyQhXQ0oZSrW6yLe2xKLqxKwmylF9dOdUOH7e7JVqsnjunAFJ7awgVoH1UUNBWF8x2FQf29JklxIUB%2FWeQkIxWvIgApqmQwcQUUGyg4tutw0RSHkSRvRsLuCrj22VjsZuWB6kT4CmrU0pgH9zbLrxfWYFW9diVDVKJjpbBB5WwNA3oMYLCVtAE%2B8TZg%2BZX5VTD&X-Amz-Signature=e824a1269da2565a99427a7ee93792a1558031e03ec7c97db6491b2f436aef7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
