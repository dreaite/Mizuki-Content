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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6WZYZA%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T223243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRLZ7wdBt08bCzyAoMS47EYiF%2FHqm15JLQzOxvRsJZ5AiEAll4%2FU%2F%2FCXftYPhAe%2BpO8r82sLVt%2FynGdAirOJ5x79JEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVsp%2BXI8DmO2Ei7fircAwICzB9W93wmZxN%2B8GMA8X0%2FVs6dYs8skABxGPU%2F58vb0zNYcNj8BQXjlLWGDyV0GYc17XorNeHaf2cGOIcdZt1dvODjY83SFR1iZ4T9PisSudC%2BGRvfGxbmWUaHj26XD8TeAP7kQIb1lFKGzo4I2JAHBgxDMM8guvuK%2BoVcafszvsKieD9hoy9wOmrH0vv5IEGs%2FCPVtHnL9hU7dDXChYZ1zVDGlRLNP4IHg%2BgnEhZ1cIJpQk0P8DPZtaGe9J88k%2FwKBc9fpDAJBm%2FSK35Y7H7WwFcPXWHxW5PX67h79yzomaLgF1u4Z1%2FYHrymC0FCvfrWTWbjjNxHVol5ZfuLQKrfMyia6vI1mv959eTC7iutKnbiz69jsMi0FWpTdmyAU2OIhIQd48%2FuxQayoBO9GeA%2BZbcOawuNOmhQHP4qFiJCy9tu4ZQiRRWAQWPx%2Bz%2BR1apusd3NhyK7Sk60YFEy0YExtTBGx3YEv8qYw2nZBRk0PXbhYnDKRFFYU8F%2FJ0mAgWavUF4bOF3kTKykWPryBofrH0m9kxbqs2Ghvl6vSm38exTQS%2BJjJgFttP2rrsiYTrtjaeNP9w53Ar2AThQwOXoMCkvVij9NWp0foL%2FC5oaEmH1HGroDR3wczkHdMMb%2B49MGOqUBmlll6grfsY%2FfXq2vPccQLPeFvpDQub4C%2BviQnMsvWnP1aQR0KRX32ftRTBJ%2FvWD0V103tEps%2Fj9EAbimZMMQQjqDUgNmuz6uxCfrGzd2ChzQfoIINL8HXbTlvHB3jxu%2Fen4zFamNtk9CL7lN9iWtn2uRV58QuGvc0Up4XG5bjQGGxonAU6co5Et%2BM3oPgIpVgf%2FTwPJlMJTXESivSEvqRYGnXkoU&X-Amz-Signature=d01a124c9b6b12bb1e20f3e0a3996c445f45ecfc0a4e95bc7b1fb7c34ffdfda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
