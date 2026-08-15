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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFPJN2R%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T073159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCa%2FcsDE9TbXLaSaRZWXhogqASE8QQVaimlN%2Fx8zyMa2AIgXAZMGfMoISgctBTUy4qxGshmUdN%2F%2BzM2jnLjL5%2FIf%2Fsq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDB24E8Bo91JpWtgcnyrcAxdvEisSgoqgDIzOJzapgq7x7TROBf5jdhINT4dP6Js1%2B3%2FeZB7RhHDCiYjBAqibebgspCxDfqPJs%2FfjHbB31DLB3gcgFVRQqxlLvFNGt4Px%2Bbms0rPuSkBuFUh8Jg4LqO6ef8cAKtOI6nyhdDBwmhLo%2FW%2FkNxw%2BpRAnQdAocGuVDu%2Bka%2FLHe5GBetBSLszV1S3jNh3vFsu4yXhJEQea%2FVkuHVg6kRkwgnUrHnlOqGeqU1hjbZgO7eCY%2FY5Ly4DvWa8GJ%2BlXGJOAHz062mfsAvSi0EaIphAseBiqsTq4uKSly7X2v6N%2BnGa3r6i3han6m0uPKp8L96t5eu1p7Gx79FU%2BQBAz%2BsH2FKNuAY1eqW%2F%2BIBryuYdgxQVJvuej45EHLl7WF6OJcalxs6qjMfIuA35M%2Bg84jp3B4%2FW39NQnbLhVFqqc4zrX4Qf7hv%2FOEXez8SX8L3Caq6CrcowUJgOxj%2BNgRMITlzaAmDUduSrzQI8w4tDu6%2Fz20nJfYyYQid%2BLZReZj57ekPIQ4t0lmzvmUTWZWtIiCASdH9KfDiy9NTrf7YNpFMj%2FQ4WTidtHhl21pwatfCNCF3mMrV0B9j6iaIDGzt9RBDhu%2F30Vk2KQQm7HJHbNr4Nq%2F1oul4WuMOKBgNQGOqUBFqTdzup2UE2WRoi2HvNn%2Fy%2FhY9Jg9V%2B00srD5BPXamGqH0ws%2BRLlvV8SoVib9rzwP4%2FxkyJgjDWSmOQvllK3pfziX9VJMcHRx1bN5W83nR3Gg23lFYeCg1rzie6FYCdg1hcgUa3J9u1yTAsyGCeNQ2oj0Sj7F8BTJmiT4Lp8dvsTZ4ew0f1U1Gl1NnHflV1ejeWvfKeo44fAnbJEb%2BKVCHRFIKDV&X-Amz-Signature=965a5559ef5225cabbf099309856ce133e7471d02a0d7c160550a392ccca8919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
