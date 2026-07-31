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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWMGFPYY%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T230201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDiH1nN3jCYL%2FhbgMrJPYUnfOSylcxJ9tWaG0VF2iwvAiEAkUnYZ8CUCWDwlsVuq2MG3ZhSbgfZ%2FcjbOs4O3dtNBt8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxHuJDdIX5CFIJCnSrcAxyyCu5kZsGVCCVJrxydRWzEg1f9urTB9%2FttrwjjzL%2BWAzI3w7JUvHgzV1gyAH3C0vB0xS4Ok2rFX9jGBhfeFcxzwUPLy5SO11CHMXRiv%2BdJhTLDfPKBzwcKLCyt00vs228yczRXzbk8Q0eMZh1gmDWLzyDHo2Z7A05AViO6b46rCjyL%2BFD24o3vOPSzoiwODdpz16vtpZRz%2BDG%2FtmVrww1zKTMT%2BvRzws0%2FUTvm%2BsaxS5ubzYl571cmgrQ%2BKNgYJPMXjdHeXS5ehEUYJTiA5O2OkLWjUUU3fo%2BjjRpTSQtS%2FXkcBFDQ2XTmNJ2un0j4yofdJC6Y3yRTsAwM9IOxZYH5EUKPEQu2gGUVz2aBe83ky2xcsCPi%2B%2Fc%2FUJH46jxSzHLixCdt%2FyazznLQgIjXGgzy94Pp3QWaVXUaW4%2FRctkP5oloFS0cDwMQHbNOxynwLrPgb88xtv8TiEWkW92TPc7vjvshBJUDoYx5hCTTpgJasN4r2MM9lMdYtziWUGFhqG2FH0BJKsD0lItbSrspj%2BuiR75hHfVBjqj%2BgbI9F5lavgpTlb9euPiv%2BwSiSE9trMpw1wlzBstbi3nVaxWa18Ns6JjjfRaQ%2Fk%2F49NpyLvjgXLdkjYtbJEa47qIPMIi%2FtNMGOqUB%2BkQL8mFwuyJ1E%2FCG3Cnievj6fpCLkMXuWrJS4lRC%2F7FZV94gpmgiq866qrLsEqpXWOp0lJIj72prFqWx2tCTpDA4x1Rdnirp9tK2PxBk8K%2FgHXxGENkqbF7kQjYRG40SHJTWqAVAyAWiHyYVJYAL%2Bfh1n3eyIiBJQ%2BXFekz2W1nmzpiBVvUwVaV%2FhE48M19bG5wK4Y4UTpyxdSwW9ROX7m%2BwYcyF&X-Amz-Signature=059424a0e96379458b3c1aa80555835d74314fcec785eff37307b1ae944bb2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
