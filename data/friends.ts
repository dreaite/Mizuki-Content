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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X2X33M%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbiMfE%2FafTN045bHY1Z7t55N%2BdfZVDw%2BbL118XjUCK9AIgR1slYVPQizrzMpwUwdSvcxQMPSJO2Fe%2FFntVP6VUA%2BMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFcjrUzEuKn2LfkvXircA8TaXGQFTUTfcImeOlgmzAvDSMVILVA3Z75CWCHq8mXlFn6jaczWRUcpXBNyFeG9EN0OB1PERRnyrpdk3fJPYLIr6YFTHy9EpfyoPIs2rb%2F8J1110Sm0xWdTFT%2FoMkrBplHSnefM%2FOhDejFFH10o8I36MFTDyZbgEnF4nuDj75alJR7Iwv2FkE3TCRDDhuGmMcFgJDdfQ%2BHWS5dU6KRW%2FBmgztROv%2FzTy95mI9TjYzlqEOb9budSi1t%2BMFQBTlG3Jdy80Yn%2B%2BoUYZu0hJTN8O8OGsNTXa8iqK4oZv5pcAnh%2FRonLX%2Bi%2Btf6O6uTLv8Irog%2BXrDJuJnxaFN%2B3uzb2DAik0M1%2F8BYzDokk4Blxg%2FikDkXKg4Y0KVcdQMphlW7kOQ1gdHvZO4Q3e25d98g9WvZB4SpoIYYKiG5TrCP97BwFdaOkLfNqZRijBF6wXah8XOymeNbKeek8%2FSI7GtWP9F04g0US50sk97koYIsdJBC0oZrXhqG%2BTOJEeYLJVb45ZzzC8MeLoZB%2FJumoVDKizYQ3h3A1BeLjf%2FzB%2FOSuFV7iTgBMYCC1LqPcDnErdyzS2xX3%2Bv1MPVj5mjpFcnk3v4dmOOV1YOt28z2sGQQlAHtLFlvH%2BhGatWMMnWjSMLrh7tIGOqUBZW%2BV5qYidTnwVi0pA6t6FZ0khjMEEcm8aWTD75dGSoX2%2FLWXnd6480t43jidJNs613RpCxRKvkEXx22ZP6r8mpV8osEyLpC9oQHCOHARI4RwOW7j6QP14ow%2F7Q%2BgW63GNDs9oSym6yhKENCSAd%2BCO%2FsGeXl9rCQHR%2BWH%2Fagwgj2N12UHzpDnrromxlJ47UfwLUB5bKTNrDfkXX1UoKRlL%2FBQ%2B%2Buw&X-Amz-Signature=84e5a63c1d749621041a35f35ed627f510338337955b9ae09adc8cd698f5cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
