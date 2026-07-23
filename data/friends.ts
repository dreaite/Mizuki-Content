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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDJ6C3%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T201327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDOPZYMyHRug4jV6aWIv1s7fykI%2F%2FcjaDIK4eVmja5YGQIgSnGi6kEmhzyz5HTeASVyc%2BsWvfTCr%2BeEBYVJQ9glOIIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFawI1TAMYUjiDliySrcA6T3TiXXx%2B%2BNPMKuqwdR%2B2WliAMFVLMP6aH3duIHi9IBQV4p84TtHeYuzNEJWGNWWpowBs%2FYLxAWuO1Z1HzcMn%2B36zCW1D8w73J4aLv8REfrzir6SCbWpibDzqWn6RSsoLgWAIrcwxjQK24NxEYkGW%2Bke%2B7vlnBZ1GpxsDReK8nWqd%2BGEhVgEifirKjCzgO8Onvp5qH0co9ZVwOS3k%2FlKk9XMjoBYBU%2BEjf67EsahgARHqQesY9T0pRY%2FuBGSf17XzTugBxOpYMJC%2FqOAJUNWp9PhBkMPQN20PbzR43fHXAOSQH3tziB2MilvU2P88MoRPJQ9Be6v%2FbBkfbu9eD6Xzt6NOpZ%2FNQRGgU2p4%2BOuHtl51M40Id6Zzbg%2FCFTpFUvKamoFhCGwOTEjyUBK0i8s3v9bKTbC7%2B%2FN1WEB8jUedZ7lZ8jZ36PqtaEE3xzxqztFdRxbH2TFtYAGn1NiPTed1mSkP8IdblPcAz%2FJQ35XnjCFtmvX6anh%2FmaoJV08ZAyEKtUUZVrWJzDYxQ7PC2O%2FC5DNQri21mCm8Q9FEaQ1H4YFbp45z7ctH7iInh7xXx7TJWPhF16hp1DgUl%2BOxU2GM%2FY3SGtd%2BPpEHWr33JTG4xbm9%2FsIHrx9GiGSTzHMMvRidMGOqUBGNO7QzOP7%2B7d0%2FdgthlrVsB%2BDwij4%2Fr5kvwAVakcEkNQWUJXV5oaJsaTXZdUlOaT0GbmFv2eKWUSUh%2FU3Yhon%2FlhHNVjGHFhhpJg97VbVYNlnFzjXU%2FhtLPUl%2FZTxv7r4PYfxYpz%2BTu%2F0qXNtIJuZBmAVDnbMwvuUCabouBJPLa1keWYKFyDfu8wxAlTMJ8ioOtoh5utXp4Bx5P6C3Xlw6Xdtjq1&X-Amz-Signature=9f11d284bf8e93d08c00bdee7a2b3d9c63a336762c1dda649b3bf6e09451e677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
