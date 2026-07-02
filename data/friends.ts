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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBLH7XDN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T081817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD13ZntJ7LRfwtVPNx9u1Ek91jvsbbROlTSH%2BJSa6pqfwIhAKRiuFT%2BmqqUKNnatvDJQnB2tSIzTZrKCNlH5OwfdBbTKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyALC95lF5n1Ma0rlwq3APrc1HiaQRpdOteXo1mXk%2B5W1dHUIy7s%2Bi3Je2a5C0hMkhwM5Rd37o2mJVBoQfsWcLAMc8NkuXYNu2jZKdxsSMdaNKeyDOs%2BLn50XK3yu5fg7LU%2FaAOG0kWLNEUN%2BxLEwJyHa%2F5%2FnFoY%2Fg5K%2FHxG85QIxjUDjgbWAxr74if8rCeRpaURpvEDTRogn%2FmF5BB2%2Bf%2F9nP3zdlhs4bYDNoeviVJamrfEOY9jw65N53FF%2BeRdinq%2FNIKtYkIkKr2EoyDwSyoE0TfYK4n2hDR0ugtiBcd%2ByzNqgwyUt8YNAjoHdP36fxicAcShwnmDH%2FVMM3I1nOmU8Vif36C%2F8CW%2B24rm7WtHlzOT%2BlXB7VpjGd8gYRrzfNSsi%2F4Q9kLNXMEsqhixce63lqoiTVf0RjoxGCii6ZmOt5gW0N9mlgkrh4zaBf7LAD%2BhxMNlPcT2BbRoIzDECLn6zv3v6K44%2BXchjL%2FY%2F5ai8tpLox3k%2Bo2hHGvVyeHc%2Bwf7ky%2BKksTls4rVf8qhVOto1b8QrhdtDtpdHS%2BviPIyIzSDbKD2Mxbq4VbjVtavIs51rizoq660WfPacF0iKkAch6Vok7X6WVRi4MxSaXGBp9ovKhKTmgAK4Q6O8pq83LqHwhWxUcp3rkWmTC8r5jSBjqkAaR6oRAlil4xH7PbI2vTQaWZS3haSoCVBDLJv5BM5%2BPSgVifpBuyJhEBunIa6CnsupWp8HnNqDb%2BIM5A5o1gxROiKkuNZnQ61frGMovTnmsYweBhiysR4D%2FubmpkslFNQHax6s4gTy8A2rlOZ0t44tqjTOCLCHbyxnKK8e0kfqNzhBWWW39C%2BVZxa157I63wZ0oe88jZIgnry4EfU0bM%2Fr96VfQ1&X-Amz-Signature=1cf260691acf8aab740ea6b4bc6ad593b690db2d477f0f05eabbb0cad7576eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
