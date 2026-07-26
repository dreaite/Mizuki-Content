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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQOW7BSV%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T191324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCrivjxV364xeZt2YpQCfhUi7vgeQckpSO17bvPMrOpYAIhAKMOseAtWkTXS4wUXF8Zmcd%2FjIHGxloGKLMDsT6T1sp8Kv8DCDoQABoMNjM3NDIzMTgzODA1IgwgYbt7Ow7PK2Ev5rYq3ANXuy1naupfNkNZyuDDsv6%2BZjjRZPVGOG%2BxpOpZ%2Bi9%2F7zzT%2BkYRC6mDYa5nw4dC4d89KzIGSvYZUpQ9HfCud%2Bvqk5gPnETS4kQHxGhSpTITNVlUanLaLoMwpBmvON1vFcxLoDN6XOb7AppjKU118fGUECiAHgKAKajVCmdH40TSaPdipWuxYAq5tP4MaFSnZZR3%2FEnN1W7B8zXh4GsjjIz642qQZagwRlOMOYm820LrhWilEOi9iGS1oAygWLhLygPG9VkbwjTLSU6KCqp22pIeLgmArCO8ggvuxrJpMM7U2aYp7ihX%2FFpl2Slzumw2B1lbn1P%2F9jUxsEaXFQIeIcAtLJU8tv5Po4%2FyL8U4wPMTMm5htdsimEEtBXz1Xhwp%2Bh8gpAPCCCRf5lfGOfuvQMcvAX3qYyMt7UEJgkbPWvhktC3WPbaAg%2BiyHe7OSS6qH2PypIvxbXe%2BIfaW9Q1mVzz3Igp6pxoTxD4%2FrAXBQCPR%2BEAOqi6w2ieFFz93oALWlhm0Zk3xDPpoI%2B5zUNy7VqRs3ArKGYUCcVkCrI6W4OtNiHPfoluCyAk26qWsV6hX7Y9L3PAHaybd3XGb2uSxGzsIl0DlU%2BHx5sKYTz37lGilBux7p2h9x7XubxjYcTDf6pjTBjqkAe9k5TmsOJd%2FOjj88sLuX17CF%2F3ZgIQaOunup%2FfTf0%2BYL61%2BvYvr4xYrhH1M0v1cgUY%2Bghlkm0gsuXoe3BF%2BJrbwJzTtZ1WeBqRy8GRY47tsHCg8fKYnd%2BNYJYT%2BttG4coYnr2RLu33FbC6Hd7239RLA0nM8%2FCR0f5S85QnjP2mn99e9xNN6RIwDsgNm7gADRMs0vtvEjEanIPE1EVlCZH8uqKkR&X-Amz-Signature=c84a636a8f734442627f81f070a7ce68486ae2f29b7c65451b15aa584c865450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
