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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPOUM5Y%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T121735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCD%2Fmt5cbNsacsX%2FKog2k6JVRM1dqHfg0s9%2BeVVIrEQqgIgCYRWaEFk99VeZ0vc1onu%2BU5OHwKomWj6sE%2BdpXeuR2oq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKwDNU0Xma1JfvTveSrcAybVxTeSWhntdsrDe9pv4M789hjjDI%2F6Wi7QiwqaVOhi9vdAn78Pctuno%2FQmPQaKrtfXSqgKbGxIzsJM0IV5kzIt1SIxLolIDh%2BrvAF27plO6fdlgr%2BmThpI5aFzMwrHVkUC73M1V06RoMnHCinTjv%2BiX2gxCjY5iNB0n5J6KaukQFpHNc%2BgZakywERkcZzPuyFOaTQp6u2Dni7shkxMdxsDhDl4zJYEGdGvR2mTb2%2FxM84iuYiPgRodNrv4zwsFmAT4yOchtelp%2F0RcEAfApuDle9lYRc1lsgwP5rQwdYe5J%2B7wcBGBNJgnXwN5b%2BacBo4%2Fq0vn0363cMh7%2BB9V1df6EWCYq9yLHjPmmavNwujfxHqgqZi%2FtlTSzm1EntmzrMBaVN4vCWyUz68jdGkAx52anWwcQfCmF0T9NwLf9PtofCfEKeLGJvIk5jZUeXX1%2Fx3JYaNaTW%2BuWVIKY2Okprp6MOVEZHXQnELd0cXZSATtggy7Q0WXEAJ%2BmrGJTDi0wI3nh3ZHygZy7LdzyBakaW4%2FhxNjGcGDoANYxtvflvOc10%2FAZUxQM%2FSPNbhiu%2BFXR3nL9iGVoui6aVX0%2FaHS%2BS3BZ%2FTE0lseLyIAk4gNPFgf4TKuaXVoE60UJ4UMMLv4p9IGOqUBmKHRV9EoNb9STA%2FVeNTMgrI8FgNotQkXFo0TL%2BmxFtJbVBhUEd1PD01sauvxx8j8ARAQ2QLIrg%2F9Sh3Qmwg%2BX0tNs3wT%2BqOAnffMiPHgy%2FBodG61da5RKbqAFFM9PXISfDfoKGOkKt7ANDceyAa%2Fk1iEwqvLQl1POVqgqHYMw%2FMXliA9bsb%2BuRsvoidUAF2ICofXcNyYFaoa5vj3gsbQyymzem3g&X-Amz-Signature=49c553db5f0345c3609dbb7f13488e39ca548217cd280cd2c45eb49d110f5012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
