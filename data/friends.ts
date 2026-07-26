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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHGI35TY%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T112009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSQfZLs3aEyu58iJIcDxDGFdJdO3XtTOL6YSep2Ei7ZQIgJI0Zvo%2FubNLPEwp4v%2FlxNnAZ8XSaAFHYeeZNG4NNtkAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL68sDOqQ3sopQWq4ircA2coQHUzSbpc%2BY3S3nFhFgf51f0s2DdDsagrLWBQiUD8yPk%2B%2BqXqeNv4fRAXsnnDBLgr%2FNrhReQS3Tguz6jxVCm5f2rocu5cG8VP37imupuJMsJHZcttpAFrMwvlFaq5Zc4aDVbzbaLVsjZZDzeBEc4ITsFFCoqe9o4t9tf3xRlbkESWeKNxSE4URGf60aS5AXtYCw%2FbLPwYSXNq7qdZ8jkFVFYIn1YgQflVPnWhOCbqmJ0P8ZaVutMzCZr6dTWtiI%2Fm5eUq3Zds0tDTYRmPWCZwlWp3Eee3nvsFg7Xiz%2BaMos29gplNDPbtvxeOFJZtt5VzJK2FVHCs5ov87AaZZyVvZ5QMxQMtthvnn%2BvtB2ZCOsUE5pBIkFNLnJ0gsfFjTn10JyarPAVpBD%2BtXEyVzdBJ60zpUWBMIqbn4MRwGD8caE2EoofjYUlu%2FZfmqIbYdj%2BDDE1CiZkeWM8e2HSW8GkUM4otxCSU26opWV0E6UYBDEK4t0tzg4EhxcRurrRWwYUPIuD3IPIA%2BvcfxEUNPIZrW8BzetMMOpbjunMiPv2pTfJdf9eF6UbQckNMAdEW%2FfnwCsEApw23xwd%2BgLsBjdWScK5EaUDBQ%2BB1znu0tj%2FPcGLrjCPadT9chWyYMITJl9MGOqUB%2FWwicLqcCjjH4TFP%2FUl0mA50keUmT9D6aLRl1prPlPuLfofvNnxqiK6Y%2BhPrh72s902KuQaA1Ag5fY5Lj%2FvCfIHaSpDTqdJIwiA83J1M7P8m9ze3cwPmf3mpIe1L3NzQnv7sEvSvthdnQg9WVRDxtZ883Wi0YkLTWcoPnvhpAU60oFoleTW6LTvfJgDAjYXsfX7Q7l7uu3s6GLmbqCSEXlAf1JsX&X-Amz-Signature=5ee0d7aefd5c218012d782e80a1cbc2b291bbaa89fc265dce57042d0c0600437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
