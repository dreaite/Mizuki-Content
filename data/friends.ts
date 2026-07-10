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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY66HXU2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T082331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCXHdUHiLbGXaycnZ3W1oghFfyW5AxDQFYnLXzBFdH6wIhAKkbIniu3p7qLnvdeN9N%2BlHntn00dDdjK8wZdZ8Y79H%2FKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyewenRcTZVqpJrq6sq3AN9PwLh4VSzj8V6Mve%2Fk3BlVBYVeLPxJXAsoGMBsvZEuRENFXB2o1CEgVPdQrLSJ591UcgTXYdJN8eOUGKkntX6USVEFavgM958AA0lnDK6FXcZKl7zI4SfhRjRff09WpIxICANbKaOYpSxeDcKlKGaBPcNaPsvvj7qW9S9mYtOCmCY0LweMGN1kblRvIyR8yrKVtCUBXl7RqDdbi2f%2FhRnQPmBiitiMjMg8403KnDLmh6Irte3I2nVC%2BAAdaHKEh%2FtpCSHzd9ki1FbD82bQEaXSbAPv%2BUF88zHlWgJmANUAzquuVxUFZxTD76tJ9sFLmwj4q0S4KXehDj%2B%2BycP%2FrO%2F%2FO7%2BC9MPFWXY%2FewndD0OW1aASZZqcfRNQgqrChIgwqPZuOD%2Fo7SMUbhlPvD24a7V1hbB05h6Op%2BUa7IKGo6ro1%2BOMJ0XljhQdPTuha%2FioPQKasfWqsH%2BxTazvgfOlmKndlvc4mxGBCYbvvbDXakDC2Zxm5BIw7xCu6PQ4scKQYL%2Bg%2BnEMEV3CW1D1qs%2FGCTiaawuFMLbPMXb7k5vV1YAHRPTiZroWumUKjgQsKIYa%2FgLutc9WRLTSprvaPziJJkfxMZ8Llv%2BMMYn%2FzRsWnjhEZN6ICt%2BnUuIntxoSDC3xMLSBjqkAQBM9ulg4WLU0rbqbs%2BNNzvonUuXyKxr5YVCekd6nQCcV8hCewqVCCI2AZ3uN4KxuXSepR6AYrNBZlqt9V0f5QsjNtDUmVjj%2FP%2BZm10Y4iOCs7i%2F%2FDrJm41iYLtUtNf0%2Ftmki0VnGAPylEKcc7nW6rMoQn3pPnMmd9hqUXXQvdqTQ0g9VgXruY%2BpDFwcmP3a0O2U47QKMuvo5fcX44ZTmkpxQNWs&X-Amz-Signature=6ab83ea775ff20364bf38b783fa5ed667933b79fd741bbabcadc7cb357ec6220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
