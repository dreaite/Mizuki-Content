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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRATM2T5%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T145805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAffEOmyvt4a0D1JPlil4%2FUFUWWVJ05tjdw8guuLv3BqAiEAu85EWSWavOrtSLqTXaSiyxc%2BSJcB3EUeTO5TmpBqfhsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN30P2fmmoxmJ9JPircAwg0OmcXemHBOnBwi0Y8XUdXXwg8m%2BZYcbqL4HNCmGjayrHZmln37tWLdrO2boBFowfb6PnCLpjayMY8A4nVE0nvcdqFMMumk9QEZK8bBoU5adFuCJ28Qefqov4EB4J4OKnfOM%2FTRxg4WJZsn6ISLAdwtMkhu%2F0PSrrP36k7m6eGDNoLDhdzgKytVk6r1sKPnZJM1nQoZIYvnfmJiQkkD9F3tv1IZOeQbHrksB0cP8f3QuRgyWsZoo8MDwO%2BV59xZeIzHz%2FZEDPwDtvFh111Y5qRH3qYaAyMKzeP19tucMdnuyU%2FbQs7kLA9CJpOMBO%2FlIl06g9EC0xp58igKMYQmJkwnwM5adB13htIxx5xHBnkjCsk7egZnOXyz5edYVMbU5PaKvmy1DVUET43zrtI1UhkR%2B583DUrGy93f4s0oKOPpByP2quISyp0TDZa2qm%2FTioeZ3mYBkWP%2FKU%2FNn01DFK%2B0lBVHgF2PtC9tm6urkEd9tJYdL1fGGTTQCgTHQPaijo1kCkoBW%2FxaNusNPTz1sn6DfmVaeetwxByGtGGDd%2B%2FPiNRSuSrOCr3u3Qsr06usOPXuBmjFFus%2BDEKzSxVPOhuNHV1OEK0a1B%2B8kpe7nR1%2Fh7tYARlPn7IT4W4MKL%2FzdIGOqUBkpjtFpyA%2FNkBb%2FNwtbSAIz22WL1SWNPYnCr%2FcC6TspshNxZcs05URJwM1EmyBy0418p3d2JlIAmKZcDyTCfFooTCwmnmPIowwrcNuVcM9LV0%2FYoJgyLCNBQdOEmwSPG3RW4tMrOfV2ZyrL5LeAZQ7scX%2FozqdPHVmmaNgcoiT9UtURKA5P5VZaQyEbc79KVgHXnutrQIBJuCs%2FOJ%2FxfJG9q2Vmmg&X-Amz-Signature=a05dca347ebd452f2c4f0964429a814728d38e13e6cb83684d0039c441fd31d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
