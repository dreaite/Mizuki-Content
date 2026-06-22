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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUH7DWX%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T104023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICyW8z3GOY4d3f0l2FvZE4pjM%2BRVg3iG3Vt9HbKCpixeAiAc3RBhJZ0Futv5EIdBM63acUDTMeAQOShfGOnXFejQ1Sr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMRc0ctCwWBunShA6HKtwDCWOq8UQL9acO7mG%2BdZ1YMsNmuAR4j%2BGflbQ6g0ncFhWCrpEXIH9L7klYJW7hBS2W%2FuY6Z6wI92%2FOvMcH1Z0b%2BQsUcU%2FngB%2B211f9VGwOdtXXe%2FCk0jMWSXP%2Fr%2FtrOgQ1HWjoSfqaXiMctZpo8pqrb%2FkPpNpNs2m2FnVIoPKCYEjYdmT3N%2BKAHHZlqdNWgyka5TLL5a%2BbL7cmflSkOIcnB7duyy42QFGXUSXMWiOkWjcU72yHB8WYPrYA2C5YhPE9QgMdNQPsFzek4NV7SCGI5oFBw095tWvE7NWcdjZUUQCCFJdKcoqCVS8O08336MDNfLlafqzZ2R1XtCNQmN0zPaAbcmQkJU7tXZQ1k3P0xMqg4BFB9YoWWZpyYPEMiQVboi3xjYRaJoW1nfdrVhwvYDy6U9LDbDmI36oxCSOb4jf7Ys9nLRz0q6lGolhzXQaJQhAQrqDL%2FU2X1SyJpHLPk53VPo%2B5r0q%2FhgEt3Txcj4NB0tWWwfYlO9079Tp4woGrDvCvt7RrpNk6WwvTJgLjJZrsulBf7qCyUxWgHna84cuDD0JrPZfUSQhl9gmmtVhi25DLemK7EqHyaqCARVNdvWUiXorQhC0uVJ%2FCCt5xEffY%2FFo%2FcMeX2tDQEV8wgp%2Fk0QY6pgEhjWgL%2Bb6UjdIVvHfjkvRwRmRvtCm%2BZpfLWyiFS8nuq80ZuaxUJkC8Z2a5TZ0mod%2BsRML6u8Ox818fX2MjF1Fo8aiWZJk%2F8K9SlkJ%2BkKP8IG6i5bQ2JbaavgMmaDwIeti85mMGMPmRtAfmYcCzprwibzaiiRQfAWxSU3pkKEBycu94AjMwqyXy5Jr5rMhAbvoWXvQg%2BhvhBe%2BwcpDP1751ZQkadQtT&X-Amz-Signature=0bdc6db0297c5f3a8b9b08a85db5e752fdf35aa97b5d90f6f98463b7afe07169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
