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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2HO6DD%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T071745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAphh7fMVNfLbgHfaHYQxGeYs7sVS0NVUp3aFb%2Fc9ZsZAiA2mBojzikEcZtR%2BUmUHIXnAZ8RlOLKMExAi8Enwbz2zSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMo%2F4UwJom3z2eT8e5KtwDiP5Ei0vhNLBaKLxjS8L2DAP%2Bgs7Oqqz4eyGE%2FEwhVzSUIzycvCu6c7EOeeXz5lyqz9Dh%2FrPIBBVb3yKaOAATYipW4aB%2BYfsA91EI9AVY7%2BPeJiuxKaQrGWzdiHqiFrf%2BHC6%2Btr%2Flh5xs9OMAtZVHonmEDA8py6Hqqo9YyHEFZkax6ySIhgEllQoQBGg%2FSWJUO94C53lEgwzTAE7sohQELbl%2BflwAENTwRFOZS4n%2FeNgDLIRqJO4OboEmdRDq6RY8jmoNuyydp3MBpFmjdG9qzQZbYyxys%2FjcYNbJOqCCZtjCwzILH5zizZA0trGE2HGZjkIAlRXDCwg2JkScDeT24nfpN%2Be%2Bbr38zCaaFBshZIPjqbz2h66E3jsvdrnoJt6pywzTQnP9DirDdtGmxrqpUGVw4oxKsfaYG3btE4HCJ1uqoMnrZ08LNBEC9lqo%2ByIedIz59mtA47TZokQ2XVfWhYk74JnWHSPM24%2FMNLayjDPssSmcOCmcBySufavoGGGoE7%2FtFC9T8rO%2F6%2BsTj3cJa48RwXCPvh4DGis0568%2BjBFDfEwQrMx2tHwQpPlCbK%2Bxymp5wKIWdGhabp8m1TSCYX2M%2FgzVkkBfbxIQ8q7qKD83kFdvuw%2BKwIMWDSMwla3n0gY6pgFH4HJ4usNOmbLUpbQchVgF5vvLDo7tTxADXQJz%2FOoHKtOZ23eS232cUwJgjRhahgy72gc%2BHA53VM2VurH5juAQBT6ggUA7cgeop5Xq9cR9y%2BMzIdeq61knLVsN7ZZr6yIrEW0KyIHs90pLO6JdigZSdVRkU1%2FB%2BjSJum%2FUUo3B%2BY370jmVr%2BK015dnlvmp%2Bxkp9mjIp%2Fwl%2FH7QRXzd0gvnHYR2u01c&X-Amz-Signature=9519b554850043552716aee5335edb10d20d8b76af99280b1b037d09552981cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
