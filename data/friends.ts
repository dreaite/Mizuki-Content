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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLFCFUCD%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T050257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDzsG4ZpyCc7twd8a9zMw%2FbJC2%2FLV2fZsfheNnHGPkK1gIgLykVF45viBaobZqzZniQpPMXqT69Sz1NUdj7c1JKS9gq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDOTcAZET59aFvr7LxCrcA0CbrSw7KjnUBJzGS35bLPTED%2BkR4ZAMATSDlG1ZMM1v%2BAW2FelG5TQ4b%2BpIm%2BLUH9n%2FsTOtKFpBnVTPdXvHWeL8aZx%2Bsq9CuQDcI5gJRqI4wCKsVWghdCSImkKGj1npmifEe1%2BxZot1m4qnwaC%2FQxvoj28dpC%2BUQhB9zoRPz6H2%2B2cn08ljBuKMmr5KTe4n0UZWoGxDUBQRaM7kQESyzkFe%2F7rW7PFlrhm%2FGvdefrbnS9qp4hG4%2B3eMQ1wn%2FQCDiM1RzBAZgNQLyvj7kx11Va7xF6VBfW%2FvDIqZ7vBBoYPVEljm7Iu3q252PBwiE5gassLs9IuG0ot59YNFnm2UX6B0rNObSafQflWzeoUnUEVgc1dUMeJ4EoIkP%2F2dVNrdW9Bb5F8RAxJ0cV24VnOgQy9jMsI%2FTcZdexLIeZn69sU3I3rP85%2BN9OXgQt8x0TcoOM6JNxR03jh0Fvjwp0LfokjnvMyFXMogCZl1Zl95AH9fnDvOSvDQLarmwlDfcGWaaVaRpaLD5fN%2FNb9VaJFplvoc2xb4ttnYwq3yK8ViD0Aab9FgmWm%2F6ZH5fPnQHZOrtcCnyCPJ8aYWVy6N9bL5kpnGk4xZGyo4%2BxuvwkIInBnjTFUjuhimyL2zihcQMO%2F759EGOqUBN%2Fm0Od37N%2F8vI8KGwhqZbEKH2EFdZqDaXYatSHp5Cz5aiEiAAsTO0RZMTtWLgs8THvT6%2BFwcDp0iTWY%2BQfRjVGBGRaK72bHe9Ura1pWIbf4v1%2B4pW8pKdR3SmPX7OWk1vnuNxpd2YDF0r0KnbECQe%2F96kGElJiujoh%2BJc8hSV4qTr10dLOEpCudBbEdr%2FLfk8BokD1aKRCc0HUqjWgZehYn4L59e&X-Amz-Signature=c3dc243cf5ab4251c2559ef5749c4eb08ac3899e9a86ee646b5438ebdbfcff87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
