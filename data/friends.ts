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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5AHU7E%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T173809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC332dHuiWGH97PsPuLMK%2FlwDbFeZAWMGlqswlpQQ16yAIgMNrOygo9iSXsZd94mjLAMiJbYkcZRugAgleGSC4xggcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFTEtIwEFdQ%2BeZ1c7SrcA4Ts1x5OpNKOWpi1Ht4aoel6L3itNwuTlGTeW%2BJx77L%2F2m74c9xoO0jsq90z4HLIMOhpDqjbyaJl07faoO3WkEs5uxxFjjTzwSSRjiHspn3hhux32CSklCZzAkdRtWO5YGpZQ36ED%2ByhGgtWe3fQzAOqMRSNcqBOpOVs6PH7Z7Ws3XPwDB98misecdnPT1q1JSQDyagegHNEBtDoIPTxE3PLVC39grEJQtQIZP%2FbjR2ihYXQ0EVMVHbr029qtHN19J3am6IQwDlbjuTaD%2F4CvBqogkZfWNHgmsv4hIltWzmowS926jLfO9H7RaTzhAGu%2FLG4HSRIyZ0nEdD1UD7B%2FkXNLtWFxe0LB4sCkFLDfPtcKyGGr3nIevXvZdSy3gdr5B1fcfcUVpIM4eyFcBvgrMGhjKI5r4B7LYYX6enikxzHu40dNiCwqG74kGZkPGMPH5vqvisxe4sRi9Q0O3nN%2F6z9YX8Tt6uCrIsF5DfDFfyQOePRwuf0nMl49W0Gef5Z%2BpYKekbgWGdNxHnDx4HP02pVklerNTlCMYPUVRTr4TP3TvJqFuBk5tqIkj%2FxgoFAMoYogRW%2BUaWudsp0Bxs3NJcyPOA5MXXk3kD%2Fql9OmSH9m9ctYEj60crlX%2F8%2FMI%2FmsNEGOqUBoywJAtSjaugS2lX%2FIYg2JjL4WZiDIOpQ5iqS5RuZZ%2FaFPnBa7V0WqCu5ofDTCQfc0xwDPfRiDBoP65qvm2TuIQsxYfHOTVx95OE3BdCswxrMi7Izso2P8LwSWfiDdx5T1De%2Fuoig4Q8g%2FhFYRQK%2BIxxpqtL8UOoEFkjNCr7VlCTuJFM86j9CqpK7J2H5hpuR1OgukCZvfLxx5FlHib%2FgVPQAdcbY&X-Amz-Signature=f54a3f12241c1ca81ecf2194f9da78811f21c9f3105c50a09b003fea2e14ffcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
