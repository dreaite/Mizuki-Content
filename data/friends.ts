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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHY5QBP%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T041519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHX2ztPhw8expLZjjOfPKBUeou%2FMuswLyrYnSR77z3H8AiBy3TEAeksXDwNomRM3NNoR%2BG2LsZavDDouhaj%2B4bLYGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQHA%2BitMXhzGqgEMKtwDzZkhWrLJW3pKqkBuJMpbkxqSwktdRkn9iWeOHOk1ETIFDibCokf%2B0Cn%2FPOkdMYD%2Fg2p001Pi3ZaZNfieBsHrGXxAVewPTdxzkcDrHOyjvt0KjWI9yNtBYD4w62lgbMx3GTxPZpw%2FqkQlrBKi9ymvAjgxW62MlOba8FhCajTB8oxztCnQx3yboctv35BscdBqbHzpiOQ2rongF3JCH8P8rINd6K9QIuwOoR3Ym%2B%2BAC4ATFvhxBpztM9nxNj7LPmULDOWbBJGzbHgKRfto5YdnAGeCwh22rmD7elkLCS%2F9Gq%2BVVkTSsI2Squb2yKW9g1J5TYjQkkVSvoyLekSqT14Ixb4MzZSGdlIy78lNDlnXpyj28zGr%2FeFjdN2eq%2Fz3nKE%2BbDailE%2FPp5M4oGWQdWHiGM6Xke9gzvDar4i4EQCz7RToKS3OkQ0tDQvuIjRPGyg1p459vVXCX0KFWgsfZC5hvfF9rGWymfQwVpr5GOfZWMQiWq0pCH2WujEp4h9SW0NtcHiBHrFhYCEgxdjKG9rkKSgGSMu1s7paait8tVhr9BB%2FLRwV78S1SU7YIMVRY3vr72Q3vdUJEy72mby3mRw9FfaFMyxGCarOrukXEIGNJDf0alf%2BbFiXRa%2FzqtIwgcmL0wY6pgGxPzSFmz8h79gZs%2Fztd7oz22g%2FC1r3qXQt5Q3gVS1nkzXnt4Fuf2S3D9o88M1iP6jLF0463eTbGB9giVeGsTxWFVmdoOrPDNlAd8IYkB8YaJ5drREHDZXemWTDqt477Y1mXJ%2F9Pxww16%2FgBehoRt7s7AIrdMLBSMNdYwizZkcXHuX8BJgXD3wi0XwbbUcpreaCjEkyN2m8HWpcqsYvJmObUo5gjKlr&X-Amz-Signature=3430d3dadcd7a0002afa932337f481e9d1111b01e36839e5efa22b76066012c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
