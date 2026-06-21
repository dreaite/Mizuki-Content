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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWB7L3N%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T130805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCc9mKZ05ZJmsO%2FXztD%2FJigAvqHv%2FRwrsTtg9s1mEtIzgIhAIV7m0SIT%2BmQp0iS%2FKpAGacITyO80b%2F3JiH%2Bt9K33dsGKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFqlfZ%2F3NMld4yEw8q3AM8u58AZDCBIcNOZuC0BFtWAQfbhnJ6aPio7Wpmd0aBPBX%2B4EtQ%2FP4gIBr222S91BAo4a9q%2BS7V8Ge1PspTiIhCaBOBUtX00GaCL5eRL%2FyPTt8E4eYEh0ZxDtAdZFbKqV6TSphaRvjk3d81iunMqekEuKmx4tbq2e4RILXZDYJYBqwhKPEXseAum8Pev5zCj0yjbXyteTOuazpOe088sM%2F0qy6PRXvNLVDoBY2sQ68krU3xXWszNv2tgklffWeQ%2BHx3Lblvg5vh76PJqXavF%2BjNjiKZCLIfw7y3i%2FdAEH4l3lt1znjrM2D4alX2Io%2B%2FvLsPMftnl9BcWsF1xud6Zge5F%2Fhbt5PvTvIogILOndyFftm1QfJRI45iokENK2qG4APQNHvrBylak2ID5LHuTt2wjfrfq50jrOU3zWLNUT9uQX91MbFQr3LSq6dq%2FDh0ZRO942Fe9GUlGsA1NJHTyu36b9YYZ9U4pEK%2F1hDb3NR12KW6CYTvq4KHOXogxK%2BN79j%2F5jKd3B0a0Ka7y7mAUmWttklgp9gV63Gr%2FaUA%2BW1Ae3FsK9iYs7gYEXbu6TxMIXZGgHXBTS8UTjeMocICu%2FmOAEf735hjWlebxF6HkAXocINnGpxU3DYWwY%2FR2DDVoN%2FRBjqkAU%2FULzcd2azj8ejoxagC3pi0NjQnmKfRyk0yx8jXBPjVq%2FYWTc%2F7Lj%2B3pcpUgafpekeF45AQkfQVzFGijooCojo%2B0HVGrv7R%2BEFqVh2kin%2Fh6Z4wifJU09YvwL2yswSZCe038KfRLjNt3IRNboyTcULH7A2whx5UR7fP7QId6q4rWkqjlgt3BM%2FizVGYMMST%2BbkQi%2Biy5WHqs9%2FYtZZgJNxcE3ir&X-Amz-Signature=0caf62ae8952f4e5df5fd0f9c623eb31ae014ed898022f794913194a535c6dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
