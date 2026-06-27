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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WXPI2KO%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T160627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7%2Fg2EvSfyfXfAkMVHwEty99TUYF2qacLXcl9tTku4FgIgOTr%2BIfbpg9Bj3C9hIwgeei6%2FoloKHTCj3RjJx%2F2nzWwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI2z18V8Bz10INB%2BpSrcAwTEpcYOoInP4b7YPOvcXj2GS9WMhTLY%2Fzf5GyU5SXoJ2yAWoNJ2EeYC%2Bhaeg1K8nBMqhUoCDeZ4b4OmZwgSyiLCIHAw8MvPAQXSbEAfVDYst7MKOwMuRgt0kBNiK%2BUAHWCShyTEP34chb5oQ95PYkeixcXpejbdsBWQw5D8g27QehTpSvEm0OqWjX%2FWgJs3HrReN892Sv2m6sApv3eU4g%2B%2ByQv2ApRTsmNFjMbmkaFDFTqOvk3XV%2F8nwXwAi4ltsayWOHoHwvn7Q5OLjr7d%2Bwbz5S6bE6%2FIv%2FvnbxyCSoLTAeMpvLycTcvuWIh46kaYBMuAqOKHIDTF0LyRsxgT9v82HaiAuo1eWnmdgBmgC8he4tAn5C7sBRDaa5yPXOp3Y9A6hJ53wAJwaEphAcOh6s55EHtYQ0W2bK8%2BDw%2FQZ%2B2ylktDljrJVQXCwUNnDkxhQe40AETXsb%2FmcQpo1cZ8NVuWsT0Hk6yCYa%2FdSamzmjZyJLTnHNWaf2M2th9B2Ua%2B7Tgktu2Nec9sFmuQwXdIzMX9GdL0tU87JRFo%2FKCaBolMCAqliK7zPFQ%2FRxckxCMXIOOWiyqUVkEJu7zL%2FnK02RRRABY1jYd8qIvxx4Ycj0yrLo3g5b5LgOSQEeyLMLTI%2FtEGOqUBIViqv6fj3C4cPegkfCvxkRbPRygucUZDjDA9tbZYWiqnsm%2FAYQYVabvA%2BqqEyJfAtqWaBFap0W3TYFWSubfbM53BIy11GVsnsMOofx9NjDh8sS9%2FkiASgvmgy0F1XBdaNBwmGdFPdUy9AByiKUnSdqkfjAQibDmgQPQSFIErg7DJCpWFG%2FjRyfbd%2F0cTAIdV5QRzcLlXRNwhqJtdVLfXs6Uj4EIZ&X-Amz-Signature=d62d85aef271d41a14a56fc8e0235005ac2fd6b3d3cac42beda57d31c3e1d21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
