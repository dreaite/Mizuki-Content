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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXURTT7A%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T165709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUlNByghDiex4Qb%2FtUe8k43aD6hBkPMHUCw%2BL%2FPtn7PgIgDSix4wxLe2f7rxoJttS6kXdTmdbzvFXajSM55UxSrnEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxkIiqnPkMmqyLhZyrcA3YYyXVF%2FP7I03%2F2a5bBG%2B%2BlEyt3yVcNrw%2FRWqMAQ8PwzjFxEprsHytjKpOPiJOQpuc4Oc4mG0Xx5Rya16IP1k1TuZgR%2FtlppO0feA4mlw%2FBaTty%2FEx5m0rlhfplosCyQF2H29tgWJM0%2B%2FvlTigkvQh6V%2B5T12ATaK4QwizT9gTczDgyOgCnv8O45JjbcIPnjaOlp22uKQc%2B84pYq5%2F0%2BEwyhJX61iZcq%2B5NEwMy0D%2Ba6pyrSFP6x62ou0keqlCCjET2mOkOAA4%2BPxxXVXMSrE6E5zTKEBpSj7AH7Kzos5IB1hPboN%2B%2Bj0emcUrbcKe4ytVOG%2FU6l561kJc4uO9iqjNaLKaCOpJHzPMtawYSdQeSWdF8RBjc9KimD25XPFpZKjswAIsHz%2FPDaCMnouAH2cXRC0fG7I6bX%2BbUVd85KLQgTg891hNas2WbJrFoDWVMqg8YKeCesmaOnua0elB6mkgMYN6Am0%2BUfnqoKRI1kuolH7BpcxuT%2Bbm1i0SSqB2dR%2BxKZ7dI4KN2pd1PxZmbfmPnlCcshLdzC52RSKltv23dRdiIgcarzMZhvT5rHJtcR5Tc51ZAsN5gN2%2FSYRk7zW7XQm%2B1kLewk8o7C1n%2Bewotk58XrKR1%2Fg2nnIFRMPy5xNIGOqUBIm%2BVs99dEyIi6W%2FH03U8yCCcXCuTOS2vSF5q9rcds0WRL7T21PArgJ4v%2BC6RaAKN6fCl%2FxwjdsHrZXaczOYcv3kOYTnkeEeBMA6EwTBnAoc4jdEoXiUHbOM1q6jhGE6dzJQWf9v0EtRdTxPRwlubJPHzn1Z18fnSVjv5%2BCf5CfltnjAOoN4w6mh1DkJuRqgXgWaobdDih2Y9n9g2K9XLiQ8BcXtK&X-Amz-Signature=ed0824bb456184c31574896d7f68e949db36aac1e5b4045528aabc3d46e0f713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
