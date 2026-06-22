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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNNXTEW%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T042732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCP7Nnv9u7xx280AA%2B0tIDs%2F6WzA0FXIdDIt3%2F2IFDq6gIgF6ECU%2FdjE4jSdGk6EN%2B6kQmpqojAZviQ35sng8DoBdYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlYU3b0zoAu4IH2KircAy%2FUE2UusZ2qpOlazXl8sXWEYuYFgFIIpvuHEi9WoF3kY%2BYY%2BtSpjIBZug3d8sDWwn%2B8AyrQSICDD5SwerPbqHgBD3VxrCyUATIwvOgr%2Blx4KAEjCBCTYZfevAX1Kkr%2BH4gkldyC95MPHEo0%2Btt6O6%2BX3ZaMbxlkLRO%2FfI8um5hSnpSvn%2Ft3eqUTRMKssY1unuYAkfrwCP8FcAoYfRfBS1JRo%2FsUmfINdufgiiLpyJvDPQy8ijfznEI2ygwhrT8ct3UAvq%2FiDIhIxWkPPrMxYiYV54MF6IIWMnzCgoX7z2LdS8dxb5IiKxc9BWucvaYpOFK0Y61aPWslSB0iJojPIK3d%2FVWSHeXcTrrMNhe04xu4b%2BMdbA3zGS99Y24rllGUA0oK6N90GgmSdCXp0G%2BVZUF7F2HtUK74VE%2F%2FrETCKwM5KXa%2Ff1yvc9%2Fq2LSaa7wZTuP8J3GMXRKUvhLJWqDx0MmcYFMyOpPn%2FzmfEX67hhWgq8DgUfOuHt4mH3VRUJsDGMmV96ySC0qP0YynNCyTpyavhy2qIi6aLXfhwfk%2FdAyQ7%2F4HVtGqXrYvzeK2NsI1ML%2FPRCaBp%2Fc4aWHrLAi1jEJmkUBbMO%2FFdGvveOa1v5G75YhbHTuViEQSeOt%2FMOnW4tEGOqUB%2FwYfZuyKY7EnH4pJfB3vyFbJIDCkdHJiWkyQwLfw%2FPGGZnibWliygQsmJlcCFuLuxNass0qBs2uGRMlqoJNWq8mjoWYizcx9v0w6psi%2FvLRNs61OAGN%2FEKsnHwaca1qWR%2FbOQXIrfg9nSr2YFWeQw2U2%2Biv%2BLwpPFCGoAAtoFDK9hntQou0Qq21qzHEOdzLE%2FyyXG0uE51lEEmHNwi9bAuvHxUnk&X-Amz-Signature=35597f2bf707af9bb107ef94b17610a79cce8677b9d785d1267bec395a4494e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
