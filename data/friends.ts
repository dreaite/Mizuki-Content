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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTHKJSO%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T060852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAtW%2BQP3u6jW%2BykxTcTN63LOb%2FIvj1S00xUVA%2BxSxI0MAiEAjZLAiyWBhuOYGcLs2El3aNTMv4irDPZ54R%2F5twip%2BVYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJ%2Fu5tP4lC6%2BKKCuGyrcA6tgP7nZjzHuMX9geAXtFlYmb6CAhv8Yc%2BGg66wuDeeyrUGSnw4069Ao6IG%2BOxRySsqvfMDH707kKLqRHOLXHSkShPf7CbGF9dMwKCfeouq356pGwNjpp5RX4YnFbWMYjtoibgxYkKnPPshaOh%2FpC1Brp4Lil6nyw55%2F%2FKhfCbt3ifRyoDCmdVKV9wYd%2FU%2BEfoPpdeEkkvASuLht3K784p50MJrAV2d6D3OeYWLZIeyXN%2BAiMG7gZG0SIFjO4UmBqp21kXFX7fU1efkcnpP9Syxdvb5jjU5c9Ax7%2BP7Veg9aTsahNvZm5q78maseLC0LbQrSb1SdYsmpNiXmcJK0qkmL%2FbK7rK5qHvlmhwZ21eMUaXWRNC6euLEyOZ60ppFbgo6XKXSSTFFSZQGUg4fr68txd2qJSuz6GJu0gFCr46P1KIAoHiMMbt0z6MoOJCl1bENq6Ums1lJIAvM6FlwpWW77Fojl2%2BMIlAuD%2FPvxjEUUCguC9oI1EfDTaP%2BGvSMBn%2Fiqr5xNuHDuJ1G1MEOgXBTEQgWzU77kHJ%2F1prhAxeMhFzefvI81z9iJxiQB5CER1O%2Fhxy7LzL4w9LvbrXj1tfeYLcg%2FF%2B1%2BShoJ6GuFU%2B5PrN6s38t%2FUYo2l%2B62MNPHltMGOqUBptktOz4vLluSJhxwh19jZCvW3mTZXbHSAsmDLQYIWbZvh9iOnMoNP0VzU64%2BSQv5CsXFgzgu0yr02njvVx3%2B2Js5PK5Ht%2FysW57%2BjGF4abRuEF19iYoAY8lSMt4BpePyxGwPeEwX2Z9rIpQzTn56gX3Br9uxFh7i6U62DdDXo6fQ5oXyUd6Ro%2B11cHnvaqgXvABHPzuSH1Gfx389nmrV1pzyLo9P&X-Amz-Signature=075a4cc67d6e95c43f802edab4999fb7fe7ec4527c3065855459d7d5ffbdbdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
