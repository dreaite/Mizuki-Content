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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UKMD34%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T093749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAVpUKrTIWmkSgXOs5uO%2F1Ea3fP6EJ8PeA0YkZUucgO3AiEA%2BbyTqV661Ia6YyFDNJ5AWe8JefYVbAhxdbd0Wuk0Kswq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHEhRvv8mf1WQQ2JYircA8ACCHR%2F3VvWTwDbVSxpvjFQW6TieZ3HhXGTL%2FheHJQXZrwzoTr%2BlEkw82rU%2FYne7UolyBUPxICETIHWmrkaAGs%2FwtU5LOk5FXouyCAhF8LU9WA49bIODvSb9W5rxt7tMQxXNbYobhm6XR%2FMeHfxi7YOP9UZR2vsbfYTWpNGjYZ0SdoB%2FtQ0YumbxEpOF1PYu6cexO3NGypbnGgGtQc54Beg0UYlIbRYIdSvHyDzVP%2FvYcslVf8WPxBX1yGnEbfUQRrPRxTXwg1SylLZeQImkI3SWU9U%2FKlEpiq1MxPDxbD4f1XQG32BAzo9ldk1XKe9ZI54wnboA2ktzZngeiBj5nLvk20KD%2BqNa2FPpHNpw2sb8bBYZ8MZ0L2kY6dfFFEQZW6rmi2TztU5mIN8AGIiE%2BMtQpTZCGanRwx3MwhCfPRZw%2FJg6mnBRqWQ%2FA%2FH3sMGa9jsPEIinYw6yhMrmaFOVr9vSsLt6wONF9Nkvye8rXFNSsJAgAPyr01Qnp39IGnEBuMrWXEpF8HOA2lWb2VgnHlkxsO0wlnTH0Vo3jbJcdv1AX3wrlKwQrvZeLi4uecy8Oyb06GkfuWgs8HYyZShWOqtL41zQuEPGILAXMVZCl64Fqtsv%2BMiNaG%2FYZ%2FQMJ3GudEGOqUBzxRpOnHEOUiMKu8R8VrUALwPygRKIuFCluTclgZVmx9s8wS5kIk42qvD72OQ8SngFAUHdGgMV96gmPnzXo7vLo8Jm33j0YSBqBUnhwBglJgqDoH%2BEfG%2FaYS6wJZld07D23ggoUcFrAJht412Um%2FU3LKfzAPittD9akSqvDIVcg5pJoIjNQqGjbrNuijPDMowu7rDVCb005HXQI9bh6hQEC5m%2FfsZ&X-Amz-Signature=748ab886e8880ebd16621a0b0a49d5873b3d222318391a237110dbbb9b1e9f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
