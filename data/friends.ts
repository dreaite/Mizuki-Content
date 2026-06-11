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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A2REKO4%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBy6ny7thLgzaWgUnJPFIroipkUWKwU0BolCC3G4j32TAiBCtxdP7r7DxMfshihSk5wmD04WtcRuNM%2BHpbgAnvfHsCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd90oiqQjc1BS3edEKtwDYU1k1kysIGRvgydylVo44rePZpIJO%2B70Tg263XfJ7N8lN7BFGoXBIXe410zlb47JzWUvUegvENV48WbNiEeBRJpHn7Ijq3vrNUINydL89mzR%2B4zefQXowJH7LVoJZCusrNqN1l4RNdjlcqRjOFt9af8Labq86HZP%2FD6omPht%2FDE2CL2EQmVNXU%2FJMfHt2tSq4sU4dev40rCbhSgP2rn0aykKImltjozZRCs6b0OhjvP6pYNXzxPBKeYtFnjy4SM2NqQ2s8Gl2HkPQgmSLtQtbDM6pXtMSYzJbFv1oGRTe6a3BEKjcEA351ZM%2BGCMXIGL4Dp7EdymmH047iv7tKZaaxFG9epzz1kFjCXiY140D3TrQxg1ylrlSHQN8fJgu4hTFhJdNOyOSV8HabtnK26wzWb1ZxieC5%2Byr60mYb5TigybMYWUfY7zkGFkDWZyQCgWI%2FX4C6YwAuqMWpkUJKkeIdZa6bFm3B8Cdcg9rZ6M9z3xR9ifEFOieM4r5vPQFmFj5FJqA0FlvcPk%2F0%2Bp%2BIIOpr718%2Fn3nrRd%2BMuZjTGhiXBqje6aiKfdnuVPnD2pJrV43oEdrOvWX8oaOdKuA1cOG1xzptpgc0QdZx%2FtdgD1z%2B5zjZ%2FFAECwlOAQ%2BzQw2c2p0QY6pgFBLgE0AGtiGARPYcGavwmBqPpfn7Z4V6Wk5ybT0qWkORZfhm2HXLF%2BV1fG8vp%2BHfjo8T9kT9GwdoOZCRUWXmdmbImn3wYS%2FxM8jfsbLunR1I435YtMNnyx7mEtLW7Yry4lfxgtZcX%2FHO7m8BngXwGwKAHSwBODsUWdnOpKBmqmcYuDzDwv5QcAmq1CBBD47Zd3Lsu93oLzNf%2FAxFMNV3RWs%2FQY6EAy&X-Amz-Signature=70fed8d6b8a0d0f3c0d90424066f7c3e83e89d92fc595a1712f225c152a945c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
