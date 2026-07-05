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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7WQJYK%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T072810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIF8ipsrOGvsQkvzV9sK5fY8utw37%2BQalMOcTw1PSCGDmAiEA2DFsQh2%2Fjwyk0rcMvAJwaNY5UmPAYUYwn1bmewqtaUsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLwz74A2%2FbtmrJ1%2BoCrcAw%2BFzRHgSqVKvch2OCLvTfI2oZdgd0ANMxThXdI3yYtHA94Id0Q2XH7zw1JdhYwg1OeXbZSGcsIc31ROdEuNmeka8GlSN0wX16WTtpJ4t0GgxbRll%2Bf2Dz7vGWDCRncQDI5VC7DQwrVvRRNh8W%2BxSZVjwQRjxPYJ%2Fkn7k%2BNoYMIMamakxJtOdYLJr4EhGFJB5wB9mWEGpELU46k5eCd19a%2Fpwwl8G4tovEqubNLB4vlOZnJcGrhswx3g2ec70Q%2BUsAaA90toRzUMCggqR6yevuI0CEQYxEZo2luQd445KTovPormXoW054r41ZSA0%2Bfsyrdi5N7ckuNAyNHhLuSK%2F0MPdt8d1vAWcg2fBVPeuk5CxOEqsQ8OJyOQ0P8E%2B7fhIRaN%2FJ46yzLVVO4791chh2igiANtEOXMAbS43oXY2ruATmQU1LyO68OXWpvaM4l%2F0%2FTdUCkLlYVWBdRlirLsqAiFir5zGj9U8QXJuSsbHdWzHnOe%2FtOzYkLvBzHjnlY6Bod4D4Ij5NKwirHjELEuF4JoWY%2FdV%2Bvv8uNK0CtwQNd0In8kT1R9YJNC9JTT4em0Y1fvJFbtO4MnzWQQTii8LnFyFtQL0lKGibbyNHh%2BmuPpvuU388GOGh1Rr5hPMIWAqNIGOqUB1aVifxswjSZ8cgGhbBkrT9xAiCbmnEYYniHmB5VuPAGyGjegzKKzobktDVWQSr8hyxNySH49jpYyCsLbB9ZjA1AhL0zFV07BXGoozq9zzGFV%2FKahgFK1LjH1iqban%2B04gY7l1zNk8rpbCvaX%2FTFZgyYywclCKeOiBFY0126FRD8G%2FOyuie4vsqIF3iAYxtMR0tPFl52C2A45lGzk5p78quBaZ0Mq&X-Amz-Signature=468d23b1a7da79eb57ac296498149dcad52b71c1feb15b11d34715e9b6da5337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
