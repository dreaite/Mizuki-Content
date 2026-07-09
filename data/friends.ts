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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JJ6FZN%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T045444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxsFbyvi%2Bh9fE%2FiV3a%2FsPzJgfL2%2BxnTB4wdPz24dXbfAIhAL0cwPMw%2FJWkXxdGsT9i9rpCSQt36uLeUozT%2FjEVLvDpKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqG5QN4%2BlJUc07nDgq3AOA%2BJJrN2HRvTttyKSZhPFRyBw5rCk5DuDlfuxYoFHpBAqio5Yll2zF%2FEi7YpZxuyaA6PAVzRhZ10FloRWOkWniRmMYA0dWg%2BbQNiEr0H0fjz5SGjjenrrVtWI%2F06Z%2BEcWGSLcdOP3r5%2FABx9Uc4fSv6KrY8Fry%2BpsAGu2fKbeiv2ca%2B86eZ8nwiGF54V5X5XBBJzKITIYU2KQcmvfq2Z2QWcG4LVnnyxc%2BV%2FLQuuY8cXL3RU3gUBbmk%2FHTcZ3g%2FwzNXdlD0P%2FZZTlsBm81VK7qovp3QsnckBRfvTWr1INxwUa2xYPyl9%2F3OzHN9K0Dx%2F%2BXVhzuEozkAet8MCKbFtbS144KwLAfS8B7Hz6tMCxYuu0HMoAu6Y77WW6lL%2F6tU8udPDWXOQ1M%2BSBJYASkzV5scWP86MgxXCOoB9Y0TloxQQK3u3Qs8BKkgxJDTUZegMk%2BEiZjSJ1i2%2FImLi%2FBM3Ql2uf%2FA8M%2FUqjOJAed3fPQnjOEVQZI92clPiDd7R6%2BS12Y1fpGpDzLoUF3hDSf7RRCf2DqYg4V9FHNGAWe2cshDbX9n0utnFjI9elYli2dTA8cTP5yt4oK3FPUQ8Gpzmx%2BFjzNivtvqC5F1Q0PlNS1wo9lsIKmZcEXegvMAzC80LzSBjqkASizKoTUi8uT880KDDg9ejZNO2YMzJZewedED1XCmbg7u6poNZW8FG6%2F8wzPTMjG%2Ficjpg55smDmXoExo4%2FyUIq7xFT5jOBBkQeN%2B1QN1XS8PmyesQ0CCnhAKxKe%2BIGdwGOtt2BX80YbwY0qzgdz%2FYRl%2F3ZNFlAoQB%2BwJUD6sQO3wYihPO%2BoghXF8PWoCu7YJh5uTfK0WqYxsJqIT3c9dKngkuxG&X-Amz-Signature=a6a47770027df91f416f266e6a661ef194e3845dd3ea62eb75d4840425ea4714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
