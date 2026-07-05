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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7AQGIPM%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T201543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH9qG3fbGhEKsYR4OlnLrDn4Aai1gMm75vKkiq8OeJuBAiB7twromySYVnGEN3uMaD0qfFDAwZXbMZmwkLANc21PJSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM5FmFd01qg2%2B%2F5vAYKtwD6GurfxjCc1gTrQ3yQryTDGp%2FVzyd6XFyU87UTX9On7%2FgXRCUoSSYadb2yqOe3bvdqZ79b1QGTYsEGjtTUDZWQ2eaKkyq8UOqnSKAjyH%2FLn%2F4zjvqtoOhgeTsZ0CkPUS%2BcbWFgLlLn6TjJW0HT5Ix0CjIzKqMLem3jn0KXjIvTN2usuTssu0oDbZg6yv%2FEHHA3Q5zq5FcSD4Jk7YKitrP0U4zH4tHgcKukWk44NUfK9xCNMgPE3GT9brOB6y%2Bg6tRwJHJJ4buLCwNnSFZlBH%2FnAZgAZhG1QpTBQ7R40oqpQLskIKwz9g8b7RxR2Zf9pHvAryZUoVcLU%2Fhj%2BNiXl%2F4%2FYQCPsYpKuHXI0Jk0iPRVuI4ggxM%2BW703ZEIoxyiuNmfOr1M3adL%2F6ZEKqaM4hsGuMmBS67a%2BA%2FNouDTrJkKpn59BCD5ZM6F9FV6plRqtKZpReWAg05GinAd7dOB6nu8JGN7bmK7fL9bc3rh5HjaPRMN%2BeZUkj%2FBV4jozGm3Al4xySvj5dNcCdvr2%2Fxt9QvIO4ZCpfPbxxyyyQHkWVVgA8yso25%2FznQKOJ%2FO8q3KlPE%2B2y0UPu%2BFqB7%2FnMXFF079tFYMSbPsIZSAAUKreNr%2BuySHm%2B%2FLpUKqph09x60wttOq0gY6pgGnSgGr%2F9hqmp9GXD00aT4XGcsh%2BzgVPVGkWoa8TuVrdtF4eVuAdqSXJ5GIJCGSREWaysbppHhsf9zjhwVSX5hz3p1pd0UhrQkxHtjRLqSOPNZFwIXiT7udPAo%2B8cSjcMDUGsXHSew78hEzUJmBLK4fccKfFLfECHCvkYmmvpRi6ItHsmfnngurRod33g2uVZc0agbFj647bHZJApv1xh5ULgYQegZ3&X-Amz-Signature=81cb0c5c06f6567d4fbc76b141e11c491be2e84740fbc2b6fad8247bb43119f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
