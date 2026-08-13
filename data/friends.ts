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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VXFGHMO%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T191216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICn2eXGerNg2oIxbsBC7DnyVuf1glnN4CtvNQSCp1cjVAiEA7EDfV69hY%2Bq5%2Finwc1s%2FvQz1upN1peCLoZcFPNSwAmwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPq%2BxrgOTx%2Bier%2Ff1CrcAy84PzgTRGao1fNK0grjTwOm%2FBsOdohA10XG3XmUm5vQmt8t1%2BfoUzW57pIYX6RLfAp2JjkHRFsgQwCVH5rUk%2FLg3lJv%2Bvh3lNfGrLFQxuW3gd%2FrF%2FuCsxYuVu3zewHmntKTP%2FI0feDUJlKCL8%2FuxPJqYcBSCDd9y8seDbGtIqo9Y72INEj2vE%2FknbTOJ5oaeOT%2BtlBhFbdxUiBOi%2FpH42z4JD%2Fu%2FqNt6p3MsDz1uQYP%2BWbCIDqzYDoZ%2F0G7bJQy4q3%2FmQb3pKSrFZuTSHwPQ00O4NSU4GzU3IpUaxx%2BA7Rkp3WxxO0rIJXI6bB5xb4IC7rFrBawNu5%2BRmWw5pFEOHiGdfpaM8v0ARjx1xWPftltSCQLFqBZXxFZOiih3%2B%2B0pBYTmOT68Ek9GZ998KUw8t389s0TfgauK4c1S92uEB1QLJXAhRs4V1GRQpndwmj5ItHmokIV5J8AtbSJ6Hee4kEzaDi2J7cTBNe8Gkmzu5dvu06gfmbHNYH6yjy8aY3CaGHMjaxcei4b%2FYtIvCy4X7L%2B743CwU1mWiRZxz0mHHhx4uoNYHBPuMenRrpIdrXiv3afN%2FKWpA6zRMpx4ZiQv6FsOC%2BEuwk69VEi6g48qIFx3vH%2FSTKgGTHAhJhSMMGf%2BNMGOqUBvKfEB0kAuexNd0LSFowUNtKmj3iySbD2OtOTkYGF%2Bt9meDlh0Mrd%2FUP89IjUZwK5PW%2BO6NS3jfAm%2FR6TXZ%2F0nIWgQXEJjSbtD2r5zJkP%2BdO53d8ere8fciS2JrkcFXVzsavkGD71J0AgXOgVme0S%2BsBBCBXgReczTD7tnaR4FJt%2BXZ%2BvlIo%2FL7q9D20rSQvGuTf4q5gZ8KkrInrrYNOrQUuHWseR&X-Amz-Signature=1ddc7e068fd85e2f720d01c2b2ecec403f4df02f3cf2a03fbad0dbd7bcd668c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
