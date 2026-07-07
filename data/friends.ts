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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGKHCAD%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T195743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJEEZ7s0ChJ2SvxmLbiNkArqInwzMaj7Q0nt8w83EWQIgCV3fDOPpc9CEZMZLFoY1jYOJcotZNQAwm29v%2BLBKsnwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKhOrXo%2BNMMt6%2BCotCrcA56R5hDnFvYnThDQ5xKFVA0VhukiPy83dTlydxQ09z2Gz3xCLkjumHh6dRpe5ShvhNHKZIaEKPY30rjt6SJLJdsbF9wkSkRR%2BMJgCMV%2FJ0PYgJtMhlplOHnlcvo9n85NBseJPVHbBPbM8tVt%2Bf2N4aahwVv%2FMqrB9IwvPlPS3KAggsRd6eDSjeey7FHbN%2FIQtj4iSpzx%2Fe13kn31qQZ4Jv87zuUEZHGcd9fmPZenHcAapMJ4SO4L5XSpJscOcdNhWT9RsQka7OUTFl%2Be0hNYDuXbqRDdFjHU75SiSyCgFzC9Olde3W5qGCfGehm4hy%2BTa0IFtt9xogNe%2F4tsiAhOmshG9JkwvhW3jyBms4Xafbz9mGzjGJioXVnFgYoHztdolEWtPKs3UmQIlWT895CgLi8TZ6LftvMUleIhkspjsgLpj4GCKxRkAF22nPkLH37giKjZCXw8E%2FycMt5ROnjYqOJ7OPJrltNHjgaA99%2FtGd%2BY%2Fl8YNdbRsl5Yyd9X54tv98YGoT0l6ewQWP5AXAxt2tI5D4btO00HrFRkoRzfwGQZJnKpMF4B60dgy6Wx9BGI8%2F7SKlh8%2FtTawRBAQMffOlJLFijM1lMOTrqPOAx8jvS4EhnVWmrqTQa3eKRlMI2ZtdIGOqUBMfzZRBYefv%2B8ROP270iOfgxYxFDWS3%2FXmHsvumPIclrlAnb091azqCUp0SlgfcJDK7uBR45dEDfq%2BXE6SvY0WDOxMzPyLUFJelqvmdnM2jNTzWRFNh9Fm%2FR7s0ybNnw7XUlZNQsewCmzy5HIanhuROIRekEIhn%2BQ8v7xdYsaOcl241FFMRb0RD6qGkBGd267xc2j9JQ3TvXViF8wZGHWFG0C07dT&X-Amz-Signature=ade5b69a834287695100a3a863d250c9d1ae0debd7916921f663ed1b6d937271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
