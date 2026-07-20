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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB43FKFO%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T064825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxERofBCYzYHd2XlTGGs2UD0eLmU5%2FYsiJpzA4jkAv4AiEAndldcFzQpKzni%2BOh%2BHBQACAbd4yEmCLEGfkMrcCUx5QqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb%2FhDqSOxqi49%2FqFircA2j62he5f1P9oL4eFK9GFVrXab4JU4lFkLlFK08DZ%2Fwox6KdP8YgRYfEjE5NYU8UgDTjCi1Z6wIhylDNQVOSZpg86R8i%2B%2FKIYkrB8MhBVAvFv2aM5SpV6TxT3Jn9z6BH%2FOX7IA1LVKLqe8qrutA%2BG0A1aVCFmpcXasz06JmoOVUbwmcnG3CKzMs77ygc5Q10gSpRfmrrC6Kei5oRpKmBUSZK%2FFE4FQJol%2B6SbT%2FaoWHl%2FmJz2UGa3ZrY0RxpY%2Fn7HTDx6XHwXzOugBIVjujkjqIy%2FZiKs5TvagZhmTlqMsuEaK4xtFLokiv7hAzZ%2FHP2vx%2B0qwTNO4RJfPHXV4C4ie6pty%2BMvejKklr3bajm2043PbM8Ze%2FA2BHcXLEogC28AfibpJxZtVMizwMaWGKnS2TCc%2BLkBupSy%2FdB%2Bn%2FX6DnAIkaZyLzNt77QPJ3%2FzXMGM4Idri%2Bp1Z9h%2FMNm44lY6la88Dn3pPLiijMCF35B56a6OcJCFsBHHVqWV56j%2FnT4Zl%2Fn6S9GtRXRxKq%2F0z%2FCb5mtfRbvAvEdiizeFrJeqrN6OYuYL7EJrqJzkwqKkX0OjLzJV7UJxHVqlJOvJhOk2x3hL29Zv7qsi%2FItyECL9we8%2BHoUqyqKvQzULBJcMKjl9tIGOqUBxpR3u1O045zpxF1dLBab6rJJ3YxAKzYSxa2DngOYVRDbRDQxBwzCeAJW8p6zbmVNRg4bwWl9i8A0UD3%2FX1HxAAsTGoCGOudjK8JVMsiBOmcJhH1J1Y8X3GBhBSPCW8FRi%2FEvuCoECBoZekivoLcWSCa3t74NQy97ODEltVKtnfsO72n74J2tbgO2IiZREg19Sx3g0C%2BXw8kxR9c3yu8GDKZFFTAV&X-Amz-Signature=1f6d797a9d55089b97e5adc5ae7f039b8221c93f06b960977c398b466dd7c531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
