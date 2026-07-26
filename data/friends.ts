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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYXIIA7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T205857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDamQag6Hn9jf4%2B9XBwJMMRrtwAbdipUBB0UqmxSC%2Fd7AiEA03t%2B1uBP2QxlgCAqIIVJFDO6dbcInfK5dDtgQFHMj78q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFIbTRG7dKRXk8YViSrcA5AMhZilE%2BiAmebUGAzrDfS6ea%2BNj02DQyaVQIGetRk0R1eLZAOHqJP6oTsjL3eS1KLpnQtzMKRuMldhzSKybyE1Z3jebNeAWO1cuEN6lU9KZBTEAKuKClGWSlJf946%2F0X14CdTKqxwFSzHuG2mN7dB%2FO7hShMkbwM5KejWcjj1nRtYWW31sDRe9gM68VP186d%2BhDjSXx02YFJ6Cvxk7ezO%2Bk1%2FhvEwoHWRRnJTivGUgzEDsAnpH6b7Gp8SppFst5vvN4PZ%2Fyw3f86Glyl5LBh81WamUkThkc9HCv9UN%2Ft%2F%2BidYW3Sl0WGvSxJ2C3vD94DMl0%2FYLxd4oTHXYzHhspEWPWYKauNxRLa8JiP8rtmGFL0kc4gngqgXE9dJf0auoKJyzHjgugA4zw4l1SN1xeY9RcR2ryRv%2FLs74rRgzlMlsTq3urrU25KFdjoJzP1oT7FiJ6Q8X8e6FAkCQZRHpyou%2B6p876p%2FksRxa963GNpwHv4uhEDCwEWgpYFDBRZzRDP9XsKUdCdWNE15QsyoQk%2B%2Bjs9I%2B3RaTPSqIhVfwwGRVixfoqvPFssgNXwfYXXIWXXn2DRd01TrqxN%2BeAhjqIePGH93fiWbZXM%2FwlwdvdzcY%2FUibe8Q%2BzaHWqL%2FDMN3omdMGOqUBgMea6ngSaEttUwSatAmBjdzuruQmR5fFM2wC%2BuVS9fZpqWFfMV4%2FGJGo4UkrpCmhFAgFWyZ%2F4M7p8F%2Feo2XG1%2FSN9udxr8M3aEExdZR7X6keFkNVnmFtaB9Ys0Bj92wAqw4PjVHgKDIjyb4h51M85uZ%2F0Bmy%2BrLZxCRGzGlemYk8gzFu49aKWcs5jxh7%2Bpf%2FWVY5fLH2VWI9rqsvQO%2Fx242rvVBF&X-Amz-Signature=f9ab4d6a64f1c916931241a01fbb9eae77537c9d024082c3b452ca770640556e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
