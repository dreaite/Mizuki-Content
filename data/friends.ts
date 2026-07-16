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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUXGDSR%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T135602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIF3pXNo56c6x4c%2FlmseyoddmB%2BsxVXTxQOwUGt46a1B6AiEAvNj6ywuqAQl%2FUUa64KPq0oyOSgQyq%2FMDzpbXhXdjfJUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGRLNJkTZQPaS6OORyrcA%2BUvczr%2BPbeT3ubBJR0NaUCIks5gVx60pG%2BW4%2B4vDRJ2fl1hxAl1secfl3zFZ3DQ3M7km23OB7DZVjGjga08JpLoFBqmgV4R6nentEHbhZrujKWA36bBgH7a9smJVXAO%2B1%2FzBTFXHjtenHYCpMGK6qT3qiiBvwEBSnCPqh%2FueH57BUgBawSjctpOQqbBVTWkVQaNdGa2oiS0HRlpIEuYNfu6iw40Lzb64gDO3XqFSJ8ajgH3NFjyQNV7CyNBTeHFzMXSFji1g57Roee3XYtnuI9Z%2B89nJGbQ676a6nscpObwjA6oB6tJ%2BXEzXKVwKyXi%2BwMPJvf1F4%2BJkwW7XyOy7akaYGp%2BYkkkVv%2Bcnbs5WGfiPVkYQ8J8yvgZfMBWHlQ5JGS8gEY0gyNKPY8MBzIsfWbrSvhq4hvmDDhl1BY37qhnOzQOnfHPU89zXrjz3rR%2B5JIyey1rdbnI12TphlfBBvzva7O%2BdDSMlWF6KLfAZd6JapldP%2B%2Blqf4XzP6qF0YCawI9QyrfGYW%2BTBFPpxWNtOWyK1gSUjo3VVQd1AApLBzXcL1i5w9V1YypNxKv3uKGm6Io6ht6vNoGL%2BQ%2B6gFYIAcZxjl3oF8YFPTjt34rgC1mt6RyG0xaw5Y6v4Z6MMzC49IGOqUBykBk7K3m7VYA95FMZamE9J4nBVpLGbsqTcojC4WUK%2BXzqDOKQDocoQOO2SB%2FlWzx9ijP25ILGQKx1W3ejiMjCyUdZtzH7ihD0llmbOiWhC5FAf%2F%2BdMMmBPN08bMxc2WvfJK9Y3Ab2jDo2xH%2FqUTnA2ORRXft6g48HeSoVgZAZTwZPKhS8A1mb7VA8gGA3ol29OvHYe0zVxT5tQXf3swL28vFM18D&X-Amz-Signature=5ef5fcb27b868bb6939baa9006773e30dca8b47e5a0f34c16f6af6883cf625e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
