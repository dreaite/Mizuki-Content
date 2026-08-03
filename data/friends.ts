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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23Q2Q37%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T210347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCzswBah7hQe0H5hAjcMlE%2BGpk%2BmSp%2Bi9%2FJ7AjWjcPFmQIhAMC605bAUH26g%2BtrGNG5r%2BzodzuJQDtWbCPiojR1o9NuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr%2FKN65YnHMh%2BVMvMq3ANRF9WWeBioV%2B%2Bxe9Mn%2Bg4kbJtc%2Fvi%2BIjvTC6WA1DK92CW2QHdXEpXWptcswV%2FABCWQwU8k8RPmH8qfW8Ek1ZLYzwoNf5YOl9nt1CWG2QFxaq%2FtB70ICdUfRgAl8qepHQHnz4vyRODWh3LaTafDbO%2BN3qlESxQPpdle00u6oIbSTgLYRoB9vgaPkQcoK0EPlT66TQQAgHMgoXJ5OuMYgw9AiEN82pDbvQvf2ua9awQk3LVuqFsU3Byu2kcODD8rV3WvT5rGV0KzdTrYGusGQv3lYSLndScCnLBrXID%2BqklzyoyGEuPJOQQyHbDxQMfCJnanL220oiNFjgRvnbXlVY6%2BQPggBRzUYGxCGUvDb4vnWOuFH8i5Lo%2B5uFJcchLnUoGELXr43Ni0QFW4HifLG4fjnbDsITApXmNl%2FtHfbd%2B1MWaPTxCF8CQ6rHO4EWzR8aw9kNypSinbap5u58cH9v3mOCCL66KVyvikfvl40FMg8Na%2FuxjbX2uJ0CdYozO98uYXb9%2BMCDBpgP7IZKIz6urmE0084AjdN4f3g%2BO82zQCKv%2FGy2CvHmFHXNwNOC5NaWJ%2FkWJVjd8PSPmdVccDd2tGVrIzcKFJA0RTQ1OlT37n%2F2JW%2FwyaO4KFZOb9%2FDCa6cPTBjqkAe6%2BbFcz0%2Fgub%2FrQoXDei0skKJm7BQocxqq%2FXsCY%2BEhJLz%2FDX1T3vDTUpdRo3Zu%2F3Wc4Slw6cAq61cTS2FJBkIuNUSYZGJfF2YC08bL7Z6NISpsWnzaK5aJOLe4lH%2FLjrgYWfParGNhXH2wUXPglIIR4y8LCbPfBIB0OiZqRHSMjgVTGJmavPjODN3bEMghgH2UJ8mHksurNAbIfkqrLcVhubLiB&X-Amz-Signature=af731321bff1caf26e46c5be68c1971d1770fc7d882c57405bb628d98cfb42de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
