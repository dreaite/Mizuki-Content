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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP6EU62%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T205126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFctIrDwboOqZ4cFOKDbnyAIFIpvzGSwfStNp9DOKTi2AiEA52QI5PsPZltyOgKsli%2B20HHRGool0LF5TtJBYv76zacq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIu%2BvIbTzV7NP8WbyrcA28whgJ%2Bo48yRdXCE%2FUZ%2BrkA7j5rVPlPvqsRx2BLaa3DWtOg9uObEDl%2BXYj1y5qmNDPxKnf0QzCqFvt0c2YxK7ng30N47dm75CVxzX0q3sm8ia1IEBWKQW83IWBVqBfL5Z7tYvQ%2F9m3EOPBOyzYHR3%2FkuPWWgNppJW%2FTF7Bie6nKNbwKICTRdOtAlxgkvbEdzn1gqvvMm71y37tm5c%2BIdSMp%2B0FhEkv5wusn8wj1G3kYxFA6norT7vh%2FDTGYeNggcSXTa7kzwS6drxqFjh6pV7VRCOra6XMv%2BDWJU0FCG%2F9tkMpkCZDYLyvqtg%2B3SPq3BWlONsRLBA2w95kw%2FqGI7RE%2FlRC6su0A%2F9imeFgy%2Fao47mSx4Hdgd4%2BUVwjn9g6w19QMcvIcDAULEwkPqSWUF34b2CKjgOSX6UmbCVydbwQfrdfFd1WAFSXYAYcWPkKEQ%2FD8JboQbkOXCkpSDSz4u2crYi4eizVYROMVeCjZaNlxZ6%2FAELmTaMSUI558w2eUyaY7xorr2Ke434upzYngES6BJvBF9GZiNYtl%2BDbUHFX14QLIuYSrelI5%2B%2FIGjz2Xb4oHHSGR9IQ45G92B4l0QK79Xp4yBLE7O%2BEDmGpXS0I%2FqXdZ1AawyA0ZTgCPMIrG79IGOqUBoWOKmFeWmJGRHbShNsZw1gkJvgRiXzbJ02ouVCt8DbuEE4x01EU13h3bcpe9nSd3fAQmkadwi%2BxnftU5yCDkHkC12tNcKgMCGav%2B8E%2Bi0paYq7KK3MaIJFpjlGgpYR4uW7Gzb3BLgfyLPwUmvfA2UwbiqBw4iuY7kwj1Z1ffZW1zIBve%2BIcnVzOrdXzhdu2Ardwr%2BMR77oJ5P7uY3vYfaa9XPI5I&X-Amz-Signature=6e958d6d862016e99decc6e2d52515ca95e9a5950f5cdce5b7f0d0c53292a221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
