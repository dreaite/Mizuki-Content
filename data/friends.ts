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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBBIAZZ%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T162610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCmu4CS5pPe80v9q7POM%2BRZdVRArOEDip1UK1DvBopVSgIhAOjNs8dr0nXbfQTG5aDpg2Md%2B5wRuhBHZa7rr33Lk0JgKv8DCBUQABoMNjM3NDIzMTgzODA1Igy51D6E66cOz3WbfgYq3ANR4objymGS%2BH0wGKnLEdMP3DST8U4yyCvoUC0VUvVFlVN3SuUMZtISDtpOYYL%2Fj3xKGpBnI286bhnlW%2F9XcIc4xAnKh88GH%2BQY5MduZXf3zUCed%2Fn3DFb6z4ogePYQnzQ61v%2B62iQmRajwGdVTLwUVUpNHOXCML0XzfA9aZ9uizRKeTuJXJw8WQxEjKXILMn1j1HyuFTf92P3rNiKRUerOdygF1qnjbXKRgMHz2NewmFCYO2R7QHjTYY5HEUqBJpRWL%2BgSj97y%2B0TN25SQC0P4H78S%2Bw0nnHQL9EPNWidNK3s5wSwnKdxR7qI2jI6odkrBL1bTo1kwJjz0pWYiTQdc1b2zDGo%2Fa8d5LfmZtAKA2%2Fz5dCU%2FbPUJXnkXmHCrGp1dmkxCaI4ul0xtwB9QlMuSns0ccLiaZiwcy56TK%2F3tsCXFRqAC9GkZpY6%2BlrVPiPuq5VNeiPT3iHK8mgSbOfvJ65XMu87XKDFv0CA16s%2BAzIYBYJ7CKAwl5zxpOnDxj3LV1E7ly1CzNDaEQcFckBf1nHD2rNvcLUuZMwMPqX4xHjSiFaKtiRiaaFSQuSlc%2FM5VAlqiYhI2%2F4gD0OFk0ZDDJGG9sKcDKWGJknGtncTBjbnosMKX6OPp1MGSxjCvmoHUBjqkAfhyhklTpOgn6wTDL09n5IuoyDWHUCAUtjJhl59t%2FnAh%2FIA7XofCAeoJS%2FGb5X5%2F6kgPF7CB5IUJs2GHcrqp%2BtwYjAPJbx9Ti2D8tIpu2LmvhC5AyjaBiCM%2FaovfsoYwhZgqDMQIR5I3espDimnMkIsAHj%2BnZJeKan%2FXY2n6tv4Pf5A9tNY8WA8Lj6bVWWm4sbbuNiso1q62FJffisd41AKUicPm&X-Amz-Signature=b1e079e987b8bd3dac3c8f63245211e5c8b2f0342d323778e4169c06f328869d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
