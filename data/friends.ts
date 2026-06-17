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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTQABCS%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T182044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI2kNyi4S3QoFOOnAkv8VZgsUgES0WApEzcyN5chKNfAIgBNv9lhfe3j7%2FrsYBVjViQshUzIHhuag%2F4yIq7U6Eq4EqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2Fj%2FSA0ynK7VB6mRSrcAwXFb8q0yHhnvC%2FVE4e5uRnGFNZQ6xBvyWhdub0KMzHPhsYbKKdow1xWWH6XJBvBrR%2B1oQD3bkdhePL5gihut2zhNy7kG1ILdUvDAWE1A1KDjFbAQZfFQViB5vhFdSqEerg2zB5BuRyDNspQmU4BRtXIhTpGrEdF7X9YYYZNz5LgxrEu5%2B1mK3mU1t5XWZMmB8kT6FnmiGmyFUBtUHNzKxXjOpW7AJfHeRY2k01tp%2FNrnqm4q%2B2xyQl%2BfM4%2FkXO2zy8Y57Jl0nWifscwK7FW1Fxgg0CIF1Kbt2g0uraCEZ2rrxsUlmlqMsvKi40UCLxMqGBSDQMPc1tIizegBfl1yDiCUX%2BHnq6RmWnXxXV%2FEjVc42uVHz%2Bx2IJ7bAV77xwxpOwFYeo7SGndb%2FtNmDoExmIV367NQ56Qg3tOuCecYommVDkQzc1i8RiH8lFzz5ncHyBWCacxbWjJD8TMucmVCV7CSGPFfWWKjobJGsbXqDSqiMgX5o4sXeRAcv6KPcTZF1aE6Vl41nCcD7Ve%2BzwUz%2B1%2BWbdY29R7ldWVEmRW4nqztYgE5gBnXy5abI44JQnnnWPVGutUJKnKnskJPOvyeiAN%2FYTtyJIkIo7YZvNlFUce%2FWloAlCDfYkX2zzGML2ny9EGOqUBPVRmXEu1YzgjgAlwnUr%2Bfl2FdROCLSACxKk2USqoVrqGqPOLgj9rQALicZVz9AzMesnSKa05PV9O5vwM3jcfRWwWBN3oozZsobAfEOkM6h963NDlnUZ1u0U8G9fL5YoOLC8Cx9yCfUMVjx30lBM2Nyh5PIlMjjDBbLBWpVAB%2FD0VpcUU632z%2FxagEz4JcABvUayT0I0JlqzlZ3escT8xMgsf81K3&X-Amz-Signature=741722c0ff17c91f026e9e765b7cdf29c358cb1147b82d6185adb832ef90f012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
