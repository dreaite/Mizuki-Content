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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EP45FW3%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T051339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kiV4VuoqnjolS9oA7IWO3ZYJGqqHY%2Fv1c1mWZ60hXAIhANgz9kxRFNOki3dlOdwQOZncDTe9REl2fQ8kGaYAnh3rKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHfxUGkoLKFmx22Jgq3APy4NGfCZV78FFcb6SF0EnDb17lYTfm1MIwgcqFlz0Zghkn1RkGAL1ypKDwfQ4%2B7drsaglh9UY6n4mXwJ39oESLsRweJdjriaEQn24C%2Fo8Zq1v1qkZSVKZ8lLtCFpejr2GJhqY3y8Outm%2BkFzJ6yl7OUOqJcxUrJjo7HbgwhIwNXAwWhZ42DFcL0EpTxw7H3X2w13aBPivL1R7V7j90sGRk7Z0RLNcoXGBYjQyMQoBJ9Buanl31LfYXgQUKfnqqlGsAAn7%2Bf%2FXkQg%2FvSEeodPjWV48J6sZZQTnyowhv2cKtXAVuBCMgwoT%2BFpYVrOVQqQTOAnJvZOJnQL%2FmxW%2FgUzrDTHZE9ioy1A5e%2BWTGuc%2BqsTc1phsw78bJEB52Dok21YdlYimN0HWKp6s5UdlErPefXPKTQQ0jBSO16tc3Rr31WkJyXi0%2F7Vy4nbp7m%2FBaoNw8OiaEsaSBO6WtwSySNAxkYlSFBByh7MPcfp7Fmkzup13lcaGtsjt73kTAhyxNFW3MkAkGGC4VdMpVZ9Y%2BoogMgjB7hn5%2BcyUJg6jI3M8xh4GxQX6khWsoTpG8w3rkxA5u6%2BekQF%2FgXlEEVPKNu8IMr3n3VbvST5INEmPSFS%2BXDr7pqQr%2BlV6LVdfPYTDI7qzSBjqkAXPcRtgAknxpFNSKFTUNOba0rz%2FYCHW7rmP%2B9SRtJMfnoGVBWDsAAboWyW%2BWrgl1ZS1N7peobIfPfOyZ0jhfo6lOeBf9gg6lbUT5JdpmIGRiCtj0oV3X0VeYki5Wrz%2BA5x42W2jIOInnTE47KOAyFI5coGk5Bs22SwHM4qppgArQ40uYXudlNyYvxAYcR%2B8MLtz2WT84ORadUaeeao1sPk%2BJ8nzc&X-Amz-Signature=7b510d854de85ba3524d501fa3a67f0c82b33b401eeebbf32a11aa56e1f393c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
