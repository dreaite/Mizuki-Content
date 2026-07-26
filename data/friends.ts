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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAHSULQ%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCO%2BcpR8Ktjm9R6iUB2GCX5V2LgWOT3D7SsC%2BK2lJiWdAIhAIiNTRaqT1NY30dlg1gi%2F3JVbI1UD8yaobG3vOc9fEEZKv8DCDQQABoMNjM3NDIzMTgzODA1Igz7JF6uc7qf0oPOq5Aq3ANYiW%2Bwuft1I3f6W7U%2FhrWMB4K8Ljg1AthIAv%2FK8L11PYfr1Psyf7MSdzj7Z6e5qTakMgPaJsWdld4t4blOtOdTA2bz0%2BYl6UOdnsvC6TQYKOBdn6L%2FloHVeDQFru0BZ2tLS0GCZNsmhSKklxOh9grI73dDGeVE0MS4dj6X9pOPaEJ44pNtie0z8L3wVY7MCb9bNeUOL6Xvo84LOpg%2Fuv4AqcnqGCgl6Ef3X6SPC7eK6S0Cy%2Banaeh7N8SbG%2BI2zG39tXaSvRVwMgBon0V%2BPty%2FHjI%2BuEDl5co5Z41bzS0NrGX8vmr2NFeXQbTu9DWCiooMpQNjhlgkAp1JA%2B3KgIUjI3NDzrnNVGsQ7u0covC5oalHM1%2BsP3JTyYpKvqY7hq6UKPHv5YWIBgzFlwSkOIv9kSKw4ooyPJAtPbXlc9aCZl2Lm2HsrDdmCaz9uBjaWT8GCfrY%2BLkRgdRP1NEHh0EpNHhkN6X81thpCEl%2FH5bd7o6Cc6rIwuIVhbfONP9tB%2BDcBsDVx%2BzgKkcaUAhg977sLdwTmNQjgynYzWArOT4eeAN80MQFFMb7pdbipjz3wQEdlrhJ%2Bgu7GooJMt8RXRUOewR0T%2FmPCnylGhbIqERt%2BoPSawR2X5wqa5chPTCUx5fTBjqkAQE%2FCClAZA3anIE2IIXJh5sMIvXvw82WWFEWKmN0TRpCtXU1aeK6iyVWylxiWpvr7BytHo0MbpbfhKa6OfCFSiniH7axm8wOC8D%2BxuNpnwcAOdeDRRWi143K%2Bml12vPBJeDMqaMzceTa3FXRbh%2BNw12kF3jvig30rU9UPGvu%2FuLJnF79WDxRasIp%2B4ZEQ8%2FaFvvc8v5G5NolC45YK85TuNpU8wIz&X-Amz-Signature=ca409cd76e87d0bf2cf377d238a73a8d84e38a9a1b1bfa586f7e194e74aec671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
