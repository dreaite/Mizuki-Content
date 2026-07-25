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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBU7IB6%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T150350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDWssEky7ZIvG2djzabnR%2BWEZq%2FTFmpBbHXrd8JDsX6rQIhAIApmR%2FuumVvmg7CMODtsxqIMBsAeWWQxmLYaZBHQsjMKv8DCB8QABoMNjM3NDIzMTgzODA1IgwT6uk2rodkBEcnRpAq3AN3T%2FVe99q4peyo7mT6QwUgsqkW6ApfEdYy2nV%2BXF%2FVNtCHhPQiqmD%2F%2BDwM%2Ft86VZDuKSHZH7ID66RuwDj6rh4EJK5R9YQGSiiiHHuuY2C1SkywHsJcRp8SK%2FdprHuQ75HFS47DyZVhLnQQOZE6B48kCvIRixaOiCwdUtLjlU%2Fu8hYIoCRoF5RGjfc3odb709aPD70kPQTIjkoZUR1LE2faigOz%2FwIdKrwFW7%2BgadMCCzKYuLjuFrHwBUuXSPGt01krRNibabeeENEBl%2B2vyNyQT4tzNUi3UXzD0a1YKFCAs3Q%2FZQ5sdnHTO5f0%2BmJQO%2FPA7gVh3yvNfxwAElqG0l0BVVHFfG1sK%2BnrnoudM%2F7K1xIrnelx7CCoZecMbIpeWUfsXp4NtIouvA%2Bvu5h%2FsPPr69%2F%2Bnjx08aKoicoOa4lEUuegdgsfvX1j1Gd%2BtIeOYz2JPosg2%2FFPi3yXl6xo0wPOo9AeUIF96eDs6BjzJRlQkPO%2B9qkrQ5DB%2FUNWP4DHDDUKRK3qDD%2FFcVgvD8MvF6ONMLA521PhqeRcnUEy8kQjpU0u4U4ljUK%2FT6kk23pfJ8FAnlbpOQBceOEGft%2BhAjVCLeh3UXNgKooqhIZJYTNwKH6EqVHod3aMHq6phjDwhZPTBjqkAbdqC5ajjUPZOEH0kh0Xka90umdtXgdNNybJ2bPY%2F3RyaOR04eyPQsJgW%2F3q4XJfbFey5vx4jGk4NoYKMhY%2FVKc6v0N%2BW5kUaMGp9uIQwL2Peo3VL4CCnBN3U0Am7Qx0RcFA4jV0qC41wCXuFvwBbbLshay3g3zD9cB%2BZap9k78ZtDIDe0ZU7tquCteeGNkb63pfVur7MYQG6b15Esh8MXbWjx4O&X-Amz-Signature=0754d130503cc1839e9db91da30abc046123aa59c382ab7a01646ef24163afd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
