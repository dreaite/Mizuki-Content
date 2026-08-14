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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFQ6NUY%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T205039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHro6TJ5BpRhVbC%2Bzv%2FM8%2BTPYMmL1l9MD6AMSwSsmaH5AiEA5%2FdUfO319VBWAf9z6K82RuTtVaaNzxeBU%2FcX72Fy8QIq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLjjtbMRfSlbak2gFCrcAzfsPXMF%2FGq2dlCBpHDGJQCi3A8ZYK%2F6NbU%2FJ%2FAteN%2FenQUHgHU9fKjjQxvfHVXRpMWspzHLsuZ4NEF3kQnx05O%2FvKoRJXQ443%2Baz0uUrOtfJZis3mEky%2FKXvtazE%2FNtmULO%2FaJr0Tp7pxNKRl3rTZFJY3SCw5Os6WnPcpoUhagOKWqZcH34TWgMuyH8SUS7nVkjQyJVvdsX7vkryvo8WqhWlk5rElSpwHBw0IRzCLzz2EtraJ63%2FRBFCDHUmz%2B8wdo6%2BV9LC2YYcxs12ixOApi%2FAmskKHBskeX7msA75SODVgBbNEI1qaFmc6rMjUP3MU3lHam%2BfvV8ESxgXRd7eA5ZMFH1Vp%2F43Kb92accObQ%2BTkxBlv8it0VlswH09lIWQNKXT1MxUwaTfhJ895dBD2ah5e%2BfocKaOUCvf%2Fb1pm3AFI2KZPF8BKtnN0I%2B8U%2BVUFxXfcG6b5tR0QJpf9RN70wyKMtE5jnGWpdQWN3GoUwZWrfzTK7XFI9mVwcvygKrZF9QTYA%2BgQ8rSYD3nYOUwKsbGCiQtcNbsHXT9vtQr%2FAEgdHbFi%2FIudHwe8%2FKK5Ellpvs8rkj7zfLp1E4Sx6Uh1q7%2FWNRx%2BTXjHa26q%2BAu18%2BWPbmEdKspb3YNL%2FvMMfu%2FdMGOqUBdXXVzbwRfoduwNAuvWqsvppXWiTNCNlvHkUcW%2Fd51MxzenTiaEMu41W6OjHyws9kYeBkFKIp0nH%2B44TiSDU9kVKJqtGsZwN3jSjR1hKre%2FeVEkhBa22aj0BkyF9bshTKNDxulMxbURLYLHlBCqpd4di8mgx%2BBOmar3LxYrYVmPGr99GEvBvzWmH%2FGtYLkONKbneja8R%2BCqdK8l8SlQ2c8tQB3pOC&X-Amz-Signature=4302f5e30cc26b230ed8f99cc3e83d5542f68bf6410924efe1296c0329c20312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
