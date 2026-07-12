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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCD5I2GS%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T033028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFY1bcOEWqzZiJttBKNW%2BQt7CioJGpns8e%2FCMY6XQv7WAiBK%2B9rkpI0fMXhTkLmRmR5VXfwUVqTR6T7ZPNGvuoI7JiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAb3GrhI63VANF5AYKtwDnblMYs76XsVJodbsMkp9uetuGQfnVdf7KNv7gZ0J8V0SRKgGWrEcSbSRDP6w5K2Bf4d6PSWrPBJ92tjU6Jfa1NIDEX5KAFhVADwjF1KyjLF%2FmzgPDjDoUYWMH%2F59Wbzz6xFevd6%2FbiX4fElb5zNVnbEU0idZsWoCyLubPmjZde6VcCvLL%2FPYniSAi7Cu8EMtFJHZe7cgr6VdLFwbz56xB63NFSQjkRoHDAdws4UjSEigFtDb1PQ8k6jjTIsjAq5TMtCrRPmOb%2Fp3pi9sUehD6MvlcUDBuI5e%2FsmVz6jwvkQx7GxdFm0whI4vhbuQGti6dtrmS8wGlnBa28MZR9REziJSFQvFnGLpsgP%2FfoIj8yFIING4JPAtpiBA7O24Pm9rzo92%2Bh9EdHXaIu7omOThG5OxP%2FMYxl6ye3p8kVsrtejpUQz7OG8vbFhKbTdOzPHrV%2BGC86FuXKi7jv1f9owDVcEnyGxVUTbkTnlexeu5sYbjYMyci54kqRaAyl4qFVG3%2BlhBgU8QbXEGchf8T9eWoLZUxntmKs5uBCVA5CAFlk3elJbYN9RWf5uogIOqNZ1KuWXbmZKglmBF4bhFekZNG2i9ZiWWNKORNgWCqBXR9GoPzSUMdcqjl9psCogwgNvL0gY6pgG%2FKhtqCDDilI7Up5Oq8Our4xHJ6m4GHZSeHQWvPYbx8vjM5aawz5%2FGLxwz1wCmKtKCccx7pgAu1BsmdksAsRY051b%2BZsLbIbOQY3WKwUs%2BefTGNMIOW2dmnMTlE1SdCaESLPpCGn4Dpok1bHa7rwn%2FvsUMxrkIpjkvOMd6Qa1ir16TYNqAgsq%2F%2F5TB4r%2F714yyBlz%2Fw0KUU3l7EoyiENODG7q8xgVt&X-Amz-Signature=56a4ab9ef17971658a50036c47bbad327b25b4cc4f800e494d510093ffa5685d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
