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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBNFBG7%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T051618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH2MZyQVoIUb1HjIDipENWyToWS3y77utqtVkJ5TNFSpAiB%2Fe97bhZXIN%2B4z1skZQUmcDDtayBhUavgwUiY1Vl0LHiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdUe2Dm3qfKqBJN0KtwDXDLyU24zGgV6c13IT7SoGYvBNvSgnVfNCvI05nwiuLIBe5TljH5zgeijIX43CreMlh4qmrpKM9Fd02c8w%2FxnyYyMzQqv4BLvp41EivAjJrZ%2FgEpzEAhKomqgZRqktL%2Bzs5HwlyvylMd6hNFs%2FeuXL3nNpbUkyZwXmDxF3%2BC6VeKosZrSCcluDnBlj0m2dzdZQw%2F9n35oTEdwyK6iGLhsWSl9r%2FgsINsZsUxes4bD0wEIOrpGTjrUswJXdqsFA8hF14dRzeOk7nwT8i63gNAdLoJHqIKe16dIq4SGm0P50hquxDqJA5GHxOF2o5yzKxBie7b5e9lEUKHXmg3eXdtK2%2BOd60D8miCFt9teBxluezttlikkyEE%2Blihb%2FYShpE45HjdBzgBo%2BLAspoWzQvA4KfPCL09bsjlrR9tQdakAaoK8U1Q7G%2FMqSA94pAt38W1l1Jy5zWhDYcAET6IxiItbyctIWofnJCTbioxfRjB8mhVKgonI1x6Ba%2BUD8CZvDztPMCf2t%2BAlsajplRfAEZYIPOpy1wwirY7IvJ4k1pRSnxkuwdqc4PG3qIttLSkDPFYQQcS%2FeUhgZEdC%2FF%2BHTiBh1t6Lw1hABUa7RzDxs20lhMMoG0UpKUbEO0N50P4wl6rY0QY6pgHa3PKdenR9GWI9z1RD2qKVTNjR90kdMh%2BdbfSv%2FRCM%2BgnPF730LGey1TaVRuOGMMPmkdP1RNKhLYs1fK5BYFTZ26Mg%2F91B93xS45clL9FswMUNAkVtl79o%2BLPJ1fECCVRAC7BvULx0ccvFHxvMzIYuOGEAtwOvAGvadi8mtTv3URuzNJqMrv09ZI8GuEHivWByVz2ODfUOSJIg4RjurB6ryh2xMmtP&X-Amz-Signature=aedc6e46220c1c4656b4c6c594e172847b5186d0836279264e7e3debbe925eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
