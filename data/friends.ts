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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZZ5O25E%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T162742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIErB9eHgwDcuqe5y5EzWCuqG2yTXfOFuqwVCq3qPgUH0AiBzWZqukPL7uvCLhiO18iRNI%2FtyL7TeSXfuu7OG6bfmwSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW7Yu0qkOw%2BNqrfejKtwDISQOe0BHOFcBrHXggntTK%2BCeHXUpPWKLTGiaY7ILWw3Dk8FH8kelxlEZnRukaWVD1F3dkcGDNLnAivRaoQPgrVQUMvUr%2BOq7zeBXkyRSJedtRU3vPNHkqcoRRtHm35%2FERsyzf%2BZHufeW2CldBoAspLv7lVhMJf2%2F5oBjH%2BE7KqVfhZLWCqqkcyppsWAXa6hAuGKDSKYHEb08FdYrdDucIwc0zOZBvsuHHcSjMKyn5vmdO6PLVJj0YQqqMKXAoDV7n6gWzLVh%2BSAN5CxF6wWHJxMetSvWg%2Bp74ci4GbUPRU8yJ4vbbz7MLws8u7HddZEW0eDHGngWjrfXHncVqiBfLUuw2NyoUykdnWR0NKhmUV%2FRfwP%2FfZMbi3SjvMg3C36w5v8q9Axo8D0SJ0AmTVStFDpHGZmEMoEZoJ6D17eL0I9T%2BYc15Vb6U6xfH5LW137kYvs93o3mykYOb7vP2rFbJfF%2F%2FGrfGTWR455drz0fOG5rBDAgJYJTckhQXAKdNvPhFN%2F87MkNtG%2FxC90hTJEzOBOQUeCOgWbhvaHiv%2BcstSvPD8eZH67Kkaxmzj1uWfetzJIFDyMPNwGT87H3qf4%2BMPhjdcV8POfYDOhTcpDQwL3HSUvwzAEya%2F6mFacwndqI0wY6pgHhfLuHLj1i6TYlcqYck%2FVeThk7eRA5goKJyLIsTRchocc8WhpdPME55j%2BniKfd6y3hKA0WvWAl7I3qzODtrTD9e%2B%2BsGSLkuffp%2FsutvXK197DG09En9ywAm1Bjnc5gll%2B44iRY3dKeE1nPmrCuo6RZU0JpRgsz1lHo4iblws6SDtk8C4NPygPps5K2mVAWEBzh6c2dfCN%2FiCUz3RLf7wW0IIdk27R1&X-Amz-Signature=0b922ef296fade4882d98596fa41c89a3520cc9b2d4565ba3215f55297c05aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
