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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXRJGWG%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T220601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIBSbMyetyAWDYZOQscOdRygT4BlNkf23IflOI8vexK%2BHAiAjTGlhPzIU1gItymilZwB9ZbZim00JZ6fOVZs82FnC3Sr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMzvtpIgyhdXbsraCXKtwDuEvjXymBpxe%2B91N5IYVUUGobDpY6%2Brory%2FUCUnOOOQ%2BbpNuoAYcRSRvoRjzPlGqB1BiuVDDDd5HFpWBt3R0xy9s7ytSCbweQ3rmdxR1BTZKI%2Fs51Qr1aAB%2F3jQp328AGY9G7PQ%2BTD9Cmqt17BDBj0phSYmu6VyoQIjq%2FlYq3O5uaGp3NZ3x5T5matDWf65mk2I7Lvb0VyimdKJYxnqHoffd5w0nRnJMffGtz1WVQM2c2b0C555zv%2Fljl6nupfQ0LdoPIqDPB%2FaANvzuQE%2FRwdLo7Ga7yJMB9cGuJ1%2FnY0GMOcV6HNyIv5JBrfNkLBT93kMF55KzoQSeUc02Sw0Xa%2B%2FOvCVDcSyL6%2FvxNa0aUtIGg9Pfrd7H5CCztOUX4OGq2utgAk9uTxmGMqMMS5q%2BQSKE7oIj0APhEV29v2Qz4ktOk47tdZ9g3WcoV9I7axA5ABIvH%2BO7ECnrfgs5Euwg1hsjdkMowwEGbGiivY6oihuoi8p7pHc2OCDC3CNNcfKLdU1x3Rcbl8zvRv76wuBRlZGwyUhYr9KUT69Oq0I87AO09XY8OoPCEyG4e5vAif3u6yNCT09SewA7AXWoxxWDLa9SW8kbzFez3oODveknaKvSSoVfT4Dz6gvdrnZswteOg0gY6pgESHtKc20XkAUvclr7LMGghCHsJf5WliXNp5P9OK%2F1YrTzH4J9M6CKRR3npszR4RjqHSK8WMFwRLA1E5H3GQyN0y4UwduxdyXxxG%2FpboEr7sIjn3wiqKlakRx%2BZB0WI47%2BnrRSwZCvx9pTSZDhMSKlddbUhD9Fc4pdAK4bXBPGsQ4ItnXNEUrMBVEuDmdAQ6hx4FuBSx1DKguU5f2PdHkKU5Bfu5O%2B%2F&X-Amz-Signature=b1984a15af235947411014e3fab9fcd78e3f1deb35d223d04d58785c470babc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
