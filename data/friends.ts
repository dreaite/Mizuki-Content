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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HULLZOC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T115438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCiSVFIy6kaz%2FzFJuQSP9jT0pmCA9rBC7COeo09kM5chQIhANh0m%2BzrputxSKa1144bLQRuKtfmaHRLA%2FOVgLc%2FBM4GKv8DCCoQABoMNjM3NDIzMTgzODA1IgwqgLr%2FJK0gLZYWZkAq3AMPzJLMrQLY50FMC12BImkMKWfrsQbJOrpZ3S0%2FhbBKDqNIuUoXtluQFJhRhSJvQUzlFiPSOVEvxDaidK2M%2Bp5q2yQt5L9PSG8MQXqXd%2B6Zc%2FFVwcGrKecZH8FoQW2sjhtNCMDkBCwmNQ1b7Q5VLslalcXMQg5U2gfNmKxhS1jVXBfjbAPXPg6KChi49gDT7eji%2BqPruP3U10hXVNaA5i%2B52BSfNEMLdYuN0O1121klhr96%2BDrrTdhkZcBebxTPveQuTrlCHlE7Bu8Zvb3n6Ojh96i3DebLOddnLI2Ti2ogMMbKqVGei5E5SFvwoZgV6zDQmsHUmtxqfj8eFQs0OErz05avKvU117RmjFnGxDzR8zDfif5tBVMcdqGw8UFB0P8ZfivrDSHb0YnVMZLd1cFNP72Ka78RBLPHoquUT%2B8f2XbaWg8IhizhrphmuTJu7%2FwsAa8r9SQRYr4wLvPvcTcUmReEdwUQANV8wMLVGS6QwyM7PmJeGoKDLCL%2BszB4Qejc9T7aFrUbHvYLoxtLM9oCIkO2W0p8N7XAx%2B0ZMk%2BhSMzNXwCYkus6n0Jn9AtDtvuV4d1OYyphgC68XLvhevPGGk7IOwCvoQZBXjIiVGgkJ0zpj7B%2BLb4OB1dpcTCuxrTRBjqkAXu8mWlFjxbxutzyHOPko8dz%2FAfAq0SYZfjuWdgOkcA6izrxIPqsimOdL%2B5o1NIvO5j%2FrdyscjGCRviTMqkuD2pXpbzw0i7oG%2FeCS3NPJxk4ciTnJ450Fiza3OoBMJTNPNvsLzlqns1dBsYXEMLr0aQgt0rUsFIlBud3rYHw0cXB16zuAZSK8I%2BWP6k%2B2OevYQfZngJhPmItBJQNMm9wch0wFKrU&X-Amz-Signature=02d3b9860e08b33ce1d8379445fe597366baeb0e21528ca70abd37c2690145aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
