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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAZGCKC%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T060411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAjvXI2HT534XGRtOH6jQQABPa31HlcVDXXQbDTsTINgAiEA2dXY%2B7RqBAziG%2FT0QWblkUqoKN4q7d2fA7cBEXtw1nMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5ts0%2BWqc1E6UCrRSrcAyCZx7p1eH4oG%2FY9OfdLE1nTo9IQFz6iu5KbEBqnKT3t7hKK6xPDP4YBIeD4Dzxy6kWPjxY7S%2Brci2GjDYMGLIYSlfthruwp4ugWxfLhHgD3rmUrEc%2Fqbl8yn1KoD3LBrYDh4DjfyvGBPmyW8jIpA%2Bqgw8j%2BPknfUnei1n4Q3cm4FEYQ9jK2CKDoemMUizJaXIt3owtmwq3NsTlVq2PQSEHUiCKRoUbwPQVdFLceQKV6M0pjTtCS3F8ZqGO%2BI5oU2lMlDs9Jd6mI%2Brxo91wT%2F4dczelfrYrin5KBpZJ1yWa2B2PUQsv6s4dDKhly7D1rcgK3TrRN6ra%2FAyk%2F%2F5VUITve2DPMWziKBTCAQXVBnf64DAsuR6WKmBXNdWEVAEKv11v4SszyhSemoK6ZjWqBo3SDto017%2B6qU6y9m9A1LPT6Sg7UVOtk0o4CZuElRPndSExPaKK42jwvXQXyL8vYof8qRsFnxODyhnSI7V2wcAe5Ly2P2OKz6S19cKqPWl8t3xVimZVdSTy8jPA0W9A84tHcS09i94jYNBQ%2FRQhEqfyNqqY1aWzdP%2B5UXk8eSYXPFVZn%2FSA1e21d8C3Z9ob0lcoFWnzdfOxA%2Fis6VHO1uTmGF8KC8TUPo4tqXAoUMJSqu9MGOqUBCS7dD932yC291K9y2%2FAQ96in5CBSbaqJ70NH0zL2FJFYHO%2FbbUD2PBD0SbJoJuKsQhFlhVR9ttbXXIlzJ%2FeqxIlJ5WTrNJtIxBTptX%2F0BlnFOQfiPWhXTT9xaG1IKrl3Z3%2BakvqYegAfHOoSCnd4QcX0R7Nu%2BUHFFaaeA%2BXu9VKV8485ZIYSgFPo8tsBQu7Tn9WZPhEa8WDmsLGvmpvaL5CHO6YQ&X-Amz-Signature=7d013264466affb3fb44b4dacdc6e943d0aa103844caaf39365a18d325497373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
