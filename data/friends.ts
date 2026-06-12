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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKI5YCHQ%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T201246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICdl5pGpn585X%2FCX%2FHJkURvu8LXFHk8Pn2UWyjWy%2FWZ9AiBtwEGS%2FoCBYXRXMTMYATBmaDTw%2B%2FicH7fljy0sv8kVlyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMGuO29USlVeHPytv8KtwDy678vKMYWER%2BMK18mDYJDHbrCobBI%2BIrFjhMxbRIvD1CdQ2bLEBpahz853oQoC%2B1FJoYG1G%2BskC64Bb%2FScoYQOWz71AKPIBX1DOYrj%2BCs84jB9VhwVs8k%2B2HMGD%2BC1KJAEO2wv4t870%2B6e1sCl%2BVEfAbT36Winyeq5KLygaTcs0pLVOKdLu71ang3T2PF6MDJxVI%2F9a7XuINJOwP5Nagvcc0yEuTN%2FHFGy0An8Af5c9mTZUcBfynrtIDhGSvboCEd4n8YnATxMzHBs5ZjRfoopaZtU%2F4sXCZacbkFXguviwkEDxBGXsQQELT68BVk9vTXSvv8Y03f5mCj7hc8V1BtTrL4qsycraTf%2FxQFI19i%2FYufQo2Y6YW2IwDSoeDaiQG3ig4WacbmgWNKWEsY5nZJTG1K6n3%2Bx%2FiUrjiKxHDlwA757K96%2F8UaTUFd8wnaI9Ggjjj03uJxCl4xtS9czqdyK4PKK8qvSk3hHQ01%2Bj%2FcT0vmrusjIR5ctetx70faHqtU%2FIKnTFtpojREym9KpOQxIKuw%2FPMt%2Fq6ge7fQOTrTH96zlMi%2ByLbYxK4J2CQ8hFSS85wv%2FZHtmZhkqm3j3Efmqt8DVzvFleoJ%2FsI2D6DHuV9hqXhqnWArX6aohgw2sqx0QY6pgHMcPh%2F7q7sN%2Ffwb6bVnSZx9IrbT5pyjTHPCvrwFvWKJUYkvGJdsS4CcJJBAM%2F5i0pTlAMQnD1ZDyC7alkGRTyUhCAMgV1%2Fm%2FQinK2cmhyWS%2B5RyGvAQpur9syNnQj8AoKe6ZWBkKULMeh8yPfbqKnm96P%2BdLqvHeuCygiZAoOiiW0OnzeTM20oE0JoccVoqedaxPB2164ckbh%2FcX9XyV9Olrzybo7Z&X-Amz-Signature=42ed17514ade68c13882e5a0fd36295dd3f532d14c240b5466d3a5f211f91fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
