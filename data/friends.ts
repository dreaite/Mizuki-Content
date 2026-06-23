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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJGINV6%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T094306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIET0G%2FfaD8N75ZNjMU709EjVvmXnrMcTpipQ7zj%2FazJ0AiB%2BhFIUfQcFJ5ZDTg7X50u%2FJIhwikl71dnmyGEl%2Fibz4ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMQlbijOpI4bFFlscvKtwDu1WJJX7N7QkUz0wj03UTnWHvLozOUW21oZ5RAVWUW015IOfjKhD%2FKDQKa0J77X9i%2FCGc4%2Fxb8yQid3y%2FBPXuAipnzmXqeIpuh1JsEh3uefBPnM6V7h2WxBugw5qYSXofDLiUAHO5j5mg7vRBhLacTkT6dE%2BoPAHqkGkoMLy5nmtdmV9NJUtkoVhLwuUPGk5%2BnQO1Gf56Dw7FbCwNKNfbm8qI8GOCDvEp4oaYcg%2B6hKSjEizG4%2BN3KP%2Bk%2Bywa8P8FT4xl2OOGVHkTUz9d3T%2BSnpo0iVcbUzwVNs45JqdmeDQlRXdLpLpQFQinTdXOZT7Tz2gm7HOfKSPOVjhBo%2BEkl80LQ9Z9QZHtzcBZIYFSdcsZSDTNJ77lVvZ%2BMEuB4dQgn2f6S3e0qd%2ByVPibRYChebk6hGPsDiQUZ4g9eGCJ95fWK%2BwN6m9yimYcr3FWXZ5uQGaCEMIcnGYtF331CZwgURT3f7mCh1UmiT%2BTpef572HxOITodo55olTFsWBMq7uwsmiOKtgd6u34XbQ7nJlSMj3IH3zyZgONsVXXtoxWaOaY%2BxsCFs28k2bS%2BFUTaj4lZbnLPcIQMpbSZmYl4dlnIXgXr72vCR3IL1xQQH6gQ%2FzxHUUAlEu4J5GB1m4wppvp0QY6pgELMm%2FwQ4FlsVj52vqS5zjaR%2BmjJ%2BC%2FPgqIiLAXI8vwsy8LVLpKfNnNue7iTSiZJf3jX49Z1wqxDQJtj6bpljxI0%2FlQTy0J%2Bt%2F2rjNF3r%2BOgQGWHclJ41caIDkzlIRQKG8SuoKxFVZng%2FOvu%2Bx1H3Ip%2FG8ptiPVAw447XC45HjTdZcnvYXyO1uUUtaD8kMOYySqDPt3FEoXCpbcdq8Khu5V6tGZwgUX&X-Amz-Signature=34512e3a76036a4a2fd57bae62e22e43dfc64b7d920f07d6b028837cf321ac61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
