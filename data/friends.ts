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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4QT37X%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T205719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxSvAj2VhVLiLbhRIrTcPwRG1Vd%2Fk2%2F%2BmUQxZVsvKFfAiB5hiyyQqhZqcGHEzakO3AgwREVmdHULqOnckM0gFV4IyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtYLNVq052%2Fk%2FvtFJKtwDChsBEC5fRD%2F3Pnu8knQYAfset1uWSf3pvkEwb7zow1dgtotZU6138PW2RDBIajkpvs7ArgTsqIFzlv3dQvK5wcxHZWzwHPig1l26uZpzSxFrO3rE%2BNWTm7MY4h6mpo1GqoOfSBiAmRke7vH6eDdGwZwjUSoI9WjMROU74s%2FhXkyL3NFM1IzfLnx9knTtDGxAzERteY%2FXR%2BuvpkQpUlQbqe9uXUWia4%2FsxMfHi7W%2F0oWHTRP5TLWWW9y6BHwCqyixppW0ByB9eD8Rcaf7FMt%2B5aHg9g%2B4yUcIcJPnu3VLEDi4FbQMBXSmeG3Xy9jmIbr5PGLzvtwE7jftBd8OYZFo5dm3BiJaztlnfQxyIyo7TR0HR%2BEAoqJ6VEhdNyC1nsZwKcqWldsYnWB5jlaew0VUkSmnHNBf6VDgGhtVGNkjpT5p3LCgIQxqVmOIfYSLGVFyD4hyVWSEiiGRYuevlSAaB3Ew4RiPR%2BkU%2FsV23TGCYJbH8Pofwn%2FFRXk6R2xkEFDAhhmKCNWpoAEDr9yzZo4Uni5hAhNRb4MtJzddkwoJ%2BQ3me%2FK1f0nAFnl0mmSCtEZ%2Br5ALDZnLo13SuGJmDoWTpZiGqHhZevU%2FD7zQaJP8uchhFBxrqHoeXPn5gckwja2p0wY6pgFuf%2B5Rshz8N3gTrbx%2BXOzd9VryE4Zzs6RmoXo5IY89BUhb4jOf45rvIuaL%2FBaSkCTiPT7Q5JAfSfAk8j4Mz2dK1qMjsSr3njacgMaPXwEFeceQSWWdMQhlOA6UAolzsnovshJDhmgXTPs7TUFLPxw71bB3Ess9XkX2tWID47RGaVLPwu7LP1JTkP3o56YWHz0EE1%2B170gFiv8wMOrPnd60loeAo3Pl&X-Amz-Signature=4853eb1b8ddbe06b4b8b4ea665e20ebf130c07b619b94764e5358c36f2cd67aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
