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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6P7CYW5%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T140549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BOMZrwO6FHc4R3WRk6W4Nr8XbQYX6ltiahW6yK4a1HAiBcv6j4iibUJG%2F68O18f0hGUp4fNRPwoF1ElyGsawKtfyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2F3E%2BdK%2F3Fb7MoVuKtwDlWHZEmv52uu3cJu1eICik%2BR2t90gWpDh%2BwKIbIKH1CqbmZhzYkRf9uSwImIsDm4N6oq0mm8LJLGHUWvKWRFbw4DMWADUiPmZiXDk46T7y0ZHoXLs%2BwCmvST28RbXAJsKfgyDGVXP31Ui1cs6KeesAE4ec9aAE5wOGxT14ngJBg4stxBj56HmPKuSOGeGEyr2QEWqYsGI5j8vYCMWDfRAxzKrde%2BjPyi0GA%2BTt5NyFMjsNSDGJXtNpJ5ZS%2FCQgKwT8Q91e9KAf%2BqYM0UodxLuIk46L0dKDOH2H1qyav%2Fi8dejdjWYfLx81HzhcvsKvr44Odw219GDTrtkoXJfWpvY7vNI2Gd99B4eDea%2FEuhhWevYgQ%2BqjllzdBdlBCAO7ggjkEl0QkIlCiQS9RKFSp4ZwNmr9PuJ%2FLf2rlHBjDidN7VZr%2FAtBVDenzcEXI4tkUyqs9XozJsI7c0ogMb%2FUCdy5nFBo1Lo4jQ%2FMGyBEuxcnrxRxOiAlOYuRzjE%2Bn1YbXmfpOuBPfQAJYrPGMlAnU4f7GLr7TjetWUy9hG97um9y3xCYmzxbejxqazzfH9u7Ug5uv9%2F3vviP9tfabm8lOqnOkNjolhYjVFHINH1d8cx694FvPEdR%2FMjpP2aVosw9Zyt0wY6pgED%2BC%2Bh5F3GvhMcwtjJBq%2BtWiwi5E7R9h6atiAMlOw5%2BBHNerCPM98H6vmh8R12mpEBjRkeF9%2BoHJJuCURViulNlElbA1R2fnjPZB%2BG36Uc3RoRVF5YYJz%2FnMyb6cH4GleUOggQdB%2BgBBCAE5zR5ETcYi1z217fHA29qqn2A7Kwr%2FyIP6TplJbEB35S8maTOYA4Sp%2FAQWTdEAgEDH4zUyURdZjYnEoD&X-Amz-Signature=b13c7355fae787b0aea3a76210bd85d70f9538359a5149e544d40401dc1623b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
