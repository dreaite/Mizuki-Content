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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3V6A7X%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T093921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYJSeyf%2BxsHW0e2WoXdx%2BPEbexGWsq0v8aUGgD0E0mAIgEwdtyyMjLuVt3U34MoyF76mdT7eyN4rqD4SGXA%2Bvz1wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFGN4JLASSoEWjMKayrcAwivu1YcB2S23YxkYCera0eeQW3IZeqEJuUGSqV9DZ6x0A%2BHozYJ17f79Od2NjAG6X93qJExqaR49lRQYqVemquqg89wn8V0ALzwpnsSqm4SyImhTaEzgfeCyNnUtOxSlfy3Q2lR5J2SMav2shD0gQiJlrIxOP%2FKiulClh84odsajIbfb6HdWQtZMdJBNQMeWsmmF41NfK9FghwbcRWaHTAEWKxLD1vWGyMnQqMvuLYJjlxbWZhNtnUNBPkCPptDXLrmkmcxMvo%2BFneW3fiffdIgvolBi%2F68kACQiKb30OiDbg%2FlYhteQs6Dy9LUph7xQT9k0R1Ud4cau18%2F%2BECfJnxUFPyCdnPn3zfbq2DKcJUl%2FcIE8d1wdyNWq9xLWbyebGzGbqYyi%2BKIdU5TQyVDs%2FbPaaiOcECBMs3ssDe%2BRv9XuSkxdnMEDsEFTqX4sAz9kkaV7BEIyp5EI7aeMdjuwf29XcAYea4ZSIP47p3clpB8xfBXcot60tZKaRM4D8iw6rN32xKJiyhEbTwyiit20mXN5x4PrrxmNBwWDbLzyq65keG13%2FYFMzG9tSgUOvdaa15FQ4fjEiRrl4v9fneThzhQBXwSTbwaE4eAJhvodAPLEA4jceLObFM8ZQYLMJzU29MGOqUBQkk%2BQ7%2F8hi7YL8zgPYioyFDmQfIuz%2FCGzaKAr0%2F24bFqgm9Ldcl0MO%2FZrbfTZFDFyRxFpcFr8NawJ8%2BgUNA%2BiJWqaLH9b1QmpznFWC2eH0BuGlytYkQpXPYhy4cNU6WvQT817cV0R5lNFeHBM0ve7jx0zxQjbFjMFU0RAt39%2FjU59m%2BCuyxGspWfaxYa4FtoGTQaJJp6NxKARWTc2gth3iZVOF60&X-Amz-Signature=e091a21c29dc48bbe70c7164c48ac5a2bd2adaa2a970ddca5e397b97191ffe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
