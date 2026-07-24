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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RTWYPW4%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T073222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDXHUQb%2B0UVslmE3dAhLo9SUo3uMiTeDECNptmz26I1tQIhALIEMo1W5OApnNQweAAxzRB6jJrYSXUIl0eGfNI5MlD6KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKlr%2F8eBN5Hckz8G8q3APVi1C5C8AERgNJ7pOa3sfTR9nmoUX5aFaNkbkVkNiM9EXuefzajQSeGxsVvc9lWr6mntwZkN%2BIQ1miQHS2W9fiNq%2BeVEnHsp7Re5MiiUmLcSfhjnRfPQrUOOyYb5FiJaRY4Fu8pq4ogYHR2s3bG3dtBm8zff%2Bm3mdcAilGXTxiLtFE%2Fqxd3%2FAuyoSvtgfoVNBtR6aA04v5yOBAeHuMFB0LZjVx1PAFhiTi7%2BY5O9%2FFPryzW%2BeROf4MmFwObRC8z0z8tzAdxoujT2rLQYUs3VKVZKOOJ%2FN1d3zJfjE2luYHnsYj9F1%2BItWFv2e3ENn8FiAtmqA2gSHP9DaCo8k9cJkV2XN1Qv1YqEXeitQkz73rN%2B3nFhB8%2FpBUREKzfWV9881%2FBto8OcbU51i2ORzyUKfEfpV0SGuJ%2BZLNoVrqsBlUYr8WQlMBfTfQkzda4exI3se%2F32tu2mED%2Fi4OnjCaCc72QM6VDyquK%2FD1EVAAxb1iXNCV9sqgS%2BTokSBLfwMvhtJphQbUQbnpbv6kHW1NKVk4KsoQ82eC4A2EcqcCwUA7edupZQw8FzP64gCaAtf%2FcG%2FTXrM%2BBgQb8Jv5m04U2huYMaDgq5V4vgaDMelkKKUvEtrXCgFrpBUIw6WzVTCH%2BovTBjqkAWCFGAS7a8WSpDrpou0Z1UKz6XTMuhK4foESNbBFw4IklLQ2xM4klNhLmJbwV4FYzZ6AWT6uBUgA7rssMpKjkOGhyh8iArvSKBAaZ5MdAh7iiGe%2Fn6ol%2Fi4vWK%2BTTmFGuNwYImi0aznIDjcqxyPQsfnpHzO1F26t44teEf7wY%2FBuZ9NiQ4oDt1%2BpAfR7m%2FiuUUL34COLBpRuI55BDSwVFS9aZs3L&X-Amz-Signature=50ae97f0920a5e372f9fdf432cc9b5856602fae65356f2d5da9f95264e97197c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
