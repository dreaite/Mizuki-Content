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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K6IFTUA%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDftrcejEoEP4NIuFs26CSMEDfI7pfYGjRxALGEEHiBgwIgIuUeG0F0XCUh4z2qp9Rr1dV8E6smjpzSOCjdd%2FKX7fIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLux%2Bxe9yejYclXlCrcA4K2URTQf6hE6XXI%2B0Se6Y6z6B%2Bs9GBqLDftKDKSHeZzqV1jNvPyxMb0CbTKu%2BtFGR6Z0EsCJK2EXD4NpXsftR42JYZM5XaFqGp2BD8B9f%2FEt19itHzfNRjPeDl6oGjbgkoY3veEIDEnCPAO%2B3kzF%2FmwSvKlC7yDenZnqqs1YCAZZLmaLRbTDcL5syKFw28JmP5DMUtCOmS6xlJC55yylHpRNokWQJeRMpwLLvZDB3P4zmFEf7e1X18VQ0okJyfddiHIo6QyoR9sEQTZwnF4ajMYYwEk5Hv2boQTNeasyjjTp76Wy%2FgW%2FDc3UNvSO63dJpJRaHoa1tDLZCJcv5uZd8aoRaHKeXN9v3rUhIqYZLcKAMjRV9TTCJjX%2B2v6WU%2FBvael9K1pAhOhivQ%2FxwoZUmqdYxrwykRWsfwCKX2dREgdaMhja3lJscRaekGF6PnOJuPWK0GHUQ7kVQjlqyrOf9Km4KDUzDOHKFoLLXKTxJjBa2LJQH94aMRc8KelEo%2FXagQ8lI7FwXf85CPNTbo6bAfVYlBeaIS1epsaDMhZ8Y9lK4GrLxr7MMWM0w7vQZx9861e7Nh3mgQH7PNJyjcdA9CHrW1k7vRWRddb%2FjjTHjzI5PDMfCWEG5PGuiEaMNjN09EGOqUBplMEo4Wtv8qQtoayQVjqac7mHMCa7GSaZ0c8mU4XP%2FYSmO%2FQvr7xEe7TKBLar8hvhxHZC4NlMPFEKhHzLxDUNpPOxx6KdQIKLy79SJYJuNw1lzG03fl9yaWqP0T4PnU6JpdH2nGR1jFwUX9yIYEjmkLcB%2FxphGmoXsLafRboDm3ogiXSYMWmjEEp%2FTpH7HdqmVqyqWwAK2c%2BE6l1qlFjJbCYxRgV&X-Amz-Signature=6bc82058c3fd58404ca4bb931442065142fd0ad2eed098d9fe4f4060eae5c842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
