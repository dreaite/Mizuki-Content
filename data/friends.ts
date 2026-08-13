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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3QOVUZ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T204448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCJ5P3NlGsC5jhn3GbYkWmbNMc5eBgWq7kF%2B2hwB7J8ywIgYm%2Bcrqc6OXV2rPDuKT7zTSUaSvwHPeaZ1DaJG82wieYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BQf3fYeDDWm6yhmircA1UD3ETaKdfHMD2zQiEi74yrIh0vyL7erWI0SbJY%2FHTdncJ%2BTUGEDIUN97GZizy3hRNswQgCiyRlcg0e%2BURSC02aP8m%2FW%2F5T9mKa4V3J9tHNiTJ97m3Axx0aLAUUZTTGnKqwQHWDLIJHn5kcemGVHsthjMob7PsgzaYqSlENQ%2FWphzLvl6qtXpzAuyCyegi7vs4FRVTAkEWJav6RaHr25FizY7madUBKruNcm5B9i0HIffM1yLNO7lG%2FcOU7DDskFdnHgzC5%2FYKYcLKpdt7Sz6fzdifAY9Q%2F6bc0mF%2Brb%2FjOZEdIugH85kuKWMpzx2oWlTFZQ%2B4FVhjeNetf1MNmdlgV1vAmeEh5M8Ii74anM6KG1zKfuzTmwTAtk1MGfCmr5XIDaIwr6jVj94A71PMz%2BQWr5KV6DZswuvz52dPhbHnOpSw%2BQBnu4WvWHP3QEUBQhkp%2F9TxIn9UsKoZfVpG14Me8aIEcVfRQujRvyabbKYrBNunq7c7ckXOqZq75aZ8VZA2szxAE%2FSGeg5SfkvrlWpXm3U4GZKBcDOcU2wHOmV9YTp66q%2FPkAkH5MkoVD0xlU0vQ%2FHoAQOn%2BJQPFQnoXolgxFMeAtsQAwDrIu6MwLDMs0A136sKFhnav4dqLMPaf%2BNMGOqUBmEVZF%2FrYs7yrEQFgrZtfOlYprGFi09adYaL0nBpQf6Zd8QedEVdSF2rP9je%2BqEwkWPN%2BzokVrvVzqs5bZCji0fr8qSNLGq4z%2B0s1z6JafWjjv3E9lN3q3k5HM9St%2F5zPULMZxGkgLqDR0lFoIT0ChTtfUv%2FLuUziyZM9pbZZcNpMrSpM%2F2a320GX4M%2F7VqHZj2gxfelnQVzeppEvev1UFVQ%2F4WJW&X-Amz-Signature=f126b9bb52a9b9970ac578044fadd66dd734ff46b5955f94f76761c0aae82b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
