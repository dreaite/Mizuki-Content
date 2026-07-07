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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JZX2VC%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T143904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7%2BAD%2FGu0AskuY1L8qlsoxWTKfjqml9hq2cC6iThglXAiAohFe5dL01PdgU0cx2ELi1vNBFgzaHFvTcwoHyCSPYqCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMYB1%2BUxrGLL2UplGtKtwDUUFAc%2FXWUgzlPCKqGElaMLVJamMWbluZ2fsRLn7N4Pm452402azzsCok72ILv4okJ5lUFl0747veoTcBkPqGMPNc3QTEKBEJ%2B2BzUyxVF%2BoHZqoWUBCz%2FNtm7SALAxQwQwus%2BZcJUt%2FsSXZVT0mmlJhk%2BaWTa0p5bQ4QhgzImypfTHxhGSl%2BHiFoIJxiOC%2FEJvej005gwMwSZY0Kwvhw7sabQOHHnixVuVA6zxePZ4uQFRJIl833SM%2FS2T3nfNYYREPQ7947%2FhKZKvP%2Bz%2BbEY3Ey4622LkKxwlpLE614yJ4XL7muHkbmN7llxs%2Bd4YS92CmHsNbvNRdJH0hSJQx6gU6Stt1eTUenirb0WjSWIx8kFitsRBMw0K50SyESikBXhss2NbBSXUczO369mhRzI66Olks2fke9d1AaA1YPCqlKJ0js0dW71reQjLE80ZtQiF4qTqrfAVm83xEbYImeBpy%2FDkDVO86P%2BaxrGrQgvFzs957ipUIrp4%2FrxdPbI8f2Yp5cwJ618iD9xej90juSCqf9VddhescUrhC3o%2BCpZyQE1nID%2FGVAmPCUzz8tubmkjBU3IVkR47xMjhZVCvk1jbg%2FybldaSxhi2IsBjhDEvEW6kcQLOffMmD58F8wvPqz0gY6pgFd4sj7WERg7sRrTrMZ7dzveYxkGIoe31v0JgQ8Uj1SmRHxKkNlSoMSpcFO3Vd3vCXxhgyjre7KNh1TYRutm%2BeI%2FVU35PyJ6HDvjlcNAFS9QkYrtE1XRbgj0DnA6vBxbibVZHYz8g%2F%2FxdmCQCnJYaTLd0QZV1h6bJkLI7NUWw%2F1Dl78%2BzRJDWlbHtTnm16mtXl0P46HmwrFxPLctFfsTf2hS%2F3WarMQ&X-Amz-Signature=afbf532786d1c33074b8c53c22d42e2f7550da96fd7ef9037d1c4163c7496218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
