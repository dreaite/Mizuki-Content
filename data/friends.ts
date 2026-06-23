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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3FK3QDB%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T221538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIECa9sMbbBjo2qrs3xl1kFs7eiLl69vP1isobqKq3QMiAiEAr7z4QS%2BLE09rG1h9L2YX4y%2BmWjbfibj8ThA%2BSfKe1Ywq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPxYmHD7K8IYdYA%2BzSrcA9jUYzmTzKoIFPAZDXrQdgk3Zko0F1u4yTg263OnGj7R4dzQXj4ze5c%2BqgJlEnucQptgRgc6CJD19n%2BgqKgxyChhqL2Ur15IBhsq%2F2RdKc6VlwTGPbhstPwVLY6pYzfw6mwgjoBjN79VldUXdD%2BBPiEMpqSXM17tTQKt9hYo1D0VOmEAdXKhi6z9gD3mJHbHd%2BPtumPAlvW60kFEIhNuHO4dC10MsxFqgWnQHr0ijfPw%2BYlqJAwaNJmLmhc1USCi5bv%2BP%2BbV9gBJyAkGO0XjrU0VDsDEubLD9pS1spFBjf%2FlzgmaI0pmWRHBl3ULxFuO35yay0QrWOQ0wUq414HnyIUZZLTTo209ZwaO86GrwlLgPO67KbpVXj%2FojvPTbJLhQPcPd2H4UUcrc0eeuzos83obFYbaTIoUbFCvTUSWYENDo7fFX1A%2Bg4%2FvDYZL34EmusqZ%2B6S5gF9teCktejMlspEqceFh46g5XPjTxRlcgUd5HHMm5gnZL3q1K1QGrt64NABmr6uA7DOA49ii9pzvo6sOI72ahsOdRZCWREWAoiVZZ9hJl%2FP6q6tHQhxpWUVEtmulO%2BRJ%2Bmm5J%2BerF6AC0X8n40imUfgofaYqcRrFwnn5JBSTqLlKQeoUpgPjMNW069EGOqUBArmZt%2B%2FIm6aSCKPbyFGCWUfBC5lS39ZDpkKnXWVNqW%2FexL8jmjnbBhFj9hQwuo7lXlbJRWUviTw%2FDf9Pn5Go6lE5UISzLKtlmhsfeefZ9UHRLnuYzbSJ8svy6br2vcN0uo4zvfORi64TOyjHSopXAKF0zN7%2FOgIUD9v2OFNBzRzn5A8iu0%2F%2FiknGLnAKRZ3woUFHtk5QUWPTeV6Dn4VFbSZ4vJi6&X-Amz-Signature=26b27b8ff89a7966b2491877482c81ef8a45c450676b15959b20a69929c5921a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
