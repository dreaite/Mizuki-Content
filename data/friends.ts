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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQ6XEWB%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T135035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLtiiAH98y73%2FTJ%2Fuo%2Btcy29U8en03%2FyrmaZfNsWOT%2BAiEA1UCa9JT0G%2F6RbOm8f%2BZBWCMrCFTd%2B7p64wXB9NbxAaEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6zXG%2FUbonWZmDipSrcA5f%2BjpFrpiEC580rntEpSA4IaQz98KAlVa1kexDdX4VWkp%2BvoBk%2BCbWfYUyz3WuWMkknqIGJ%2B40AZ2QaQxLYHpg4fBNWC7MvGckhiyftESQ676HycGLR9stPNRtYmj68vY00h2AlNvCp2ax0RmMDJY9YC%2BM9KIk3Zfhwe2U9QPYrU5hiWOersJs2Zo2s%2BBDx05I4RaqmxfFFjfnLzdqQ3vjmg10g1xqudHybjUFAjaLnbAYm3PBiA0KAFd%2FR1j9TLJ3QxjzplU%2BtMTyMoaCc7KEdeefrwQZOEBAe%2BXN9oP9kD0ckfZ8AjMgAX9r1SQLTCuCvGnpOAgQzh3ujCmWsxsjNIj20UtGzlbI4pKyd%2F%2FMJABikFud0ynE5EU3FcrO3%2BREYCpeh%2FLxzBhQMGYNO3uNdxDfMsClbKTXL%2BesTzNZPfpZcphCaqwzkln2URZmbrnrjw6f5g7Tdmo%2BFHbPfSvtZp07MDS7XxWYw31d7LCmMNMvxleHrnpQ%2FsZ9rh%2B2%2FHB7W5i8mDycg499R3vVwvHO2AY756VTGRoDIoPxTBIklCraJ%2F3ZgKPIsvWb82Fy70C6zs4UwhED2CzJtC8zFIKwec%2F86Co0rU%2FN3iU%2BYrif24ViTIwD3MQVbczKLMOu24dMGOqUBDNF4jfTgMBgqQYd6TQPtCbyo%2FUYuassmEKNEzcMpIGGT8Is4oIEQ165BJ2Whkrln1V6vOy%2BsbV2Pva3dKhR3VLNWZ8H2oDo1pv%2BeHFX6MappW%2B0HLpvhCS27LKFaTWfej6jo0wXF%2BItHyyghpxvnudXbZu2CujdXTgJ%2BPWm8viycKhR4PccmvV1j03CmfCBf26Npu4VYfiMB8Ekn4uqz4c3T%2By7g&X-Amz-Signature=1e9fc2f848977770fd9bb38fac24e25d0707be6c777f2e37f544d9aa9879656f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
