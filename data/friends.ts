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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFD7BYZ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T230151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAM8l2jZnpf0xdkukf6i2JtlkGed38uFBsYo%2BhjyD2fdAiEAlfTD3bpMGdGgP%2BQS6iZG0hOtdNEAy24LPclNjSco6ocqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwYm4o0YxnAy63cJyrcA2PGYlOoq7wsQEP7wMOtwsEBGop%2FQjs8%2FyAqnK6dXMcgTtDnIr8BpykOj68afmVU6J9Ox76NbTa1Ht%2Bu1R7zvCvnvTaoPfUNZj%2F5z5A0R2OD2nnSDBqfvE7z3AQhIgEh1XGOa6L%2BsInJ5S1GxUTquXPsQeXRol5iTg1SgzgSUmLhfVnlfrT5i%2BN5oNUpj3pQiZOjC5srIzLTzzy8aSi0TuSwOBiIGKuPhKstRlsTWx3J17WKXikvjcptaQi3m55dUNiem3Z45CvBUH44IJa5tHJU5Fw653v0idOa5XSPesdPuzTklbQXHDyDGPi8isaZ3m%2FRB8jXwZUs%2FhCUrpl2kR7fsLuLMQDTbo%2FhIER%2Fnj0bzrD86YIFi4woeTELiJfoXiBO9%2BoBvb7Ki0%2FiEwumeYjNQmVSLwCjh4YJzrUh5sG0PFgyWjyMWPHqPlC1f1gdMZRpplLSmt1RLns8xLrj4jWd%2FlV8vsfAR8ckCxhd8lVAqlhtcAUXwAK7ybMIOEG02RnS3Fh1sWhShvMVIKKYxeu%2BjRsfsAdaDhPz%2B0kIZ3vrJSw99FLVd4sG66KCGKgwWd%2B5ktP%2FozIKrndgcHC0rsfcWHrosHiLG%2F7tlpeNRf%2FuQ9dJ9adalshBjQ2bMMaLxNMGOqUBj%2B2ibFWZN8BaWnd5j5LUaguKyBDoDmhK%2BI4YebfujH8gn%2FZaDvEUNXYqnxbxCry%2F9in%2FG%2FHT4QrMSBkh%2FPoJd28iRpXs7oR83d3gYGQLDjfsDiQY0Ykm17IodivlpAB8CiITR4r2nK4C3Vw2qVde4K3Oehd6axDBrooPwEnULSgaFE1bfOZ%2BNwblrqsTV7IWvgaZuIdM2UyUBmmL%2BVcVA2DWJwte&X-Amz-Signature=7f7cdfac366116185697647f4a995bb99b57a00729a1437e993877ea5028b274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
