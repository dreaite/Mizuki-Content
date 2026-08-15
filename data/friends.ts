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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H6R54ZL%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T102327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDDuw4ASG9vad4kbELo2yrEeQPjUqoBymGKNsPM%2BfZAVgIgDsDkvMJK%2BH9L9SPRPd5uit5XvgLgfPYzz%2Bk6fIUDSq8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEW55Zi%2BSI3l1BNMhCrcAyBOGihuAy4gIs5sFS0%2BXjsoFh1tAIOZkcmSWsKRfKxx4MgqxvwfpvVTzmDdAOECveQ%2Bj5YZz5ozdw%2F%2BAIWaRCklDiESvMXVNE3a3R10%2F%2FmHJtrRfF1JnUBiwsbSvTNkWBLgPrODsemoLZRNTKZRch8SEbzhp6BCA6ctUH4isKrrvGyoFdTeQH%2FCWcTCk%2BDsu%2B0JnlgtFNcM7s2PmgCgma%2BuZxP%2B8PsVtHZvCtA477jJS8ngVuFPwJ6dSrQfj1bMc2s6LAIlxoVpjTBit%2FbU5f7vLVDIWeLDPdC4ujkk4hoLialVHv8vX52%2BQEstclz1Bo5Gtfu3qtCqZNFR2GL4ciB0NRqtTW%2BlKNGmz0Tk5vm1ilwatdm7hS6lU10Qu4ueCK7SAEOZQuvMrg79LRelPZ7FFM%2BmlLXe3M%2B5kHNWRanBKsZ1tjvpj0V8XPJarm8dmyvGopEX2xL7JGPjaLY2P%2Fc3q1m0kb2WwGKbn8E0UZ29yKkGWaoH644RLYpIARx%2F4riKIJIBhS13O4bRoBAlowCrisg1kBZDe1sMy5Ni2PqX6jQC7ncpEdIXqG0W%2FE0b%2BGQW0ooKCijYohnLyb5oxdOqy6J1F0jMX0AJTY7FZfrt3OhhHR8WgqkevZUxMKHrgNQGOqUBeuGV%2BLnhY2xFnWMQWV7C5fb7jzDTahvvhpuzHxleYMdvL3vV9LlqBTvQ2bxZkZZm57PuE2fzQ9KXmj%2BYUS9v0YG856xFX59ffsrFkRQSVuWMvSTarBlUZ2Inq6QC2eeThJzkTmTJ9MqjSHnbQgFK%2F0Rx78aA7QSK8LKDs396A3Cw6P%2BWVDLmiktWs5MFYjvicMY8EBdpr3rgdQF3a9BbHyOLsZoP&X-Amz-Signature=052521c7efb92982609e9a796ba5438733512a968a941561258db9b12a5ddf35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
