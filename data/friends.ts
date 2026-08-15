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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZQPPC3%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T011827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIB8sIpi4B1GorOgAlJdnUMupk56OBZM%2BbkmDZJp1J1OeAiBHTMNcHTFiIsgyNHP7mG%2BTsQmk%2BaJDHWC8I9IMeS6xfyr%2FAwgIEAAaDDYzNzQyMzE4MzgwNSIMJNQna%2BxjgxWwSH5AKtwDqWHtpzlceur2tP73BT%2Be1SyJX%2BYvzIUgwdmi1KzG%2B19RsIUlwPckZnMWy2uzV2YMXbWTBFn4EiiDDnHWIgDs%2B0N5zjMWpoDz0DMUd%2FWdM4vMplUH2n4QwV7goaaSzaiX9bphrwIM5FRhG2TR2HEZri%2FwLilINMTUxDltxVTcha%2BWcPJ8R7315Nt0jERNL46N7L2xwbG8FcBO8JK2eDEURYdirnYpUbN2kPizZuVALi8%2B75y6xFMQ%2FDn4AryXI76dUvxnOR%2Fae5TvyXJWUvkmiNZcUCVFVkk6TFux1KR5XFq%2BknZ%2Fhl%2FrKPZy8GS7KYBEP6FK7OKmw%2Fje1XhdK%2B5jC11h3pohGs8XniWywULjxIDYTVZbgvlD0Gw4OgmpumKFlcveq%2BxaVTEoTePAooAjoU97%2B%2Fo2PXXbINMgl5pqvsSXuCpSXKB%2FQ7O9S2AAdny1ZcaqdJPEwkqzQALCZZX1FGc%2BA8ZZ3sdWatUzbKxWQn7cmvKVmt6Aty9QtzL0z%2F%2B6kxvi8BC0l0mYG%2F5ViquCz%2F51068Hmu2sQn8VeqeC1IK%2BqlexsRVqbPXhU%2BspR4hUyyolKw7AjkKg93ZZLvaRD5EzVxD3OgH%2Fa76jQnrpf0wdFIox5Iditd8bdnEwzcP%2B0wY6pgHefcRcq7GdQRYJL12a5H%2F58Euq1h%2BgxNQW5V%2BacKOUQcR9IPaQtgjbdPehsxhZjaIf81Y2oogBsmDSVleAsa8m4wwGU7b8KssN3xRbXhwvOomArVqCXRdZ9p4ZV%2BjeOosBaLDDfUs074aLGuJ9kfYi3q8kPmKz9aXicHIX1i928gFwPqy7r8EGPKEmo4DuYQ3K9tU8xYJ3dvkl2vko%2FP8s%2BDk5q7WM&X-Amz-Signature=ddc45f25b5e7c2994d42c9acc16774927f3dbd2a26b56ed449fbdddb3dc5e979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
