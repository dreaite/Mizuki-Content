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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDEGBPL%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ74qNBzesEvcTnRrNsLCTmKTsSSXCuQKWhFBlSad%2FAiAskYiQW%2FkICyoP8fXDxcEHoVg0mM1vmkwr7cSRnL6hqiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJLweBbaQ2J9ouTBKtwDbIJR23jHF9bu6iC928jx8QaUJ5ZpMVVmts21vp%2FzHXYClSDlFij%2FUnF3BECCo9IGxYnmozQMdFZi9TjlC06f6PJCoCWOlsy%2B%2BawyCrYSVCVQjfsJGSiiemcaGcMge0jFlKr5l%2BP8WqafNUjXgmmABzyX4sznOCspq4HYTZ%2F7k6XZUA3XYkqQlvybA0awYdeNAZ4dM8DY079zxb3HGFKYelhMBw6iD26n05GtN9YpzusKz5tX3YpFxE9qDKt6d0y%2FCpfM5boTH3OB7xussCmThJT8fNgqMam6Dg8wla6E75j%2BUMUAVM3OaUT5GaWvJIfG0x5bR6rRVMl%2FrXpQLqiedPSswnYNj%2BnCZW%2FP%2FXNz4MJNc1GMAbBMl6M6w96wcpkZmJbGVnf8foNFJVwNRLam1goOOQk%2Fj8uPzQrPaSaaCkpISCIboGmEe8sr3qYxcMUYMRvXGxyW%2B53C6o0qQELSn%2FK3E9W4GSbNAnTWlkZSzb5xwZ2LPWQ6AF74ucc8uX3YP9jl9vEeNjZWQxvOVU5zamzMTYve4fbBiREkh2fw2ZsafD4J%2BYgN0XNlY8oTr40RzWOuFz0%2FSYzkiFc5vRHmiAVMEDzfKsZci3DYbEn96yeIHejSNKKNZYjNsE0w9pmA0gY6pgHRcYOJ%2FG9KzIVjiYd2ugoLfxMrYIEnhqq8a04C77wWs9CbbHK1ORYLq%2F0uEjO2Enx1FsA%2BnnGGg48gyhAdnt2Oxysz9V%2FAn1BnXpk9VfBx%2FL0oZszePKkZu2EdxsxHNqIDKUGOQlRfnnk2HNpf7BVp1gk%2FeylVLdZb9sRE7pZoQgnM1t2s0r5vJIIySV2NcqoK7FXQg3VegfYrrxG2faQgdw3%2B3yfR&X-Amz-Signature=6cf22557d21ffa73398ee763bd8959b357f7995a416e475ae9ad3c89a6b315a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
