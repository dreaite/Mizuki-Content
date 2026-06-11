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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PHKRHS%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCBnD1isUvtPf8GGCRE7XGB3kr5FCCKGslz9WduvFQx6AIhAIps2rFvrC8kvr%2FzJfj1muuR3V%2FeJPGOVvX4H1MxsWCSKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO2SMtb7NO4epwNPwq3APSYID1CN5P%2Bw70QYkARPalLO0jrD7xSwFXhhVf5ZvQDWDPQMMFo8ufYb%2BAkmlIdJUscbbtBDd3mKRyXW5WNka4ntQxVanfQr4DX6FOeeMgw9u2XO1v3OBL6diODG5cQuKQWmqFzuLe7YYjH0xaWbtzDu8Xn5X7slgoxG5kkYXcmF3amY6Wy4FMReNIi6mSjS8%2FbdTKEIqQINY1VuIGXmQNZDgrPEI9H36LfErFL8Xv5JSusMPubQ9%2BK0xTi1gPkLRBeXaf6viLXm35qxu7Jp%2FrR8FQQKgcJEt%2FVIaa0hb3XAiFU%2F2l9kADwB5hQOgGvTH0z6jyHYHojQ3%2FwblBdf%2BW8gMpoF%2Fbi2ZEaWocvTUFYKPJweZHf4JSvyXJyli5Uaz8kCVEhWA%2FBllnsK6NpHri8gFVo5uzHuZDnggrtR7YCCDA%2BjVaMbGXzZxUZc3lAhc2nTk8%2F%2B7wkfOczWo%2BHGLMtN8%2FwCcsiwKTUa3LI8KEfPfB7PaXrIal8UESnaGwT6y%2F5fmmirQ6O4%2FRhJKkmfKWw9gF%2FvYPbtSjIennAe7SK51pX8ItapHwpyyIZXWFTXjIO2OsiydN5qQD5QuO6LRu7I0DBG4Ppf1im1rHxRIbIrnR7TkO023lvvIbnzDJpajRBjqkAU282dJJ6%2FTJJ1F1hQrXVtJel57oyMUCzKS67c2F%2BBPBfD32BqTGSyeOe0QpnLbxY%2BNYuxQyliPkonkGFnyZ2H5MT9GPafMhVmYFBoBS0p6UUzUMNpf6aRbadteZuy1TqSbJJCbcJq%2BDH0gEWRJidHmbnjAIzwIXG6%2F3EqJyoR2S0%2BIPSRM9T7cLYKwUZA1XDz7QtFkhz53J2pC8y4IlcS4lfxaM&X-Amz-Signature=5df0c0e6f55d8f1e53e917fa27aa6354b815c85e09522afd856300652947395a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
