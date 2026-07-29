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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSSHSRL%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T063209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKLhtmLHh%2Fku%2FDAl8jCFPbMNTQMjdf7lrolZYhF3e5FwIhAP8CwSoqPNlyV4Qryc5tDlkrYUqPjhjlKVdKePXCXR38Kv8DCHMQABoMNjM3NDIzMTgzODA1IgzB4Ciq97Ub1CQeYlkq3AM0ro4YsFLrkWPw1b0st%2Brs2UZKznP6UPB%2BL5pUygyswlaV6AWayY0d7XRzDW36wsMh59akrlvulZTpnJYKiQNzFWwr5%2FCr8UCfTiZfICCEFMDZfYRYAVmqUFPbsfBNU3nr9g3D%2FzH2b9G%2Bt6OvgISbFW8pGZCW1dLyGXVAeHfyPx3TTOIPy3PLLONAdiqSk7NzgZRCHxKA2DJrD%2BclL2IIzH8%2BX5cOLmVG1awXoSnBuvWeyGEDjctsoFUP%2F8odKfdyv9KWIXMOlogjWonwmrJgl%2Fe72yvnzSStlzIAXmwNLETL5pfGAM%2FjS37AJH6P8zjIS9Nn%2BUacLxujusDy1rXimIvUfqslUq6qWEcpQIJ2lSb74Ac9Ijk1eubioVXw%2BKSkUdmsbfrOxfD9Y8uhVZNnLm1kBPsF%2BgkGZZxcvNPXdVoIXEnJIfNbB90%2BoxWU5AxkNB7qrXHZjxSIttT4v6U%2BYWnBTlHIjgrwac9CmT6WXFKA7LaYJ9Z5HDhVTxQfq2oWABWl7Mz1DkB74Y6DD8Te%2BoV%2BGuyzNjLSW8hCbiuzq%2BcTyueeuWs%2B3EdijOcYExyTcNcCRs0c6t6X9IBF8c2MV9JTHLrWmLn1XQnDYPhve1kzfeLui5MJ19U4yDD8x6XTBjqkATAsOgnjbP7x3FyWZMOhVaNlfMNNT4LPzh6hws9wUcggqsUZ1zNbzDKgaQe3pGBEE%2FY8NoBDYmqjN2KfLirWN%2Bg9U6%2FyAEDM6sIqnLUV9eu2WrWm7GLfJIr2Kzyrk35JNMvR1WcIuh4bgAjX5UU1O1I0R%2BZJJ02OjgtHhFBquhOFwjmpvsQzcQFHx8jc9%2B69ZjSQoe%2FvWeIKNWJMRB%2BWf11qJd2h&X-Amz-Signature=2f83e4da18f744ba43231682435853fedcf157d12fbc6927a40120d256bdbd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
