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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7YMGFL%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T204154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwRSLO39BPcaGneqJ0u4DOuHyunrVHHtbhwimNHzZ9kAiAJ0nrhyrQ7YoluVaWzZNW%2Bh%2FE8Yzl8P8OcBchskuMmYSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2tWq37Ww8Pfj4N4AKtwDVbnLSQUMGKvdMDAgA9YQRv6j6FqrG%2BQZM7yt22HGmEgISEsefkZYxngKgrv4HoYNkEArzvu0GfgGLpUWCmmJh%2BKOjgcxZpai%2Fitwg24xZHSp9jT52uy1SRWyIbTR0E1frImVCTIUaJql3z8ZIloxpPnH10rlbmDC2rFJCFTuLGMp5dNRfL3%2FqOVxBFZJGjLb8A%2FJOrJegjeHDd%2FKD3VkZayLOMwh48Q2ZyhiaRJqcUxo70YqEWrLOYtksvJBBbqShzx45siVd66wzHb%2Ble2XRqkF3fMF2h1z7olV6gQXmsaRLo5tL7zS8nNhQDTm0vyCbg6aYTSeKKyWM7FYmF5KmKK78Hw8fCpkXeze45tntCI9qeZxFzlMJD0tZTipIsh6bc6KTmv57hgxCzqnjJ9hT%2Bb%2B6VSTGR9aryg1EwEPNMboy2NOJ624LoXgcQikgKUF9wt%2BRE48U3aDoymZ32Y94tsfT93lUMBUPAMjdqcdnAS7q88hI6nxRItCByoMhN2acZV2aJ9beQPBheAhukDVIwybZueU5LItmIuatCEGlLir624Q8RlozqhMBfaxVjHJt7fyj0q%2Fdmsb4RGaUmtIbyPqGRY0QmQCR6yd3SmgPLcZvOiRt76Yrk1LbAYw1fnY0wY6pgHxfYzDaStdflyHTpzn6d3tdexVN%2Fx1oWq4b%2B0NiY%2FkummJcx%2BDuWwuoNmLh1gLQ2jn0crY3TDHZ4JFb%2BlBXdMOAe4oDL4%2FrKtdx7vXgA0U61pNNDSo5XQk6DVbnvfA1eo9JL64p8VepCkdqK4CUZdS5dygGvlvCTQ4TWzimqcewvoKfMQO4CV4jeMKdNXBavJAn0hIyUkPbJjgBt%2BJyIkD5t5uaFoo&X-Amz-Signature=7c8d9eeb977413dccaffb1cf9ff2887bc7cb7e8a02f03dbd10ce2aa3be4666ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
