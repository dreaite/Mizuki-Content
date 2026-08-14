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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDXD3FF%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T044835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCOV2Jc3JhB0jEeDldM%2FSS9M4jwBj0ARvK%2BX6gj%2BxOiBAIgErcJvNf9At8FKBGoE4OtaM4XB0kOJB92gkoRdpYsxhUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYK0jC6julOQ3yYrircA86eEcSGLf28S6ZNxS969wwNaPNbk6R%2Flo1hQXs8N4MEXRXQ%2Byzj5nuorv3rxvPuV88AqHLlZ%2BgQKInB6%2B8G82hJNzm4kIjSdGkqz3fB3GQubTBH59YTIz78OcuLgnx4af3C%2BLOj7hI4KVqSStmNECenq4BnnPXSjUVn1nrzDODDac34Wg6z2M%2B4w6yp3jLlFtyeV1%2BJEyxJl%2FPTcz5SDY9rlA84i8g4jwSBvVS%2BK7hTgWqS6SQ7lSX%2FbEade1bp%2FwIvan2wcJqsk3zNJy%2FnyT5c7EcXzh8H5wjHPvTE29DFIBuvjIrR3QdNui305VC%2FDpSIMrar2I2vd%2FUMFtDXUrC%2F7ZpkBu20nm9uOkCb3Kfr1GrnySXj551MlkQVLw9OdDqmVyJ3%2BEyLU1sYDyA0%2Fv8KnC5AlRRHhpytckyJmA9hBY%2BY25sYre8khe4rTxIGdvrIxLHleS7FmhbEuzblJ8Ke2dj21hSGf5e1GHdN5Lb6Kb5mSz7y2eq139KU4Q0x5p9OVNXzK6AGx%2B81hKTEz%2BFHjUpUQh5Agjg0cwWoRZjUJoDMliiaSPHaZn%2BfDAPlMxR3q5AJsTlGkfVgR4qW9rdCPzdf2mgfD3NhGTklApFOXdNV%2Fg%2FU%2BCjppYNwMLCg%2BtMGOqUBL%2Fac2VivBYcA5hF3po4a0Nwf9kClEBPTXevcVmiF5q13i%2BR5YyyvmYGEaHSlh%2Bfwew70q8CHCPBrnmZK5eKW6hWjEIwXlxuXTnH4ydtxH81b%2FiDOZpAH2p53YrCcGgqmg9118w2Hua2LJrvSWBnEpYxPu5HIeMnaUQ4aQt%2FM473NKDunQ38E3xyjl%2Bd8GpxzngQtrHWaYL%2F3T9mQwUoScebER7iV&X-Amz-Signature=e557585364471e4cefefecb2b55f4abd98b2574ec16b7a948665107a4d556a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
