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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L3VG3Y5%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T083812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDh8VHs2MLLDU9iqoVO88p9eqRrY8gPNxo61Sp48j8iKwIhAKwecfWZodLhmw9FQvE%2BXQY97CtOQCgP5hO0no5X%2F1N%2BKv8DCDkQABoMNjM3NDIzMTgzODA1IgxkYMLzYWVpCiIqrjUq3APO0cOlr3zVPR%2Ft4OOwceTn06l3GMaylyEjECmxrhVXvFtQMTsVHCP23w1wI4DV84mINposVFyujAR7YvVzVh4FKvN4I4ihSaal8aME254qHpEv%2BdCPYdP%2FhZJN9sGTd9ou0eiMB6GjaNd4TS745Z6tJgpwFgsnop1eJw3rQkH96XWeCVMP9lByMhMxYGIT4Hs5wTNAC7IXSj%2BljDng4zJ8qjwkjuY3WdjT4S%2FAEHVE6UmNRWfHBvOHdtSsjWP8t1C7rFK0je7j28n6soKp9Co7CK8T2dkGxTcqOkYAyJYf%2FYWpPjU9bI2pvZsGQNzeGw38lO4yc2uskINse2nxmLlCwUy968HcFEIfUWvSXPP5vlzxSbLcuv4cw3jEPkWDCHt3%2BO8370zjAbdbvamPcCL1dXdrkHHsa7fI5jhgUZD4sQyLp16KaR5yZadEKHhs9in2Qy9orEy72pjv7ENJc17nMqvusbGW2kQZktUcKJghnBOCAH1iTo7%2FcN4tL9FcHPFWsoT0jKVMBUybc7heWQQC9LiiSFFcszTfbJu3nTVElTp0BfM4ynKfAacWl3L5mx8Z1MY5wB7TUQUDWLuFmB3tMohFQZgf80gLbGEbTRgmHv5Xi6k8ZTXWBTfTbzDO%2BtDTBjqkAcvvsXyjJUxBfHdX5kKgbjbthDIshMCLtnDhxjJ0Vlbmu3D%2F8TG2qOep2xCIdS3v6gbLYpG%2B6BPSyGeAjHMp4Ku7Nhe0OY0RJXgzBB3E2v3BHfDB1akBvV5Phigkl5QcKsCfzkhFKG%2FQfVzDFF4PUYWdrfBgJpb1AExoKm48shnu%2Btw%2BAcbIC%2F2Ulw0wfZgsd6xrSG1HeKItMcTdnOK5tzTowGbY&X-Amz-Signature=2b13e756161d9d184fc27067edd378e403ea4c285ed11b436e86645eb652338d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
