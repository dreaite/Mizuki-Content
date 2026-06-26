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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q32R2KXO%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T131318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSjRM6gEMJ2VjdwipC6wNb3xexB7Wazl1iMf9m18o1WAiBXfWOLIs5sa%2FhTxAXz7pclmcQTaDQjLIUhL2cZ%2F3PHZir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMUmaeIQDY9KZLu2CEKtwDAeouqXoOqgdrY5Xci9ZfaTy2gui75bDcOtPRZFVoP7%2FoXt2LRTV7sSwci%2FxIyd1zDgql5bA%2FQEBvoHrWajGQSJZIc761fdrjFE9ezduyy%2B2PWtipE7fBXcNaAJ6vsoEp0rywLl%2BaxwpCuTStOz6gGj5WU9HNjsJN%2BESNjfF6AgpZuDLMlcJdS0ZvMJHuvCqFapXobev4s1vRQ6H%2Boh8bUSzQLZ5%2FgB5RrwdIy2RuQ4UF%2BtZBY7TYPBC0%2BiZA8GtrMFL1oKrdQLu4UyB5ruvaRL5iU8PlmRl8QixJWlwJAdKgoCizDM2lXS%2Fc7w%2FSRnxtabp%2BGYenV%2BwvpRfFLdAEtxlWJpfwhA6gt5GsVGQEy2OsJ%2BG84UJ3JaaccITACRkPGy51%2FeefcG4Ow0L8v0qZbx73EI6DddH%2F0wjGy5%2BdqZdWHq3SXfF5pCLlIH8aXj4x%2BnStOcTwfaiNBJUJA2ReT%2BLu7tI%2BCojS5fvnWGg%2FxMFXuiAoAe4mTHlTQmJQzbR9IEVRlFllikHyMkFk7ryj6mT%2FORjYloAyZbD8cpFgeUkhEgY2PhPmR7rUfSVZ0WCkkOMCSjFvIw6FC0IEpqwOd8IaRwK4P0d3njOs%2FVYI8KoVWoNTrrPwv%2FK3vAow9%2BP50QY6pgFcBBe7lPY5wWUnqS96y%2Bf6ysLNTo03OnzvpCT92K66a15xkHbb0jD08HWUXUiG7pQn6w0JHm9x1y9yyuUWH0tTecqHOxjC1wlrC1DW2YgNKaAOrmPX0puSzPTbU0qurrrMy0jAH%2FRbOxAJjyDjhbB6F%2Fc2SXOoLofTROZRmNNhOqRz4nIPHQkE22LG0Ya8tFQ4l0r4WOUhoPQvWq3v91KGfH%2F0Yw8W&X-Amz-Signature=7226552ff35a67fda50549c15e8f5dc3fa3c91ed8403fd3d3e98a22a3b6101ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
