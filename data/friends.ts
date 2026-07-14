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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGMFHZ3%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T161629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDVK2OQ8Hh741yC69kKLOsVyV4AbFEOCe8k8gefVq%2BfcAiEA%2FLb96ELPVKXlBu8Q3yWW9%2BY7k%2FSF7SQAKfKqefBUp68q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGld0pd3FybWt91LUyrcA2FepjscZOgPrbjEcFypKzsOa2RdCwwlLWKA6jRx%2FkKqzhwQuP2EWICQE%2Fdox7kJnFnEWS5ohjcyvqUfjdJOd58VqBr6ArV81bjbnXpdb7ErcUXcOx8oVJqYYofD9mWQJu%2F4OERVgAvK3Ay13FnCSh0CL9EF200fOMWnpCuskQ9OA79FNE7W1SOdxDl%2FA2WEQBzHFZPnaJeiVrvrYP3I7jRWxqmMs%2ByXGR924BS3t2FYmEdN7CYgbDJNCT1MfZqek7RZEb0aBzo2BMYBBDXnR2l885VOhiHTND2S1d4klDumA54zpsEudplTXhuN6IELsQi6t5rOlKdijJL84LdgmuAKbIaw8SOgRKK3Jt2Hjj2aw8ItKTOk%2BQ1Y8Ter7KtEwNDLHf%2BpvZLB4tOs6uJQY3DqSjerKIyMEkjLn23XihFqtS8VBVtdlr7g2tg9z15UmZPCNeN8pUgBFo%2FRWiiIA63gt%2Bt6Y75b36Xnln0TbbxdijAj%2B7gNlPMLb%2F5UnMh8IXxLhTW4FBZ7qqtSEiHHcZDbiTrLXgmMuRjB8nFWdfgOus8fPjdGkgpYcUj95S9Sum1LS7QyZobzpZy6xkXWsQMFK6LbPGYDTnl3WHbKI93tJhwyrrl8cocfSYt0MMW12dIGOqUB%2BgdFIctYeh%2BwLgzpEZ%2FVbJyDIRnVLCK5Sxgs07DNSOY%2FFK6Bdliv2EcvUrjwr6tLxMmApoEoCrWEfu%2FXgfSJKZeR6a0CRNGtrg1qeq1txd4TqOibgfWsSg8PL3nK9TQy7PciqTMuBWNQgbpH5W7JEIsJh5QA%2BnKAfHqpcebMBC8gXLnOh%2FxUDobL%2BQcSO0xQfo8kozLzdJXn8V7EjRKLg4S8Bzge&X-Amz-Signature=74c4db8dca179f1edc8ba1353becfc2fc173b41b19801dd0a47a63280b965986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
