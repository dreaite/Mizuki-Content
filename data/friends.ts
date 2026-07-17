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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVH4WS5%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T235937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GXMjtfUt5TLnGk0jCrYYBCU6l%2BmbH1Bq%2BIq%2F6xlMTgIgPUjvm%2FDX4vpJNsznHW0TrBR8fP8xkxvNxZTgTAgVhdQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLzj9BJ1xM2EFjXPmyrcA3gWF6ZXyXR5ls4EB4GDc6U0ePAPAXmkcvEuHO%2F47BIAFWcRKVGcouNO2vFaD0OPKM86KWxDxHdArEvYwGTJ76tR92EMFuV3HiPni%2BR48kChNpbYZdsz3ubWhxvMRhPtY9MFbXMms%2F9Cxc6vOF5byrAK1ZxTiOCRpT0gfeEFkEDWse6U73kVE5Rd8G3eObV%2Fk3eN1doHaOvC5V2qQviV75%2B5epVHYaG52As1B5htp0h6hj9olVwxEkHzvahz8Vm%2FNFXVCtcnAnK9dcZg0MvhsNiZPkhCagaXhSc3krWAKH2zMCVMV9wFv9q%2Flm6a771iICJaoApCgAKrdHphxOBm2jOyavx%2B8Ea%2FArmWjgrS%2BtD3T2THH7rZhqc1w%2F1UQ%2B%2BFsOqBxkiXitpNABfH1BGBdbavACUviucfZ0Y1%2FdN4HOQ9HUCyjrbE9CumDd%2FqE7UiQrj0yz0osQz2LBJU%2Fu6OFqAsAIXi%2BzD47x4g%2FXJbOmvJxxp9FvyLkd%2BaavqYo%2F8VZcBgo61CYzNPjYUFJffa8TVwxPgh%2BHOO9V9QF%2BmASRSfVgyWM9DezPK9%2B8FpbCqz6ekbiLKmqzj%2F6%2Bq7qt8CDaFLhzEQXGNehMD6LENVnCb5Yffh1EcoIRvjXYobMMTO6tIGOqUBQwGVkzplyjFPqA4wxsF8ocxzXeVLhayFYLwZH02IhfVGTpXSEu2xyxCE0mx3ybcwKHkHZxLzRR03m7V8hLMFpMho%2BEjaQwhyG7t5me%2BymtEM%2F2du499e8zgftzQj2g%2FaC%2BCaZvYplZrZs2LYzyi0FLDHwn8lrxqidqafIseR2HxPh2Pkhbeu1H9NGaJ6u%2BkREKYURXKIQwp5W1XE7LpnDDhFWon%2B&X-Amz-Signature=15314b72bb66cba6fcd953df502374a4d06d944601f5aab8a988ecdd895c3d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
