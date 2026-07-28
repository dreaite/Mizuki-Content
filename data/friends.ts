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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X7PMSDY%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T083555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQZCacL80H92rHuAgFhbZFNHPykTVwzBsuNLY72frxQIgYjlBZiYmiJIhvSIuHn6ELYKVzkZkIHxnzQebAqkYrYYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFOo4WF9ZtLRMqmNAyrcA5tsvsKnGhiLf22fRdR1q69G141%2FcUH5TJcDTTv04bvLnJt65vYn6wXU2tWnldISgQd%2FrGIb3lyq3gRaJClgPkCCldHEshhVU%2BkLYjRqr6f1cmNKWrlr%2BJBL08Q8AGqeXbNGwGEj7Qv2h3cc94d5RKh8sJSQ8Nz%2Bg7XYAagf2OICFQNDwYio4rJcFSDWKvaNac4KlS5lMrQU9hJPYPuRkU9R%2FqfSpgB4f%2FNmsdNYHJl6DGF48zRT12Hp8YMeEYUehM8DJUZp3oNreQrEJ22nVI4OhEbt8yB6aB91YEQ6KTyTCx5BMeNwxElWF5Dko47iUc0sGrzSOPmjgReH7iExBVajcxKq%2BRyIYSGjksMaNRfCuJmQ3GxtrPpHWBR9LQuAAncd1jQ9VFte6KjerDY6oDiOMpk1oAT%2FpS1DBJX7KQBk6l5dNknsoB4JkTSOj5JP8YOPJZEHUNiooA%2Byi17a88oAjE7Jes9j7VzbO89PucKivmcWIUdwe8bKNJYUBMnDRZotsyvqccpJi0LghfSFbEyF58LlMmFoaVRz2nlNMOKJaJmN5jn6tBh7zwjJlcwH9TzuPxaH4JLueAJzl%2BVH8hynbH1AyFu7R4y4DwrwN9d%2Fo0LcoDo66eEsCsG3MJLSodMGOqUBc%2Fhhqh8aH13G81aCTZhtNPfKaeH8CD4%2BcCINWufKQyQHaSo2WGGAiz1l5M2hZvkPzr8hnrXxaesVU9TuTtOyo7LeI5QsMD9CoAoemknGJqten6WlXmdGvMLiSbGCN6qhXo0vwnBb9eaEEWxUc3yuiy6p9ifFvm7MjKtt8euNrNv4EDr60%2FsmzVSHTdl1PCjJ%2FJgyHRITwist6Lpx3mNDXfV6X8g8&X-Amz-Signature=d5d60dbef04311016011890ffe75c95f307f1880e8e8f7b78a12a5a79fce72c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
