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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWOIKYK%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T202415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDJnizfeObiuDr3rLBA9oqootHa37Z6bZyY5fY1Htaf%2FAiEA5KuyT9LzxkzvtPqGkrbMOfCnv97jKX%2BIvhnZgmHNvo8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEo9xvD%2Fzfa3M7M7SircAwvhzV6UBScWfEH4Bu%2BPwOrUGkZCbxvjMsyp7CCF23mqwKhGRTgwrBRhmdDizcyYdwXOt3Jt1z5fGOxCWw%2Fb9fndj%2BLVAUYApyeGHvbdyKBEVOHlH5oDyYZcB5HsqRil7iGMExyKKCk4RDSrMU03RJ11WrveJEnLXW2dwymPwzHiD9JeExjdQLFXwq%2BIHotZcCN6rwX6xUCAWL2KxODytL%2BX3trRsOfyXoXFtyIJGuchPTpfx58CkjuXzXUBf9JXM%2BEaU4Q4qAaYpQfbW93NBMAnnOrB1mYt%2B9KdpC7QIfuimwuGAyLkL%2BYUNbd9jLrArJG28wpQageekxr1kGpZJU4SheHtw57QTBBXQZx0L0RPsij3Gqo%2FdW5v%2FhX8gBF65JyjQyRh4KEbeYSljs3ojjW2LgIBMrCllEf%2BExb%2BTlX1Qnc7%2FvbcSPvqqWg%2FwH1BrjbbflWgV3l9%2FPwND%2Fi6kSFYT0sQ6OCMRnsyi6KxDAhWYpQFS%2Bbmkmv6I5or3cxyhOrEHAjUl4pDqC0eFlDy0bUacL3rn5BkVoxDngZaluszLpgVz%2BNMJvLxgJHZrMEVBrfIL9hfOC%2BT0YzLuIRtYo5l9GoOZz%2BiaUKzFhgTIOsxhapdixp%2Bxx8%2FD7h%2FMKKsrNEGOqUBrQsn5skALTzqy3vSFo%2BwcYxQoz8kxu8ZTgyC70osbS8fyTF5mzMLFOu2Q5JJsOGHe1fdtpYLhId8PPRw5%2BDd%2Fn%2F0AIyyrWDoTfqlE7oNfnOob1CtK9Ztno8xH%2Fz0HvW8JQAbu%2BXCtViq2S3OeBO7mAD2CIVUzO2iDYCtRIV39LkNPyvJlCuoIAS2b79TrcukQRCnR4fTAT18s5YNAmTLHpvUoTKc&X-Amz-Signature=800558825f7ae23b5b048f05898d6f6b6126215418bed19d712a74473fa87282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
