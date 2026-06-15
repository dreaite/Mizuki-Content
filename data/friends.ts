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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGNCZER6%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T001304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdL6pFTTU9Sbqo27A7T7T65HQm4CdziYm%2FbLuFZ%2B0VXAIhAN78E1O%2FHo%2FjIud9VDYWVKK5J6BOqo4kw4oaa2OiLeAqKv8DCE0QABoMNjM3NDIzMTgzODA1IgxkIl5Ag8zj2BMVNIoq3ANL%2F7%2Ff043hcaYXlLb6DFPRpTZEf8UJZTih%2FG49UjXq667%2BOEt3KQs7wAY1AIIf3R0qkv1zjEljDwpyQo7JP3Dzpswas8YrQTo03fsyebCkYdiQzbZOztQnSQyFhCu8aBHBkL8ku%2F7pVrx0kBybs9wbFG8beTy5w%2BC9oP2iEM4MdOl9hWRjwspmiORZFl4UemTncX%2FRZHqFHPLyPbRaMV5%2F2S12eQuraOSYCwG1devE69ftKfp64994irebJWVsS7Czwr%2F%2BIrXlWORYhH157h6Gnt1F5opy4PcRba952Y21Xm1AemD2Ul4ZA0vlrmkio1TBvB4Em2Z0753XEwCiWf9%2FL%2FiDJahWovsRKB87ApbPwyFKHWTfCINHjrOoQ7u94cNcuSemHeJuWFf%2BpAPqHVJf2HMNndrWvCCYb2RLJ56Ws4AAQc4e4gnEPsLp0220gCOwNUU0F0%2ByMY2dMLY1GjAfHDowq35ZbBTNKdo8UyiW2J2MZ5wgoYXbzSl%2BRP5h%2FINV8aWWL0F%2B3fchioS%2FhB5df769bepNvszBtHsFCvKlcGmdyCkH6SYykPKbDjal2PMbkSSMopD%2B8XhT23kIkwT1ak799SGqcxrumFIhH508iZP2ae4NxiDDWQsmpTCOl7zRBjqkAdLBCINeII3a84NBBtgAH32k3Jt4nAuGWIKms9J3fjb80U4Q8Oq4mSrIe7pwK70YulvVnYgJDr3xlKgfYUua5gZwNG3DUG9qp8r1jpGVZZR0YTlgqU2cavHT0YAq1wTAXuYRv2j9VGsnSJgtTSIMRpYo03%2FtwvypdKa789ttfaOPIa2zuwQWlM6apWDxfhUGBQM0U%2B%2FVs24wZdrrTXPhOjebb5nn&X-Amz-Signature=9e7a224df352edcd6fc63760147a526884731fdd3151ad0705195e64069558f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
