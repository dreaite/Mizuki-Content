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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WT3BV4A%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T235914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzzSubabOIZjVGlrYY26x6HUEW6uU2%2BR837Ba1U5ZDQIhAJjBbSoVINmBVdWG56R4ujaZIkZzcDjJgqP%2Bgy8sTQSnKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbA9fwfkoC6WB5G04q3ANjKhVIK%2BXB31Z1Zswe0RNL6IWABZM%2FS84P%2BUDyLlYLH0JKwyP5FRSCdMyzujyDxZpaOGiBzU2yPPB%2FpzvF4Oah2UBqU6wyZ1%2FFhNSOcs3LgrBD0irGdMMYbhaQzWnSdcqbtwiHj%2BasxyZbK6T5v%2B0Dqi1DAg3e8fAynofA3iYFlgreBeXakWU%2BzUWH9J%2BeOjJnnRlsSSVThczEOrQZt%2FlO9xE9UG%2BGeHP8bqiZXn2LnX%2FJZm9J2DvHxldirGnduDYjQ%2FZKWjg9lvHRu3Us9oZuMJMl4WZiwXRU1UTsfjUJNORnNWKJnPNVlAMrzupEqLHCbLz2X7WPjUcc%2FkNXJl%2BEJncIa25dbe4VAFvAPsgwTiVOVIwI3ERGJIz4pFVEntcDSEnGQgEhWvBy46n5D4PRGPo4%2BVxt7YHJErhNmmVTO2aPBCTnyzqJ%2B1njfNLdPudO4ND4%2F3NkX%2F3%2BucjWX0EzujkVDJ1vUMe2WpsWWJsu7%2FPbSKFAzbSC%2BTS473l1HfAABwMUDU77nV0gShScprRou3PyFcfdIcNw0iWcdJf%2BoOIqdmxOhVCL2oWSC5hnSmoj9aeLEM5C8olDgAXnBI1Oq51hGTEROm3UIbDwvIFgEnEBnQiGZUlGm4zPNDDf0cXSBjqkAZwy7FiiYy5548LGpFNP%2FmEPUFs5d4O%2F0hjf1zXGQu4xi54yDjLICFlROY5CJzYvZMUndMJGevy2m%2B2GDVZ8UrpEXBIDDNgWFR5bKkH6049xotPvhj7rSY8SEBPwrB3SqcKidXzz74D6lS%2BuuX4tJ5OdJtFaeN%2BgNdo89b41eTwZp6gTliGRReqTZIzA6RqQa3AoD7WRqFrZru41zmvhutmHXYTo&X-Amz-Signature=df0ccb4977485068037f288997e8e2da4bfbe02780284c10622c7dd171a13fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
