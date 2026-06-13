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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NQ5Y34%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T140340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDIzytm1WLImzp0ZFeecL8SRJ4tjB5I8eKJ5mwiJnaC7wIhAKhsKRUdmjA4ftSyuysmzAVRAfH20B%2BrWKR5UB4iV89rKv8DCCsQABoMNjM3NDIzMTgzODA1Igz34AQEkv1picE%2FtKoq3AMbxkcAHknibBA4XXs%2B6omNVo1IheQop%2B2HLoQkMCX7Tj7lTDWNNAQCMHwgMCmc%2FwW2hfHHhbLs%2Bq7tv0FIxyuNJ8xlbioOhyInc5jR92ukhXry7Xh0RU%2F%2FtZEGgmlWOvI8Y%2Fs4jYGKMNyh1IeO%2FDnx5vzx1UvUQlQKhpYaTutMirHf%2BeGAj%2FsaLH02auixUr57yfzZj1GmKvDe7jCgrNiEhTqD9ELmHTKC9q3ziYehYpOntamoqz5wwohQy60%2FnnsIZ0oM9brv6p0%2BRzIZ7cvRW8N4777Nab2DfnmgNOsgxx%2BYM%2F0ddQyvYH9O9xrpDQsn7%2FEEGUcWqv013mnBqXHp7os9XJlEChZLUu6rNEueV3j8BWh0mFgyCXeB1pT8i6IfrcYDhAHhxb0%2BhWWQvZM8gZJGFjHrbhghgRox6u1wO2696CZ7FwTLrfWMHmwX8M7OiRchWIypBvBV%2F7b5nrT36mcaYeqfBdLTwWoHG42IWuswreo7OGA3OvslahYy0M1%2FlSwOBYr2ODBb%2FauzJ0UPminUEip8q5YaQUooIlT43b98UOKqIJ5MO1bmeBoCdmsDl5BAR1VBrbmkIFXzxs6t1B4H3ADrbuhQjnWRAe6WtYLRIkvbYhEMiNGoKzD%2BxrTRBjqkARbadElEBW7GpqDQKOgOJCNsAiiZ9VNwS8gmbuwjIpnIH0ajK81hgV8VtA77CNbFzV%2F3t14FlyOJrEg%2FP1YGKPrAFm85B8B8YHAl09e%2BezvYCoRCrhPKkoDxF56zjv1aPtnuGpncSqpltif80n0uG%2BsdqP4xS4CO%2BG%2Fqi5uvxjnUAGKjh%2BSstXP6GeWqpI5hwDJR7IWXPhCzF%2Bpz3kRiNApG2Sd1&X-Amz-Signature=f6207d9ee023821937db02516b0655136143664639d908e2335416fea838d1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
