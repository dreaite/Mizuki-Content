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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PITBOPE%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T195454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8sEz4ks0kisN1TKYcqygJa2gXHnFYpN4t50Jhq2MS6AiEA7Ud3%2B4V35Gtfp%2BzgT3ZzDKquiMqw8ScTXbcWvazlCwQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIGHrnrI4k5Ess0HYSrcA%2BHn4%2Bt0S%2FDTbjAhNGmlRKN7j6Lu2DX0RoYjoNkG5w689b1noRpJulgSttjsLXz44vFMVzNxrTpTPUisyHbZp7%2FvVuIxZPPq6Q7gBz1EyIMWlqnmj3LfSOfsdWTLu4NtA8AMxCykNZO43ftuW%2F%2F1R0ct5PsOVjjASZzP8BwhlefDFVL5AIR0GvYn1TdrD3z%2BLcyZy2v42fmGeihkTlfUp%2B89iSpKICqD0YqFw3Q8UMDyfh0Q9wVCkeIs8YFEoyG8YG5O5eAQVEUTOwOaW6HkWVXzLP6vNI5HdDB7jeCjt4EMisVs3ll9kIge%2BbkLm6qYBGi6CCj3lodrurTabIrjhI9muUg5vAIzHHmXA%2BeDqeZVX0mtWoC4uH9JIVdR%2BbWErqwWTKiFxgzj9Ms8WkyD%2BSWfGQCwB31yq%2BbptBh6dQtXS6TB5CHl574X%2F3gZ2ExfuRCmUEWNfUaBOZDlXL2QgKvcT2Y29n5tnIoCBNj4iZeqhnEo4Zia1b0PUxl%2BbJ306d0C%2BK1zUUvd%2BFzCHdjk2km5auEXXI45HWV5grfXA6Zq8bRWeG3IhNKAvhSQYBx2cUj7HGYreIkf4ODthAE6z9ihA%2B8tdHkXyYtukvQVpwhEOgtQZyz%2FZkRcO2LVMJbP2NMGOqUBBTe%2BbJu174SbtzXTBamY1HzaWrtRSx56ERLKCoX79SZ0nPH95ks7caIUZQNoTaij6dyheDf6BF0GS3SMluCQoWNV2eG6XmsmHyCLyoPPQMdnaKNbwYEIycwid5w2cjdH6cn7TZIq6Dpxr7RnsazsLpvJt5exVREiulPZo0Eo7CVoerP%2FuTIM5xRe%2FcP9AFsNPtQs%2B6vsYPTg9inPwWRPDS%2B%2BbeA2&X-Amz-Signature=67a8511500be817ea4c57b4d209655e562ab2bddeb1837fdb24da380f34a9ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
