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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOEZQCQJ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T180237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1%2FDboshtgvfKook1xf%2Fb9kEPg4iP0tCEi4dqN5BnDOAiA77QrrPZuiAdf%2B5KlSCWJwItl13ouccM%2FEhRnqEcq9FSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMhNFZEBvDwDNhZh0lKtwDY1grbDJfO8VVM3Y7SCV%2FlfFVG%2FONGsdIgeYgIuaHSeOZusl%2BM0Wndb24b5Hk4oK4hdXUBPAImrZQY7C3wpV3M6j32dXg2HLNASf7oEjBP4fHD4BPWFevlDP8nCE7xBAhmEY2HVonn%2BNPbn%2FAUXh0TqJUOcvdge70MB5XmlAKsoleCWzcSY0dE%2FDcyO%2BKCmtO7Zf73IPKgVosgnL9%2Fh4y3B3GvFAyWha3RwQtbcltS7ngy1THbWFNxJ3eLf2DbLGPmsVIf11tk%2FMEi1ynj2mD%2B49gnFwGCMuYM0D5QxosPJ3wVWsSXGrXXDM%2F7K5Sb6uMWckuyawzYOpbSn9LTWX%2BqpMOKk%2B%2FHtDNicJBSj3eXUcVcLpNWhLjyyHfe%2FXFywVeDNmN2FS5ETlQHmWzwm4n28QIwNqzJEO%2BPMKORI8cm%2FTgBX89A9ptrrW3Ly4FzAQqN9rhtysC79clF8Jr7IZAwVRnG1MOJYQaeKhlBtVHiZJsg4ABOgRPbQiUfnHf75FOs7%2FqwYOB8EVn2G9yb4nZbFUDVOojjhldPQdUXGkHzZF7RYh8OZY%2BBq6NIy318FzxC1L8CK%2BNPlvX4xyVf54%2Bz%2BY52kDMdOkhmY74Nv7n47XABpaq1%2FrgvdIzz3gw2fyk0gY6pgGE9oxMQ%2B7hEGdwXnuNJcnctaqYZn%2FGjEelAvELwQ5%2BlDfCjYc3%2F7cOiKIyPLamKEXzt7XWuCusqL6JdzGT6kzAUgPj46DlrkVu950z1m9XDUa2oeLXEOlqeCey1C5ecD15S9NJWNDSv2xgMyLUCE85v%2Fq48zqldEXqbmz7phvT4fjXMkBylNMcPR3WCm11rX%2Bl5OyYn4YhQ6pDByamIfTyGsM2PV2R&X-Amz-Signature=ae3abe37e9e2467c8eb953d1245aa10df696df04f7e55c5fda61f5d12b0cb05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
