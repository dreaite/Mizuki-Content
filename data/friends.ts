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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7ZFZWK%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T104411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUlZZpKn9xcmqHBhBddIUEKP2r6mTeEnVo7yI9lMTDrQIgRYxKGTLl2ge3IuSkaiGNlGvmr0lmv3Ygwp7zMpM5WbEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAlxDP2zxZp%2FbITFvCrcA3u%2F8bXSDv%2BlQ9KrqEN%2FxgNlCwoC7ae3wxIVvBFpkZ88UpENSPCG7HsRIh3tHPpj8dFMhqhe8YY5IIltpQ%2B0gmcNqIY1IE%2FOOaywfhEaTJ516QmHyRi4W2Ew1N9aOWeIPUCaMF%2B%2FVuKUv5HxgMsexIWlUoSzysBl6PllGn7W2uxgCOmC8w18YTvkwHEQI95ooZoXloTI03x69iquAnVMCDgB%2BOF6xrx6KPbS7v1YKZtexR09%2FzmR6vNoG0ltHkd%2FgLtE%2FgDOtM%2FVQv62zWPKiGpw6dMFWy95iAwEmewBQFp0r%2FOzCHtvPTmliNgucfucwUoM9mKbVglIiLwPPbH4mqZK3cQUhNaFMKzySCMZ4cxkcXFPe4lG%2BT5PbCM7OVtjMBvl2SNbCBVLZfML4gxQCh0nsA0dcj3Z3iquOZnC3Yhte6ZZ0F3D0oz3Txa8gkJQZsvcEJJkbmgofy%2BDWyXqg%2BOILUTRU4VHEcIJeffflv16Mx55nz2ub1DUItRaje%2BuJGh94qtNjzO%2FJ615kTyQz3icXMYdkLa1gUl%2B8veU3wII3PsSjbUGKkABnUo1K4uhh%2BxZn3dqYzj4Sn%2Ff1ZFQUQDsdaMrdAVw7Ntq5FKSqvzp%2FSj0%2BVtqUncTQwOaMPiH9NEGOqUB30dSElJgM%2BKEJHlnbmuORD5gRVw9Lhy0OKmwkhe89L99MCiWsFDhXuuTyUNO0RfE9FyL%2FBY4H1wMoHzU3Z2O4olgU1y55j9WGLshBqnRnaCZXV4FJ%2BZuAQpLEskR8q98%2Fh6uO38avIfwloqRBRt0KWpA9BuWTKYVeUbTrE6zv32B7JviwpCxyvGAiiAbKzemTBC8UXbU83MzGoIBkQLNz9LjapJK&X-Amz-Signature=e97be77d00732d7a2dc9041de4553fc15cb04efed3355e1e8f62daef5f42cb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
