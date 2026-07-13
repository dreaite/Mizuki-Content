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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673DVDP2R%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T201614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCH0oYZFt%2FT6VAkImZ0MHl6QrOnsYQtmR4JKsvg7taXpQIhAOwDIhxDZEOdnnhvQSro4eLdWv2QNt0cz62ICDVw9xeHKv8DCAUQABoMNjM3NDIzMTgzODA1IgyNOF6cufbxOH4lXxMq3ANzciXC2Kz%2BUnG2R0tnooYLd7mWtWKVB74Hl4CsqYFNbQsQPt98vVr1nsvADxYeyd3C9uPkIAu1DvgS%2FEs6gxWMBlriMcBs5O9gs4Euejb0Z%2Fpb%2BvNYPvF4gGNGdYnkDnXV15BzXsqlISsnxhP9Gd2xeik3FplxcrgW6ojhvw9vbLWfKPUiF3j4AQ84t6VpyAP%2FCkOZNDaKt93iUQTlpKscxT2llFKvTBhDfThgjWGYwucARjbphRMtA6OUCP%2Fm5Sc%2F3G4t5CIiupSQIJO1s4qdIFJ0t3dz03o%2FczKqO%2BdEkui2y1FkhK88BGvFgC%2F0%2BozWO9cR79ny82mZ8eUZSSlQFNEEbdSyBoGrj44iiqv4oeIZpOBdaOce5pQQAImj7WQgjLdndxkBDv0NKQjRqFUoi70RGsTRyctP87p1Ml5WfABvcHgB1L%2FEEucSjuxb0wh1kvZmX%2B%2FdX1QXY6IX0U3rPn1Y%2BJAZeEM53D%2F3mVxNrt0loLJ4Wo791E1qku1D0jiy1u%2FlqEtuXD98GlPQLe%2FWF3MTaNezJH%2Fe0ckWeRAGXYR80H%2BjSYc6BNLyrvfcfRPVtG6gOTW28tRbqUhx6bWnfyhJI7zsvVUTVhs6KZIp%2FAHFFRMfdDC61nQ88DDTh9XSBjqkASEEr%2B7wuGaWNVsRS5RGAztznpX0CaIwtyK1cHGcHr0d897k78KQ3NfSVvpf9MM2NHu%2Fzyt8vfpOMa%2Fyge9k2gjGz3sNw%2FfgJ%2F47fwWpGOTupUau6A%2FPjglylqwNExcx959fh2L63q2woeiAMIxAfz%2F2I0ox7jo6IcgwLDw0LhfMrA%2FYlzdKsMlzfMCLSclkWPu7rpNU4sIM1SxkDVv0qGUUSajg&X-Amz-Signature=0dac96cc36544485d887ff17229d4bc490d173ac2e5f29c2fb19100713734605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
