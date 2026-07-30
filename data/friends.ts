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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZKW3KD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKcWzwzFVGaJevCoLXCEVEgWT%2FlwMxVferIk%2FKQtwqUQIhAMWjG1al5cEBur8D8P1f%2BEnlXNfqo5bQrebNtnjDFbpkKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3mqljR5dUtSoNXEUq3AMEqeQz5RUJVlZlVySYFaYUcTCGQ1kurbgA8zRNPqFpTck%2B2h9UpS%2FYI0zqCohoD2vYuhPXxLmQ1%2FWmLeIlrffzt0TJHsKxZ8XrLAqlepdIqiP7zJSgWN5Xj9gNLbEYcaAWCu2WzdzGsNJ1W1x%2Fd2zvHScJGnNGkwQawGRUlks%2FArSRhR7I66g4bqr245ZLuC3bTe1TC9ncZDw5rfo975C8p3dKb03Nj%2B5hOMHVztqnoV5UAJotN7BtxLqFZ%2BV6VjeqRDwmrgMGDy8h3lCSQrMysUOZTo3MGYr6mSjkkMzQgVzK2z9f6HQrJhXxG8wUmBqLX7IuNGk7tCPrxD9gIjWghnI1d6Xw0CBdFxkmxOUVAB%2BOe8QlJk%2BZXkXohyYXR7U%2Bb6hIB8NfKJ3sw8pDgyXgyMk3bwkVbVK3uyBmMcz8ZP8Fwr6f%2BhSTDhY7FMdmcBKgageDLNUbtgHewhgkYzMiiG7h%2FLUKf7ICHiMKyBONvrUWvQluQxhNDJ%2FXhEuxmZzGMP8gx5gnGHgAjsJ%2F8AXiMGceeOx3BU0S6A%2BiyWGjURN6fr4Q6Q2FjYS487wzTWiep8JoVwGrz3yuujscBUD5w0vsXmquf41M514ETANDOywbdedYQc%2B7aSLKlDCOga%2FTBjqkAQUVTTmHuecEzZOdcd8WuCeNf9LKzUkBhEsrkO9fuKYHaHlhFZc%2FFxEuDzeRkQWDThmZLQeq7a6QhUGmMV9M%2FJDdv30lBvkM%2BiB4HeQueUbe7h1zxoWo4ZMvJkd01pUp6X0ubrW3RnGumVEMuQ%2FDuiXcB%2FUTxJ2iuJnYRwk7PtpMF5vW4t2SqKud5NRhSmLki6c56WhVrhz1ZE8Sl9JC74IEXM0F&X-Amz-Signature=6d4f5d77ba9a1a96f0a95d215dc522b0dd5344a702f5b73e42cf68863ac6309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
