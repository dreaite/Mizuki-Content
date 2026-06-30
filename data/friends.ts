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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWLLWGH%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T050512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgkVaulqKgFC%2BY1tNNWwAN9ZenWiXOpV9zgoZPmZWaRQIgBH7Bvrt8znf85PYn%2Fn%2FkKJtZf%2BWrbq8s7jxbaoj9pB8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZo%2BcodNe5wzQbKsircA8hk2fFB7wKHWApAKXjhIPq6e9L6MWxaPmwJXVWEAXIHF4VA65XuUxKt9%2FCy1PPoK8D%2FWYZLk5HG%2B5bdE%2BN4fOXyDYgNAKxktmFa8rLKaE94%2FcOEX4mHfSqR6evMwGnjWTeeYg%2BV5vooyfTGc%2BIKOpW954KkbE84pLvZeS%2BXpk6ScqrbbZXw5TXGT5QVpXw3rB6u1jWsS3ZKXEcmZF1ihor7GYu6JtPbVVYRKF24OehJh%2BbHZ3VhzpQTsmlQRyOSKgAs8TV812qQGdtGbrt37k3uHUrGZNQrlVLvQY90iY4Ar7h8%2F3QX%2F0wB%2Fb4CLQDc7zbudHasD%2F7e1WFNjLTHEGdJEDJ3hjQ96ViwWYfbrhG7luF9j2uhbKCOlvmbhpWYZQaYXHxJ%2FuBeivVuqOtwTFKAxWBIVdXVTlfoH%2FOHLi4uEGrVoRUN%2BdQ%2FOgvxP2atmpcjB2P%2Fasit5U67PKhPUBi%2BxLtALuzVW04Zg%2Fs4FgH8R%2BwR7vH9b%2FoAVg%2BFP3K8kLiYfCzkYdqpfYOg0QE0Mh2ruB8oTGwxF%2BwaPYL5o%2F238QSoLnEYNWoTx1wk3L%2BvGwg%2B8Hpc0MniYZjk6xjRLlmR6B1DINSYBgQHOp%2B1KwZlznWmuYLSvVB94P%2BjMOr%2BjNIGOqUBzsBCJ4mfjFX9mL%2BKmpvVI4B%2FabyiNUmhS14tVR86sfDfLeVqGXHm5qdX7UZHJ63R6i8zKIpgIL02PBdU1fuUk3YfQK7l3%2BjqEVtmJwYC8p%2BucxX6hiMl5nQ7TyOrtwR7Mivf7cl8w%2FLuVjhi1TG9RlyzCUsjrrpw6KbgIG8Jh3tYXui1RrILRwImLP4s9waD3d9kTkWYOt9JmvJ98HVkcfmeKBZD&X-Amz-Signature=1af38448b860156d16f848c772fa0b6ad666bf6d0a24cff12efbe454f8f15453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
