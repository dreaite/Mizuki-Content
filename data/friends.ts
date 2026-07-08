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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRXCA25%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T025113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4lwZXWqRj9eNRSRMRboynV7Otgc%2FJl3Nbd08zlti4dAiADSXTtFQdIpQ2RbhBJYhyCcIuYAahuimIYiN2itKdFdir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM6vlF2yq4Mlb3T39%2FKtwDfJgWuv8U4mFGySocZ3yaiLtzZPe01QbNTec5mn8w27UmhUoVghOGsXJ1EGFPaYw09JQD1Hq2YSo%2BkTK82v4bamurynUO8o%2BE7W2DDflbINkN3HBrOic%2BAEEW8c13Ft4kid3btTTXgTa%2Bp8h%2FcxqCbBKNA809NtWscBfq%2FKFeejjRSbiGZu1yqPGM4GWy%2FW1BFyDHLzbyyzByTuCDIzCbeF0OGiaI97ZntyqmxbFBNqF%2BAnALG3m1h%2BOvwDf6uMI%2FiTuGFVtb96w6%2FrJRAxZgk%2BUMXk3cEIJRTzKgPUIjh79WSzIn5AP9NMso2viF1iS8t%2FQxw9aIVUqkWfu1pG96GVxyXlCbKgxGAmXfVPZdsminjfN6dg%2F9EC4QOPKldvY2CKIOj58wW6EK3pQ5YG6d61WOWhzL6qQhauK2A3NiIqBblq0ME5AookkGg%2B22rby%2FAD5JBsTfKWoPkZhZmQ%2F5b2BES%2FAJVY32%2BrfaPbg9tOJFfBJne3mAwc0W8wvV%2Fu52L%2F10RiZBP0eTy9VMlghko%2FEMYt9GFcMygH7QGLQCjDY%2BLPTcklSWCBvkzadi9rc5TNvAyyonDgnwF7NnmLOaP3Xao0uiJZj1oGWWoU9TbHPFHlEeuXqyvoOacNkwg%2FK20gY6pgFhEaKPFj%2Ff9CEnlyvfAE9MXRb1SJGEfhq%2BbJOCe73TiJMDxVuDu0BWYTenJGw00VTmq08YILpvv2IU15SDC9SW3TnnsGPbsoCW0gmZYcdAZX0RjsSw%2FwuUF5jUf7LKKDcCxbur%2BQxMiTo59YGxxP8%2BnNYsBM6dTskPrzFA5ZifQgE%2FJoGXRjyYzx%2BU8dH2GlV1buAsYNiypy0PvAC5uohFz749Nv%2Ff&X-Amz-Signature=27b6fc1e2a1976daf0897f9dc4bedb214e2412539ec4901470618569cc3f57c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
