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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIZQHBS%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T125657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfAbA6Yc7CJo8oA4qmSKG0lJTc8krtGXP9hRUCK%2B%2B5aAiBLsORRiNbquz9Vhdap7IVP%2BycxZArmJaxA5t6mfs5pmCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCaqR%2Bjp1lZjaATBKtwDFsHyl31tA4nJJR0oZNAUShia9zReevQkh76Lgyyp0Pe1edRa9ZLrF366aKRWI%2BrPv8lLXwzXZp6F68FQXQhWDPgK3ah5%2FZxfHu%2B8sLuvguiDeZcyla9jldV7Jkmg0Xagkd5BRKyPxUPr2i6kMfrs1HuTsd7c6cK5VOiKPdzdamXi7tY75pCNMWw7Uky2Vn9mVQT9Fe0fF9rYdNdDyBVWG1Xyd1IA4r4B6W57hlrjDePJp%2F04Q3Xcby82bOtpvqiFDz1jrb%2B%2B9xv9nOe0qFdgpz2QG9kFFUzZqt8aW23FqNUAYiK0pY30P%2BFcy9%2BY1hoCRMSnxaN3kX715%2BUGT3ZP9N1lcLloAHQ%2F%2BCA5GBWVmvKkk4clZPFUXi6XBpirPa%2BDPlguUg%2B5vxpuI5FQie4cBGvH8x2davm%2FIWdi6WI3Yt522bkmING1GePafpod%2Fq%2FVytotBfvatSV1Q0rKz%2BLBA324Aov920LSqco3W%2FfoFretSWTgAmnx%2Fx4%2BDUbL4t0YwFMOIIxhwBroP5qkhqnTF9HakiozATsuTOCjUi9hRUSRnswWjSYOSPeiiFEDl5qkik7rFrv2ZR3A0CScJgn0Vejnij9%2FkOH06HyRZjYORX%2FnSG34YnQRGHYUwO8woqSy0wY6pgGmXekVAcWUnJt93uBkDLPMMDS%2BBJu03McyqeYoOju4%2FVZ7xN1Z3klNV3i7S3rksXxtrT%2FcH41T3PUgCvCx8OvdpXNv3C8%2Bu1tNmrpbnFmac5hVAG7pod6qYOy3dIY2jRJrn9Dc7zFiW8dnEyoom9GT7NUemgzvMxB6w1kg6bJTMYZPp%2Bruhz4Ap%2Bq9f%2BZdHP%2FG4UB031F6K1h4smV%2FMOK1PrhQlX7p&X-Amz-Signature=51ba29afa5fd255f0d510eccd32507c5295071c40b32d158bbf52921458420b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
