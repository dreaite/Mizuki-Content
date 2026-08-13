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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGJKBQT%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T114814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFdEngJSMr2fNrpwDjlTg4dI9gcu5FNjxaSBlNbbRrruAiAw3J3hvkaLYvj6YL7MO18KeUU%2B%2BKxYcNTuIsCdzQV2viqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2IV9cuTCbSjOiyPgKtwD5itVS0rHY7zW6%2F%2F5FfDj8tq3W1jrjEIByC%2BmZ0YcUSGhNUH1rVWNjJjHNFy%2FrQtOvsmMImiNUOnR%2FvJa4%2FO47ALvy00YxfIKM86k9U76KqXxDarAkWJhl%2B7wLkQZmv8S0JJRsTL9bApy0M%2FcpqYYTByAHYxAe4aka8E1WRF%2Fwicw6NQvyPGNzRn723G6w5q1MqtWt01EUjqismdbLSX%2FXUrp%2BBFJ0wtf0rU2D6r1S11ydLVOsvBkQGbVEOYBJXYb9Be%2F2rEuZ0yPbRjNqNv1EaNkWInA4DzyEyYGg5xPnWXN5anpZzFx7CAOTEX2S6ChKeT3KoiD4gcow0Vs8KbjQ6JAG7wYC1bCrxKbFHMiacNjB0b%2FXJ5Yr1%2BgEFc%2B1NleUlyUQsN8kwvMZ6j5AyR7e7dH9RhYPPzvpy7xGX3axSshk7lwh5dqTTvCbqyFQRClQNS5d5QqHaE%2F%2BcxoJYqnJTllVbh2%2B%2FtniDEvzl2mGdXTFCGQ4KSJEqXKR%2BELek3jccWhEWkSEiA2yhe8ruI4UvudNBtnpYy0lryiDs5BcVpg48tVmE5a2kcnN%2BkPImFXpVH1L3ZwDJb6psiGJgtCEsj%2BA%2FyknwZ6TALcXc0FoecgxDZEMlnA2Qvxd38wqNf20wY6pgEWNQvhfuINrML%2FJk4lgpf%2FizePGRiIZLnskh76%2FqoUZzJlWg%2F8mOwb4HQXLf6kJ26vx%2B9cDK%2BA44AV7p9xe4N4Dt4MveO7HeAdQw0PXeBiUFFtHK9uY7C4FNX%2FuhoAlr3wAphEHNS%2F%2BNCnGHsbP19gOcc7%2F5RVA9PzdztH5V3jM6%2BO61lGJRHVy%2FRo1unPf1zWKitF49ZmryTA0Q9IAB7gZAu5F%2BBW&X-Amz-Signature=0d039590ecee53282a19be25330df1599f338c85f9c316839ffb6ff9c319cede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
