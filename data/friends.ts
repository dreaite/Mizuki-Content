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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUN4QGK%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T190612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD9nnkWj1ii%2F1zKZeM8hf8Nb9ZE%2FK%2FH5HDfrMmw40CNQgIgDlJPkl345RF2jc%2FynmLgwveNsMDT0zdlgSUTR2CShW4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmB%2BwB3adtGEQvGDyrcA0L8l9suG0ci0S9F4xwSCRstkdRALcDUQ74%2FwfHuuRWm18dX8p%2BadfidWkFBXmeXsmFKE80LdxO3%2FR%2FNBZI0x0ym8TTDp%2FUi7xh02QB3uANAjQZ9k%2B%2F5HLd%2BEr7bbxtovxvNWYODiUA0HXWTfLe7Adk9HDLmG9DUyBjkM6nBB4JWb1oR%2BeNMUi7PL5yItwHh2kSNaMvc4frXuXb%2B3ZbUHvem4RcvdJjD1zrZ9Zs5ELcFa5jg9tp5yT8jsmDeajjSxqnPeQ2sB9iJR04p0RyjjvNLicnpU47c1280YL9cgk9OvQUiSg%2FGzDlegINkdQENY7L8Lbn%2B8me9anWNW7ALQZcFPIhS9rD0yHt8Oz7Y%2FOKWbIdZIDalTczgwpbruTm3SGZdHfHRhQBd%2B4OceswyQFM0qMCvHRh22Vk3T6%2BVaXJTjoluCSSpQMfAZzmgjuVFs6VC%2FZKtuQv2BhAmyiULJfOeg6Tec%2Fzeo2FwFVNrjbAirWCROQxW4fSWd1L6TkwTbVmfV%2F51R%2FnxJRrK2Rg9Qb1o1HjCsF7igA8s5mfbuYuyCVx9S1Snw8vazJShiX4E0eDFrKLbq615xpOaQmR%2FMtIyOOijfb%2Bf76yTbuOerVDGCoiU5KhnTbMwTGlwML%2FFydIGOqUBo6r4rm3JKZE85W95e9%2FjFkVeXOd6gf1rt4dyOWd%2BNJD7eNm7QIYUmHOM1uwyv7Kft4LemUtwaBm4A%2FJR84keTzj60Nj6DIlIBn007smYHsdHwNXWIZFAAKjljzyh1tifE2saP%2FyR2V6GfAZX6G6JskJeYdLUFMKRs3Ir5yG8b0T08Cr2l88X%2BbHKXGYtXXcgn7bnw5WgTxnhNLqPzMcufEukmGa3&X-Amz-Signature=071053e0949f6d24c237696fc97b54e8af0c7b5feabc734e279ce81338b49785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
