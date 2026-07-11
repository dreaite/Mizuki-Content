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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBOBJN2J%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T033234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJVJXmMDRiFkQma4dWmPlRyAEReH%2FkFrjAsNd%2BR4a7vQIhANEhmesEuvlEUbCBc%2FzEIMaQCr1ulPCx81aqsqEX%2F9M9KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKR67h2JPPyB181zAq3APWroNUQoZAcCJpGYikz3cJJ07PKx6Jqmiu2nuKEVCDeTNLnvCv6GraY56YQ8osLpzmqCsIsKd5WQM14Rc0PlhfgB7ZsIVAPG9gfWqFOkatimWpMLYk01yb08d%2FwQSn8BtXV%2FpvbALp1IfVKEWajInKtVuTy55dhGxrSFxhGxqz4XyklPSzcjgaTUMfJ59OnePceMGHPda0r8MRlDqBxS51EI%2F%2B3MIgun9kCWi%2FGFC1rj3v0prtZDvjXy%2FHbv1DVKp6KfAUQOtBg3IBzXdru6%2FFg4kFIQCVCdR5MYxHt%2FEUfWoh%2Bo1CjNA1GoK1krxhTSxLXSL4bK93PIBwfhpbf0uVYBLU01%2FRtJAU3EzRLfiUv%2BTTIpgibYVYVwX6uhAhQF%2BxL4HUjzKG%2FbNFfscWIIEnvv84AncreovnnJVj%2FOB23Ybq%2F%2BpGlFlI%2Bpn%2B0J7EAFbK2lfTA9%2FDa2QCRDklBPmFuHq6MPKwAxksWazzUxoFHytaCFck15UARVHN06pBpTn4pZ2QJA3WNZqPl1q%2FD9dJM64%2BgfHlIsjxM2exnydrB8d2xNnZBLg2MhqVYYoN7Lve2oWhP%2B9SPqmo1dMaR05r4Y%2FWhymivesBs%2BxgNSPicLNKB7Mffuz5Vg3ElTC9y8bSBjqkAZo7s5JoARLZNobRQlKP4udL5nmVwdKjcnGQKiopaNWOxwZPiaRrFJTAlkkHBrpwMpTjs4tWqjodIYKDUNrfTmkDsglIUA7nsEekmZ0EYdyhgNaGpYwa2zhI2ycZDUkzzI%2B8%2BonewdoHbJ3Q93fFD%2F9oPpPj2%2F4qu3dZ%2BB3oljsvaXtCC2VeiqAwPRL6uw6V0pVYW3GTGoMsPHnLBPyxZuBj8xTV&X-Amz-Signature=f853b9712a704e74e09e9c9d821adebf428558b1ee142bc0e649e4d8f7ab4274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
