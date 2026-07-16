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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKFGTZFU%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHHECn7usQKaxgi5aupzrjFe8fkrVlv7mNPqzq9hvGL7AiAztMdY2Vse5ksUUtHGihL3p7x%2BEz0zQPt3MQC5akc14yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMEuOPcvM7E6uLe7ctKtwDjx5A84t%2BV8w9bpkdaOqCYHvO2Z74y8EoKIvKbKmAwzfrUYrHFgxAu3lzvzLinnxSOGL8bKMd8r7dwe32APkB8OmOpYMi6FnMnLEyVE%2FfpvQH4OiL6zRcytL%2BtyhCzyqn%2B5pxTIqrMKQ6HA8yabe%2BqCCv8XLFF9yBWFgeXMGhN%2FEzzVW%2Bma9bhOElBUTbZUKAJG1oKHrEog7ozIkM4kdicycl5zLjFgc7udqgEqG4lrNIcop1Q6xHA0EQvhwmL59sRxbjtWgNro70MBs7xm%2FLEdgQxteZPZk8gnMgSXSNpNpyM41TKfhNbvGW%2F80Ns5Z%2BPm7l%2FDzxirYepd8CJunwhm08E0zJT4%2BFY2y210D%2BmvCD%2BWS1ByJWNkZRM6DXovoDP2e8107SjntoCIS2SJAZEX6PDsGHGC7%2Fpv3nmJuNZ8bwXKsGp%2F5Ph97c1aYJdsQOfqDFG%2FN3uIVe0z%2FD4VjhV%2B8H2pnedBrLyDOq5sbfwiYqBzWw%2FAJ9X4%2FXr4y1RBLN%2Bs68IFp5cEAzY%2FOK72Nx%2B1zFGR2V12w%2FvYXXkT%2BWLH2Cd755SstdpoCtO9BWj9y0dbi7%2Fpj%2Fo0R08pyORHPfh98g7aCwsrh5%2Bao5o%2BQ114WAzUIkjAnl3u63fgcwtKvi0gY6pgGCZgi1uvN%2BX%2FNw8nQVyFpebLYJUXWe1SkAVJWSycc0sMdU0Z7uFVCIsfWgM8ziFGAhvG6j%2Fm8EEnGByQ6C6LtFZcFPMKRjor8t9LdYgkNoeRUwrR9%2FC780ZFGubBMtlrzMw3CvJVyaPFSp4aPqmweIHsvpReBNpANU7pPTHY32sF4rbDOATWVnoEvkML%2BO2ZNOkwqypt%2FrCBj5yNwlIqKMYoaU2XWl&X-Amz-Signature=c40c219fa16dd5ce6917dcde12fe9945cda8bad65f678592d14b7eb791d2a979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
