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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BOBNE73%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T094913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRdGDWHpjBud9uNC4zZId%2F0qJzG%2FQvTyeNI2d3m4pILgIgCBlJxU317gSD%2FDTH4A%2BfsG4Q1zQZ3xxIHZI%2FqdWE2Ogq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCszvtfIDQaMaXVzmyrcA2GA9zoAw0Q02xEf%2BtIPulOkjuoYy9vfwBeQVxtfcJQdyFxzyxHbszz1nkNHfDkPqaaM32EoEyEMVnJCrxtOTn967g%2B7b0ril9endsI8Oc9ZIAJ9T8pZESnI%2FBXS3SS3t4sGzHDwo4%2Fj3nvrlnFtFIRtOz5A63un3vDERp5aGRF40rcNX7p2nKPG6toWUJbk%2FHi1sKIiBn6VoUrDPB8Ew40wHasD8FZhcs0YSpjXwi%2FwuZcjEPyFN%2Fa5OThCng16KlpscBmtyRfsWwIRsGoa6M1FjP8DDGyoausbjny5owoLDjeK%2FnIm%2BgT%2BO0bN68XXAFCsPxq5mmiVrz5Pha1msnF2NaqS9SqMmltUEbrKgnmYEhoqCz2Plqwkkk1kE2XGxHJVptCeIM1Eff%2FKr64ZHZgey4qLMDZ4CUS%2BCFpIlb1FYbfciU9%2FrPrFMz%2BqaR%2BDvBi72kb1twG%2BMSBvnDWj5PBQp4PUzfuYy9%2BHzzf3kCjMONqvvRHS4PegUUxHVx%2FRk5bsoooovtK80zxt%2F%2Bg4JkK0VY41XChszDc6n1ZOpr3BYBqdgydQlRgV9EZRjvUrEWI7ktFLPUxsmgKYVkkpYen%2BM1IlOeGHPg53cK3Kb%2BmKLflIndKcRlr2vTf9MIyDktMGOqUBvsN2omWUhJ5jgLwd%2FyaA63OohqSGzu5I11U52ciUTL6Fxo5yZRorQBtO0gHksEM2iV0NyGiu9frIpygavYRW95L1H4S9S3mhR9fuDzi5EibZDT%2BzNHgUfSYCaihtVeEAqfv20VYOS37OhQtKjpqXzP%2F%2B3n2iYcPMvM%2FkmMbCBYuAFgeATkQTZbCf4jAs0EtVP%2BVXjdP3%2By4XjXlOL%2BR4rKwYjQ%2FO&X-Amz-Signature=08ca5f2203695bb70fe95ca470e69fff05b53b04e7b5702eafedfb4dd84d409e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
