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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTYYNU2%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFMm5NXjVQvqFFEWjd0%2FpoBY9SmB6YjiFJ7Dov4ran1UAiAHm%2BdAApK4hMHteOe%2FfDqC3NY7EL7E%2BkAjwG41yVxmISr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMwMGagHQxEFoCeMsPKtwDdTrEbLM5LCmRXLc%2FjXg0v3RsrSkNcMP%2ByUweL%2BCbvpQVjcUXFUCXZ7VfyoIj3Q70pammU4Pnua34kTnuElSm2u%2BvtwrZscS8aWK4sB4tizSlWOXZJQ2yXG4RxEOcvrC%2BiEcXzDMKl9ehIi5eq84fD3harY7uv0Bph02h5fgw1Av5Hcj1ejuMl%2Bmbs19NaNa0KCzedLkCogdt3Rqi47fa0Ja7pDUmzHxhqCQifaODrNpKi4JRzAhh6jpO43%2BkbJ%2Fxb7LjLkx%2Bqbew4ZucTu2ddIA2ut%2BJ7FkGcR1Wj5f0qDoX9LF3IluqqZBZDNSxLZhUx%2F8N5yLCUMvkCA6uXZsyd%2FYXkKdVUjf%2FFAWssciSeTMeji3KQ6zSl7Gr3zM6%2FUYg0fVw1HkhR6wJmlLlz26Mvc%2FB2swLk%2FRz%2Bl3SLHgJn3rTKoUciU4xUMJAgAqqBPAkFMQqO8XCJ4JbjklikLXPmxuY%2FZk3H7zEDMQ7ZYKypxWmYbyw2QsbjpPyrTgShYbYbvibsVDBP3iUVGosB7SyNUe5FKs6Nc2Sz9XwJQ0VpGY3Kdojq7RwDPq29zFeMr3M6IX60jwq5zm77PhYemnDB5Hq2boqT9vVSshTFujlatFeSFoZTfVgVR1eWmMwhYSf0gY6pgE5Lo4PmmIwu3n3%2Fi5Rz2Vo4TZO2P3TOOSamS%2FjvvA6y1LZcgfa2MlnK1kFgfTA%2BHCVoEKcOVsIAkr5V0puyL%2Fjs%2B3JB3Y5z5jEI57m5%2FwE92nbfIlFKwGjW916zWyv7wFC3q58K3LTbBIgi8ulSL2nDDlWol%2FlFoCq%2FZJWg42mJz2ErDDwBbDVmObPtErOeQGlFLsi6l%2FBMDlxV2FwBe7%2BA3dJ%2BYKD&X-Amz-Signature=bbe6f4fb0a676223408bbf8e94b2c7d59e9ffa7ecd71e161c89b15b27235dff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
