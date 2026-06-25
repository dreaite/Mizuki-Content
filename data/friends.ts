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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3YRKEB%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T162636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn0amjeciQkstVc8JpHjHcg7nLEC7LO7N01VmbXX6TUAiEAx9O2ouh5t2HEB0gmeFqk9bSK%2FaxhwWrq%2FBK5tE5%2F4nMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH0J6NDxdrJtLx9eSyrcAy%2ByOFvYLESR1kwJ4KiuwtVjCVr8r5X%2B%2F7ONPwS1KjUiUJvUmnKdEb6kC25gVRc%2BwKOs46fbffyqogUZfVVGupuKN9abNgz0MmZgMCoO0Nfe2echw3hBrOLEdTTBlirFSzUFpKre9SK57k68k584E1%2BzFQ%2FXsjWkVU6LBNJbv3y3PN27e8JoY%2B6kqaaeyHCM52hbxpyxfPilTjDrnAsfwCB2PaanpD4oAP8k2fVLJNiiabb6WLQBTiQWPPl0rRqlZZ6zy5dCnJMnR5DbYUdSm55q0ph0lkc6%2FWRqEZaBZOYpojuPVgbVjSP%2B4moFnQ%2BjMM1MnOTAbvuVblkXmoveyzf7hA2wY79B6fZn215%2FHLa%2B%2Bw86EYZ4OLme6GbF5MBnOdweb%2B9br7cT6cZqd7OBtE31bNfHCvG7EU15f%2BCbbs17JH19zDAy7nKVG1bACkvLNbKtUz20jBY0aWQlhQonPbua%2Bxmp%2F%2F2BLhp%2FQuBEvTJMv9qqSNH7fwm8i8uXjIXulD%2F6B5hRma4gv%2BW4N4pMlr3LzGTeE0SzHRFoon5p3SbeMLiBowWRd0HzF58klh6fWdiO%2Fu6uhOP9D2FK8RLoK305hCXj4whKTT3llgrPTwprvQX7K8ttMfEl1%2BnoMPSH9dEGOqUB%2FP15p0apY53%2Be7VcFzZ5m%2FU8iMrIVHSO9HG561pO6mgvsolG%2F64s3FKv%2BXhH%2Fj7Vue21K%2Bon7uqZw0%2BZKOhBwrDPwznLBZTJv8IgazROc7qh1pU8jutcySKpb2gpAqSKcQyuG2Xa3GvlCj4B3HuId7W9y%2BCdRzcf5ORCg7GNGkaaqbSgWkrUW%2BgLAj12HNEi0D%2BedVpmYywzUPWTusBoPunCNb1m&X-Amz-Signature=916994bad9ebf6f229b9ec9ae458759ea85e54068b8822325ee30bfc061bf5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
