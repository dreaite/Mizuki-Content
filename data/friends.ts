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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HG3Q5G%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRIDQgX9FbD%2F%2FvFFUFGJFxpbkv7IakzIEFbY%2BFxfPaEAiBzxHatZbNifIT%2B5tc9et3bXlpW9d7aNNSqzDmeCGvSSiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVnyuVuHWTIm3EtdKtwD8bltdhkY3r%2BADGFjq9jsALzODEo9btVZQILMG0gwVoBxTUiXMiGsw%2BkHl8PdNEhd7c8rvzIpEvJXmObg6e4Ajhj2ORYOXItjMcGUKGo12L5vsWBR066ffZzEbvy9Y2Q2THSbGeHb7MdjcZPZZww9g6bdJPDW7yqCGPGM7hxwBh6V84w3Ey5BksM%2BwaaIsg0VXLUYLi9sRr1yy%2FCiNh1Z%2F5kTZJVxR0Fwj5GdF7YPyI3k25wGBMCE38KnLNcgxe5kSO6OpoPSLKXA4QMaZ0ujOQ1x6%2BiP6EZSshninf08ZUlyahHLxfx6sgNo%2FBXnet4jestfsBXxT4ac%2Bj%2BjRxEQQoT0eS8f1A4m%2F4yRcBd5KPGizKS2aFObcl0dQVd7bRnSTKsBPtQUnkRlPxZTkZmiPqgALLOrt5B9TL3hA5aYmsPqR9BMqT%2FKrqU0IFI2jypxDrVqLA%2FxV3MxWwDSKfgU7No6u2AtZzCynB5r2TQPA6U07gcHEzSxQ47ndqZ8TfEk2GX6gsWaGpNS97OJ%2Fwu1uPvNrErLEB1%2FdVVMXqM27XcMW1zK1W8y4gxmkfJMH0Cww41hvcUbFQxOCYDpLhPZSM1V2sCztUm0c1wBxi6dz7mjgEms0VCZihBS0nEwsom70gY6pgGIMoECaaRWIZkLdKM7lZKpDRQp3b1cELZsgVmOyREF4drtSvl9L67DA4BI8ifhmkYkCXNycWW5kunFxaZPxQRFPHlGZXFJUuraSx%2Bop6jSkirHN3Xj1%2FNPmmBG%2FVJqTpAnbNaiz%2BC3WnCMCYXG2LxM1DvUnAIhII6P07wSsAbyOkPKFMTIjg%2Fx032f1YLxr2vZXZ6HTsNkfA0BFHP9a3UWUm2uR3OW&X-Amz-Signature=c1f59b08c4c4ce67c46ce4f17f68915ab257e574a3170b4dcbff65ef9a00b292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
