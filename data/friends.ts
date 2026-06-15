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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMQNCCR%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T182810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4UTDh0m0seXQcq9nKANyeH234%2FvTgJN%2BbBc5FB4qt3AIhAIq%2BllEUxGrG2iCP%2FkGiH3Uj%2FxD%2F%2BFLuGdC2GgEzjVo5Kv8DCGMQABoMNjM3NDIzMTgzODA1Igy6EQuGWUltH7Z%2BWpwq3ANkYcXePuGg4kMbg5xbX1cXgCnWQ3v5DoCtmfAj9aQydL%2FFLSEvbWh%2BBqIzzAoH1kPTa8EUtYdFLrsxiJh26STLoAZej9Xh3JnQZay0DuYTMaCHdXCFnzMr0mXXb83jVuhPXIc2a5hIrJBXgLFaWo3VLSvXmrurj3XCxk1HbbPntaA3Kim1L1rF7x87%2Fwugj5RYWCwwFD84dZD9SDo0akxLRFfPTpaXtPV1DkpHsIXit%2BKODPh1ok83G0rvRjzXi8BxqiJO9dscuPsmuMnygoQJIffo2xWONH98Sbqgm%2B2ux9Zyn%2BT8y1RrI6SBJzk4hiPBUNB%2Fp6bP1Us2vhlqBt6mPETLk4E2kS9U2H%2FaBAvmzXPNeTSsn68oQMhgnFC8%2BSPA2K9R2Bb4Y%2FoMUKmmqOvCV0CdFf5AEk2mEpojjknDgHCF44BJYNrxPg0ePyVz1Hpu52vuZdUn16oCDjAqkMavgKBZrzi3Im50lZwSQa8RnJwBqYs5ZJ7eHqUhBfxJqjH7t47xLMAMZDPYBXAWqJJEi4UMG492CBNYCbczjEJ4DP4%2BkXAWyDAATCOOnvzQfEsPNvTBpBlz50RwC2%2BK0wDsHJ4J5o539uAAR8jBPITTv9bJqpfw6HdEnv5FszDf8sDRBjqkAdflHw5kijEtpyjtpeuxHHS36u4T5HgO3y8cCA%2Bz23DWgFE7W3yuFOXxRHP%2FHNHoVcwA6fTggWAuc1lhNR%2BL1yFWoeio3UqFueyDLZy20kEhxShOA28UClVjsETnzW9onF3W3rDq4lP%2BMlIPH0vQMxMn9vQS779YtONuUwfJKo3C4x7fxVwbI2O3khMPJUda28ULjypq5gYxZtCD3d%2Fhl8VvitzZ&X-Amz-Signature=83165938f73fcac56c69a555bb6ed5cc295ad3ff2768f2d6154828431717205c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
