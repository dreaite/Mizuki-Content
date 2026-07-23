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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXY5YJCY%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T111126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDY9slUIBbgapP%2FwHhOXWOTiMDNU47YdBJLJX3r7aHZgQIhAPZ6vFOITk0GcLYtgNoVFTHcpxC60C1AdGNPIRPcEzGMKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7jV3lxN4pKKlvMwMq3ANopXgJnRDkemD280sxrDgXQVG0tVyyoXDJEBD4XCZcgL9x720AFmXofwEAJC4xZuG6ElJTdSRXJ0RAyxYlQkQMlzzz6NSdVvb6rIo2%2BKOjI2LxtN76W2Wa38AW%2FAyC1b1oB5lBd2kxvOGbvmnt8i3x3QUQza3RoBNLuTnPC%2BrzbthxOdpGDVPzRtFuavKZ%2F0Dj7qf0h0TNNZ%2B82zsF1Kt8JfYy%2F22qwOT%2F6jMBEqxOIX%2Fhob3lPPv7LhqOSA8Edy8kb66DcL5xwID%2B%2F0K2JDJqBVCCvLGCOvRWW6EFVOqPmpFRmc2UCakYOmBvgIlmXvpyOYPHF9DleDVdrr2QNCFC%2BD%2BxdhR82sSo2Ar7uPapHyTZX49%2Bf%2BN8sBvUJPwNUORVlJH%2FSEC3CusW%2FYU7b27TMjcGEEpRzYTqMdYsof2O9a15iaIiiYfXS%2F8DSXaKSlib566Z%2F%2BXtBWLzlhxV7pOBDZ0LnTSFFOgFNUrIjeh79kXKuZuy%2FdseU%2BnAIhisvGYr2bqaJ2%2Byglntj295d4xJUWv5eSU%2BAdeRzmFuWUZL80%2Bk7%2Fa7eSWdvt6yHx1OZ%2Flc%2B3%2BeqjaoqW0vCi1slu0lHJFg9lhIQ1fZwah3mgO7z4%2FqUb%2F3ZlmgzL1z9jDGyYfTBjqkARPpGGPmE%2BK2UlF3eABaxCbh48dfx%2BSjlErTSnCEQECCaNB5%2F0ak%2BUTgn3ASO3i7VcahWOp10%2F2b7JImUOQbXt6sIGiAnto9ClPGpVz6KIh1rrfwG6czVPfRRcTGrPn4pn7FTPOlzO05APFvkbn92BGtIybPkuYwmbSyLF73MUlZ3%2B23neafYxwpyntaZNmME8qbM%2FG8iSUUXvRaze7%2FzN5Hg3Ly&X-Amz-Signature=a86a9a82b268d8e7d0e788f66be731301e28ef6f669470187c69f6a07cc56310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
