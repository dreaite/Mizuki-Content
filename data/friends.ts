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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQSOZXC%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T114638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ84vqRNy26dmIZvbFCmrSKsDeaHRHOdNJMi3yMPhd9gIhAK1oCvQt1wMql%2F3%2B6nWqtk8bRM0fS2BpJ5AZd6HzZHOvKv8DCFQQABoMNjM3NDIzMTgzODA1IgxAncRbND1a2%2FItkW0q3AMBz2h4whsqsNRrTI4tpd5IXDKoIPO7O5Z2djQSULlwbevKvIeTcQOXTj3PMKyADFJUJ7ykiUP95NngJ0XH38raD9fQIr2SRxXPztbZxLFhYB17t%2FHP%2FbFPXH5qpZ98G2IeWatuLAUCv7Ts91T5kXaUnOYSW9wB3mDTOYKE7V81WparuNO4WgepLiqzazJq18u6TdhP%2BEkzFkXQGuDgxv03hmOxFiKp%2F27EFLs69LLE3OcMGnpFNXXgJJ6HDu%2FQxBWkjBnBAhiqyBAfgWNTlxmxGQFrD3ShYNFbBXXAc5WjR7fq27jtJl65eBvnJ7EDDmtLgri4%2Fnlsidi%2Bjr8kWUgjm%2B8gHfo9%2Fv%2FUbvlCw0UqHD83eb%2BhM1ehmVH9fC9ClK7nqKrgVudVkcrESYNZFgtfwIA8mRG%2F7H6Gppvx5M9G3n6%2FY2YayhcwsGiqP2jsbPa0xkaZ8sgaPw8dMEmuS4hBfoGelTS7cER1sMHonpve2lGZBta7SGZ9ulYvRO7iE8XaVFW44RfDF132zfnTY2DGtjyTktFYj1Hh31iGZHg1u3MlZ5WvDX1LdX1rAEsmkjAfiTsb4jofMoobR7giGj2OTN9zilNWWQ3MWUX2kxhxHg53IHPJKqzvTf3kuDCK%2FNbTBjqkAYBLZWk5AYrLftTUh%2Bxo9g1vNyY5gzd0YaAGnUorlElmJD1h%2BY55G1aWCDTGnytLrGte%2B80pT9mIs%2F2nngps2z2F3PfZLQ8gcJ5qqY1HUtjfA3Q%2BT72duum1LoiWVrMjjm6jKEZ5sQqzkNHGK5MfSWSDCz%2BHU6AP6Mv2kiW2yX9wd7f4bH%2FwgitmedugNR5UHkGAMcDO7qiVwG%2BvFuSsLghSZ1Vl&X-Amz-Signature=13f716de9140bbba5d34183088926b5470533a9273f2b5708483257ae2f98b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
