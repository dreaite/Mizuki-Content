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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OP7E3I4%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T192749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUH64NrG15OwxiwqFZRPXQIIAB0XVeyWeNYqXcTkBqzQIhAJIWBmZOlc%2BEHLRzTzRLpaFvbH5dlttWLAXF5ef3X%2BR2KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhAs%2FOh1vihn6FVlAq3ANozUZCSR9PHMI6kUl1Oxt%2BhL5QDu%2FRb3uh6%2F7TqsekqnK%2FrwDIIV42Ol1EeqEBdkmIjMzLxWwCPhDrNd2d7GifSvsAfsyLi2ZIaGsEW52xOAj8TGS97r%2FuVP4a5mTImoQBjxnCVPQsEDeBbdHxnDUqR6ajwPMT0Ox4QpCrFWvLdca4Uc8HToVrUhecDa%2FKbIrg0lM8OjBEUklR3gCiubaaO2TLiu6X0nhETypReinvd3i1EjnsVAbZZ2CZFprNhiu%2B8mltLiLiAmxdGradBAUZBuYqzJnrMrAb%2FWz%2Bt2fjmo4S8h7zPeEfBXOld7I3v1VxaV15RwCtCkK5AFVhZlqNu25RDI5efwocgxjetLxuGFLHmJ0unRl34p%2BoHOf4SmcMcx8l6PiCD08bPnkD1xh%2Fe47GKFcLnWpeaHzjO2VfQB%2BzwsUrifLeqG3OvJXT%2BpeQzyedJb9NHS6MzACp7HqC5jr9NDzLZp0wOLDCDnLPu79Xj21AAKNJoBr457XyF7GkUNkbURXTO2sjHLM3gXkPyiqSnboriwymG55DLNp7Y7I%2Fgc9PyaATgHnjOzmzSFmBfkjQ%2B6VRWW22mnFdS7pVwZ9WaTibj5sKNgA95AOLF5XtN7n2WaF9U9KDdDC%2FmbPTBjqkAfX9fYdxRRXcp4MHUUqcWsbcrn%2BHATNFi9yPddzvqD0GRI7tijN9sNyDl0nikcfT8%2FBs6gOYPu0mMuKpP5EQC2cVK9kCaQOG8q45P3eluNkOSVRqllloK93fXwLyQcf%2FjMFL3tQ5EbCUmorhAExZNmTbuYEWlZ%2FTq6zNzwraLk4cak94T8i1iOEfu25ri%2BlLpNXzrX455g33cQy26qPlt6IR9KQA&X-Amz-Signature=54ac06f25690018f106b96dce28e990973b70f9cecce3063d55158fe0b08db12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
