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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446P3HFQ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T113511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIH6crSPwdZ%2FA%2FmumwbJBpBBXbLR6dorL6FmE5Jegquk3AiEA9QmN7bQ9e2dgg0ErMMCoJOL1gCECg%2BnncOTtjG3k1QkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTUFAtN4Xo5Ou%2FLOyrcA9kbtPqamocVyZ6PK9jtCwcE4AguoXvBnsunk17%2B7lzTC8SYXCycaibTR2Oe1bDYBozH2ixcZ6LdymAdqA9XzUZcljQjrHQHXX%2BaLLJGtE%2FqRwILvjuOz7qJ4FTL5Sx2NdNwYGDikqOneu2xMMhzNrYvToQAme93kfx7B%2BouA29RnOHc8ANxA9onBvga1W%2BMEM%2Br2aF5fbZ5en%2Fin1bk07vSlOBeJbrHwxwy3%2Fy1RqtMCzSglLfZRlywY%2Bhkr%2BkEuJ6ss78KbeH3gt4r3ZRduGie%2BO68mQ02T0FYCuMZrqp7%2FFi0bhdgSMOfwIhB5VfGIxuCTUm2KSWZagXhEtYFQT5%2B4qFbBYjM6DiBmJ0H6kudWJThjgYb8QhIX%2FydtO3xOCOaTeH4e%2Bqk0pDpKcDqMJnJ3gWtCs13dzDnOAgLZDR1VHB9xerKEHv7EvqKtk6sbCo3TcWVP4heEBZkaINQDXongU4D7iLmjpsE%2BHi7ceSv2Omkiouuus22OfbWISyk0jvx83961CG%2FlW0iZFxwH7PrsMA6PZqSUYMAqzScVCEVKIm4Fm995W3BA3V3xEvFnXZ%2FUOBl%2Bt0tJayl%2Faopvfzyy5c6wwGrordrZjhrgUj%2B34S9%2BoKK3O0zm3mVMOfXmNIGOqUBdKnYrBpv7mEoXQ0ZJGhwfsReduN9eIKN%2BbHQIFCjGBIeJoqxEvi1McpoL3ty2MJk3s07vgtnHLieHDxDpIsKT6QvaYruD7wFW7nHE%2B4znJBj2dlwIS%2B%2FhZot76qva%2BZeJNiqetIuC09%2FRL2%2FovUsfNQ%2FlnbjXjLY4RKDN%2BqqDfwgcT47%2Bcy1UujQGjTEZph4l3sn83fiHR6CxxbEpjLf9QoA4mYB&X-Amz-Signature=4e58ae5d603daa0cdcaebc20972867d735deff98ba9eae82ef6efd39ee218863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
