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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFG6Q6O%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDiwgGLLBAs5DM7JSMs%2BJRwrQ%2FHNwnNQ1BFRN%2Bj4uyENAIhAOGlYuKCGPkbjYCKLSls1qI6VhJWjN3q1COu7hzH%2B%2FfCKv8DCAIQABoMNjM3NDIzMTgzODA1IgwpaFD3fkrETwi2wqwq3AM9u6hk%2BhzLvVYrwBfD6SinofbajJzBzScpt9ddiIPlLLtjjRMC1ajtoV8%2BPnB4Q8Ra0F1gs1ybhIlCtFQWePmNmsYwKzjDJ2juGj3%2FhSRsU0mwHbP3UA983yJ76GLzxksvEfhfuKBAp4QGKJgp6oH03sa%2BWIndVTyRgpkoUOX5oBxPylc0dpxYC4cv%2Bnwu3gDEKz8G7ehaya7T3NMrA%2FyEJoLDltm%2FvXtGnsMb0Ot8KHJYaNf0PO7Rv7muAjBF2meyVEAg%2B8ltf0l1HC8Cty0ZYbyp%2BauDltjw20j8FBk6sikwBxSEC5xNZIxHy9rGsbXWTJ5cyl9QC87lTifmMeRJ5dcH3%2BYGbFhvEghysTzq9tsw6fSEgNEOldcmjCzTmIOdLfyBjd%2BW%2FV1FB7iST5e88kIe35ptVC8rV2D4R5R9I%2FqvlZFy5jglDyriq6%2FusVyF%2Fbcqj48rZSYvy5%2FGrlh8VMVfGn2krBmB3ONpgGcC9f2Ue08GSO9gymepubvUk3DK0eX84gmeRtY%2FTqlIbM64cn3twMifwSr0ydm6M32gqCW2EMMcyrBBPWY%2BFJcnxNMSyLjLnrVhp4lj%2B%2B6z%2F4JgMVeosgfv2CQKln4M09ps8SW6FzZixhXgbz3o%2BjCp5cTTBjqkAX2nHuTZEX%2Bn7gUoWr5uSuF9EfOWNJEy1fFQ6gdDUsc7HSc10gH%2FQhO950OUj8hycOOLVT7aFuv8QtN8nvazHFsK1JkysEdKjoGj6d7H70CIox3LADmbgSJZSL8GGyN40F02EkM9ut6WP%2FRqTvEEPLCjBSbOYZ%2BaP12zP26f7zgWWED3OqZiiuQJR%2B1Xj%2BHHtljImJKG9WozAVHyHDnb2rZVIMk2&X-Amz-Signature=294375a3b60d67a39a52de77d8175b1ec5c32508118d2128795ab701c2c95309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
