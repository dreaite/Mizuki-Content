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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6XL754%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T142147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDeicPAaR13%2B2I3e0QZryX21sH1giDlAYzNda3WMe%2BI4gIhANOWFaNQB3tIP47IUMnjIzQsoRyfbInwU6YdymqHLAyqKv8DCEcQABoMNjM3NDIzMTgzODA1IgxhO%2BVLwEbVp4u5lUAq3ANu6rJUac1%2FlkEijJrGvD4LMFpFyz9DNNBA0hYYQaKSK1K9dSQ5KP%2FTg4EP01Xuc7TwezZEfZLau5pQijX%2F%2B45LpySSJwi39bApH9amID%2BARnrdxBM9bI3K8cDHUvitI5HeNwhkgk9U4Tqk09ualbqFQ8R2hXjx%2FLm%2B3By91KYtwRC58oPVJK3k6TFBw%2FdCTvW9KGTYB3FDRFtG%2BYWxxDZ93Uef3GamIC%2BZleI9Iw71S%2FEncyUcceAWqpGgoMDz25bofvXGPzQIkxBhTpX5shul0P%2FroTT98Xr0NLotYngQOZEbT74bNQpd4h9iYwAd68Qd9S%2BbSvwnemx8p0FWdrev4NHL7%2BClyAv18Ig1lD354yMJA5pymcXlTCqhgetBawyj6fQrpTZUuramNju%2BVnnmn5DhdK2MKyBbZVbqhvQ9HLxJCGoIA%2B1Er%2BHj17qDOcXovcBXkpTbj6cPHsu455OsU23wLhYvtiaX7PR6D%2FnE1VhnzeJ3FlmeZP46V8QC1RooBdCfFkEb%2F2%2Bmfr0OD1hBfmYnH0KtkxT%2BuoxNK3VpWf9Fr7CsOzKMlDjcd3OddXhSSIXLS7egl0kCLCLmwt4oxKh1efj9vlT3m52FyPIOKu%2FzUyw1H1XjNpJMwTCB6rrRBjqkARI1E6YI%2FJbblH%2BQ%2FaxjVKfOfrbWydyoga7D0pEY9QQ%2FGbIQUyijEe74%2FqiEhANuS5tFatsI2MBAe8%2B%2BsOVILZBw0FfGg%2BrnCPxq0g85VKx4yM%2Fuw%2Fo4mxbqrgNZqyCDs9mh%2BmskdsRBkm9KBtVATLEYMUefFsxERwwqfByLocH%2FrYx%2FWAOzuCr2d6jUQI3wPg7VnHnjuqh8xjfKxXekpOxoGzUs&X-Amz-Signature=a7cbc08fb220de15acebc5839375439cdb0fe9b9eff070f42d547463196ccb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
