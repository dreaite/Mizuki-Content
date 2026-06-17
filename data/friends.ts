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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLKKJSC%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7b6ztWHQKBaDVhTl4g5VLrDNg2LsU8LOu5LneuvhT4AiAk7wGIwN%2BxLTdiRdkUWOYHmw9iG4ONUgGZMGNqNmSvfiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM49hsbPvmuqvzQjNcKtwDmKGrPHp1v%2BUVQtsD3BdcTi%2B%2BozAHqdNqGqCE4ijk87AD3%2B9%2BcB%2F%2BvC3jv3c5u%2B8edYztexoca1qvggwhUkN85zudZn4fCOBWO8FcBlkoOKaa9P5b7WFdfG7Iqf5wEZQ1LAUEyuk6Ko9EFgTSqecvKtkprGal8qNs6%2BUx2AebeUAeuSHsnb9gKQJJtIti5p2t%2BU6BzD2gYMOLUJSDn7aiHu926iA2jQc330k1kr181SQjK5fuD7nQr9IhCfgjJ3mtj16W1YBKTYMA8j67NpEdAh%2FsOnP8gn%2FYEQ8%2BI5J%2BQOabJzT7x0ERXyNnYtrxi3VAmc61NFZcaULru5%2FT1fls8mjJ1jWKj3fVKamCPw7V8oTtDXU8MeN%2FiSJETURu1MdCREKbvFt3As0kLuG2YA6K9kO2WZ87FB%2BSWwhn0iqT9eCIjG83504OlE%2BBCr%2B35yDj3WABIrWZUdMWvMF6xBEOEw5UpSqYv%2B6XqswF%2BhoxfMOPEypyUon%2FbfCwYNe3z5%2Fj1ralM1tJ0EdhxB4r%2BY4fwWa6jTFWdz%2Fr8YuF8gxwx7EEraY6vbLaZSRAltLRu2C4RKe7gVXCHGYIZSZdMpEgxhNzuW4%2BsD%2B5bwXODQ6SBvdNNkj27xOFCB1Jv88wtoHM0QY6pgHO7YaWCtQxViGCvCbrnBIWZNqR8UPCwDdyhtR5M5lu23mvG7wvA1TF4c2eWVzPiAeERj%2Bhty3FC1qj0xod5EoOL9SV74yRxsFOsyZU6xZ4jX87K0fOedIM8HbgrfV6BPJGgTPxy2%2BbVVRxITTCMDAw5ydelDOzXjiR0RxIbzxMsb7mBPJjukt6ILW35pzaj0KrTC7WbI5LflHRRplyvYRu5gL0HC83&X-Amz-Signature=8e2e40bcf50c55c25568aef6bd5abdb0631fd7cddcf0a88a6b54be751953c9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
