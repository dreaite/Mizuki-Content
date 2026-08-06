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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURBWZZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T024148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHUn8wBIiPyHHIFY9Kkxi2xoQTAGb%2BU3AdHCmzlGOde4AiEApIN%2BNohGPWQpDNZdujrg7rH1k7nLJ7rzog1j1FBNIdIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMAoJ3WnPCUIoKxH5ircA1T1FKAP3aFXQRA2CLUeMWQhj0CExMAIhQE2ikpAJCRoCm1d3mhsX1lMmUjOAEZTcX9NS%2B9JcX%2BywpVYGGKs3T6pCoy6%2FTi2%2FWUVk4aRbZ2yYG9MesCYweBRgjyXDSVzcxWb9O%2FkgGqGfxwOg1N2tiC72rJXZYDz%2BuNUxS7%2FwGeBk8%2BR1WSp7c7gqyvIF0FKzWeIjvSS0l6O4zBDrbdphsc5jqwrWj6r6VMVIrRkdu63xnrOMK6syzBEWTOJwW%2Fla42lYHoIKB%2Fxah56H8lu5h8MYddhGuwDB9vkZ7vbfyVdfLQztCFVDzcGpLGuky2LfJdd%2Fpg25g78opRfC8I%2BPAj%2FZ77P8Jxgu5TyILtBFEIRfmRf1uncN1sZhNY1JunONAxm3JZ4Le4iTR%2FTtFqdTdcQ1VzkLLvmILag9o0nQMw%2BBDHkFfm7gwbcOJnxXo4WU8h%2BCwgrM%2BDheQGJUbgo9yFxCSuqf4Iri9ee2363wRhHzw2rAppHF1DBPMlQL2SDp%2Bsoxdbmg6vZElbi%2BzjW4xnJsGEqQaA8%2B11TORnxdEH7MCyoBa%2FqMGJqS7khLm%2FzD7AqbJEZDSKc%2BWhqxY14eTw0d44RkqWKTdHxio158h6cp1IAcCdEEisXiCrOMJ%2FUz9MGOqUBenCjGIhHzVA8aBOiZdNbN9PR9abypz%2FWTlUSV4jBy7wk4cGsa2gPhAAFTlRwi6RvYtasOPNkUfKdXBfEAZ9qMHXukJJak%2FOjmrLtPoO5ZNI%2Bz5qLvgL%2B6xCMYomSyphksg5ZD32sLqbtGmXWUZZTC5ORoMig%2FhSMhRep1osahFe4U8OpehHyb%2BgETDp5NGVMP5UgIyQxtedjqLhSTOypufj9jz2V&X-Amz-Signature=c586ce319d3f9e868afda51276917844da0c968d1a8af4659891c587c2a1c0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
