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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASAGJ3Q%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T085827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrwRN5yxaEDpgX8X9hw8NOCtpm1lp2qhb%2FdtVtobhPzAIhAPPzBECG5xCgfMso7i9UVAV07aE8EpTNEc0znoYtKY%2F7KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPqG8uXmmWYziyaYIq3AOxaCDVRpBu0%2Bwf5AQ6LTeBWOSC%2Fhep4Jo%2B3tVOH06neJq5nmaMOCF%2FlLq%2BKM%2FHA90cwKaG03v64sCZkEamzMlBoRbdOcqKIgSjtd1ngMNqGCmz2F7XFvs2U2dA3YH0HghV5ojepgO9Lp4KnA5SUs%2BZmQe%2BslYc2kxu43BZCTOL3nAX38yxtZH0Iv%2BzyIvNw07XXomo%2FWRJqbVxrpC%2B5SGMGatOhvxUWprv57J%2BaTbeBkqxia9nG3vF5O5wRH5DXK8gNq6SjouBclgmKVrcbUEDOQI5FF97SL0r96T9JAoqAsyt4ljfvFuD13jO6%2BV2VVcoX%2F5uEcHzlwsNmu%2BMGWCpctkr0tOo1oDnReRANO0bmwRXwtcnutVA5TCal9jzVKo59AtXhKag4qqn2cvFeZHn1aQ1163oFsBuo2chcWKX45sZsQyNCI3oaWSvwVZ2OkPcttfmHfEMdntgBizKeHv7av3iQ2tuRqpl3wrZtHU3K3B3zBln6Sz%2FOP3NI28ehBLvoNw7qAOKZofXXqzOz%2BF2z1AUrUgo1CD8YVDGa6%2FjMlopmXese7jwxgwCi90ocOdNM38qamlo5Qgr6QZFV8YCau42WRlZDBYsJZDXfQ10tkm5cSrwhC47BEHY7DDmkuvTBjqkAYXSvmoDw6n6BdvWjjRGlqcwK4G5SJy79wkT5oXwzHQ9q7kH14GNXd1gTD9MAkT6p6EMOL9SoYQewgtdcH989YPqdDdtQawqdkd9zw4wDISEwWjlIPf489cnVleAglep9srIuqpt9fAittlwOh7a%2FVjQchBPIw14njaNyuLd7OKjLwm3%2FbEMwWm266ka7joenUDP%2FJEtABwVi5XQIpXECWSFygX5&X-Amz-Signature=25a5e9bd9e73f59d7af8a444e75ee1af2e8feae0549500776ad832a0fcf883ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
