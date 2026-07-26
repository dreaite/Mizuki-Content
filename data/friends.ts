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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3HXSBG%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T091323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBeGF%2BWmeiUUpoQOuQYCsNlE6xu5dn6aKuIf%2BA7dOtLVAiEA%2B9FPR5VJFj3WSDQKKOfAGc9y80NRrQ%2ByHfwVxmZCX5Iq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDN6LxMD%2BOqIq40iJdyrcA6CBE5EfWQv16hGnf1H7g1o%2BjdOe5rWkZF4b9Er3Y9ALP6BPWcfbb3smRgVbvFBsohhsPRvXErcaLGHV9rfCLbhDRpOANUkqvnKX3TiLfpowtAhemqeSQuIDSHhwDZ%2FKzLTmdB24JocTaNUkQcnHqxz0Uz%2BHLD2CQoAOVp4iXUz80GH7J5QlgV0u5mvtjIk1U6KbpUgd1rKgR25HZD4Kjb8sI9xiTzcp36eA%2Fwhxm3cAShQAFrool2TvtXddVbb05%2BsEdMxzlbIITQXYpc6LJ6qes0WgFh7kz5QbcJVlWlcTxad7nPXviXiKpJxq5NwpHD1cx71Sc0KYvKTMt3NQ7qOB7ae%2BrhAYivzm6J7HljeBSWW4yqzfZozr5xdEwOQOWpez2blSDVet8dAuwAzFhm9ULpnK4K2Oo8vhM11ISjO1wlzVzViiKMvrd95FuX4ha2%2F9VSlY%2FH6R98EwO6bF10SYlg%2FI8aDXPDwT3YQ7Fi5wEu4juZjUNIX3YaUJRqvIBEdc012m9TxYWv4wd8d%2FGaVHXNrpQsovS%2BABy4QnQGVgQ4DR3Agp4ftas%2BlB9mzdwK63TofrjvLIsmP%2FWTN7GzI0jkUMNeVWJvwBSs6IMUkhWrNDxARLDUsCuBAiMKH4ltMGOqUBizSyj7ve8PZy%2Blqh3MJvrnYP8Ar8%2BCpR5ZJWfjgipv6QuG8KLAdsTk9%2BP6mYfz41DOG5z1DFV3hO%2B8IhKRPq3bXL1VbHMOs1faGzpbn%2F9B2%2F8%2BZZsKhNpTiqIr9W6Qn0Br%2FrVg5kLz2lLcvRXpgvH04OheKs4BmsCFFBqKu9PsKhiphruJD7QtQV%2BqBja6oHicw7KB65gjdfmDRjozA3IimFptB2&X-Amz-Signature=9752747ec794b653b049386dba4e84b8e661fd4787384a87986dcafc097507fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
