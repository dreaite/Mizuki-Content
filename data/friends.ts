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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YE7IGRZ%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T170251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDbVljGJPepsEVhVGUlN%2BIgy44CxyHIwO9fg9HXmYFoYQIgEFFI4RmqyxB2QEyqWA9f7iZ2nYj5yrtrTSCVuqNcxNAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJHP4klcumme9D4vLCrcA9O02SSjGybHvpHhoaADj2hXscPLPY19I%2BYiOEyOX4yIeQPh%2BFXJEgn3JJv%2BRmQFp%2FkdtcguY262T9%2FVxug1MvA%2FhFQcDdTKUYHd5y%2Fnw02KDCdlmCAz6rUJXHwHbFs6RUFAJtmh242xRwGp742YaKxl5V%2FQnViNnYT0K5738NeMJZSE69MUxzXEcyoQLQpDMCGoWEyJc5p9DuFSVN22Jr7SBDkHbH%2Bz%2BAoGNE58BZZBXMyJyjWVauVy%2Bm%2FUcq6HjuWBYdROLVVFwbylhTT7p0x4bRX5XQpKtq7JMcNUusRytgH1ljmWk2I001OaytJIzR42D9gEwJUpB9CZSKOhPuVfSL%2Fwb0HMwJKr%2FDvLQFK2ErJYKp5VstHPHgSjcgOc224teC2kXhsN7BDtFklEHB720hKvzpxcs02zHer7Vmq0b89Y49wI8%2FJWL6FiHSrYt9t9YSu7lKMjq60lBibnUr5UvuYAOKzmKc23JcbRRwKK1Cx7J81C0XawJCldPoh%2BFA220XxDyPaLQktZCERR7MOnazOSmK3jno10DDJ3JOyArBha8CI9JQ8FJUiu2peV2lNEAo%2BB%2Bh1qEWwE9PENwmua3mA9kf%2FSB7HveBt1eSG41EGCLDvso0EPI0aCMIPomNMGOqUBSWTM9uLZS8mi%2FHOR4q6KYtZOedlSN%2FmNXD9yQBYUGUKn61oukjEj%2FN2zclJW33TuGJnS%2BSFyS0BZ8cXZ%2BHhfJIUlrnw0ylEFd2fMX%2BP3j5724jU7mm7F284n8eQ3dLgqvue3yg3A0iQ%2BQ4ca2hHbyBkBo%2FCBZR6o5n68iJ%2Bl4LZdwFrTxqARQuahc40fviovBIYyGKJbvR9Hzeza2ZJAw909%2BZ%2FJ&X-Amz-Signature=884ac47868f5e0a3ebf83e296e36a64fe169d904a6388306ed1d5bf65c132f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
