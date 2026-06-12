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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW757IS6%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T001943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDbNJkMeuPx4YLAYvxOBtthMnKrhz2ndQP2abjgtIK%2FbAIhAO9CV5tMzWYDmH%2BkCWhjpck87SX6Hrpt0jcrnd3n5v64Kv8DCAkQABoMNjM3NDIzMTgzODA1IgxI3jjTOZNaWZLaW48q3AOSXl5V9hN4bz3J%2FsxsIzv2pucVBk2bXgf7Fs%2FY3C1M952VfUq11KoMrO0ldNNpyU1e2pDrMdLZgomsoTrPqdQml17qOvhJikutWGidzSDplvmJmPb%2FOM6yLCFB6vQk0BQr1Vl3MStNd7cKPANUhEbHAkya8CkKuVtRGbcQ6A4lLXoqGNHu6SJ%2BITIhYY86vl8A7O8clObe%2FoFAMJIL05Svi1f%2BIkBq03S20liC%2B7XR%2FPdYFPJKSTA40OXfpj7gZ0gGP1h9sCZ9g9JO91Nh5eIngfb2akHB3leESpgxp2jI7xRR9FDaV%2Bv%2FHZ3LucC7sQyy1qsPugxLZ66%2BBPFiDfmgfS9CU3DNDGI1aYDEB4GbrLV1aC%2BIa66%2BjsfvdmGh%2B9cDOKeOr9tyhg1YGhWCXSlPvKF6v0xidPTzbRhrv7epxBUdaL%2BRADa3A5sPX2ZAT%2FvgV21s%2BJ4zxGrKoQl2woZx6DXw3BjsFmgZojyGM9apo7lRRHuZ2CAJ82xHXGZRFuwUmf6rnR%2BeKwbL5Yz2y49qThPW3mUPZGQDcG5tDsCcCP4FhX5Ul5W%2BuWp5bEMNAwyGLwdGo4iaQBTyQ2EZsPNZ8slSsyuolP%2BDR0X5qnstImOhyPEKKuD6SnEteDCNkK3RBjqkAYpt08TmhJmheUryMZBJiEbbJ%2Fknzh0kOuFwXPwB7hcUgqDYuTYNJRnzZU2D0QkVwm832qy2MelCI6h8B1LowoqnA9GcYgJAgwMqD9c85szE1DEWpTW%2BNwJgwndloihSeVQrxSs3hpqlW1lJO1G0c2kEstcoXrBTUS42jCAb5rBee%2Fj9Tf1%2BTI5o8cYShOnbWzkW7AmQfFzGh44QC7S9jbDtIHAb&X-Amz-Signature=4793382902e7d00a77db03733e2fdefb387285060e41b7c4bbf320a701220041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
