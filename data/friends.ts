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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D4AG3AN%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T144139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHVCn5TDbw0LTKs%2FRy%2BuUbRENzifddySv6uRStgcNGkeAiB7fquZ9M83LIEb77EzCeAJzVPFsnwiWQNU7IwD%2FjjQ9yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6PUDHiE%2FYk2gJZPSKtwDIO0ScwrleHmoEWPoW8kxWFicS4aqEagszD1y6QCcr8fX3dUHKLYQE1KLC89zFFWeFqRDUyJIUkfvcjn4dDVGM548BqU6ErrmHMKwqO%2B2RyO0urdYGeRrNUDhKtm4M9EKthZJ9r8rRG%2FYxmJjZI7tAMoryXW%2FDwxnv3%2BzCRAkj7xzJ8vvMpRm2hyq9dtwJN5J%2FII6QDEjBIJhiiH1KFctEyTkw4MoTI7OWrQSxzQuaXUsTY9BhG1UhtqY9YGKet0%2BIEKu7HruoUg2Q07IkvER%2BO2VbJMhosg1iPoNsJIgm6X23t0pX%2BFPB8YjfUMRRFtp0cPzcVFUfh9%2FmLTX%2BZwwtCWQ%2BQVwEcbtLwgySkrj5cH1fXQwN5k5RtJe0fdndob4uHwsqbM9Hud4zJKPg%2FZRO0eA%2FSrjc75xomhsiuH0kSj8tfzMdWHs2uO38hpS19qT9P4VBNNnpcBVOQOnkO3eA1GrXHexfO%2FGpB92nMBXcNJDyzc0EL%2BFPIafrVUKBh29jEgdTYL%2BXIePeisvXL6XMoWfV1y9hRzyYDH5TZXQzRN0wDO5fcGZ22NV7jlI7ygajIJZxTXDR4LeYdjlkAqOwWvvmDEa2i6ldRzEORkj5vOIA1ClRTIcVklZsGAwx%2F7B0wY6pgF%2BCq4dLrD4mS9uss0TYl27pl0sxqzIX5TwVzaEHD8nxQctNIRJ%2BxmFGekSKNZ3bHWw3qudSUrNhrYAeolI2tNbGNu7PjKSDOKL6lff6KSeAe2sXrH4CnHRVZRC4ggzdL7hY0uAQKX8i05YvC1WS7C80EagNGRN5QhoRpno9QSelPLeYoj2aOJ%2B43alR%2BcWnQIEm19yxiNheehQbFAngATyP3pp7oB5&X-Amz-Signature=b84bc8c8b0af38d488d224ebcdc4e32d5f6472c4b8e7d3febefbcf082e83244c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
