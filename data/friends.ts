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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFLWQ5M%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T150612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDecqz3jO5LbTVNeIMEOy8bRQdKdu53IkSRejvKDwvIzQIgAJVvYv6QsiSgGzGM6zuhHaQXB%2BkYZntMVKhCis1sVjoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPycvQmfY1ipO9ncrSrcAxTrhzfaPbGMVLoHWwf7jfJbw%2FBThQbrPy5P%2B07F8%2FlZQ57dp6ybQGZSXxHajSrJJN8w5gY18dthcHJBd0pmHUCV8LVCdkXLCZiobVpl%2BrMhYLlRv48sfpAimgrBMs%2BOYHKL8q162C%2Bkr%2FbtBWcNTPxfk1fkJ6ZnS8iqgkr1lgqFcjswqu7%2BDWh9wnUPOrrwB5nXfsHGk3CKFDgeVkbpMYkneiXinFLKhUg2nkI7Cx%2BWAK0i1wcXj0KP63TKhup8uFU9NS7ee2xT4oq%2B4SBPuCGnvyNLz5GIwxV2bARb%2FFnJ7%2Fv%2FnusAT%2BVsaUUCmQzt%2BWSPJ5riAn8UJ22WQP44sXFzu52onjS6PfFF5YZbmPphHOF8b%2BvHXGaSF6r33wrhiTMwpOHCNKgrAKmcOYd9c%2F7gUguG1UzAaNrskDWyFj9hZYHqZF8WfKf3Ll1Fluewinf5wvi5Tah4QRRh8YRVtTKc%2BjgnbJSxZ8tzz13cFya%2B3mvgh9gljjGzyVMpUc8xs%2BQYANk3OikccpTYwlsm%2F2HRFYHumBfqpym93TBFnYgzboKWY48Jozgi9fNZtWSnujFCLmymaiuM5fkXzP6e1CnQ%2FwOCaMEvgvqBD%2Bj7%2BxsB9%2Fozw8Vp%2FdX7ugp7MO7Hl9MGOqUBp6eaRlZMmjdk9vncEcrG07HBDhBRXjYTXhdjt9YnVUaJVegQ4zWFUsbaeAjHgi1cngAVdmjF9%2B1ygK70%2BEkvPQLAllPydP7CofHkZLz42M8owK52CodreOstzxcM%2FLh930%2B55EClhajMjBJRhZnzmBMckAA04YU8m8HJknnjbwByjPSs05NcHdygZUzAS2CTjfG1auksXf3lSYatPcLOk2z%2FVzN3&X-Amz-Signature=64ab6fbd3e612c7a5240027f81ecd0422f800708284213d030d73045285a4609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
