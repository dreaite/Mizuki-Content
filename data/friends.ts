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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYHX7A5%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T114938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ7B2Sxy6sM0tQAoFF2ZhuK5Ms94AwX5SvqHSbAcfGyAiEA0Il4XJzdF%2F%2BLiOfae9kTa9vx6GZIQXIWQ19gY86J9pgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU1tPZ9pdJvyAYCKSrcAwqNkzAtPKbV9GU%2Fnz2P0FXVUH%2BQyilE%2BWOq5NwaxcXEpqxzpsGAf7qmx4GVEqwDGtP1W3nfegxL%2BwImccOSfZvEmWoHgWrct6Rsno6gnZF9g9LouzzXWMTpqwAIKgoRsvc1z0xeOf2EM9wDAmEwlM%2B0VH8xGR1h2p4qcwn3OeC8MWmuhrRRhoIhZZozbCaTNspdWIUopf8qEAoFVf45UXElO2Q54WHgAD2roPLu4ZUSWy6zFmbpcszOxi7dIimfbuYmMezBlRh6X6FCzmO2BazFVFwOgzmU56mkBETRfpD5wJ0lwe2RpX%2FXC9A%2Fb9MlUcL0BiQ1l%2FOHWInBj5PbUn3dvmbqhMHsfALDWU1Ibh9zDwxkzy%2BSqKt1RE2KXPTVyFmOFQpPaNqUHd2saumifhbpEb0wVfXPl%2BQ%2BISVcNS%2FUieApXOhnYC%2BVsNTuqzD0i6PVDqKaqpTlcW5rAKVIof53HcJvsE%2FgvXQSreqIGicFL1ELfZRVcAtdFdjzgMc0SgdEsuq%2BD4b47Sx6%2BFdmNG5ayYji%2FRAK35p3H4dhtJJtmFG4Kx%2FYKPqyH2eMEsgfQ6UIedKqGEP05VgZPc5NCIRG9KcZAy3KpmMalPjT5y4lhF0l2wHkTbiyAaj5MLqHytEGOqUBO8DEA3qu6wRpA9Em4KBApv6awx2Z4Wq8aaCfJUX21f59nOixrNZK1pUwfA%2BfJU5J7FyqXWjQhgLgdt7kT6%2BageBP7aSmFo5xn%2F%2F7WsMqyjkMUNyVCpPg2eYTwIYLedFgXE5TnJuZrt7YHRkS2HGsqlETUc%2FRpkNfz6gYEjfEBPznkAqgmJv%2BOp%2BqCsF6xE1C%2FDn0jjwm%2BpTJT2uQGZ1xAaSwdzFq&X-Amz-Signature=190694893fb6d40af32f287232eb5a17654124c71386e7dbbe9eed0a3d88f5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
