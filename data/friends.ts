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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654HO5MUA%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T082348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw81twk%2BlSDnJRoIUctqu1hZ7wmlDb%2BujqZohD8LNitwIhAMDqKp4gRLtBIwVwMzq7OzFP6VMw6fTVl6o3jGPv2VFCKv8DCGgQABoMNjM3NDIzMTgzODA1IgyxR%2F6s2qUP8JaMm8sq3AM6c0UmF4GIlN7Jw1JGcQMaKLhKvMWwhxD0K8jOXWnGe4bykjNQavXZ2CCddexZnjVvGD1r9pUVsEOVn%2FZEgr3fHSX%2FQ88HOVdJXOFGhM10F35kFa%2BRzOwRjvoCVARgnTCV4sakBF3%2BaiCYqhyKalvnW5WKDv%2B%2FBxwpDnhAde0wWGfzWdOeQrQeX7ysubE%2B1Z%2FycXU3l5lbi1hAS76rhKyqU6ChBd4eqZg8kkC2vo1J6eUZHu6L3%2FUPI2NWn01HbPqim5EqRr4fQEWyrGn6h2fcwzlFFwZ%2FygdvTNSELUWSA6K6z7DLVOZAw2ZWI24A1%2B09k6lyvF%2BbNpvOVfLy7QSjpWUKhjXmkOay3iw6pcAKcfDVYV6WHO%2FvpSJ%2FlU1jtOJDCtpHK5DOa%2BYLsOL7ICnYP9r8cFUSvG73BD3GPMBhcDq%2B1zKcTKVY7RpHojcnzJeSddNaSwDlYr7nwAF%2FdVPqU5Fw5Zoj7pjg2LZZwW%2Ba%2FbV4aLJmgBo1IIP9aqQTM7pqibbrEWwzAW7ZdYkVvNl75K7tsKPmxjcE%2Bi%2FF7BF6p40TM46WIdz6kGz7T7iFDjpktsdRgWYhtkth%2BK%2BIRRCXYT8UVVJt%2FScx0xl8U06xE5oNV2pLge9MjKwEcTCgyLLSBjqkARktq%2FqKIiEwzfeaY%2BYk%2BZNICujUl47xnCwMdQderIwVqoy%2BdSbB4WFpP3L58PtVRa%2B3OKC7R8wBM4z%2F%2FYZIzr5f1UM9Y62saoj5%2F45m56uz2O%2FXhv6KUHv099vCmi7L0kT7WGfyRoAGR96p2Cw5jy82bHcOfNrpI7NOc4GL8WMY%2BCPcrcEse9O5CjVInQjjI1qlg02h%2BisMtTeug%2FaQd1GQmhK1&X-Amz-Signature=736f5fd1de221e8d98b1dcbb9cd18d07da6c342d917d4f9c57d52bd5fbddae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
