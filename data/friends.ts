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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHS2LWY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T065532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCviWy82%2FKDL7lRJbyn4RIoDINYuI4sLvexjAn30J9VzgIhAP%2BaIiXmX2I6BYJlqVgAdvbdH9Pa5sd8mbjHgwREaDwOKv8DCGgQABoMNjM3NDIzMTgzODA1IgxFUvbfxK1UTCDNaQYq3AMh0g%2FPHTfuHpz0YqlFqzNETQxakIfTpXcdDr3aLbZzdf%2FZ46hu5LFzrfpRsASZzodW5vvvCg5%2BwQ9wNmRs4ZBquL%2BqJNkjdtI7rI1ghqjlwiDjwCc1gRD8CSsuuXLUjlVAxyidONpaqcHkpx16owBxuHEa8F1CeD8DLm0b%2BxJ3IGCb0x7iNKjdYQQ33zT%2BIcUtL2twg10LSIILTMPtub4SVChsPh2Z5WcicG64sddllrDcQT%2FUYQeaT2AbMsG%2BulRDhG3axoF7ZKfqToepvGIJbGGGCAKaXPXxN5TqrC4A%2FMvFZr5tu5j8ALC4ytf%2FNTHoq8KUSVNkyKJv6FSRhuNlWf1%2BOd6lNbDKysq%2FgS0WaOEcv10YeSyUh0zbqy%2FlotuXMPKVKwhfbMl%2F3%2F0W8ZT6RK3zN57Odg7b1PYFmYrAl37vsZySAomEwpqaYPI1hzYWUQy2Icagn9YYE44cceYgLNUsfjzaMVD0EATV%2BfNRMUaCNxCHfJp4nnG4IBSRPM%2FjGsBqzeZ4bNUIHuBvgxLq2hYWDbZ51zyorEVhQ54v1RWpW%2BL%2FR4%2FjNG7gtkJUSiYi0k%2BqvG%2FU7uh4fXtBHp2gcfu0gm29NCfSlRYRsy1IzCngZvqy3n3oyc4HbTDHpNvTBjqkAaRSYeAneOvhxFbgIOjmQ0tAbZoXmDbt8UyQ%2FhAo9Fm0tjamaRmY3Mzmv6LVCLN7%2BI77cHZUxFucgt7sEoXv6gVd%2BtAZfcJUcBI5eYvVAOoU4HbqJRCqzCc8uWQQwI8XYVnFWRorQB2QF8CM9Xneq3Nca91v%2BDGDzgiB3kIgk%2BFmfMbSMokwMfPi5gqoMPOWtpSzP1m6KCbPy%2BEYC%2BYmdp0wrkie&X-Amz-Signature=732c28e42cb9960da027d42c1263d42222ed23a3c85f788d49afb2aea7aa527a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
