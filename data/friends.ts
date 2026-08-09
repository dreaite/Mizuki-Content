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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6CU2QE%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T233211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyfCfggwfzqXIB0C%2BBMs1EbJRj21MS3OB8FBFU1EV%2BjAIhAKNTvKEMlm%2B67%2BgOkWyVNlhfd36q82S56A5%2FFRHyr3kGKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCq8J26%2FlC1gzBMsAq3AOC4Sy7No%2FtR%2FKqpY3eWHd0TpMGVmxW86wyAAeqWtlAPupn0j4adylY%2BU5UtikNpIq6ni92f2yBumo1YS3wFUuUa4xWGDyodWlLbvZX2APAReJZiMPJZPuOHY%2BY4%2B%2FZBB24S7oOpLIYOIZC3zlOlB3CWFupu5OFI0ZiNQRuR8QEW8KwmuBIipCWzclYF%2Fdvouo8npsLXOzmhD3%2BGZ5zMg92ujRaKUGpiMljyzKkTab6w%2F6Ph64lfaoSAI3xOc8hih366SLlZLN7urQL%2F5ncvR12rAlbrAn1XyFvJu0YjitNzwOdA13L7vnHCB%2B41KqNEDTXPtYjklJ7q3KT12RnjPZlYLupxBSrmh0Lhc6xl4hllE4%2BIE3JLqKcyPoJPFvNvDhtQzGMi3nCDrU6JxwODG3mtjt%2F1MHRW1EzLbp%2BvJ6Q1UaGM7%2FmY5YntBQif2b1%2F8%2FP%2BVJXU1%2BBSevVpdj%2BmedruxQZsZiWZQqWpxydSjt6b9Vd57jE1oGKMwDXAYq9gCpVbkpaJJL0coWrM8Gm8Jb6%2BhwMtbfytI3iZX0ZNslnjFcyehyJzgSPbXxJPEP%2BkHkcGPIRjToWL44RPfPgXXVcMPk7DvKzZk8WEgH32R7CjseSy2Maa6aASaDRDTCQ%2FOPTBjqkAenUB%2BL3ReFYHtnnz5qnO6aXP5NpL0RK4IL5%2FUiWRWZDoM6zjJ3h2wHYhLi8%2FxNJ74QGO16TmS2ujR4iUGMe00dKtGUMn2IkLRHqkqPktawZTRwiV8URgFPv30fMlEo4Sf3hH92SMWmBPOy4tXtfc1XgmbQq13%2FKPdPfBioJ8594n1UAyNwhR7MDHHEB0o59jjXBzCP3pw2kbfeqKkrYO%2FYdcHry&X-Amz-Signature=72055fe93e370e112a45b75ff815b4b77684c4574d71bc75ebef1b2b76463ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
