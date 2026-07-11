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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGGYGW3%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T101622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHj5dZyGvYZk%2BhWMgmZNsXJz3exqJEnDKlKF3D4sLuF2AiBalSCpVqf%2Bf3JhzAarMqdOGCVPQG2tDBKJA%2BuHfvmquiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLOKJWoWjsNuIMcznKtwD58hm87BXmpOI5fl%2BDRFTYXU7A6pLpSgtkmYzjzOMVRI3KaVGcvdRg1Xh9LTkINt1P4gxXU9FfY2SNOcTInrplJZMy0hgUqCEp1tbLTc2ACb5apVqFCLxbiK2Fwl68TKhDdK8R8qad28EigmnZjdlmpUDjHlJnkCQOFkSSqWiF4mTxf8VGgn%2FSohQk0XBVNYlZluzIKuuYdzE0MyskrQy4PCPwNl4YG60qdePkubFzUoZ12YfRh5Rhfud2uzDWaLsZLCn4SGo2R5lNqCW%2BP1o%2FyxmLGk8OxyIPJYAPlY8eryKGVtCRq7HbzSdQmq6PiWzX7%2BjxuHS%2BuEC8Ka7THrFwKko2Eh5YyjECCehGJlkmVmzMFuKtWCmgm6r8Un0%2BRTd4lLnt1524P%2BpHmGJHi0mBGfW24sUhtbYYvi8ikhaecMu4Pr90HBly6m4yNnUha3bjoQRyFaQ6lMsRDRW2Ok2t6XX64wb2Ogk3Pr7KBoeqsn2PYOlkU8Trg9zGAqNOXaUkKGkT9p%2BShvHosimz0Hh7q8Lruzh%2F1IuYkww5F4kXIV1NmOIHe3jbUqxhJsd8J59tjLrwcyQtn7kUMF2KmJImtGvkSjQvqshfcgAoy5FkZ%2B1RZHqnCE2ayAgUngwzKLI0gY6pgHvaW7iFEVKkNHCF%2FyzohqGEwnbP1TC7W1I0OErVg2Zo43rLquer2Q80ii3%2FEPJUMheDHBaexycRLx3tiVhHgSDSMz%2FVext9lCZ8jX4TgRP3NXyM6voenssMVSqgql%2FhdJ%2BnnvxE%2FF4Iw%2Fi0JHxy%2BEEbBynaw%2B0G1%2F3ALUw4h0nOp7j1dV5BzFjNO0mL5zVV%2Bb%2FoNVficNQ%2FC6szWuWuZdt7tBlhvhs&X-Amz-Signature=a695ccdf3aabbe1a83ae14364c007f19c47783fdfe7dbc4a11b39d264b8e1ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
