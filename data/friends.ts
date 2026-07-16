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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4MND2A%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T154009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh28h1jhpZ5t7MShJdqNRPxTCIX2dW0tx8HxFBtImEvAIgeZKTOznCIKOBAMk9MBf0S%2BABo%2FsoCYWRj%2BBQOlVs4Wcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNFV1qMvvseK6OQKgSrcA4fWQGtJ0fhetI5gAqW%2FR%2BosMdMXveR9QpBgLNsGcWCqUBlbgytUlAMbJKEgNLOh0n7OUz5RSFAWW4BTLHAPEFqpFmnnuXXWiQ5PpjBD%2Frda0gtYcXuuZI%2FsSccbjjBtDfPLg1IwAx52Hhfx3uUFN4JxqHtzZmp%2Bs1%2FbhH4A4%2BzbhSvwAMLN1SL75zTEGeFNs96AmkKsJHlxk3gTuofi0pe6jo4KanGfM6K%2FEGUKzHYqtInirujTUjxCI%2BOkTTtrkAul8gUHr60eEuBzDBob6JVlhRCadOxjdW7RMndZyyUL9SYDKnXTsHMTJZT34fjJUh%2F%2BslSfN86i1Q197oDvGlRAdPaMGAwKAKTZezZcWDx20kzQB6hKOHAoZfK7BRrwhgDadfev1wecnLKyz%2B9ZY102Mvtm7XQMGZIeVVSzXBZvPtZrxB%2BIZEtgJdUKPkFOFyE1jq9xU5c4kwmLkKAUR5COxf10cEyemWAht%2BSg5EMLp%2FP7mmqPx%2BUBq%2FCzRb2jZ1O8Lr67zphN%2BDSzQ%2B4MRC9dnZDl6hphsMLdoEWm9oGiEH05uv%2FQ5gcHCgayaktJhK5cK4fE%2B53TKGgKTRSFt2%2Fj3lgr6WqN%2Bv47eDK%2Fx25BSnjX%2BpLHkvwJJTdjMIHC49IGOqUBQ12gFAWYIbAkTnpo5sPDad4ExJKLZ%2Fi8OrdE%2FlzC7Kf9TN%2FyU9ZifMDPzFU00YJiP0w7xgUAQoj2oLP2CYPktX%2F8olcbhtYfMx9WcJkNsntb%2BJBf7zb%2BwE8RosxUUSXdIEpDSCQ%2FBvvwKvWgWooLp1w40ffHavWyJM5woEazeIQtPqm3VY5DS%2B6uTZK9Ka5XTz359EiXt1LIlu0MoN91qX0iLKbW&X-Amz-Signature=0e3ba4f2c5da732b4c7ffbb9ed50aebaba18dc8430f90ca2931c2b7947c2bff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
