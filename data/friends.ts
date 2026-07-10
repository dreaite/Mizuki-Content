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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2LKNF4Y%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T202405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR8xd%2B%2Fx97aEk4cORihjqrjwyr2EfFJDupCQOA1giicgIgYctYCLsN3Xc%2FhLal561IsMU9WWkShSBUDXXuJpUGbPAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT2RzqBuik8bPKGEyrcA3OdggYJdjffsnrRojhzhPyrOROJ8BdMj%2BClV9pIdn8H16KSkLUSW9KeUbagV6F8IMKx2tpPj%2FcmC%2FnAKGx4WiLFAJovsUciqq%2FqI2qje0dCUj3kNChpNxBnTgqFWHpkuU733qtRZ3rfAS3WrtdM9wv2cfI2L9ZAFG4xtAQ%2Bmfq3GY%2Fj%2FmvnPyHCzAXQUjtXekImD1y7QqaHmZXGl7s4MlICeC550iUPstikgp%2F7sTSQD848XdDzvxo9EbNEXgV8vt69%2BYYh2WtLBB86JzWtUZ0AH1gx8tBn0%2Fq4Pv2aIaKHOOp8or8aeC9FJZ6xuFyI3%2BUHqfvcUi4JB15wXohyaiKgZvmou1DD01ZJf8SKCtorU0nUBOORQyNvsUxKavp%2B7W2jBL64ckUV2LMkV59ZTg4jFl2PsBTZ38v%2F7LpfLpBFY5my1zeIa9adMoFmb2Jh27Z6xmN0%2F7BmlaJ2mXEp99Md6L3QJeh6fb%2F6DEGjZIekvobUq5Ve3v8ASTb3QErqt%2BeTLe23GhX1P0aZXU2xu71FZdb9nYvSjAM%2B2BbU7Q4yZO5OK7yda1oJX3MR33h6k%2Be4GNBTdyrH4FAVaWeTra4kw9QbZe4ELoae2MOlBbaiXgrwLfSa2jWNKJqAMIOYxdIGOqUB4eWo95sUGsT9ifQCOlDoVIGXorFR5cg%2BVfnHtiEl9DX1pldyAyZOFCYCMxgyY8Fg7raV53uSraqCLYTa1tO2SOTIj%2FhqapqOaDS3muF%2Fo9obKhGNSKlOjvmEooIZpVEaS7zQ1rZw4DOBrslJSjSWdY%2FhV%2Fj57IlRyVqDTuYpBbD9tpiOJCMeMLWKHmUOxi3VSWCjrmROnf22IZill%2F8gS2OVHEKr&X-Amz-Signature=4a57ffa224697d6923694b45a013d89d199e74f6b29c5367710530da710720f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
