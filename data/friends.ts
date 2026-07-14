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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD3IO7R%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T201318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD0%2BLbaz5I0nCXGOkRonRXFkwi9BdkStJBkZ%2F3ullfNkQIgUZ7DEWkJbO0wJKrxQWtkKiPF%2BW861E%2B6rYV7i34AiUMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDKgW5HtRQYdwYViYXCrcA3tt374gyggH%2Fs%2FXzTQ4p46CeuB%2B%2FJywQu2erNQ9z1PWOzBHVkSmYZnjfNkGrx6mT93DXT%2FAw3s8ivp7FeBeP%2F6NFKq3PqA2a03YiVTQJxm4GIJc4yOyDJyFBhRxJ5hUNKZ%2F1rvVQ4FEday9NsKTyMsAvvc%2FU%2BAvBQoYlqqEy0FeMk1OtAc7n1LRot6kFlPEhbzdzH4BqanSsLJyjB3ApbXuJlGt0aG03wMvg54jD9OeRinqLESjvKjIbLaZH9sJWyEGeQOQBXAZyO5py03lr1cdGn7vLmEnrzIXeFz3W8GuGdR9q5U2vIpJWGofcfxW7vUUF2CnBt1epF716oqY6nAoBossQOyrU5im2o8WAuDmoyvovnhwbHqmfWNON1R%2FwjNUnZvrAWwfxAwisJXznEjM%2FIIuS4gm%2By84jgsrOdBOJSLBIGvPd51JIfSYm43JLFPpS7bnW7xzJLlDZduxfVjGd2N3c1%2Fzq%2BQchYxfmv9ALuwf1ZMoJjKYYDBQmN0qUNgSS8HbEj0qIQbVyB0ePzilUIIpNKas%2B9nEl%2Buh%2BDdzL9JwpaRl7hMZN7N3njczr7yDLn314A%2FkPTM5VLY3XOal3YF9c6qzWazqc7Ual93MzuPehD0d%2FZpFGr1mMPqb2tIGOqUBS1LBcr1tsjf%2F7sii5Xxwgy%2Frj4iCGKWqP82m4oR9cMRI03oOXWBIXeojcUUXTwV4AQIWUWp3bh7V04QvHyFGvxFqBYilZEG%2BUzha%2FeLODiA8JB5%2Fv6x2ttahbx9GsQEORxkbJxEcvxvuSWUAh76re5IexSWpbtZXJA2kjr7RKDfKhNURhHhlbz0%2BKGJLnZcOoVCG2r0iM8WQ2Q7VgC8Kk0TS3UA%2B&X-Amz-Signature=13a65ad86d99ea17e893d25673a1eb5d9bd9d9df94607e7f16a047207a045017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
