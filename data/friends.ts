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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLZB2IS%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T032751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjewI0ujxm3dde8jPxSPlbsu9%2BoHRbsUoxvH9uOZgMtAIgVuEFSbW0o%2BCa%2FOaIlQrZoKAGfPZJnC0V8dkb%2FqxkI54q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBVR8NMDA4Kw6vuyHircA9QddbEvYc24lmOVydMX3vgeHR9TTtVm7OBrjhkMgnhI1tPbxBYrMq3YxCGrTt7DJRSZwCSd8ElizXnJmrfZ5vf3CwFH8f8LfFQ4t8UFJAHVZjI%2BLtGDvgQXXgkpSnbpLIh0mLESzphCz4H74FwNkDDnb0YD2EHW0%2FY18JBjgZiwlG7%2B5HFuPIfK7GwutFxlyHrnab14CoIxvRDUK78cONFwkAKrHTaZwXQkXFE7UU%2BM%2BqrtPGWJCW5bE1RSN%2F4dhYKO8KxNJSoIZ3W60vwbDfZu2afl5C3Rh3kz7Gq1TyjhEhSNerVv6QeaA9tOpPw%2FpzgJ3oek%2F0a7YICx9Ai2JdKeVMIgz7Q6Z0%2FdmyxmAYdH%2FIw7jpRbOfLpjHpKXT%2F2gzKV6BVnOz4yBnAOH%2Fm03wxgTu4c9sZS6l90tCXVmnKt9ztevUQnPDQR4j28uvs2rpDG9JPE2dZ4Q91bIGHrveDVpGFttRYNlDrbas94eVFNc3EhNu1ZYXCWpz4UxCR3aRzp2nmNk25yxFpYhkD%2FbcT7vWO3cIPQjpbhuoo9ZZ9Xxj60ec9muKRwsV7bxMw7TY6NQRjckVQAxS1Rg1NkbkjFw200D5BqmfDiFQlVR00xCoLa2lbDpG6t5wG%2FMNrDpdMGOqUBwj%2BphO0y%2FREVdCIDG9VtYWRnVqR8WhpScP6McqtNwoN9zSXIQ%2F3HAhVGw1cu62HVLBhLV%2Fy0GTerkCLcCX08mTzjwZDYaEpFoQFSG%2Fsk8sP1UUmgLP3GkPn1R3FeIxhvdYTzOzyidnJZfMbQzTGmhNDR4gvWWPOk%2B%2BVIS%2FblKW2yljdkmNEJHy9KoZPj8aFU67t%2BoyhWM8m6TdezEFfKYVsCg9d7&X-Amz-Signature=6b607fdab276ee5d30e3e1b308a9ce48190c4e1d0b120bd736b88f4f22be2061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
