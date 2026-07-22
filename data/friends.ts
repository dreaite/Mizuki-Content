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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7P5Z4N%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T230525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAmUoh7WR5VBoovZ%2FlYD9dv18R1oIe6s6ZDA1smF5P1nAiAV5Vae6XZPpzexSxftXHg8Q5bFfdyam%2BoJCd5fRO2mViqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJTyOkVZVdG%2F6nIpoKtwDs1BlBk4vqW3uRIn59VFJDJC8F%2FZCco0xCUVxZi8VO4OJcPRuJ%2BmnpuOlUXIW6x0p0W6YsFx17F4GgrVDaucTEvms3dI%2FcRQj1emsamlZrzVbcACUyDmg0cwaKVUB1vAVA7D4pTqwGrOYwkJLZl9aFuQXyI7YdV29gdBo9F13NMJ%2BTLGECXNM3EmP5MDDsvGF2tIGe7msAneG1eH6cC47dln6Lgbljz0Y6IwqmuZMGZzublIuR4ayCN2JEiC%2FPCJyjH%2FtSBliA72lE7iizpmQRgkPXq%2Fi04lQn75RKDuSJqDXMsUmyJ82dDWsfCV0KUkD3DdVmY71Ago3lKDZLt1IgmKuRg0XUYKFIfBSTWGJrkzSNOjgMSRPQIm7pbLU6gnFxm86O3e%2BH0JYozRku12Z%2FIaIlTEUVTQE7ytRMhEGm7FHHeBtxKIgYd1s3JqWWASvLx1l%2FM3X7aXnQq3lAFCdow5AhbOTCdeoxGplcLp2grLRTLsPy4VbVwMdM6zufH467KtZEpamxIAlh2E2fa%2FunroY56NlWEYuuy7IFF5WQiix8WIso7Q%2FxTPrVLjxBGoLWIxAavatHjqovGe0s9PklM4fr2re8Vop42X30cojGeFJx34jxY0iqxnrn3QwjsGE0wY6pgEd4O%2BlS7eEIrW%2Fif1K364ADNlL3TSxOf218b%2Fz%2FLVCJqte%2BPSn6DFL04Ff3pLwqXYvkQJ53fcLl1vzGjf2Gpf1n9fHGaLhaZsDG8uImJy6ZlfIVHK6CSFkLxdzEetBBg9ToqorWrSNFEoxYttIaMBvfJavuHSldssKbpHYWj8AXMlQkhdQuiHgE3jaqSu03N0Qf2egKJXVhJNscjJtGA0CSgdBuaOS&X-Amz-Signature=41a63ebbdc2f25e156a7eeec0fc37987368194580aff8ff178355f75bf28ad23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
