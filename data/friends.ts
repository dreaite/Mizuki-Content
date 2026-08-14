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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S57VC55%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T222359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDRWIm3cnMRroyN9LDVh%2FpS0oTN9q49JWliVxQmTvcgzQIhAM6zgnBOHJSU7kYhtBwPDosZ79ql3TvYzt%2F1e8GiXawAKv8DCAUQABoMNjM3NDIzMTgzODA1IgxFpU6iV4ECfdmPFFkq3AMOiOZxg3noS8snPn1XhEnmcjQkb3%2F2pPTW2pDW6I36JH97dHW%2BN3PJtNK8KGI0Vx8oT9C6Go%2BVXzCKQ%2FlUCH1FteHGBIUqy%2Fx9qrhV3wrfJXzD%2BcsLT%2FvGbyz1GMHkVvbHQWS56G6ppDd2pFzBnM5wsu47xhFMyzli%2BlOUZsIZ2KWt4Ogez%2BEypmYYXfZwsBdMYpeqby3lnTt7kox5rgdz%2BCqXZW5nnb5KOJ33mpULN9Pkaci9LfmBUb7vOi1PtNrTszowIhUGH7VeWjvp%2FYtBL08V6HdTtiiBNyIkC1T2Zvks3P3Orw26b6s9FQsuFFz%2Fl%2B9NbbAwfdPUcjqHRKQdTz4VH%2FDHwbPoiidmLCLQyv7XhrczCy31N04mhDNGU79wqhGGyQ5Yq81V5s4e%2BrDWOzb1Bn9ncGGKQ1DJtrXvo%2FDZXS5PN%2FoQ4lj2OtbwFIxrxadMHPcMcBVsa6dle2Xzx%2BXgcnRhzqo7OyZWi0t%2BwNcVtbikalfAUt25pt75RdkOKQmS6yd4%2FeW2OkIYpVYAbu30TqgglfUGH15B%2Fi%2Fb%2Ftmj%2BedJyNwzbZ2WgtLSWVJ0Dk075%2Fo%2BXUcvTA1vBXm7cpdCl5jT49ka0MVV1rzroQc6IGtOfixtMIuk9zCS7%2F3TBjqkAe7WlsRPRiK1X2%2FW9yavr98StS%2BBrld7bW1qx%2Fsa%2Bys6GwvtL5YxHcPhsv7nKOfbbgKP54cF07VSTrRrBVerw86AT2v5ojLy6lkXJ8YeP7EGGerSOyB8HtueEv8xJvQ%2F2aUV34rAkmdHnrtcKm%2FFeuv50vJ1RznUPZdggR43Lk0G%2B5i0gOnLtl49R%2Fd%2BAdqeuqj%2FavRlWF3dPEZJ1lS2PdjN9%2BeA&X-Amz-Signature=88f3610c8fab2784b4c0f93b1f8db5ccc31e128688d78c09c3b15725df696a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
