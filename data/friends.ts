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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FALDGP%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T210554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg4THVE%2Bh0xhdFdw1xqB5hXxQKfx1sbb2Xp9g69oUHeAiAM8lFTO62db0AgAZUw5%2FGC2ix97vBMkyBjvP%2FDs8o2TyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB9xzT15w0MxtmY1MKtwDJRBNRXjK2flHG23tZAjcjJ9qQvobdUhbnCU0xi69f%2BzZuQl56rhgvXwwc8lSvqx6PabTFol7Ac9wILquxib3Rnfi1jvcCHv3Jx1yLQBrH8mqo4LsfMSqk0wCd%2BO8onNak9IksOOuaoHuC72fggitoifbnQLGnsdIJQAMflcHKQVau3gDqzi01EfgXTHYprN%2FH4coMmMuSG2NUql6ZIHrPBlnmkxqgk73VJtLpRyNIq2l8xtf5npfTJpHtJCWqxCsxacWM%2Fhl8KQTQBFTbueQBCDrtrBDOpBXCBvB2ebdj5p3NTIz0yv37aBklmtoIN1sm7zJmB6sWwwM7EjBYh3HovETKsioaulMD2c%2BL4IgLNQipiIQljjtlWSArXeWK1X%2BhZuwhoiFOlOk5ovsznRenaajMrKTfVjvegVMuy0WHNne%2Ftx0axZg%2FeXYnnf3t%2BNaJnd5yWLBsskS7xnBPUJtIXSi%2FoGTfoZFtNUJ%2Bn60B%2F2GBC2sDvjZdZ65frhvZmGFPYIiuP%2Fq%2BxYEBTtdrdKvnQViBQLmoxnKat2nvFS8IUo3%2BZ9v1rwxHNeZxfVYHI0nCXMX387I00WUnyqRl8G6AZZnXENJOIP1xmKyvU6lc0FfviU%2F5Hiafnk3dvQwjJmz0wY6pgFSnuc4bt7mx3v2j6PBVyPEcAbRxBVqC9xfOoHlbTupD5M8ESCGWI2ivbIdI2aXYw%2FtkMJcY348%2FxfqGykSd%2FssXBBj83J37fDyZAVg7ZPW1eW0xuUuKI7cvlQ199AjrTyM9gN0IB4QMAUQfX5pFdswwRAMl454ttdLHlZ0H6rBEflmwXNW3bKlBonihZObjNLT%2FJiJS8n1Tg35d0YeZT9nlV7bWugy&X-Amz-Signature=d05ff0125a27bde941a6cd02b570bcb367fa36a3c37b9efba48bf568cccc1cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
