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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6HMRYE%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T062010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDYzSsmReQnEQxVYN4kMtTHB7fxuxlxgsORKlQNBjUmjAIhAIc89ihecSP66EzJ3isM2YjqtLcauUKqXbh9kNZCsRTLKv8DCD4QABoMNjM3NDIzMTgzODA1IgxSJmqXML7MvkaQugcq3APIbb5gEz0Bz08sHPKljrUXhngqihDn6Lt5bCv5bMpexcoEm2D6pZUJ43kr9hrXAYu8WzmHULAT5oLKj07o23Hd%2BPZmMVNYomx%2FoUpO0Erx5g%2FnMzihL4TM%2BoAKTfRcaFy%2FEpPweMLl6Ipa5TjgD5awaZKR7%2B52SOS662WUlNFCqK3%2B0%2BS17EFnT7oc6XlJGZfVyCfxhsJ%2FahGlGI3WGL1cYW0S%2BrBrLI1CViAb9P7zPbCOwsk2KGClE%2FXPeIhLqAGc8Vg%2FPJieSo%2BSZrmAVkGksunrbYe5uFr2njWpWSPt0gIYSIKvK5F0qusUMAf%2B5GADCqxMqC4CWLHkzotKtuj0vgDJ1uPY6oHydPrCRlRZ%2BLEvI%2B1iVND2RUusOVEwBr7%2Fxy52WgBzpPaKy%2BBCtRagGoDW4Rl5tcB8Bd6fTYBifKpZpObVzOQIOXM7LSpW6NKj5fOPqgQLzBBxXgIaL2vzB5G%2FWp%2BiY1Mx5VoIA%2FU4ww8DXZGC38jW0rhBjcoE6B4ZKHFYNS7%2BsP3VJ8ixTouXsZl9HovBk3qFdaz0RFssPKvuxSsTJq%2FQY3AioGYBObE9mnQzarfnW7gBWvtUdwbCA%2BprGmLtDjJ7ve9760kA5AiH49b3ee0Il7kESDCovuHSBjqkAUBmX6acaVaBbUl6Pxm3RWGYUCPeySsXVuYVgD7I8fgePGdZyZoFQTaLk8E7X8rgW2ZsnEsD3o43z%2F5GMQUEkNuPgeTnWJWwGvJMQooI1ey0pxB4%2FctiYsHKGvlYRzR9vzVBplPr%2Baa%2B8KWMn4Ghu4410JnBBUGgR37obe2xI2%2Fthc1E5dH9r2dq1hibt69YflJJFiASE52YcJ0awnTzTaJr2pf9&X-Amz-Signature=0d381d2b79deb40491049a019ea6a2e09ee73c4958cca123a64eaf80796565e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
