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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKB3CDSR%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T055032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD%2BEuBURQVxO4uYRN29aXJPLsT%2Bl2YN%2Fc22OBJWO3jE9wIhAIgvmWmPD3jWGMKbFaI98YulO8bCnIJ3j3N3PpbckGTqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzOssv%2B7xo%2F%2FCVKHTsq3AORKE414IaN3lkVm5cZLw8fcdE67goHL1rwAx%2Bi%2BfINZBJHKUqrMhc%2Fp6ZnLiF8uiOsGRDWV1rD%2FHaApxQb4tOkyAQiZ2XIlcj7zAqIG4qp53a7JsNfMBwBtA2ddQ02FYjG1eJ8Tlvd1XWErxnp3oJmSsjnE92wRfcMqxezdPYoZZTxB4z5D8QNnoCWuaBUslT49Fmx8wOW%2FsXoFjrzjysCOj7M7yuDV6kUJ7ekiertheiDMUI0fpPn4mPX5SReWXT6Ff1eq70%2FJiFLWO1cnRWH8hCoyhTpPVSKr%2FD%2FbJiwFqBMOOiyHDQNMErhtVF0Zd2rhSDa1DqitYboOiosvh1js3qH6E1x%2B%2BODzKLXoxJaqx0gUWOqLcuNIeqxiOyxwO5vE33MCSS7c0HzE78rJDF6VQ%2BCpykcnqflsoUuScAm4J0v%2BzYJs6yJ3b76A45%2FMoKVKZPU38SaMj9AmGdHCU70RnVvnHGH9z2j0eFSH%2FxgyzfYKGbI%2FeQBFX5qZ%2BTvLFNeNZ9tQFvoBB9BYucHfxK0BMFrWdyNS0JkE8St5yWg34iKyRc8Id3jUFhZt6etqwmzFMLqznF2cn3kqW5iwhAv23%2B7Q02MG2%2FW%2BHXS1OPcY5O8DVJfmWYOdI08TDDNnrjRBjqkAXvoeDf1DryTe6leThAN9Tdpo7FWSoPIdnn88NxvKsWsRAyMdRQ1uLb9Nk1GOLBBkdZwbNeI0a%2Bqctw3HaovujNQGMwXfL6wmLAxdHFgzMnBwy5FIhcDb70DbJjAVVFXgw3VuCMxlmZbwT7r3wRXH28d1ipQAKbIhDSvU5N9BG8Hj%2FYiLmmniOizC0n065%2BhFVNMyDagiO6ZZqq8kFYSVA4ZwHwz&X-Amz-Signature=a22a3c222d3f63cca1ea715d28dabcb9ed96198eb9829b03a4e656828f6980a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
