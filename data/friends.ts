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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNUSVX3W%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T224257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqmi2KYuvt0mhNZXZGBnLic88IPSFI7HJTosNjzjR2lAiAvT3V7wKiOb%2B91f9IEp0tbYPmsugh0bopZGoYJ9f%2BjVSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3myUyQ8e65imDGkIKtwDOxgFVZeMPgQs5rEx2XqUuGjHw7JoUeiQ0NVP7aZRB8DqV4iR4tP4BCTVo65QC9EXMLY1ukPXlrbEKb7DVVzfTiZg%2Bp06OoNUwUahU%2Bz35GFIz%2BrIm7Ct6llf1OwB%2Bh3O93rh6tpnlKi5fgGIqxVGRJ5r4nxuSeufCWawOQwLyjEuaqGMaf%2BNEOBA8cPHEkPUn7lC%2FZ7zhTylkSSBUp%2B9bnnJmOpFuJHGptNosuz4bNn9wdqAli3HB7Ugl3gVgPY9v9umvAyuOUDXNlyyJg2UXfkqBpAyCbwu%2BjAIvrqtZHm0h6Ha5B0XRHxrw%2BXgrZ3qKeeuPMKbAwC%2FyoWFteJZeoJreXzdCJas124BfgEVp%2F2xhGvWYArrbYM3Hoawp%2B1GzgNcBuBTwDdQUmp%2FjbW8NhfRbZNrqKqRfxqZOz0Prrrnqulr5ebXucc6B%2FiES6I3a%2BQqKQ1eV6TmFmNgTqHAWfb0PJQrxGLtodo9u6o6jCC%2BcCccB3yv9YY0PduhYhV4o%2FPHAeiFAy32mxUugs5pr7k40feoxdpCQh3uefbPtymGd0QVF4X0WYDE95n%2BLE0L4VdAJr7%2BAw5BUmpTWfQKDau3VXBhwmYjcUM8eW8fYHe41bmEsF4YZ5W4K4ow0PDt0wY6pgH5bWOw4rqkLNjZVeQTEzvOoXECVQ%2FWtSiXlWLUKLHORUL9qwUKZqF%2Bi%2FYwDBWwaZUAFHBtmLn8rFYKnDZeeZjz1dMXGNWGmMgsqGb1K7wLtNwTKBIK0Oycf%2BoGMizzw%2FsTgWee3qZVjIb%2Fyy02WIJ5foxk6ybwPTowgoTI4Ql%2B0DBFOnK4Op4I4i56AnSe8CH%2FAVBW44m3H%2FkFcDd2olsTC6h4ZRbk&X-Amz-Signature=48ff64d5404a60e88762e7c086b6e57943e082423a73ebe7fb72420512161d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
