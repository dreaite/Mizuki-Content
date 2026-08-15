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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDU4WBVH%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T025236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDpXpz9iaBwarbRmOfA6d2tTZoJ1ZWKvwVGUA1qVv%2BFcwIhALJzSFdU8eI34DbVPzZBo8FTWH6jddFq5nI%2FYIopEN8EKv8DCAoQABoMNjM3NDIzMTgzODA1IgyqOTMz901FuoG2mLsq3ANzunAmM8dUL8pL0iYFdC9u15aDAOjoRZKc7E0nSx5vy0%2B3wSozas8wNpijw6NtKWFH1tgD4jZ8Yr%2FKTS3taeKW0Qoy8mvuTtWdgZ7PZQYj9x6CUKxQJXZxotUrX3AUvbcFZ4ODmyjUexlo0PGYePDJkKthLUkTy9Z%2BBj%2FPGseJE7lvdnS%2BUXeBDQinFnqczYH70M9cGrAbQUnFaO7L6ikpGh9GF1l99s7UYwIGCRbRWNHrZOZE9YNQNadLX6BWozA3H7LF9TdQNMRFQOqkyEJ3uD11T2ceG12cHkyiM5TUN86dXp33UxmyD4cCeRMuzJXmOm%2F3LfAdrsPvCyeiJo0jc81TS1eONpn46POoW5KgGzS3bARQB0FxqpntbZ44NM%2FFavj29FHzAvNj7xywZtlmyUgJ8zNHhFgEvskVOyqWrwZSTB8%2FutPEPwvt9PC1hrPz%2FlmDMqR%2BLein5Iwmo7VlmeYK26bVxhQQKAHWaw0R%2BzG%2Beh3G2RjXikr4KnvfuP5a2Cnz%2Bikqq6vTXxqOGSBXBKvL10%2Fd9TPYh26coaqqEKIode7S%2BJUqPn8lesf6rZewj8U9uBUdDQQaRXaNmAhMcJvn4QrIXB17ZKW0xop9PflsljOWMYIpH5LlnjCB%2Fv7TBjqkAcX8zJp1Vh5p9%2F9gNulxaL1vluJRD3eHpBT5n6gGKSM1th3Tsdgcpe3UnxCj8Frx9HcKzrN88G8bIoFqWxT5z2t1l5JfRNiDIYK9Jl%2F3cfpM5EpHg42MpD%2FW5y01E8ooPhpzARywN4qAR1ITdgSbdomWyTQ%2FdN%2FWVJYKSe9HwOSivfa6jNpW9YAbY%2F2BBDwwm0xYnQlUlrw%2BmlBJxU1b7WA6RXX8&X-Amz-Signature=3aa44de375549be4027327906c5f0678fbb38213321b892c7cbee4d22d5fd2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
