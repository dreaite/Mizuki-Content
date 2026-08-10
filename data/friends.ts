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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIHLMK4%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T074415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAgDFdRmiTjVEBeCM7T%2FQg2%2B4sClOvR%2BVtWqW2U0%2FpFAIgEi5c2hCNo1Iwd7DzivVYgpUBOp3IayS%2BOaW3yswvs9gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKJhLnLBVodSG9iXyrcA%2F4Y7CaiIIogoJq7grtjawDxraB%2FPLtwfS2QubT3D7A%2FLLG1IDk%2BO%2FnyCrK5avyE5F038ptD%2FHf9J9%2BljnaGfOU%2BrpsfJNK3%2FPYxTdFJGckDV0pAodg9dOy6gDAd7wjbCsgWLwy178LG4WW5JvQsesvgu652J%2FtfP6vNQ4wLyB7ZMkRlqqMeTreGmLppZrZwk0HlxXlD%2BW8vCDlqfmIU4AFZPY%2BCNh8ALZHNv98xYdrw%2BJoFTO5yPCFiQs2UFaoEAT%2BvjR7Wo9xD83UDgTcZ%2Fn213VI9wnH6%2BHIuEm8snqoUqnqyJC8AGTo8ECEkqptds02BZfiB1bKxrFeWwTwMz1FMdyEIIFXQdb3VTNdw%2BKLX%2FX494mZ3hq3uVMocY6tE93sTd5f7kxeO39fSh%2B4Uj77fvdH01eKxSHVCZkxCRTiHMTCjb499OYLJ4KLMxed8DdeXXX4WZxyq0f%2BPme3x0GSq%2B3ssaPZztV4GV60A8N8P1fjv6%2FIDaNdPZJ0ImflPKKhu5dTamY58WxoZ3I5kkPEjMj76WuJ0FNZOEJx1hT97lAQQK3dvpMAEJwERhM6c5gJUmggyZfUodN7ry2orzgxXCAazk4yLh7fQYyY9DSyes9%2FpszKo6q1n8II4MK6A5tMGOqUB3NRi7tXGSEVU%2BFDB4d26ZtZBSmRtwMy%2BwXi%2FQ0%2FPy%2FAjYAy64C6LdA7sD9XUfrmoxAe8PNiyNbZipWvL7yWieHah8Sq1FhBxurZ%2FHG3y4Z%2F%2F8wvzf%2BLxGf9XiWn57bgl588OKkIxhAhWkcu6qu1vVvFkeo%2FfPuefaJrvJtfVnhA5a24RLOEb%2BfiWErLhdEY%2BI7KAreUwbNhScK5hLnzouVSbtPzh&X-Amz-Signature=cb8366f177dacb5e7288b9515b74b50e2f2ec273bc88bae8d858c4293a6bcbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
