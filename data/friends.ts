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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDLS4PD%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGr3R%2F2AXt0pi27Uz1kA5%2FtQgkVKfaIf%2Ffa9PZhz4DvmAiBmrmHjjVankdvXTlXQL4taXLTpu4y7tyIcorJa5EZ50yr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMwDQkZ%2F4pAXjIQalkKtwDtrcp3HvXwwPnL%2BR%2Fn4CJb7hS8M9PtjBCEHF%2BsjoZaC4kKFgYeWXBlM1WXESeGm6BI0icTFWEmQdEJlULRtdLm0JTJqyj4Q%2F%2FhrdT2VAmNJSSViulo59RPR58zkpdkBYHL57gv%2BPR9ekCN3%2BS7Ws%2BWKScRWw3I%2BTt9RAjNokfiPBHecR5pMckqgiDoDGen2ynfh4TpiixTjnRaitXcXoykOKtiXVtxyZ0NhEQWGgMpZHijdgBvgN1dWolalFcXAfs7y9Bdb1C8PMJwn6CG3gXPeokl59MFlBAEiD37zN8Eb9FFI30M92mrFuTRPVp3i%2Bv8%2BlaDtlznaBZ8KhVnTlMSStUkLfGoDw9rE%2FB0%2BFTtBfXdOzOqx192meGfbBtfVw4XFiZ5hBL%2BlL0ineME6vqTEl%2FrrRkIVdyNAfZWZxetqJdnCkg%2BoA7SU3V94lwS9%2Fj6ROqJr1GcMdERoiueqVWc48w91bngzaDJUNFxutAWy%2F%2FJfq8Cx5GUgMUANLJ12xEvB6hEGGlSQQqTjxB4bzbjVYf5rPzPqJIYL%2FoeZsnjMoWxd%2FsINo9E%2FjkrqVROZlCzWkud6UW1D%2Fl5VUqNJMk8Y7E7qhV009omoaAJVCPFNZJ4FrByEltJZk4JXQw45a20QY6pgHM1jxfVSGDluZz%2FtjbVsP6YRbGSPJ7QyUrF%2Bhhb9YCxthfv0QO2POW1BYGSiA4oohIHDZQtnd8LYfBDRBIMa8xCYH2dQLJVR420uVGj8p3Ilc8fWrmYXmWaeYx5rUC%2FX1JkxXUFjl9ZrwQMtho8P1MCz6udQlNv%2FP1%2F7IEBy1f3FmAKFM75cU9TEL6fx367rZWOaUaI3EpPAXl9JEhdOovf%2Fa06sYD&X-Amz-Signature=64cfc343195688acfdcdaab3c7a7138b80788074283d21041d4afb86825abd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
