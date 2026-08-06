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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVIMI3XS%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T112342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCBc5F%2BICqub3iVprHAhPf1LoDJZk6rEWHhQhHPDdNzKgIhAL5RJHvYvuopddGhRVRc9ZWEhAFBMfQWZS%2F2ll1TGMm9Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxaTokZbbqX%2FE8EuaQq3AMpxtjwD3YKTVG5OeraHa2ZY02tNP2gHHt9NY7VC63vXF50WXG0Y6A2cjovHUYTuP%2FimDaUHfK6O9pQXb75Bm9%2FkozxRCGx%2BbbIh1aCOmyr11ZE%2Bhx%2F8xJehVYmQHs%2B1o%2FvTykucAMY1rqqG7NvRQCGPcUPAI%2BCqAwxE24fMsDDOpHYGRr5RQeXHP5ljLeA2kCOm27kcLnpn09xeSgYUDwWHPqbvrvqlS9msfNAcOvNd1fmQK2Ok3Y2R65yrt%2Bg8y4LVbhHeEGjSDg7GsxIvyshJIkCMheljuffCbTec1BjBPUvU3qWG3kTKqIIDrVtSLSdCzlr9sw0qAr3vRXcWAvnd1qgnyK9EJn28QsgNOhJYxuISBEkOaCva6A8i%2BWfC45ZeVMRmvj9hqgrURc8raWEG6ABUJSVqTaziXkJCFW70zSWPjxxUgko1JaGWN1woSfb6by4sJgSdOTJ8Ipu75%2F1jcLrUdsY03bUJDP%2FVd22Mg38Mvap%2FPjjHSahibN774MpG516mgBKEhXlIfx7Mw%2FFUADymY35RlCj0XEAgQQKROUTfYire5BYI%2FUdB2yiOj03GOChaM2xFOYm2Ld7Nh9VW9oYyRgP4lenBq5k2Txc2Cwe%2FfguoM6Sy3VRUDDuwtHTBjqkAQLau%2By5guZabiBPvvktBHdaB1ob7X%2BfJp1JR0PyPrkqQ%2BaXOhE%2FuZxiaYlZDoCy5AB2pE0aoCg1mEc7J8p8GwfCcun1pPznWE1OVsnREKF0bt5OJ2QW4m9OmrEH8LKsE5fiOxICYmVt%2BgPe%2F%2FHzAGnHm5CaqCDxlKvJaQucL7H5L99MR6Yp4A%2BuA7uSusa1lvXzuq6BXoSaUz%2FVzu%2F9lLnt%2Fm8q&X-Amz-Signature=4a371e5a365e7b0bcc32b4f69c6204fc484c6930c0b442df5f2f7ceaae9d6417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
