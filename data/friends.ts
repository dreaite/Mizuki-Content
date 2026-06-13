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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW4CAW%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T091908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD9xOH6KM2UA0KorHIwCHo2eGVdcFImRqxajpw%2BgsvFIQIhANY7YSnvms%2BAheUOCfkN01d2ujiJjqF%2B4XlldcAGNV69Kv8DCCkQABoMNjM3NDIzMTgzODA1Igwb2lfOiiXV5Bcx%2F5Iq3AMciLk7Y0gvvocpeSfw0h5GGXGd9W6WiTP%2BBKFpvH2Cyaq3ecnCcGmoEoqiVNkcHTs4Erpu5WqLtg57abrRTY33G%2BxvLtQ2bQ4lsRT7lX1q8s0h1xIaW%2BIm2o%2BDXq2K%2FRtrxSWIjDJNNSeYr%2FAuoXJJJJrhequ2Blqz3s3BwKzMlXMbOQB0Ep92tI9K%2BPg1QRoaTdgXW2I257HdZb0w0yEaxHvAX2ugIWBmhChuBvlNJtZ81i0jdgOkaCxj%2FTsUTV8QYZRD1XS4NAV1hPLKQW5%2B%2BI2Q5iAVOZ8h2HkGGJcjrry4IXdzKGrkrphxmmNBrYtonx8QW%2BcAB67X3txKBOySVFnS3v5twA8MqQH1BgVdYqRxn2O0P3g19NrzzZHq7aLhAJ4nVLvju%2B2Cy99FDsCIyctlQfgb8j3JCFtsavLRclUN%2FH9fSwMoA26wJjNFPB65q8N13iPGybvMN6FOMKh7kn7BM%2BO6nMIfuD%2FaNyvJvMaRay%2BTZYG9g3BfbjSsjBd76bMwWbQXc7s7lBF3ij6VhL2A3UGAQvM6RThOBonVpoYVQTG1u4881%2FjDreni08mJrkHTy%2B2pqjlZXVYrA%2FU6NHThoQfDYpMCCYXb03Rx2yMiRIntkivBScf2lDCgo7TRBjqkAUiS286HZjWy%2B16KNqSDQWhpaPG2hRkN%2BabaL9MZMcoVgkW%2BCB2rD0YUzro8CGmip%2BVjGoE6h9itxoKv2kSM7mnHPd0PymkiYalvm6KvEu%2FKyjlmBUysqv6PLimLGgh697VkYgzmgPO5exKwGSomNrL756Z8k4LSxshOaj4Pr0h4ksWavxQMw4NP3vftug0kj6vj8DOTFhDlhfcRjXCij%2BxrC4OX&X-Amz-Signature=4f5f0fc6f259e14db546ee69625ad4b15433fbf20c5f3a760d63364b5f8b3a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
