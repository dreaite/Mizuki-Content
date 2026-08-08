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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75CHVKJ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T203105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAsiI2dBBoF1r2enlWrUJidOut0BPBu9lt%2BN9AtVxYlAiEA7I7I%2BWd%2FLZtABC24nfVIjAnsia7PEYecTMwcwzXPzDoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPqV7H5NWBQyZkbYMCrcAyKjJkv5jzQjcYZ7YjbA2cYtK8dVqoQ5%2FLDZp%2FzTDw3TQhW9fJmanuzkFcE7uRwGd6X%2BAeTvM6nHiHFI24I1wuTlUZp%2FesolxarwpJDP9KAbfyGtzL2Eq9kQXf8Y6Uz6sa%2B4YpEAH34qdBRybs%2B89eYiO7TKJ2n66FUC2yMygyceEHS8IhFiLxALWClz7tKKtJsAiV3Ain2mdlAehua9t3zn80BRszT8UFEC%2BkEFLhoa0Rss0kdRRd%2ByonrU08KRAqPiq30X%2FkE9MICSznleldFZfbJGi3%2B4klfyZ6fxgQKwXUgitvI8Jo3RclipZ91FV1%2B5ZDcReRZbo1nP5oe4UW%2BC6RTthiQqO%2B9%2BDyK7hhcvC5dN6LXVOqcqDck19vY9gH2JzWb6f8DtW3zz2%2FEe07dozUsYDSAI3EAavc4gPbhHV25k4eEROi3yA%2BvJADfC134l0OStYjCSmUjPochoUg%2Fydttio5NrKsaZcNLWAgUKD7z3uuo69xN04fCFZNrEWQwbOtRY3T%2Fpu9F8cPNUK%2BcYQ2tGVkSMmdBzMJDhYi5F89n%2B3ifg%2B2mOdzp2nOQTSmlQPMdVWu4qqphUVrL7MBTTMR7vb0AmlYuig6W%2Brl%2FESoBq4AuxUobW3BikMMWF3tMGOqUBj%2F7294kNL1Au2yFdNihwX9pJmsqFjsEObX%2BOJ%2BeqcatbuhuGljG9qGM%2FfwsBhtAsLhvoxS5yjbr6r8yaMwSl23pgoifJ3WS%2BEld5RE%2BbIRMPlh06fIotOqn3XqRffRoACuMO7qlPV1PusUyr9PifMNngm9%2BF404SMeERvwDMCVLQHpYgccPuZs5XyWKTmcHczwPeRSw1o%2FIp6ImLhAnU%2F25I1efk&X-Amz-Signature=016a4c7371f97b3fceaf9c0ebc93272ffed94ff53b51d3642406ecc22dd687c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
