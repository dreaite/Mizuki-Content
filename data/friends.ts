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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TO367CB%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T160355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFwnn039GXTgNKwpeUOAcVN1bXJUBc%2FFVHddrKMyu8YKAiEAxkEhWY0Qrdoy8a%2BI%2BHFoABguMNTHbKu8qao0zYjzcwYqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl5SzCpVtlv9%2B7GGSrcA28YTDMMnXlLfRWNdZ6y2IioaAYhdk66V%2FZ9Z%2F%2BzAqIpV%2FnhgYbwT1%2BnWZhGRYnnTZzTMKwO3f0L32IB60QFXR81Z6EiiN2RtpkN%2FD0A6sNlt6w%2FdDe%2Fxp%2B%2FefkH7PME8uK4iYlI%2FmkaxqE9VEaXIjsWnV8ETN3B4zPwOSl9VexxD8TrM4vQUIlEed5du5LIByyi7rmzcTcR7Q7ZrqQ%2FEb38qJqh6G%2BofPWwOo%2BycIXt4VjhRvse7SXS6Enwm9W7s8W64EObHNR7dyWGsw8x%2BaJ%2BRsuPoCrPB7kUfMDV0k%2BVeyMljki8vXdPLJdFEzds9aHqclywNf0B4HheRCmej71sfWDTj1EivBEOjHsTbFTqnZErqhuy6y377rAH2yW5ftlRGzV6AHua5liRv1n3inqJsLGyjUoqMvv6M4v5gQFomK3vBxozTimPdiTIsWs8BQB0c%2FppeMnNwy97jmzRj1ngReiR%2BRyMxIdr7cDoHMdwRkX%2B0QHd0VYkKF5OBizH2Opv0vydKpVjdL1RwfCxUwsUnLffFNSkBmvVaayfStLFPS7lu67Jqx9L%2B922LnudBHzwwuJ5lLzuX8KAVt%2FoEL%2BTdHC3J9ITjp9NMDSu2xw18BYJVROEmUr1iVAgMLqa99MGOqUB0iTHKAaB2GJwpaug%2BQ2XMIgboKVhjT65F7wav32l0m7Xl3eKs4mTwDzEyCoxPC5EOFtcARZOWlOtwVE%2F2mYYhcN%2FxpchyU6rWdNPNxCOTAnZGYWcfgIctMjg5mGtqRAnJ4YZJ5ksdfC22xt1FWRTB04gXtoL7scY%2FjfYsNIi3Q3VexHKIxIwYmYVShjLPf6EyydtJaI4emf0D7z0q8JfVxblJ7Br&X-Amz-Signature=6e5b44eb56b38534c2735e0e1fc8a3df895c26690c990b56c5109b085414c4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
