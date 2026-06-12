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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7KAADI%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T055031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCJqZR2ZHbSR%2Bw9E7xz38QSd1YOabhUMy1quf%2FeGa5YcAIhAPYaC4ls6CqPTuGJBh9NHnEWP3EJ9WimWzMbSnuqNevHKv8DCA8QABoMNjM3NDIzMTgzODA1IgzSSDDhec0DXayFsAoq3ANClFq9mqcjzQUx9EwR%2BHp1CWEbt%2FjexMA%2FT7kE3lH0nukFb5QgYCi%2BCTA5ZWjM3uur7xa7G1M5VI5OxZlTAZdMNAboudrkWt9Hn0MukjxO9UoPiRfKsRo9gyE1%2Bp%2BH%2BPypnguCMq0rVDRy4hqZQcX398XYoWKfVGCYzMx%2BQd0tpC5qw2uGB0grgSj1pzuTXChiynXHpwY4hk%2F3CtzmmZ5ZjURXairJfxnOWEWGi0a%2Fj55jYWydNcWax5iDgHuBIfdF8hv%2FStdwYN49O36id7MzsNcZklNCReLt%2BxWYi3iATpb1Xvo55DE0uyzPf%2FkTKod54okjxOeOvk9ovBPf4xBxrBgXUFyzpcuQpbXJaQ7i6PbdaNaDTzCgQ6U1efK92F9Wj0EC5EZpCd6zi4Sng0ios5olD3yMvlK8ETw1HIxHkMn76EoeolQYd%2BX6LsOepC4pxe5dS91RX9n%2BU4%2FZq3owTFVqA%2BmMCchOwSplcpr6MI8%2BpRjLe42rXfi0PQrsfsdLAcxHyXCFHzqL1P6uS3n6quBs1pgoWBQTrN5Mh4pqoAe0k96634I9sPeTfbCI5Vh0N0PVrO5SX4pph3sFmUxxuX8PgeV9UCtD8iVZRNbt9SoHsUiGn%2BFm9JqSWzCitK7RBjqkAevW7NuTSV890O7IFva8zHVF2lobifcTb%2B%2BfyD34BQBamtc0BpGsUT7cjrpzPXjvog%2BQI%2FGgyzqeAp52OGOdMJ2Ue7uKHOIRWOI8sqAcVKbMYF4MIhRQZjpx9AupDXgKj2dd7%2Biy32jOucc5T%2FSy8EglWG0%2BRtUoinHcYYKSeNiIbtn5NDm%2BV1m6rsrfGRmMS%2FTrsYhh%2Fdf%2FkmBaBGtjxoS1TZ3a&X-Amz-Signature=b4f3658ab994542327ec69adf90c2e55ffc868cc1fc7b10f6bedc645e27d5667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
