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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57A7234%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDV%2BvDqCApFkvLz%2F66I2Ia8TF51FNc1x4mco%2Bsh8QXtaQIhAMtw1xpw5G3TT5Ej1k1sa1s1SALBSNk3KcDzMRI4Jx3QKv8DCAkQABoMNjM3NDIzMTgzODA1IgzM2VVTKJirzHhE9A8q3AMPc42NG5QD8cg0vuIPGTIteAoBdR1qafYUmIAZ%2Bc2DitGKo3aEtZAQHHOMswHJ2bM17%2FHug%2Fovpa4VrRe6BnylxkrdDwhUCR%2BHowMlC5ld9k711O1wQ%2FKfU2oBJvQGB6UoSMq1cbBw8Nb9ABI5ZUGp1rOAklXoKGmcdOcMNUP2SYoZcTp8RqtSKolJ7hlb4GbxZnIk%2FMvjkRrC8MkEP7jFRpf7R4kgjWikmpZk3A0hmjnsEGl4oM14%2BjCIWjNf3XjMQ6rpyecqhnmKp2u0BfC%2FT19CkJEUkPwqmlIA5TqzyaOTpwXmGumWNIL4cNWD2ewZizfGZAG%2B2u4U3YeMrMnhWu2LCvBf7gNZUi065eiLzHAoc44StYRwEOiOzLHLLahbY3oH8gWbSeOKMMe4w228MgccVujbvTX1%2ByJZ4cDCH5J%2FLmJXGQc9w292%2FfTVdM2Yt4Jcaep33WIzYdAkjxw2j4JVowmgEmGLXk3Ti9E63P6unaAl2hO71mEbOM3SPVMluNfbWTZvCBr6W0gKp0ogxQTJbGkP2smV2ekVt%2FM4m7P2%2FUqYXPmi7huxopgSRmzzqCyKU9fehrv71jUt4kyJXH51sj0vXRur0bknGLdL%2BI3v6sX8PF6%2Fb3d1XTCUzp3SBjqkAS70MCC5JtUYU9TX5w%2F87DIjqITMxhnQDONxD%2FNpj4EuOZ6M1HTnR5U64%2FJP8AvN6L11fvFnxSveZTSV6C69MdMRk7yPlNFbYtND%2FrLSCESl75PE2L5gJ4FCiobHvEpMX%2BKBIKxWkafg1XgYeLhh%2BZxNZcDw64%2BuLyFBL8E0RALhLUYZn%2FdEQ%2FeUcA%2BEdBRChHEPBxrwaao2tyfeAZzRiVyWjmtx&X-Amz-Signature=afb9ec7d0ed3246523f4379638dad6be706cf51e04e625d864ce709d7185ee48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
