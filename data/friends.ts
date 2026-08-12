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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPXXLKI%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T114643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDDAnIht4M8DTrd%2FSl6NkpfNBXPqLcQAoaMq%2BKUhlx7QAiBOGvm0L2SXj10ycLAFM9fAK4%2Bf8ge0OiDpXyOHLQQgzyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnpgaC%2BQDg4FKR6okKtwDWzixIGJznFjCzYoI7lOaMsQpBJ7slmvE5vRhwXchl3hidAQ%2BN9aTYvrgv83J0vqVvzoA6nflMJI3f6nxQEdBCugp04g5UFtLDM7BEMI4UtLfB74KYPX%2FAEI5TBsUH4TN2cwTP%2F3xBhJ2gTmPsXLVA%2BqR31G7djWiydnluLNP1UbI%2BWulUoNYgUa%2BBUMfflgW5bG88CWKQSBSCg3h7%2BNCRcPtIvrzFqClEUaxOiTL0i%2B%2B3SjspJT6nTorCKB%2BPY1mZ7ucTkUkOX%2ByPWNuaagtqdD2yJQd8AYff12Pvy0Pd8oRc%2FkAb24gQtgdPcrsiSPgPOtF2sqaqJZ%2BL7D8I8C4CHapPux%2BifqqZMTH%2BHxRWEAdoeC2fu2FX5k21%2F7mauuowmOQ%2BL%2Blv2KFgKWBdYoTTlOqbvS%2FaLN9NdakJfZzjSPbO0gc0kRgtJMTILOp1VwOVDh7sKry1eF3Ql1uHkysyj9XT9iI3iDjn2ni%2F5aDkNjwA1Du2%2BGukdBgLUapwuy0uDx2OjXmksRNkTi4%2BhAfdlC6SQhsDyxBgwk4m25%2BpVZ7t0BLH9L23twRY%2F5750G8LvADKbP93PKev%2FZ8QsAMFgJQ99rYYs5aOo5%2BZLFYN9IhF2gJ6ywSjs6j%2FEMwzJvx0wY6pgF6fJjABnVzU9Azq6l%2Bu6SyVQjXdXhlWZjWY%2BJaUCqVByFVjABc6aD3YRcMSZ52lffhgsaRrHFKnD1HEEGZuO8Nc6e9a4BCOWD7%2Brz52cDW7fk2oLwREr4%2BsFf9WxtMUsQQb%2BCfc21zZBck9MUexFYWn2YTE91fiVUn2nSos7ezwxvjMTRlgAqUQJCSyoE%2Ff3EnaTzEIAWSoO1oKpprgKfAPBamuvRE&X-Amz-Signature=3b9b97ad5be2f0746cb96bb1bce197f12d07ba46197aeacaa209c8da85586800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
