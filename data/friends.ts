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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NZOBIY%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T215816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHNVG4ek3YVJNuoU1DDHNQgAlmppLHlgguYqGNZhr%2FeQAiBG%2F2fvMKV2svv3ECbOFgjsyXmmRB7laQ%2FhdvR%2FiMcXNir%2FAwgHEAAaDDYzNzQyMzE4MzgwNSIMHJLjCnSTF0G8ATR%2BKtwDTAuIsiOF1WTPT63z3emgy25McrlIwIVZZLK68lU3SMDjc2pNB1IGqsZql%2F29U2f%2Fx5Gjmt5hX2O7suHgn1FOmnhTPOmH0lPe5t3PDuc7RH4FHjpDsSoXtEtxqSyPTgRrqVwkJNV%2BxtgbauXaIUhA9h7QyaFC4RLOYwMElCdNV7nDb989oLZvArssgQkrlbf9m5nK3uOdO8mGDK8auJveTWciv4oeNfoObq%2BJOgVijso4v7RNcrepxQ%2BcXi4Ca67WCC94xKaJRM7kYLuBxrQwANADJBwIEoE%2FvANOHqEHRpiGohc2MnQs8xb3w7A803KJOBDQRxDa%2FMwGlNtfNEwB84L0yy7tSUgZsDsmWqBK9%2FEyjYQJbtMztFt%2FOYnohPGWUzAWqJ7Y3OadMnYOhqwuKGcelUdisKMlb6viUOTMNHaLT2mIYQ6fIiLUGBOTuxZxP9TR89ygKGkDug5AZlI9fDnwj2o6Zeq38nqVso00he7WJvlSBK9M%2Fdr0GwOi1vglGjM5cWU0SbK09330xOzDuwChs7Y0IAqe15YAqahaZ1A1df4TcMRNmrQCMYgrA5Rnb41QWcaZubOqPVJB0SMXdu7IxklbDVcrQsWjWKE3S0MBdf5pi706JqT5T8YwyrfV0gY6pgE9nYRiYzl7xQGdeu98PxGBlXyKe86Dq0nNDhsrs8Ajy5TTs1RvrJm8jcu94bGUF9ndZshF9Q4Ees6rByt4qa7iU9T%2FHW3rEt%2B3%2FAq7lLZKb0InjZsqo9HVfEvJk7Pl5Ts3AWr2Gmb1ta%2FgSiXIdR0eklc89TkoEYJgNwjtcUQoW%2Fn72BfzYraukt4es2EJZJ2JVMDvEK5XrB41OcheY3K5zXzRj6Oe&X-Amz-Signature=454fb684128404f1c2c0b8deb94587cd3029d7e639e16e198ab780da7523fd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
