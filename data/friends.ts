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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKTGURUA%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T154235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FxnEk1Mjhk4Wm9LrXIPwelcGwKoYNx9ZTfuSDQkg6%2FAiEAqciF3OUjb2j49oOz19J1AVtIl4X6zDnzptkT2Wcn4p0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDC%2Ff5cJoXzQijsFqCyrcAzNwrV4Ooi383ux52aU7qq9%2BlaBoBRmYUP0hUmxNOOfbmW70%2BrvvzJm9WdEuuyCsQQoE2svMJYmimT87d80cW58c8%2FIIDLkzDkbIHJUg2v%2Bp4SPiBPkO3nFZ45SdcvEyK4po0Waxl%2FjXSYlOtYMFM%2BcpLDnU9r5TLpzfGaOLooVxmIUZBZrlNJfMV9yr5NPz%2BzdqaCD%2FNTtSObHacV2Rp2p1B6ul%2FVruZxD1grWmdQGg3E3hFAQFksw%2B%2BC1pnDatF54QoLLzOFMpEnaTaXLd6dHNs4pLOIAqlchh67eGy9%2BjRabDppd7uuf%2FnPw7OofJzNeh71yNgVUccXWPex%2FAKgBp8c0BVrF%2BtJ01s2C7BDVwiZi2hvRK2Ddq%2BUJQz%2FEaxWN%2F3ZQNRewe1L3Sz2r1LBCneRUzZhlmNPlEO7gB%2BKQfcsrijpfh4Tu1YHznkPkl6TFChA6zwRP5xnbYNIHvsobCyVfUg0wNt%2BwoEMSFh4TeW1dafzW9RPe3bhpT2Y85mJ3xok56Yu01OoqiockWsn7lxFXEbMDhwcAMg83V5n9ZxQKIWOpa7J%2Beu0cjpIiVAe3nOPqsLgdc4OlzECb20NF4Eze%2FIdWNLHzxYmheZ6mDZXq5ZAltid4RSaQjMMPendMGOqUB3L%2BqOMtNk%2F7SsgU6teIT%2Bar7y8VX66qNB%2BvdN3mgTynDszfmH0dkFz4YolwaxLHKD2vyDHO8RTZAW4JaPrBhev%2Bf32ePgEBkpGYQ2tAUmIk88Cn370VDFt7xWhnwKB7IQO6l2r%2BrnsLfulvdgTlKo%2F2yhDGfQH8R8KtwcVWV0JOa7637zLAhelEF8RYRbTmfz2K9Ze%2FHnpXuthc%2FpcBI7HYk9TLz&X-Amz-Signature=26d2288e346a3cdac674da9e48a15bae5a2b1fce795b9e7442b73dc117d85d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
