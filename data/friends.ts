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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMD73SBE%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T165159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICx86WdpSPvHpKIsC6dl88y8pZOGPZ%2BstU8eAQqXbnZpAiAISi4VN%2B7iIMisWg%2FkGqJaOD0PhqQpaUqaDhykWbndVCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMsCpAMq46bwLPFAIaKtwDn59LdKQBDXNSYJnn8kByTPQTsqmFmYnIHAtlyXP%2Bk1NVVfl0QSf5MqDp8Yk0Y0roBjAnp%2FkP15YWFiwhCLgOKpwSm5EJihy4No%2BMuJzT4HEKrMwdO5GqW1RcTjnNjdWQ2XDUYqXw%2BGDee5FJvkhRXIHACCI2mxo6wJ24QBlDOydjpzSxsAS92rcz2eSz5xvjDlBRrsofzWMNTZbKvS6mQ4B8Wh59tzzP0PSePYloBZhMXFiz61iPnF6QKuyHNZN9XrfrwUrCyK%2BsEHAG64TZ%2FRdgG6NlmQl82C2bDwYCxl0EhLsdytpWUs0DcCGqFH1P9%2FX5tmih3DD64co0tGprtEuA6v%2B8iYJBEFjNRLffa8YOFVEnW0%2BkWpyR4xuXOOPS1CddpfVotQi4yO0IS1YSQwcDFM6Dji%2FTIu%2FjLV4TyZ5DNvQzYFC5mUpsVH5fMlDvv0L0RK9%2BoxvbRdAJB4n6AUjmhGCkYCLnULWc1%2BxTHE%2BA2nPYDVsn4yFGSiiWCyue7ZLGGVJhOvwZ1GWOJKElfPmzdXmI6oe6%2Bo5l1PohFo48dmIYS20mBQUJlUG9%2F6UNEnb1QdwA1iwqQbvDP19REQf9XlCw87QKvysUuOVwr8o%2FMZNmc8kA04hX9now1JHI0wY6pgG1gI%2FY1Oc9uLBATyiOugydJxVbpqyZco3woFkNOXGAhoqBehibhMB9GX%2BL%2B9XKXAcN6U%2BmYRfkF2vFJDDP8hSrjZtfcQueyBMVp2ZpbeyYOVS0gidcAwpkQD%2BnOz2e2J2gw%2F8%2FjgJxo7eir0azThUjvsbZlxIIECUX2mNaiIC1Z%2FFPRI2PwfUaT1iUCSxYkn6UDuqFnzZoUVssTtd2k1x2Hy%2FxM1iE&X-Amz-Signature=85d25c749eb4266270efbb472243413f43e2453e8fd696864de46f03e9b81425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
