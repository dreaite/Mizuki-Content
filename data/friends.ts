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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677BBFC2V%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T155820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGs8AHbFdNOdWHy7n7boASTqO1kyW6GfZxlAJ2Z1tNxZAiEAoiP4R9CAS%2B9oM8k2dbM5SwyZez%2FovLeiM9qSsjySml4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPNYEMj172WZdRNrircA0Qe%2BHnpcLhekU6ao7gNLh0un4VmGFeuRa0Ya8dn%2F0MLFxFh4dDsU5fEQBNtk6EKmKXdq9%2BHe171FHiQgqX%2BSdYdEgQzVTu3Ave7epiKYi8rXnNSjU4%2BoeRDV9Xfzapc2TZJ1XtrCmMG1Yeq5Yw2y28ooNwwMnAn9MiWuAk6wJTP8YsFsG6idiGEjQ92%2FbAKtkTZ1%2B6KRCFTxNsN7oFd4ZNsPfQYa0qKMjyujnFivoJJLyWfuiPawyTWhp5g7xrVg2JLLRVekR6CkqLOozORMgJ035Go%2BcnQGmfK4aUfjihxXZfBdgpEO7%2BxephZUiFQMXFbsL67QprHsfO5Ho0ETpwqg4i8yLgDdsHRuFSp3REgsyqxTGwIs0ThC5JNeSnhc9g0b6eiyUb3g0HsvucMCKAfKVcdRpPlP%2Fb%2B1BFZbSQQbnrmjjiSp9sUEDYTT5QJwob%2Bh%2BCGis4AtT5z1sqU07ecFRwxVrmCkb0BNfpw1IZRFqNlYov0Stj%2BMlXTOb9ez9Dm6u%2FuXEKQUJvx5PUllRb17nf1RfhjE2FEadTLm6SXEjSJ7C%2FmI%2BFt7vjNFWmNulYRC1CPeRLM6HTuDCHpPgV6zpCb3BkzJW2BzGLd9zPcdgxK2Jom08N6sPy0MI3HydIGOqUB4MyJ9Rumj0GI659hMPW0FAeHSXTIEw37nAnWC3xmrbmhfQvja%2BHtWthgZjxA47Z4wwYS3bCl0rYoeigiTQNNnPKK2mcGpzJXaBQxn%2FOEGpvLWtR9ZUcTgkjECgdkdwfDq6crJ%2BuhJJs9BNdHZHhwgBLdU5pq43iA9m7Ah2qy6WOCoF1W%2BeyveOenjxZM9VyeW1O0MR5m8NRJqXNe%2FcG7w8RhyHJk&X-Amz-Signature=e60ac61edc6505282c831675c039620dd2792ee72fedce2c2451de43912624be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
