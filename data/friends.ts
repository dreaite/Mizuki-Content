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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JNTVH%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T174316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjT%2BweCj3xrLQn5W2RFL82NnXSVYrQ8HFEywMdW3powAiBPY1AHspbrYn6MmjruvfL2bjEt8JVVPECpKgzh5wi36Sr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMVs0wIAY7f0wZCshAKtwD%2BdJ9srJdMa0o9Na%2BYq4yXiTuaYbPRVw7OS7vw41MckaYUsonHXI25h5sUzs%2Fso4WZ7M90tVzZ4FF5fmDM8dZngulVodZBTsLXIVNdUWRD0cxfLIViwurOI1BPTeNVQ1tapb1koo1I3a%2FQ81PjlGHwhxoo0b3LXhNijSOkQmNZJ9%2FXGczn%2BO3w%2B1ulvkY1aWdOeTssg5zDfuAtBSYwPAok%2BxbeFRkveeovpKGDwYz2TiTEtZmKL0o29wfqljlBgDmB%2FydWhPGzSvF%2FUMlsZPObrgpOCt1Fwpx64jRGipLB80NkYfwAUeWvQ%2BIaPK29WsGGMOtC5AGvtiZSkTuzQFJcmJGW7YJU%2FjdtHr686eESiGUuKxiyOu63I1HgBT%2BthgmR0MjRr%2ByJgrlJhrJ3mQYQgiG%2FBdE%2F%2F4niwGd1%2BfRr4RMGaOs7nRBdwQsziy%2B6946kq3%2BXKdhvUSPz2epPxdqoubaKt2rHoFn1INbfbVzdIc%2FkXxf0%2BgEEDcDNtGKpzGweYSsCvEipoOdr42KY5h%2Fwh9FuvswLciZ65VtkNH5Gmpvp%2FI0mhh9H72AvwKDLTjmMAMUEwRF%2Bpr0EjeMDtqqU3SFrTzQIm8acjTsB%2F4GFbMogzkCjceMvX8Qylwwt6Oe0wY6pgG0TwXRgnqOioZ%2B5JzfUKUhK7EiCD1gZ%2FA8Jdi1fb7%2F6%2BB%2B%2F0%2FnsRYpE2n2xDQDt4ty%2FYu1nmgSR9UkBRvesZc9DCTt4hgxb6ay%2B1Jyf%2BSxC%2FLpOTk%2Fc0asl8OwGd1lWZUgkyPzu1ZJsN%2BObOha0JvNFKe0qiwbcKGTKWkQlVs%2FJxUC%2FGzFSCtpbRomSlQRFzCxIr5OvmN1nVfTPiH5MRsShe114mFW&X-Amz-Signature=1130f4714c55fd9582cf22a09b8da4b564f81476414ff46d4ac8df053a7e13ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
