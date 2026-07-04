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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULLL6LY%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T143837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGhwPlL1AG8pPJz9QyFdZuB6FA326cZopJ%2F23qfmM6mNAiAetExE01mCBDPYlRJpBCC7ZYIqYpGhvLP2UsXu9W7FMSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMM2txyZG1UUb9Q%2BuAKtwDx3ufp6MCgNtuivzis%2FWG9H4xIlOCh8HMbbwmJEpQA9Hl4dDshn51flBiAUjwX13j4nf1X391jJ3X8Yz8nE19DHJ02vO0zs8NUPz825F19LTxtwaY0N7PuT7peQ%2BYXH5nQAmSUjzG06rhze%2BAMuGjo1ZOxBWnz4UZzBOWSM%2B7IXMQGa8fIiv8PX5CJ4VUw93LlArepcrfiyPyBZbizHIFX6%2FxZMj5VWEQxM4UxFGwyJl%2Fj3qrUayBNYb4VndA6xxlgrZ%2ByCUwb2aay9Umy5rTL6SG6u3p%2FUPSERTuF1g0k6%2BWgakdStcZno3ddt95Ob1ojPOBaKQ6HMV2%2Fa1PT6Q28q5cUV5hB0ehTkiSipzGr%2F%2F2NVDE2YovWvLxsbbQ5r74tGI6Rc9iThuMyCICMsS1eEV3p%2BqJVprJe4BgD9XweLBuIdJBUUFbnF9U4X6uUfhCm2%2Fg17P3QtFVBPGbQOZmYUcOEjwDQopezmo7fjBtx6J1xSV2d2GLsmLxfUV3if5pp1EINkV3hmbl0hiIqvurRMIkXsltYENr6hVT2O6AkNq0ciMQL90B%2B3MXrRW4EBB%2B1ATiBVSf90ic8WTUjDh%2B7QGgFnhRdZIqMx0z%2FJyRThzirH%2FExKkCdS2VQIMwtKCj0gY6pgEi2F7PYpyRjlmDqXw7eC1yCnIwwFEJ%2BuRNMiYbprcyfe5lDXGVZE39cX%2BbDCH%2FbJNl8ddB1mR7PkvG4QclPCFH5HyXZUTUPQQQ%2BNCudk4Lj9oirOvpqJqRj3MtfEE8YmaBfH4BsEkyoi7EkvMbfIafl50npEJCchuBjehwQ23cJyqQs%2F8iIwAu%2BjzTyGc0B9hmDMBrwls4OfgZNMoftV6uzyVQ6LOe&X-Amz-Signature=31f70c75b8d07c33f0e664c4726bd39093879ba9896fbb139ba21267d832299f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
