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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCBCL2VT%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T211117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4kE6Av05ZWi051KepBQix1bhREHBiLjXwWMBB7z0PgIhAMxPzcZpSs0aP5q4fSAQh7RM5tshu73aJF0%2FEZhpvkEkKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGgyz0v7ZQXl5FL%2BYq3ANXSuPm0%2FLcoRvHAQeT3%2FdcXSqSiI4SXorAAnilJiLl04h7q08WupBysd%2FdrdrfRqy6fm5FebxQjNdvNvpUzqgOLa1xiPPxTlwFl5ew5XcgFm3IgNAa7Eb9kvpN4jpJd9AC4fHCkrDH7FqWOj7oTvGnbIQTQt87b9YNsWoDsG%2BVDBk764GAir%2F6yelieatFapNKjIyZLA%2BpmXYp1w5TmZp1QHZm5NqIrf1B%2FCXk0lKvJlQDLAeWA1vbbv4i0f1HdvhzN%2B5t68AFzZPgla3hZbBhwdf0m2UiiZpL57c4Jifti56llJkrzYI07qMWxhyEsvY8SfEdDrkatT11Y0iuDliiIuQy%2FhrpPZP%2FOuR04Lbweu2gadB9NFvAWXx3fqVtPgL%2FmCqVahV03seJQ%2FChC5fTpfP8A9WOYTuljCdsN%2FapszVb0Hdml%2FNpsQEq%2BGhs8C4m9h9suQyL99WOiOLGceId9mVtXwbSgh45JWlKJGw98CenBf%2Bw588wSXrhZ7nHiGrqi3QqBOspdPkILdtHui%2BUk3f1RcwuRCVZXUuw00GqahsncNfpjjTOqWneB3IkjB3rKLLLubQ5oMuuI5A%2FiPiVd8fswdJhIXSIXk%2B%2BaR6VP29jXoQK2OeTZnCPKjDou%2F%2FSBjqkAY1SszWRWcKrGk3siUAOh9jWtYPc%2B5ZvR6JLFYTuSnDxILchmfEOU8DCO40Evf9k01F7wBvki304QX8ZwtSCdPGaIzIJPIjwxxDWsE83F2xoLa6S4F%2FmiQtds8fFBLkmLZKLYJPgOBndKd0i4rAjHP07I99s6oRiPt6OlgVh5TebzwtRhRG2YzFR5%2Fgs3ANtRsjQd%2FyZQPeoCvOFUn%2FqSWGaiPWg&X-Amz-Signature=74239b6a443e6f59a8ddac45779e8edea1fc5079c33395a658ff3653f40c2719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
