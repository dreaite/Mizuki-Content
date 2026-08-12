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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NH3R725%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T224200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCNsc6xjMp%2FkXWw2LdDqw8ooPeDLa%2FeQWIe0HNywFRDxQIhANeOTi25PzJjdh%2FzX3mDMY%2BnGHYHmmQZetjj08XNCvZeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxNrtEM795hAgoUiEq3APX7kZvujKWhIfi3I1bHvVXjuMtbxznV52YdfO7vFYpJaXY6ZCmH7RT%2FxlVi7wfSEFmIV0rjUzyTb4EeddfQQvOQ2fqA5cVNmiIAfvLhh4e7obOCvsU7tFrY642KWSjKYwHgXdbeAcLZbJi5E7E3iaW%2F90EtNTNxyixw9oaqQJvLe9EYz6hQS4ziGOjbb7ghLC5g0RaFJLX4Wn8KIgdVHD0S3e93HkV%2BOFrDErPbQgokV%2FlKiRT2kwwZCVq5CYTCbdSqjw%2B3T9f3yTfToeVYsU9YF22F4JrhbvlinrZvj40KEOyA6AqRaxdJcTXGPoM52ZsQk0tLn7ee2D8dwu%2B3BKO7IrR279FHcqr4cpUT8j8WZ%2FgjwmymMmrBjy2%2BxLh9a6XI7OaA8IHBttqZRJiLGOxGWp5Hs7XFD5hkuhVm%2FlZ59G6B8gdSp10pTTNb6ZwwhsxTDfhcaO5f%2BfDeduJ%2FkzYWzcN%2Fg4ftue5RE9dZZkT7SQqygVABCR%2F6RX7woHTdjDnecI8geVX2OJ%2B%2B8aW0c9DGyPmQQebBFshGi5kGt6Cbk1qS1AYj74c05FbZ8nJqbbpqtp%2BuOFFAc8MOOygxTW1W8cE69Jd7KlG5eC65CQh%2FOm9va7nnV3s0RfuKDC4y%2FPTBjqkAboslZoXKB5rLDN7wUukyZZZIf0OIWwOOzfucYAzR4Exw9CtClMUipSAPUEzRXXNow0odyxJNJa%2BjFe3LONOUAcACyZzUus6Penh5B4DuQPHMZ9hZW5ilhNx2EXY6Ru2VfzRl6TA8qtZc1tY3013HLWZy1rxbi0Mt5uL%2FteqSpgI%2FwBQC0oGcokAcR62TPpq078hvu%2FOPqAO547Lf43E4eqvDk19&X-Amz-Signature=09c41c91fe5053a22677227c7a283bc4b0b88862d1319ffa57beb1481cf4083d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
