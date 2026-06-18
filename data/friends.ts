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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPPT346%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T193028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPvRcJT%2BaJOiuBZRfxWJ9sRKAWJeIeUW7fsQEpylRndAIhALFggim7lDG%2FSnlMSFeYwvkWBGwsbD5YrPVcwXnt2BdNKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz54X3Y1C0SgEdTV7Mq3APNuPiqcOv09FLFparkFn77V6HoJwEJA9%2B6sfJeqPIHZRREjLvj6kRg4cnllwqDL4dOCmetGfSli2G9YKlvwcpdt3W5Ux8uRiWlaFU3xbBHG%2B3N77JnCerPeSjYVQNUR%2BoGi7CzVPAIbwE58gSVvnjWj1uqH3imyIXdwm2S8xP%2B4GID73BU3cl0JaIxLrIw9VBI%2FDlVHpUrRUrgorTwgyFubM%2BWyT7GnqQ8GPh%2F6yYjEBG5PjaCtcQZHUk07DhF7lNjRjiklIHycHEIoXIqvoh7581miJm7gMIzfrEp%2FZLs6LVMItWEe5cD7wkDi2mVvhr%2FV69D2uBs3CqfS%2FKlY4v8Scm00UkTv9LB6oHcG3iwFUma91iPPw%2F%2BwChyz2RbPbJWmd8J5Slvsfj1qcX1Y7fiUT9t2ApJuxES2aGBkwhrWa5aeySCHPIVCqSTvTsd2iQoSEJVjt1MSyr4NDX8AvTpa0h%2F%2BJgiFr6KwUpjZqaa16K0YS%2BM7%2FnkmFNGZH8qrOxwCr%2FScxU1gNZyxEnnvwg%2BrsnaJ7aSyzu%2F0eHV1U67wA8mA4obxPFdXsFt%2FkkcNBLwXUkVXiZlGR06p4X6b0xQtSH%2B5XvEazY%2FSwxVWeDV6hkCGMH7s5cMRIPwhzCAg9HRBjqkAZwLcPUSY3cl44wVkpR1kBgd4cc%2BUf8y1XZifH5XVPKaWxKuvCoVNtlIIVdOWK7zPsAmkO%2B%2Br0X8M6Xq8nDrUxt66RZOH%2BRL6MG9kRkhOQZbKs%2FLqMfkKE6V8klB%2BfweK6TKiw7lcWu6CsTZRJ4MJG4ysBAZd1nKJPYGCmekaNczumIurJvjxOOkSG%2BxlIZ%2FN5eOsz2lwWXpyNxKfbY2YYnc7QLG&X-Amz-Signature=8c6a294322d666a89110405583deb097036eb6456bfbda5a91def28e949cec04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
