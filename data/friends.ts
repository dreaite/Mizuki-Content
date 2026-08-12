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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E42KDUF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T061521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAVXmNm7bi2FtElXsVhbPuyE6tsynuevZ7RsiXcAgZ%2BAiADgDbPUdojHsjfIPlGTNUdXEpTkl%2BP724H97GxNG4TeCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yYVOCKjZMAqIuVUKtwD02pGipV32ZwdMzhCcOnLCqg6mbnez6cDjIHywipPtoFGpOsO27XE%2FlVOA8UlDWJZ8t2pWCLBYOTusZP9jv6BrTwK29eYB%2FAzKajJjnj51lqmRZLvrTe1hnp91N%2FNGfKQwlTsatw0l0SlXveYpBpP1hxUVVdzvIcX%2BbhWKAQSh4dvkjJ6TSXo5cjinmS8RFYyRgElXV90TV%2BA4b9MUSDUxs1M8Cdz8Fqhe8K75ZjAuBP1HnLX9Qyws7i40wcXSewm0oYQuKsW3MNL9vTd%2B4%2FzKB9JknD3aGHqxbT1deRlQugagjFIfhVQ81RRf91BWdRwcRe9kAPxb3l1fmthL14JEoH0LB15Kk%2BOP3gKhL7OCeknZgtIb8uK6tU7VYWbNcK7S7TcEpImno3%2FdtvFxMFW%2Br%2Bcj%2FqUvtqXJRmuuF8lc91WQZCCxOZynDkG4SU1cf4oYXBOf5UOpdnqBWwXqC7blN%2FMaLHOb1ds7G9eaHGNLid4B4ZEoYS%2Bn3t%2FZQJU91v%2BTm6a73P%2BI5LW4P%2FJaaQpOczjVabGNmG%2F4ZrDGlLoSqdF6M94S8piF1p1gBq%2BJFmuHuHbhLBA5ZvVga%2B3h469BAFJ3t%2By5fhKKTCHAAf3GFR%2B2ID4ymZDOYhgfSswz5Hw0wY6pgE0uyaqgyS0kwTl99GNRHAj0Q8urKlEynodySZurLBOECIDt4MEWTF5QsV7ISsBFYLYYBkxfMSNsjB6Jf%2B2UUXUTVfzi6N7HLGNKRu%2BbEPZWo3wxtzU7aWEDqS8LoPU7kT%2FjR9dZfpJ9ql6zec8%2BkqIl0Yc7D1kAvSuwJsJHYr%2F3t%2Bat5QEo0kWxchPy2HD5HhtXPYwxttt%2FUi8nBIcE7lRguoXADFO&X-Amz-Signature=404fa9e19bc3f3e5adccd231a383ddaa8a4e17e7b0fdd48b3cb5e759266d07f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
