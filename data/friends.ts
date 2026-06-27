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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXS356Y%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T180552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKoTa%2BbK%2FRmwJUswGoUcf7yQO2vAsgw3zrKouvV9eRkAiAXxblDVrp6%2F5FD%2F%2B2bSGokGqck%2FSkOY%2BMsCuZI5fE1biqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ssArWwNJBOM%2BB5tKtwDH3gkUZz8sGpFnaHl03bPqUrIDYKl54hSwdEdkq%2FrVzY8uI75bvveYNPUywugea%2FXx0iA5nFx50MkLyK3Vh6jh67w9LlD428Hh9Kw8PlX8Re2BzI3v%2BZV236htWVjli6j5wC4u7WiEuR%2B8sqqpO%2FaAvNUO6CtR0zX0XkhH%2BnhQ4TCEIJm%2B0Lsxc3eQ4qqvqQND9eCOU4Cw0i1Ka5orAWYoFqMfOBildtFPRQosnyBYmkEoxNGoWIy1ZyBRiEjxcxGKOcadlKYb04K28iZbEWqkoUCsAqHgf2s590ADLoWHM1gMZMUWCSjDvc%2F3nct4GgjwVjLuoD7KGnqLiW3GiS323yogPyfeiiOWyMqiwss1zBoJA3%2FHQihVL6LKPVxxEjhvq8LLL6YpKT2kvOY2WRN%2BxlChZ9MQFIxZLUm7e3FbTQdik49OtHIxNDys6Q22UzdefFA4%2FYC9e2L82mlIKl5JkjVciCuydHLv4foffgQ3sm8sEowO7LU3zC%2F6ZKmOVbEt0LqNqOnO1vAQvd4IRZyT6JvguUAwSIUmkJRgTbDMaqjlM7oswe0fEbw%2F2wtV8wxALgrRY6CPLlA3%2BUHd14SZ9tsSYZBIfPeCUgynmQ0YED93NjRDTxVh4335gAw2puA0gY6pgFzSSMOzXKrq2g29eBiT34Zzk%2BLCnMchouXXwbiAuMH5D4%2BudzCTjJGLFGnZvWA9Ooxn90QORnGGGCj5%2FKqOY8kiT1Nzwrdpx303lk8QD%2FHPijXW4Wyo%2FN7w0ZAcTfjFwlHVptYIXV8NOOG5rDbeTeFz1UJd0apDJIQPnHlDz%2FwpJ3avpULBAO%2FNb3PxSERzvinWqazovWJap3UMuaLjPayVopbUop%2F&X-Amz-Signature=ca6210532e5b4f48b436c6d5d405e68c183a13c601108011965da7aa83ffb194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
