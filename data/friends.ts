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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBDRKZM%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T000529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCrzg06Nzdmm36ybvuJZchV8xSkJNvOEcTFLjl810AXwIgD%2B1PnuvmDMpKtbrnwo0xG1SF%2B0KsryOmSgR0mCou%2FToqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkgaHebM7yaLrF5iSrcA6vzW8wD4KzPsVEk9l4NW%2FuC1oa87nr3v2pQ8niAns2c%2BBIaacXlnQTGfdQqgoHLp%2FdXke5O6lj8544CIPQ5gycVadQVP8v1uqaQA4LLs1UV9JxAuyyGrGQbFxiSgCbw6tni%2Bm4DJrvwKc400DtlZMaPbrAZCSb7IrOmZXY1C3FP2EXJtHz9id8Q0Svr38TqN6VZbv5Pog4SadsSin3X99ju5yJeXjh1Lm4ExTaWA5UiDjkuYN%2F%2FbQ91hxr5ff0%2FFCMJ4Sr4GaHw4eJfojwojFLAlb4LRTBYfssPO4l5r664LImDLV1a6Dp1qQs0k3W%2BhNPR1rUvg%2BYq6f5yfWhFqVpKBVSFcKShE3v5%2Fkk8FgMI4L%2F%2BlspUz%2FEn9zU9h5eFb1DKohlQL7tl9hYLVCfKAjiXlQu07%2B3T168UIxj1JISbh8fx9nVgncboqvBywy2XYK75PQu46Snj%2BnA%2Fuqa7SXzdyf3%2BcCeTX5akW4aRz4tJ%2BUnYrD1ObVigd3mtDZDiGjajBwDTBHFJBZeYQnHz2knd%2FQWvT7gMjgbbI5fjx8aUdUqxwkB14Esqi9MMECdG%2FbfbcSc09Z%2BPlD86DPM7B6qJs1AST%2Bvh8mjjZ7%2BLwk65KDpGEc0k5Zn9n23WMIvui9IGOqUBrSZhNlPd7%2BG6AwPJFmwItHYDpV%2BSnzyQOZ4zSRbYB0wDyMt7GzmjxxVaXBRWZB3Uc30MgNvu6c6yXe4NPuXLMD6s0inx3ELPiNl7Rr8r4wG3TnWjcggbc8UElHjzT2Q15qEJAfVHjdCLbvlxWEPYHPnYXqTqVoEfTh8mfrQ5WsjLlg9mzoKoNJ%2B%2Bhpynslicrf%2BDD9WgSXDF8V4dnbpPD9m9P1UU&X-Amz-Signature=75bca9cbed7e55a53fc8651f0124e07436fe4f2a1c0a942f4d4df5745109d480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
