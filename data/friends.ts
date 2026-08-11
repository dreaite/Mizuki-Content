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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWS2HB4C%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF%2BeE90EI6wc3O4ySK3VMkWFFIiPW3QkqGkhqavrHm7gIhAKvxkL8HfeLuYTP7HkQ%2F9i7vepX9U6zYL2p2MoCjiP2QKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5NmYektLcHOFyoB8q3AMMnIHCRZqjFk3PeljHHNZSSJMj3zi8KL0sDANrk242L%2FWmeiIsQ0f9UIaL8tpU003KlPp2n%2BET2zh1n1NlkiywR3ALrahcwcDw6peoHq%2BPVlNkrl2x7cYYCJfNzj7KmF9389qENmCKaRiy3M1WrrakJbUdxopaCMuubLTu2n0q%2FWCaBV2AsfhTd9EPQLpXeWxAqcb4UEgftUZxU%2FZujqQ9rUP%2BsiT7Gno74kZGWUaxsed8nmv%2FwoWLkj1k7zsEIH9Spu6entHh6D7tFrHMmd3rbLxfgus4PUy%2FFleWrbKevDNXbzi9%2Fv2x6TpBLDT3QhKN9wt4LRIhl%2BxRmj4QS0L3qZN7jmqfYodGYSe7p%2FaoIyg9SSc8H7XqFHzniW1HhgsJBteg0FngtBi03ZGQ90uPpFOS5QhP%2F54O8tQJN4yvlC6%2BH7kOSQBQ4FrkDIhgbCMP5KVvjZSzvlQ9Iid5jKfL9xHyvUEnL2c4k8Is3Hqyyk1WwnqQ9vm2WmLgX%2FfZGjp0mNmXRm707suFZJGBaUuykSUGEk78KSR6KYyKmSfJ%2FSFuRl2qql0wn1RJaekRzpwRGHYorLZN62XuYJgsqP%2BlQ963pjq2dpSWcWCT7rbaeQR4vSNLbMGmuWZ09TCZ0OrTBjqkAS7KRZlnnt4yXHKUSEBcUDKJ4bxSwsuHAzOlfRNy5sbB%2BZ2DLOHF03qy2PbX8N2XUJNP%2B%2BUIIpmeY2U6nHIjBn5c3sO%2BKxXFOIeEgHWdoA5GJ5URaKpUPkoKlBYAUZbY57aj4ub7VpEBJSo9M17aQ5pVwnlEeJeA9rpywPyP4Bv%2BprMRdL3TWFm9BK1wcNEmD8HAEC%2F8hGCOqmwxYCWDlygTxMoH&X-Amz-Signature=fd94f1135297c5ae14f0b01b95565000b99afc3c3aee6566dd3f7ac245ff2817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
