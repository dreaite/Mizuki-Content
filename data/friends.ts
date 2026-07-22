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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQFUU3T%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEdMYJm67i2N6CUi4rbXwC%2FpXATccsKp4890zauPYN3EAiBiiCL5rypzjaxjZIEQ4MIiv9dDD4vJHXzJKX%2FfPmWaXyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZXhChwuOGEC608DKtwD9JdK39NUTq4XKhlRRqjNp8xKmdd%2BcXuBCz%2FiM80weyoU9GATq%2FoFDqkUSwDa1mQkwLv7ZPCq9FAsJql1SJm9dNlbD7ZRFwfGA1TUrvPY%2B%2FbfhJF7xTWCu2KakSFyDNs%2FCaEeSXNZZ5LEbr2Be%2BLgb1T%2Bg3SzHx8y5IqC9NrlyeMjw1fw0%2BhyUbiif4fEkpKlKwNd%2F8la8RenkdAyIaM39HmuFwy8wpnRlqY50WTDUqB9C54wXsqil9vWgJLzrJ0WQj1ptHmWIlWT0HgCn6T9E9woKC8MXA7n95HLoT3redRmioxOJC4tV7yx1i%2F%2B5qcFuPI7bI7i2HcvmACsv6iCUenZWrSETw%2B0fmki1l3tY9I%2F3CujBWYL4w3HuC519Bmpq2S4NUomRTGf9cYsR4RGOHMqaV1Y1XY0TD%2F4j28r0Z9l%2FQXH%2BSsZE7ng7SSHI%2FmuPIJBtt%2FsVmjULV67OL0UEOlgFog0ehBoVj3WGpn5vG84yh05l%2BRcVXR5Ebvw0K6WjUjw7SNcHUhIkj9SalBzEhW5WVRVeAtYJOhr72cIwdHKMq7Gf%2FLOP93YKbGICS0hcbPSRwz16IbpYHcuc02roVJQWD%2FBWdj0vFaCwF%2FU2mQ4Z%2BC1g%2B28Ybc63AYw9MWA0wY6pgF0bry7VJmKhmZsFIVWGjj94ybR7zva4AAVSAHPgjKpEQfhpXGcABMe8a%2BKPcopZbr5Phxe6UKoPpDDAJERe7ocruru%2FIrphZXAQai%2FxIXZsIi3B1XAE9FXYyBpfTLZLrlx9gUQGnQiXX4TmhS3iPryh0XuD3KwbSdqqcTmZCy%2BnocPR1DM74%2BE7xXnz%2BzhKRq3en5h89iTPkv9h1mSv%2FMpt%2B%2Bu9FaB&X-Amz-Signature=2cf80faaa8a3967649af652dfccf1986a9b47d34dc1703198f77fa202a4f978c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
