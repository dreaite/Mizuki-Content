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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WIHOHG%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T104811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDFpdNTNBf5AehJWOVPH9odMKb6b%2BttjUr%2BKgFq0ezUbQIgf1zO9Ez%2F2yEkPwJKwuzwOxDHp6APYQteyi7QTqYE80Qq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPGH3ZN4gvBbhltmpCrcA%2B4Ua57HIsz892Wy231aN27BqHDnVr6Vbf4VFZsgG6vem1MI6vpaEErbqbQjSOGnLRUFLwpbleaQ%2B6Fa1YY7qNwVZT%2BdpUO7VE9WV%2FsOIq0gN6CqV%2FhQnDyIn5xkq1I%2BwN0q62HpML%2BN%2Bfd8K5G%2BY5TIDTKZDNDd41D6fhUwXkvhub3uTWY%2BBjhm3bZoZ9mEIH6YoVm4bBzSRzeidMa8bc7ZvUzT7iHtTGJalArNmxCTF6wn%2Be841V%2Ff9i%2FSJUdJ6NDqM2pLTdkPk%2BKDiiO4%2F4SM6aZq6uUvLeHwjM7XFES%2BcAjurGFCwPi2W17%2Fx9rL3q8BVXFGVzJD3NVgD3GJ0GYCSQMYPYizYDCTubr2xggTWAKIQgRyTZQx%2BZmcBDOONtzm%2FRBfaUcdMFsYMqqdkRDxWTrF%2FGt8ANT8e3o64XhpgH6JWaDRS%2FcNc6I6lmRepGFW%2FD4pr8UTx9Ey6qxgF0oimJHvIr7R6s2ZS8N4ztViSz1YeF74NvjsR9%2FFqETIctngLj9yQTPWn1H%2FCmdkhr7%2BoSE%2F0nHCALRoJYoq79YyIQ3yPum3GVb%2FXoAmNodBiAI0YGijMqnxOg1SztAP7YqNuIPZ8uJv3swwcjtRPxFnVr41LnfFuDYV1a4aMNjL19IGOqUB9exgaG14WTEH7e%2FIKproOlPPLPa6UREPAYYTtARfeW9vINQeYb%2FusISFhOasV9znqXyG2QKrhGIH0qs36jnsMzwJLG9zYINSaccBu2vs79tHzT5p6fwXPjHUwi6VSXWst4E4rWgsnuG%2FhJBusx15M4jiqn2i63WyOsglniIqwafvSp9qhErn6dBcSSx8RIMF7OYZ18eJdbm%2FNVK%2BO6tB4lM11hXO&X-Amz-Signature=d496744da0ea80c616e0bd237626be011dc94c3d8ef7dfc86fe995f4b73670bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
