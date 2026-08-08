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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCETBZK%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T223031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxyagQ03MivaAD5YPeoehy9a9p3cyO6Iq%2B2gwkx7NeWAiBHFyPEKMRezyTfKIrlLGIwCesHzFAahf4EAC5ScnhGjyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMofLhnzDL1MQiRN6MKtwD%2BRypBqsIuq0weRiIRloao8o2EU5Qxeo0Dk3UoJJuwNCvcar5eiBiCLIHZY63lxwUisGM162ZhxxIDu9K04EeBA5U5%2FqJnvqX%2BoLHJcZCGJodSbiqitxrBacqNB1D4LPZEi0%2ByTnPr5DVfGJxIL2QluZvC1WyZI5nXRkVKyjWwFHQDAQlsxZywGy%2BFZL6H86MPF94VFx42NBhwMIsa8PE51H2h9UBghNvysgzQ4cp72TatZ9lsXPmlF6GEjsm2ORijDq2%2BOREg8RBpWNYpdBQNVJElLNphgf12Kod%2B79TZMWVJeH3BIYobk%2B56ekpH4bnNtyekN2naid%2BCK4lqg8Pm6%2BNrfxc2eFapdoCLlEhrlQpAfMYY1V19imr%2BGMu4whWkRZSCXqxJ5m2H7WTV3dEo0iU4RcRvxqDD53kop85vgrzI8%2FBXdMAY8NElx0eK96E%2FBenet7RJUYNERwSbWFkyWviS5mtPWvvnCD40g4nJ8wwb4Vw2sp21SddRzl3b2fbkK2fbDQ1kRS%2FoQ1yMkYd8eBfwRsrX7PiJggTFHwHnCozdksHDy9lGaGUAN%2FdbrFw8ECcaCkiAaUbaQvfzm0x3m5lj4YG05hoM5RONFlgcBox3Q4x4JQcaXdNHSswudPe0wY6pgEd1bgScOGIQ1am0zIe5Fb7tn0Sa56vz6k2dSnf5N0DFWte0kXbsUzqe03O093CwcB5qNxQcCXp2vZLW1WBm2DeybFQ%2BHIdFXRGcd0sbv3uL6sgYP7Ro2OSzIVkTi%2BByT7NOPgbARsA13L5rn2Oe3Zf0FxuD2%2Bdc%2F1dXr7pNuCfT1EMWygW24syAbxaJMyCC2lIZo3JcAGemvYWWkV63KTwbkrW8yDu&X-Amz-Signature=24d62b7e11d6069d029621676fa386af1a896f4c0aad3bacba7f95f941a2a15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
