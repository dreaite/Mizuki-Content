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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GMRKQW2%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T235931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICG40SdTSkmLlU9X3pyAGOcOS8IL2t%2F%2BSWb%2B8J34gGt%2FAiEAvfagF1rgXZ8ewV%2BcHjsucFg0Yq%2BdYRK%2BnY7DnhL27wEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCVLedfmhxPvf2LNMSrcAzMyTwM6q5aiPfE52eU4p3w3am9vvEH8RTk3E0FjnkBDG1YYd0pDv%2BURJKJu4qfI1ZPDoJgTctsRjSvfZsk%2Fk5FSl1gwKJX2IV98o1en2WmYkJZuXZUpYtD%2B0RcGsMIg%2FjGsZ6vDyj2FVpTRHFRi1EggK9q0wonDtLoXZCcaGx61AmuUAn4aC62O7qQ6DKe5CsAUkTVIVEKcsjH3pNZl%2FwJe5rTioGbuoKf7QIHP6C%2B9g3zpeX2Bp7FGHRaI3UW7CHpC90YTxGpyg4fMJZToAKxeddgZHqhKyt7Nj1z3swjio4x0ZIKWOx7LhGkxVgz7piRTvT7loP8c%2BNUItPgA5JD6Ni1Bf2tmFRF63cbOZHLRh%2FacYBkz87A%2Fn1ZCMAew7i3jb%2BIZEeN9shbbb1SerJP06b59qd%2B6a0NUFxMv5wBHHbQTxpu5IrXRyRXsq71e%2Flh1cCoEZIIvlKfcC%2F0y2kppyv2kcPzf3r%2Buy7gYF%2B1JYfLk8a52EBpfJTIHNussvHUN7%2FTiDjEq1fL41zQNDEH1zljoj%2F7NIuz0SNo25css1Z7mj4YhcLXQGOJ9dg3wS6rgB1RWo%2FkA6xCwz4zm1xTG9q3A9N6%2Fzu0MqUtrT7Xs54B18qCwUzH20Y%2BbMJOl7NEGOqUBbf3UNKewJg74PzdLoXfXp3YqFiVm%2Bs7WC%2BUwYsQdFB3YW1lVNqLYvno8UvOAAwrT7FZmhdEzh%2BXcTzZkK30sB6%2BxbcDe2SIBXRqnolBAYuK1GFKDCcXs2pZ2xjwe%2FT89RdbX5SsQKKR4p31oa1fbM%2F%2FYqKvYLvC02B1YpVFyb%2Bjb26INV0XXfqqrBW17uTNE5%2ByH1SVFZJNSrJoEh8vnHJRenVlF&X-Amz-Signature=207b16434bcc7dde3032978435bd55eeb34b7298771eed897c3c2f242485ba8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
