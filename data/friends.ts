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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRXOGJD%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T042325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd2dx5q2V%2FS0GcZ7bQ2f%2FkTsvlFYDtFxKI83UdgsILDAiA7YrJzdKIG8M%2F74D7JkCx%2FKGyChJvHE35%2FgUAS3GIsySqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrKAjVKZYnGTbGUuDKtwDEQ71YKA0eStgWEzs5G4ZLGLaye70bD7Z2%2F%2Fnfj2tRID4xpeVP5DZZjuYl50urfl5LQDB5%2FmSDra8opdW0qZ7iR2qSBziq6hCIIwV5BUJLdFxz79S2einbC68F5I6pIXVg1Hs9duJ4FBIOX7j3Vihqwp%2B2xikGlKO%2BkjDMPRE2NnJOzIYvh4SNk0Ipl1RhA08afZfSgfMSBsd7L9WdMjQNZyMbmyl879UZrQ9lsjc1fuSA1YZvH7fIo7DopY1dITKELSebaNh9eTJ53zy6WyAvIOK8AzkTN%2FSMHAfIrXCvfTPQmmqgWo%2FZMDxe21yfgTjSW1BSaUHOfUEXx1u9iCPfCQn5u9Y05iMfSB5CmnbRiVipdkCltBFcCaJJIeKEJVjR%2FIRA%2FFl0kAkLSgucEFWaRNyoHltkgSL41IQn57g5YvEcV%2FCeFMtjU%2BUf6Kr80lPZv33U09uLN57HrDHyd7dPVAHnm%2F27fJ%2Fo5rfena3OmuyLPv17ISvRSEs0dmwHxuksLFY311mkr3ZiOSL%2F0iNcNF%2FHpx0xu33iNixyg0JBCQG3sY0cELfQeZnBrtwa8OA9St42naklX5T8X3NsuAb%2FMqZZFVARYcznWHsB38VLcIudiw9usi62VCd1GgwsL6w0wY6pgG9CTbxVdl5Ly8pE10Zxxl4%2FxOL0q3TBDAUned%2B6pZzwewdO%2BoX95q204FFuwhNqCM7f%2BV9pQXLeGhqMl6LjbwBu2Gind9RGxKdWnSZt95mqkuPRdIRw8Jlg45V9xt%2BwzCvJ3aM%2BAI%2FWjUD34IN4royAJ7%2FDPphyuHbxj6ItGSxxYJxzDGrFZTbHsehqlj57deQmbwRh%2F4PYyt0%2BJnk7km3utg%2B%2BVB1&X-Amz-Signature=e88e9ae25421d7268abcb34659c3433ea9d03af3fc2b4e062b60ac7dde8dc5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
