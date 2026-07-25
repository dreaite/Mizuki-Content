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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POJ5SMB%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T201129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFwIysX3OQyWgl%2FPYZ9mFHyBeL8i7pEpU%2BOJcFcDBIswIgUmI%2FVtYlwMKIOibA2R4pyQmgDQipkDGuGXK4XDSs9hYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDuNw0hABH%2BuOU8ryrcA1AjdOApDmFgJvre8wQbYLHd4%2BZ7jPwqNSGzih50pJhsTAAstIkNsl%2BmbOXAcGmmRNhejfpkQkw3JCW4TRRTJxp%2BxvfqfyI4JpAYXC3NGt8Rgj%2FVkCf06JyzUaN1LgwcIOiIcJH22npP5lNMdj2hEYq4iTjXhRxet2SWkQOIokeTouQT5%2FTNBBYUOGVx6CX3ic9hGvJENzalFfbp803iIU7BsybXBNcadh1XpRxapwz4kpGk%2BGNfaO8yPGbQf6TkjutkdbRmJSs3THN343nSBGUZD644Ay7D33GbvtCLLFojka1N%2F1d7M4jkRAHDjYGhYIKv02X%2BlKNlXP2lIewiYm9YtILGiYptk%2Ff813rzAQoqHosLjqFILmsMZIfa0FtkehrV8ruBZpj9rMOo2lNRMRsMxQXU07%2BTUdKpgN6JBR6dbUa3aDdPVNTae9R1OZ7eN3jynUzoybD0dnJ7Dx5D7%2BwGlI%2BjJqdvATeVqJEvv3FZOYXQ9%2FO7N3Su7YkinxKiQWmXfWR31uoTECEbJFerVqCPYKDLNuoQAoat35Z2EGY%2Bm9eCRVK7zNgEvI%2Bau2F4y4NPrLGdXNJdstE%2BlXUCCDkO4esvyccjva%2F4ExEKgQURV96WRJh6HX38CHg%2FMJCPlNMGOqUBj%2Fkvxbw33Vt2RKy%2FRq6JcQtMiUQWwje7oxxtvUnlUbN0UOWWqCPS%2Bep2wsRcyHeT374X9o6k3Fe8f5aFPyhFRYW%2FpR1OTyJryusIW%2Bt%2FIXx7I51JzBr%2FJNP0CMcbECDRMi%2BsQXQ5NAkDechpt8TtbjnGIo9XRudvaFOfJvvsZFYurfbKrnLTEE%2BUJNQztcAxnZs4ME61hLtWSIdl0KwpgEf%2BLs68&X-Amz-Signature=ae2dcb5b0ea4b1a7ec759ff144d5446f8842d15c8c7a91db60688915a0eeb166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
