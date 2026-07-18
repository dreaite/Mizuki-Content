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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJQPMYS%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T084921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA36E5wtJdx4CUwo5bm0iMfYO1iexbI2hTNCGU5mRrxPAiB04NHHxCKuM8uZ9zQ%2BB4nZTSpLnp1XpUIWvk%2FLgST8uSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMD75HFY2%2FCHrIvGPOKtwD9iQwz%2BU6zIqNVGvGRhmKiZQrNUfenUzYGs6jXRJvl8wFr6eiaWoY9jDbB5HeT7Nwj%2FJWMw%2FvVzB23pF9ceFhDM1aFpTZzYRYhigqKEQrNVYLnI9dM5tJYi%2FMmKbOaRdEgsVTGofr2YFIaA05HTV%2FGiwLlke5qG6LkWgCuhVTChrbqC5ugAd%2FF0LocnVpMzIRbKlEldER5K2RpCm1SwWhUAQUw2srUVk3U5VCvxcl9AxWcK%2FgUU8XMB14Ku4k8g2%2BL9DstKmJVAVMp5h6CmHMa1c%2FVX9xSI0pBEEX%2BB0D%2FgW2scHNz1034RwaiE2uHuqU3bm9XDXd%2FlsIKLddv35ek9IAFUC2drB8sd5lEY%2FOItUr3fCwjqM%2BHgvmhJhtqSrjhCA1cVWAKmq7suUyrPM4lx89Y4AZeecrI4SyPvf0stY4pwFzBOsICSg%2BwywVkDUPzqvcRxCvWt5rGpTAz8v36PHw58w2MsbnBMaOQDDL0z59BGKmFsyQ%2BOgpTlV1XLGACegKp8bb%2F5uiMGavdvIPArmzG6tylhabjMHI3XWfBztSE7Cm0lazd7kqTMFIYPuxw5mMhww%2FPTNqX3W0hj8SxHifOAyg1gaJMKzvEktpmH4ZhgGbibLW4tS1CHIw1PLs0gY6pgEWyBfINnKDTa5gZ3Q%2B7cvDkPBto%2B7atdUz%2FypdvfSut%2FvSmP8PoAnVBsMumLcKJSYFe7creG6CynaAyXiGKtwXYgrluy7y9qISFkCM3fmk5ZbmMSaFSLRnGGgzgJqxicTZYPWvw6ziX8SfJLhICfJ0HmrHeEq68pUI4pJQr5Q7FIlF8WBM6xaEwt0qzRCB%2BxHSU1wYJXWlzT5IWAPtJ5HFzTA7QbQ9&X-Amz-Signature=3feb2edcff394b2e69c66882f35dc5b2612048a23521fa1b9ef5d875680866ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
