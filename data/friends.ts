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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZAAWHBO%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHmNiFKnzXxZyysj0870cBSreoj71b1qYgdoHFonneMaAiAP7tEL82TlyWSp2NXSljltzCFH7PTH2FqVKozgY6BVair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMiUirVEBFW0%2Fcxvo4KtwD6zq2LwzzomWp8PEarIkFvdU6tGK6Sp9xfFnfe7JoY0jqNmmiWaPqIWcAhJhuH9F23S5AO5uA3t9Cq86QV%2BmtbIuJJzs9IJK%2B7aEX7857duKtf5WSPSZfZwRHnW%2Fdup65cFHiAb36%2BCVnsL3fRZ86FU%2BuO67q6MaB1B6rfg2Nm0S0MX9jMjXBd9Ab%2BZ3NOmLjTRVCQjrAcaU8XOMBksCBP2x3elZcsV8otMSim3uQQh8S89JLRvSiQ2tzHI78uP0gGwId2mjfQn1%2FfbUG8xmBHTvJR%2FOpokQTGcCBx3WcPwB01jOIMZNY2t5lQY7suT4%2BtKyphOAUXE3DKa2byUCmWnZ9jkeRzjOqZYLDlHHJB9xUtmsHRR%2B%2BHDYtzLOI6i9Ase0AgIYLhT0QaNLITjgbZWlMSPU039yGMLAq%2FEtCasBgu950MCbnNIArkwgE%2FOljK33UA%2F6UvaqoOYUisG%2FJCuaq2kn8dm7YXb9Es92qUuG345Gwj8i8FZgTo134DNnRhYleeQv%2BtXd0V4iMRmG6Q9RoZOTDkXixkIpRl%2BdzY4cOtKXKxSTRi7cpcR2ktQobnkpSo7Ztgjd1KiCc58W2P7d0x7WeYLAnThDTvnjd1CN7Q5mh3ftk5rHwr2cw28bd0gY6pgG2dkm6rPlqK8HvqOFD9IXGWe6id%2F4DGuNPJpW%2BkCmbq0fYewD38%2BENLHDkRktFhJ1jKuteKWnMCxV7YavJbg23BZDx4PQgRVl4ow6uJjVMykAhlMm55j0KXMhw01cKy3W%2F7ajJhOK7THsBMryXl3Fs9LKc08xAdoAKG8zI1OmGewQnCf0Y6xdSeLxPwPUkUQAPFIQGn6Fbu%2FYPtzrz3Q9LW7sGBEEd&X-Amz-Signature=52acade73ed18ee0c723f30cc913f80140ac7b7002ec8957a3294adbb25b84ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
