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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTQOBEN%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T220231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDvhtCu2YJTGbzKK76kzsL%2FVf7FpMJab19fcYO07HmPiQIgHH8uA3AuW14GHtEB422i78M6MPIsdXbscITmqwodplkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDL9lKEbjYyPFGlW3gyrcA1tCQzr4N5%2F5HSPKS508UmhKTEtP6m%2B576sibhHe74bLSwBCBIMV1hGx40m8Ik0TPFzSTXyC9JwxrdbSzmbHmn93BMpRx2dzDQYlF1%2BgnDugWWcnde8rC5D5S9Vhkihcia9tvUqn%2BHB2LYSnT4dUL%2B9hA%2BvDqzleY5UCzWDEouVG8enG6KtAwsB1Q7TtDsSJCOnCbclVVt2ln7N0q77lalF9Nv8vpPv3BjcvdO%2B32dy9fIj8J2Vtuv98cnYpFCAibzEy0I7KvrccrG%2BIkdQFlxn0uMfLUsxPSDBLKZsuljBLOkSi1HzZUTdI8mzUYsO8ef6zl%2FEtWHQ%2BNCqQxethutPAodeqxjItGu518J4X5gQxTICghCfECC%2BuG2z%2BeLkypC9CidzoIoU9PLXEJ2n34dmU2LhGQukRjsYqWf1VNxtJ%2F9xpZX3vxFHYEy71U7B4a%2Fu%2BHgLStgduFnwRzUzcglk21KqxC9yRWM7sb%2Bs%2BRJWLnVLLV2bT0YBG7htWEVlvWU2oKCmI7W6%2FMO7a%2B%2BK%2Br1%2FvjcmwUSnJ0rB2cyEJLBkWHQvyHM7iBLzmMprwAv7qrLoAven23fyR0SbdC7UrUWCfcpni1MfBiiLvmVv6HYUVG1RkOImqVOkwrpf%2FMOmE4NIGOqUBQAmLuAnIOoKnfD9e%2B9q9c5HMwOZdnFHisKCTtSfPM1qFz0XS3WUrhR8CC6r%2FGm1R8wRaA9tnKhu2QHdogOlOsi7u7HtrtVxXnn4DP56B%2F9OwdbVxIC3vnT9v3ub0HY3IdcTPt0FM5CsdCLmxuRMcsXvfFYKy61uS13fjT%2FPMNcNznqR%2BjrcwR0hLqoEsjB3GZYn8LgnQmjjJnTMW42KOL%2FgUku6K&X-Amz-Signature=cf4ccbf4e399bda04e4956781bbaa3d0ab99528f057bdca74603e1132a573a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
