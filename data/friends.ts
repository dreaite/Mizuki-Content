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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQZMZIW%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEw1KfN1SGKWqbg9px41b9APWkdEiFCaYa4%2BrrSCOy2AAiA5CqjwDiV06NJiWmCa8RE%2F37pIunsdF6z5NIxo%2BVDbfSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbW82Evz6hBBu%2FeZiKtwDoz9q038TTVgKlcuYmAM4JYyNP8U%2BY6YltG7V0FvIuYipG%2FktPkW5UDBcs4uuiN9PvixyZYH0Z312YZi8FNhEdvQ8Mai45LjBnf%2F10RhYzjbqh4UKGVKlO02zvErW33qFpo84wfw4%2FWps5tFJkpTZ3bchmt8wl35rNpKTfZIo%2FmXR7HJ5CIhqyzOXtGIXwOhpJ74ygno87PSGq0TJySP1FpXPofig5TaU6ei5VInS5Y5dZkLDDOtsrEhPtyxGSA5CUrFVVhaCOnKu5aMJPgjqvEp6zHcr166THWgufXUNZWZRcWM6K4vePSlCV9RwbUbyLKBxlgJo4HaJ4U4fqIkUNuk7eaH16r2KB%2FA9E3tIDaj01U0GFOuZyBqOt39hm%2F67SPUk9U194K0t3KHhhYukS%2BbzuG7hJ9vuKxxfaGHvVuI0S333wCR%2F9AWlGE0V6%2FG7ELKEUXF%2FonM0C4xc%2FqbW%2FA718BFqdL5973ny3QP%2BGFnSpUQyWjn3dx8mMSA1sf34h7SCxWtu9lg02tuJi6CcLJN9rQulLxn25obSnzlPrf5U78agoSZybfKyR8qYluqjNCudCRNS9MfOPkV5%2FfXmG97L%2B3dZX1x9eGIQ4apbuHVUTxfBcEY83XHRxBMwo46J0wY6pgGfnOl3ZwEa4%2BIQRNPCyYaDDHN0Tsx3CXPpg2wGFi6tIyNw8q9lpGBSjH9RpVRIFE4lrF%2BxAZ%2F9VIItGWKJ2agpAZS5OtTIQDrp0bkIEVKWQeN7Lqt7h0CXUCMNPw3dScJYqzkum0k%2FPGAAHucHQzYnp95Vvj872nYj7I%2BIk9jDFDReoNMrqwdWZJkdgC6AKIgkUJnbNq3fCBA9IKuE13t8z4Pf9q4D&X-Amz-Signature=263561ed26a9edc82f015daa94d1deb25908f9b8cef1b4f22b23fe73e10a4b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
