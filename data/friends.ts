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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYMTVVN%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T041132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkF2wOUjaIyhJr2gowYq7NWYed4Mw9VlFFsoPPcaAqOwIgC3qbv6NmmgW1IxzSiUUPjhaHfToCoYRtL9w3CDBuS8cqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjTcpjQLz3zpAfdxyrcA300cI7qfSDQDQx9v%2BhurJXd22HYKplSe23%2Fjhzp1yqWlVyoGUugTVWZdu%2FwCYnRlk8zMhMvAldb39idM%2F5z1tFvOclzVc5h1PeHHqyC1YKFXmApFL1NuXkfThDYhVbl7Sv3zgQENnrlj62lxuw3X99es83%2FM48eQ6txZpWqE5oISee0r34Sb33TM6TZnvhtK9S%2Ff5TTs%2BJSSZDOS%2Fa%2FnU23lof38%2BruVofbTadSXYf6kRD%2BdlaLmAojlVnUyESs0UT6e6LIeuW1cfe%2ByiMT4O2cvid9fCBMOOoJk6FFtiWZE5a5B4j%2B3BYeBM%2BQS2D%2FlMXw2pdDKfQaPRqwsSy3DH8ujMBV%2FVKlmSjBeL90hIRwXnu7w8QyG%2Fn3VAheUHnPhQnj%2BZ22kz66H8o4LRemL1tNaLZnECtsX0Up%2FU3DWX6swaYSKKrnsAlfElc23ZdtLiblqhPRiZKUDDOL174EUNrCWk003SnKuTs9Afyqtl3f4kaen58t5suwWTdAYq11YB%2FVXvKCDUrj78wQCyqMEKBnFyCv58s227EO5sOgBWdkmqfIMg%2F74PzhL8q4bkJYePm%2BqLLZ34vNjZBMtRjful0HczYYW%2BoP8BgPviF%2FWCnmO4biNIUwnOMJgt9GMMKxzdEGOqUBHZwdvxdAd0wHqPZIo5bA4sIfkakt4kOWpN%2Fdh%2BWUQ6kN%2F0qTtQsykIoscrtfIgZnqloK%2B%2FbePRqMLGeY%2FOp8gIM057%2B7uFI7syZUHsWTsfMVDVnLXdkc9%2F%2FBNtG4o2pA1M9xQ%2BBSVb7wEyQZ6mBAYKv3OKWEbD6VmHyrTe1Jy8KdRiQK69HllG%2Fo9XC4v%2BRi3ValrISSHn1klNzjx3hs5uMRCgnN&X-Amz-Signature=9281d7569038d128c506550853a16007069d186cbc4f0ff76948051507a3fcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
