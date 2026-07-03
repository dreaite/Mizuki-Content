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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEM5YME%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T113334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCH3VVSHBC1A9vKZmm6CW2rSwuuAD8ewkLViwdAoKqQ1UCIQDKhsyl6UKmMt%2FgT6IIVM7NLZ%2BjPjjxwrJkG3YXuw0Vmir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMvchYZdxJaVukM4F%2BKtwD%2BK5wMlFJ5ymHJvk7UtIIlsTMyvdpAvGXknCkwvFsKv62IZFa80EjKT4vTMNCV51ReJVHxqS%2FvdEDeX3v1RSiHY5H1w4ooYcPdt7aahNbFfB1P8DjmcZGDFUD%2FySxy%2BL52W6gKl1k8dtB%2FiWVIKdSobkwLaUXqjeIafkhTgTrHFinMGW7phFdNNugRB%2BOmVGtJHU3axt7V9SQMAIdBFBm9P1ORhYVE08L5DaCX78KdKhTORHmSrV1SJP5I%2BPlCSIMp6TptENGqPDI9rOIcgm3yX8z88co0YjCK3ZLpz%2F9wZI24CgqxsZqYd8ryej%2B95%2BieCgdy%2FvKioWkjUg3cCWpR7KruSQcaeqB8TlXkfau2IS774phAEQNj8Me5VBPTHtA0epsheCv8srp2k2vBvH%2BFeudElnPsg68CKju09Bw%2BCA1Ah9cOVcCiZcc6KfNZsh2tmRFiFWu3u%2FdxP15rnAGgWge8WUQk6MlSxfbjO5qT96vWSNXcYrAAf7dB8I6%2Bf%2B1VFe0PLm4WJH0WK56%2BZGqa%2FOcoQtk1Q87E7MxL%2BUvKhGqp40wlJnxsD3mldruKmW1bVzbTWq6YbHSM2meQrKVXOGJDKCIbdrCiIfM9TkSYpk9fZkV%2F%2FmYV2CHKvQwiqae0gY6pgGtg8jykjviPYy7sQvw1FVPr3o3GsDY%2BSL96UYsHdxNxrf7uWPniYPVLnkdn7tEPwTudmH%2F2pl%2FTnaUMUDccA3lrRctQMXwOY6U0sFGMePaW%2F2SfklowPLWCIypBW%2BWWpP32WxmiLsjkFsPwVgRo8GscxFp8tgMVZEt5YcTvQmbqVYOOK9Np7Mdt6iFrOZTzzdzEQRQh%2BSH47lC0TtHzm4qsxoBTqn0&X-Amz-Signature=d922f88d07ae1e1c60a861d6dedf0e8b04444debdbee190430b2c8785fa9fb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
