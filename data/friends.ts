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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7X7KK%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T155324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDWA%2B5ABQl703CTioDKu4MuYqBhJosKyyVHfardAVqNNgIgOqeHyX7IxS2QFpVKbccMOf%2B0qNf4MzBDunnTbnFTXG8q%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDMkb7OmuJzvZ4J6XECrcAwBRGUd9dP%2FOxFoNH8X6MHYpixJJWbPoqv2Xu9VcjZngmIgQa%2BAo2DrRAmD2PWIuFgL2tHENmIVAS%2FxCoYtZwRI7DHV0Dse%2BBXZfl9wHL8izMv972foKc7piOAwpG%2F7SQ6Ft2D3JWXctji8lpb2QG2zxhdOMaMJe%2FB%2FJErPystleHCJ2Ad3ArdvgQj5bJC9hT6IyCXpO0Dj72nY22uo0G8YESulcHU2XJRvDq4fYB3xZKEQ9D1DK0c87Gk10gORwwDYiVJSDmk2ywuceVbIpZ5YTDkKAdB34OzBWSTgtwT00OQIjgvRuibkvcuWwsJ2PFcbfLXJX9uaT2HFD4Dh%2B77LIPc4DKRpI4WK61jQY1vpzSGMSBSimWteY11NIfVOjFB%2FpG2mq6Hou0omAYbi6M3caPS51LrjajBc2q7tWDq5hFE856FawGf7OBjDVGKMerJTiS1wvkcvBQ89BxqPS4VTR3WEUhXZskqLOJbumAe%2Fj2Dl9iuW6TTgWv7PR63LaY3FvK1vmBV3O7%2Fn2YLpgyJJHUp6FpcdxglzB1A%2BnHnTYd6hrcqmyiNX0Z%2FLXJ0H7PQxezDUALGh4yG5nk7%2F85QMp6BUEcQa3Qwd8S9Z7RSDyws05%2BcxDWjW1obqPMLSM5dEGOqUBkUEgUf0wlB99vJE2Wzr42CbdZpxcwmlUpFTBYwwHdPus8KEW64SRfWUMYCyKskDnQhlAngL7F5ADBLgRBsPLvKWkkEQywVfku3ZlCjl%2BFl6ZUm4ceQcB47fmOLFQtKo%2F9TxGk1n0nHA0Aws%2FmS12xKAph6ZEzoRqBKeYmOxEXyuEvwoWMF3%2BGRB9VHefkxpx617UET8And%2B%2B47Ii2xXKvwViQDOq&X-Amz-Signature=63dab57f411c5db3a271e94ad0bf54752c21023f3dfd40ac98d93d2c7d832825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
