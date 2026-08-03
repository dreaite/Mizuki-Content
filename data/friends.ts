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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RVUGZH%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T112452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDiqNOuFgqPLjOnrueuB2jXczdbIwbaTd1SjdFnt5GVOgIgF9J%2Bz0bXBj1PC9i%2BbjussMW2AF6U0dmqGuxuezVnvzQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvFs1gwb2TWMJzLiCrcA1ZORRY62ZIHPEkFzoKDwp%2BNNiJW9d1l20K%2F0MjV61bWCBXyl8ad%2FQO8gkIqU7CjtFRKMdJ%2FYuJpSMRkV%2FewEwWFMgv41KJ3KfZtqSrSNVqZoOlRLwIbynI0NpHsRZC1AxhKfY1JzDYSE%2BS5lHJcQI9d35ICtZK3gVbdefTsFobKB9nrqoWk8Y7bbIP43CBHt1zxze02L%2BPgwanc0qS%2BHty52QVM78G6nBWxemqb9jDIXpxw7iNNqRc2ZWZ0Gpy318sjgYM4vouwMHRG%2BfxnIcMEvDocxtBibnC263TdQ6u5d%2BUZB7a4uFOOiDN3D%2BpfvlZZyka9v3R%2BqjeyF2tRJF4kzaJ1IO16dpth3DkD33u1uZdfN5jTwMV9vCDe%2BxZr43sUG4gmu3eR0lAAgUEc6HFwKvbx8Rjs1gagTb%2Fa0ACJ5HnFoZWe3yEB1T3ddH4ncHJUhcbEz%2Bb2Y6zD8VhMVi5RVGphfR5ImvVpsLyhoSYyRpkfzwW83645vGvQxusj21qQT2MepjjmKRIXZifF2DSSiGy3TQh1GiLcWdXqt0Ue4LXuqGht0oRUu1u%2BFqxNMv9l1zL5MvpyLGOepjNJBdxQanNPGyy0L5zrr8fF5B9JeGV2tfFQpwhX77ryMJiIwdMGOqUBxJoP%2BRBEBXfbv3RxGQNpWCskLFvrH73DKxwNYdmw6hi9fLtHG0mepkR273Gilfa8vf2kqc1eb94vrr2dCvOPCUcXxWnLi5bFRXc2rjrz%2FbzbXNmuTO1dSEaZMWxWuDA%2BH1bx8vlWCHQFtsqcnbeUGHHE9WW2RapzSQ2MIk0I5uVFhxWqBmT7PDJSe%2FOo0h%2FeAL4rHC6%2FUwZjotHKN2%2BsqThzUTGS&X-Amz-Signature=5dd4039d410c7bd833a2d232799310386fa07dbfc7ba9943d4d60d7b4c07793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
