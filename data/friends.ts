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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGH5RS5%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T215849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIHelQlzeggrJf6EpgdH4EOzOOItS8cuSPU3gelkCcJHFAiBVNvheFQubBkLUVD%2FXpsvuibucUbpvvP7gJk4s3%2BSFaCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMG6a5uU5KMi3TpIsgKtwDRM5HkwHFCb8n3h0Pnb6jb4URJab9SP8QFGjZVU2WrlxqMygv2DpMER3hM3rh9J3%2BDeDlPiC7fwtFV7ts6Fgq%2FfI0RXLjzA0J48P7Ny8TN9KLbjKNFHHxxz2KsB10YcuFFGrF%2B%2Bn3dYOZCAtN8QBQPorHoBexZUw1h5BVc7czP%2BGWwnJmVFyAvMTpa%2FF4eqkZIYWSWtiy9uSyTqObhTWst%2B0pMT0vuKrBBJT0lqUxkx4DBZy40WCwotVLoteQmcdPF3%2BYRjrbm1WXRzECP%2Bm0MaJEWWe7N6S6y1ODxkvQcpyRv%2Foda5BUp1lxreLuysjIXYEUXbK78E1VpENS%2FllqJyC6ulTJtvXiktP91txTAb22l3QbQAQPZaWZr2PTaSpiN0DXEASTRTEFVjl3S4HWOKo9b1IMU%2B8xuV8xPXrE%2B6YGX58YgYZ2iirKnhh%2BKgHKTpmaoT4RtcQUgpX6B%2FmOQHE%2Fk147ZfDgR%2FFeTaWupdfZ2Fe6e3HT8mbh46SLsw0PUrKEDIikPzWKzgqDtGaCsPQxYipAnz2u8rMFpZmeT7U1B7yx7XUPJrAfHaqAgRmxGbVh%2F%2FOEUEbJs0s0JYGcqOZLc0vsICvhkFDMim2q2u8NQdbqSZByrK5Vbcow7tTa0gY6pgF8sguAQxYps4RgG5HOWVNrLC4f9dd3NVTeDqoEXIr4V5pz6Yzc7DImst83VAM0CQEPcXTZ6Ml9NfUbtqZPRqm8FCnyLCH9H3QEn0n5JRV9In9DHbwsXXylkN6vTSfDIWa1b5twdh1C8KABNe0Pu1VH6k1WB9INBlGIwIOsIeUmYjCVtlqAP%2BMw%2F7%2Fv552BpMrwchrLqsudasTiN0gZABSqE%2FXAoEZb&X-Amz-Signature=598a59678487d73146b434bba54c04cf83b390f57363406673254a0649ea6d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
