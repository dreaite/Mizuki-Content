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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQA5RZOJ%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T063357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDZH4jmal90TBJ8zm%2BzGjFvxUfqNiNsollLFLDa2Yu8zAIhAMvv5v9fcTbZSW8gV4DrH66mAkLMbl3FepdERVGNSXMnKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg2Pr4OfpLQ6qCbWwq3ANpdDakehsXCNv4rZCAmLeWluJAbW0ilsK%2FxCjfJ9RC7ZdOoDomzblLPKTVRS1%2B%2F3xMsa38dwIXHlSpG2pXUb2zD8VS0SH9mhZQdJwIFgE9AIf3UW7HtzZYQ7H6Py40AzmQXql3oqfcftPA%2FL4Eyio%2BrwB%2BbJ3Bcp%2BNPOj51bNJgDdV%2Fe1OelnwAUJUPEYuLysnL9DWpZyHUs59st4SVRmuSY1zgRgHmdWDaxqhqrhZzeEVjHA35RhN4m127aqKnhN9wt8TaHaVBgEHxMX8tRj9EqJqeVyjiFEBVYioQ5bHQIq628Iu%2BM5b3M1IDU3MYU6y8CnfKCXsS54a6qpIcQaduBudR5bbGNQzN5EaoMrcUt%2BT3fIP0DDTxZoAIMUdtAP%2BxH82uham7CuNyThVWJR0KO5Ow%2FsdkxqvkSxJU7RPDNnBPMZn%2FLGmDNXruL1XO6jqPzZtTB3DrkAhdS5dE5Syx4%2BMeoF21922N4dIlYIE9lNgZeGgz%2BLEQUHGnrphwmsrWaynWaRlGwzCLY3eYkeMheLb2l64Cyjkyi9gFms2FUo3g5UgPBr6w%2FHbXCsGoIMQk0hjS9%2FoEiJSyDHbfKhcLvVycEMQhu1ZGkaShyLKqgQ%2Fr1non%2BmOKKbv5zDI48zSBjqkASCcnzOIf1hwJvGe8corr9jRmDrQ8rMYWegonpeUIKtEOZmiw%2FEDhZ2lAkw%2FYsVgZMgUB4hs%2BNBvGBm1LKO7XPoNTW40sMQtfD5aYZpByFBCD8KOu%2FZePH7a%2FlpBelkrfsy3Vov1mYjO1v7MibqdDbMx%2Fsx8Z5O5ehHjwf79eM0UbCCjEuTDifsVfpJAxfMulubLe3OaxX8HLyKWb07SZtXP4OZS&X-Amz-Signature=6b0ada005dbd76504327d98d3aa4b85f4c92181ed6a9a98f5910aebe3c9519c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
