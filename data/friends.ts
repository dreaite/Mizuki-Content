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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKVLLVS%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T035441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF4sMb2FQg20yUQMr7qzBX%2BebdNmj3Hi%2FNnl7PxaViRAIhAPKojB48ci8oCqkRvdcdOZmjtxpPvefcR7tYyJfEeIEvKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgPZ7KJF8uoSIYGVgq3ANYGRoI5xlorbke6wen6iCVgaX3DHFovySnv6VkFaVup9G5EBQHUZGQGiZ3a5jH0fOT8rDvsuIZ28aKeNPJaypVqDmYKiEXvDVy1%2BHQAy%2Bv4NKyjWYsAEjimBUTCYxAE4%2Brx8jty4CngSw2hRmkE0x5jBHSEhXmTZmdTAbk%2B%2FQfeFevYFHIRb55jFlDn0OCjOhw9pIwJ1Sol3ZsqxcB9eyY2iXHITDTXyHrsmIloLRbWKppQKmJtG3SvlItPNXL1VLQRu6pHU5JtGGDavfsxvH6lSc3OPW83hZ0b2Ok9jIG4IJrGPmSy3neiru4QO3Br9g2FzrxiPwIrA9Si2jx%2BRtlKDGctuBir3JGh36CQd3rB5%2FeeGglo1XmRz4QWUVHeeQw1k58I00apGLKmDDlHbf2w6HyB4lKTI67Kv5h9oEHHijEgPEKYZOyonGYMl1dhGbDDDs8ICbiY5Wl1zKtZRXbSDt0htErZB%2B3nauNcL23sNCSMg3eXo9gcENhjo64EriRGy9Qcu%2BWfdoz%2BQGO0aifoU2kqCpeUrchDwHPR5kPXX32x2Es%2BLudb%2BW7X6xOkvafHalbA30GfLTXAGs6PS09CodxXHWLQSo4GwcR2s3QYiPYnXf1YzW23HgjnjCQsPbSBjqkAburqzrFfqLQCJ9kQgF6Bi5IrpXIawflcp74h9mEyISPNaNscDSm7eu7vbFdwcEC5a8%2BlT%2Frn0P7a2lrNj4mA8CP9r%2Bu2OwSS9g97FQGpVqAMiOQtA8%2FUWUCGaNMWdVfCSJNurUVTjXKsvyKLwX6p%2FL4rDc%2BLa7gOtLX8VAvep6%2BtWl2OX1az%2BqdiZ3tCwr7T%2BOjgtX8CjjJNYQBGsY9gASOlTWU&X-Amz-Signature=981cb7a6a604bd26519dd6b9f369fa1dcd18c37910e518c948fa50b17801998f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
