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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEHRBIJ%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T060349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDULeydDFeFn2nsEoz92WXJB%2BDBCZXSKvIKYdCQgJAeNAIgK%2BfnKlsoHJu5xEQ%2FxINCwDu7T%2BQ5UVpUAXIw%2Fg6f7S8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0MUkiPe%2ByKRFOn7yrcA5r9oLAYYWWjHjHjIkRCUSLNeET0ryMpDZEmaaekAcxzs5NYpAytFSVvQAN2Z4HMi5rMOH7hjuBp69S1rlzoIn6o21oVydbvpsrs1Q%2FvBSZm8iiljaGlsFVm6brm23umQ4ixo69jNmfWsu1m29%2FYBsree3rbBhheTsACo49s5GBQMBkIGucKVETrvVKSQ1fVAkjdvTMk6WkANw%2FzpPV1f8kBCYSZxYX4f3zBhk94lqdS0LYLyTJ2XwEU0kGqjWifslwRgVb7b38zTD1YgSy8lyUFnrapLgOwL3h7rzUmX%2F%2Fk9w6OzwisC2pDBNVE%2BQKibB9e9Y0Rtztw9ZI%2BPoltDkAE8S%2FIkiuEWCQrJ1s0AEgP6eSK0u3ZlGkMgIYZwGZRsFNF2vI0uWmqaC2HkgUPUVwUuxdDZuyV0jorRI%2F9VdMBD%2BYhjKJOBHHU%2BWJHClx5c%2F6JZIJLYH8YWUEaySlSm6%2FNPUrsMyUg0Pf4OuNCAs6%2BFNoS53nmNFSwMuWSVDGuvHl1exmRTfMhSVqf9GaPIC%2Fr6IEkbM79CADp7pxNBWiTQ0LUTni%2B3s%2FzHIXZv%2B%2FExEwYH%2BWSABvpiZjIADgC8jVj%2FLD5nCrXbWQ5w3w91hY44IVEUjEC9HZUPZGjMPe63dEGOqUBtrnZ9LDB%2BDVquxFW2zo5o%2F7jT1sfEgPwprbMg7C6ZCOzRUkNBoeEdlHGh6ILnZxgeiTtO2lHF68FF7QbpDSknJSobcST6ZDgEVhTW5xu68RlsJF6KJRTJ%2FGwjeznLlvpeS4CntrRi3E7xF30FSmy%2FU6xo0p4GasIcyNq7oJRTs4FEFZZDpE73MX5eVZ9MfmC9QussAHhjuPBH3x8WPMkDzMdqsb%2F&X-Amz-Signature=95f76314f23e34c467e8f51ef100cedf851f3be61c858b5a0577f806140a2433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
