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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUGNIOG%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T201717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDBlMkqcigfpFlja7eQYD6Nief%2BQiwyz9DU2vhJwHEdLQIgPdjqVSBiwZiH5B0ojP5vvysveotpA4cDmK8H67SSihkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD5BugMack52oFwA2ircA0HQf9xksg7ZaMnNNIqoS05l90UNg0gMAkCEmokYzhTzfcn36NRm0oM80b6yAQ6IImTmxsCSy9nkkaw6Z0Z1ysf8i8LQyfdGI6J6g6Z5leJajr0pSMdC%2FywUHS2kZqlbDtGkW4nyU21eV2psip8Mw9PXX1qaeVLPlefBs1ViOW2Tkmo46pxpxbtZ8YdznoAiijIn2C6S6uGXXdccmkuYN36aS6FYZc4oJrATBF%2FbMOMNwuiyzHteH7C7T5tyUyokL7izN%2FgDp4bG27rishW6UmwLrWjPP2utbFvy5IkCtlKnz4jAnc1LnhROlpdyJmTMVyzVIxn1WLAUeeHQG52%2B%2FEwT3sRHguydoHh9zSt1%2BPrfYcAYMgj6DCZpb9X87UU%2FsMdr2tJSHEAS%2BeRo2yYFvj6S8vHc%2BHBEenVZia3F6fbeFrhzNzZuKBdhyc9ppVnCipk6SSPFGLXjsgZMVmuYGdFjyNJD553rzm1zfvz%2BVKrRtieU%2FNhJm8BMDPVuZke%2FmUXnU2x7hvu1aKWxqPeGufPtKQ63cQtFuv1t2leqbtbK4G1Mf9DNgw2v%2FvR6tXp8qejtnBuXh68Tf7vVsVjyiOdNydKpjput1V%2FNprf%2FKiA4xoKlf%2FLgwqeElOKIMMG269EGOqUBZ68G2lAFbtJzytiZujp1Uxxu1ynRIOrr1sgJ9N8Ei91u%2FYfChuS2NT1%2FtZnGmKD%2BREL0qZr2MIwHrbVemB2R4M0cc%2Fzxsb9NSVRdCe1BLVEmmJhMeV9ISNB%2Bd3tt%2FGYbhJ6KuSNAoVaLljiiQhKzcM4pqSrfEwKDIHElgVoTLzeqSlqkS%2FIdShHhLmNWEioVfY%2FPuy2x69Q2MD6XZtPDxVttqLYQ&X-Amz-Signature=ae97d74fd2a206112389e64cdabb4fd64d5ca4121ff7a37e27cd0e0541fcaf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
