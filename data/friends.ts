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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYXJIOT%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T172146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDCnCPQxLZfMF0k3pAeUjXM%2Fe%2BDXva2ItS6Iu8rfD%2BPOgIhAOXqxeSD6E4dtJCTxlvPHUPecc9DK3M%2F7GR0s5G%2Frf89KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Xhk4fwHrmHYv8m4q3ANasUSKgLWWz5koZX9AJQwQ%2F4p3oq7cN1ubhyHOqaGdyeBpZliL1OANeV64d0pU1G2ffXtAYMGW4LFzXi45BvfeE94bl2AGWJpVdb%2F%2Br1rb9uhdF6XzbcwpNYzbk39S7R67eQIv2AygOC9qAmR7Z597spRJYLahMAFoAutq4u5nG%2BY76AoLniB6qwj6J770FlHGo2PKyN8PcwHZyipXvytDH%2Fs9RP2QzYexqAuxOJ0KpAf01st50sBHJj1DDSw9tEDEnE6Yfe4U45iZUTgFw5q41rdR7tnkPJuW4Eg%2BWPw%2FWeCzeXYETyfTYsomLmy4fyOiq6Lf2O%2B1oI2UrCciHzEZvMrXxTcmwkytzHMmpc4k97MKKDHCLUVsxun%2B3C6MSI1%2FQ4QwhYZhqQx2M92Vk6a79s1zRMkPHKaclitKGOhwXJRKY3qNKYh1MjwHPnHuEjCfGTYSJ2zWQn9uAJjs5F%2FkXAS7fH2MSroRlr8w1FSpOwgStsBtkPc7GZrPDUuVDiFe0X2PO6o7c3dyOD72iGPsGjitf%2BLPGQvlV35WI9vDG%2BpULuLIQnZbY%2BVbIxk04mluSh3pquiS685GDy2NKZRjpN1HN9HU0ktsXk79ArHZCXOKI1lUT%2BKYLDrH8DCt8YPTBjqkARFa9fbQZyoatUrlcAydNuU6NpoyPNVoG65VisPYx5SshkOuyqHEPahJFQWyWbVVPvqk6h9uNAmn%2FfP27RzjtSWsktEaSxH3FMj48AKVcEeY0Lk7tLk9VizSeWLdaM82w57QChU6uczBzIuGRfiauei249Ox2G4rcv%2BZgMHq%2BqsfJrCwfa8jeZqeGwPFyCnBnsZrD8421Wuv56aFO61yhxjmCwik&X-Amz-Signature=a3d674da7e38ca50155295f1efe693cafcb42bf5b28322042f299ce27c6401d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
