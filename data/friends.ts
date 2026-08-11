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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRRT7KY%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T114356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQBQrllN8J%2FZ6Q5T7%2FrzO4fgyUiRzkQf5OTNem5FMLVgIgSkwHyxAMksui5isoZ9fpp8g0luzoVdKANPo2LLAb72MqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu2fdbEu2oGKPt%2BBCrcA5LiM9YTEzo4x6ZkXAMDtiINUqOvO4uS6GbewvgmkfoIPOULpRetj%2BB4ACZ59liW2qoRVghrveFjzkkyxvNQEpjTEupe1LJV7UnDfFXu2CJvGnABz8hZTNXPfhVK%2FW8Jq4iWvcjaQF4uolMETVE4SyTiHcpz6KbVaPOcaza1c3yhJCDmHk9t8q7C8wNjVlTrHJOLP183hK2uzwZjeN1oHiWGs43pw5%2BX464f3kmgnMVZ9KxAqeFlmuvaLeS%2BnWCGkfhCVL%2FGL4phJ3KTOXVu9i20CM13TIjuHrTZcSVDM6Pf%2F9EB7VHgUV16PgpLhhTvKoNT7H47hqwVDBZbgU3E%2FmWfw4afw%2BSlSHugN8iWp0424tKUCp29MwIzrpxnhgV5GizZaYUKTNHGlEjNNP5bibsd2S2YW%2FBLIM4lZq83RgqnDuQfLzav1wvU9waGCuGF%2FR5Sv%2B3%2Bc%2FczP45sbbRQQpeBBoS4LNs3Z68pwhXAq6RuHhpySAMHG4UA6XgpghQtL5m97t47HB%2BPnA7ClqlB2NbJPn8TvPeuM8RtnzBt1teIXHY%2Fgeky8cvChSX1ji7SBS4mpNQRApT3jSnY60tfNpqEvxxSK2RdyKEcqKDurDnuBmxe10DOfZTvcaKaMITN69MGOqUB6c5dtVvL1gWTt6tc1mb8%2FaYfe4NwabTFny6SqjuXRPEq3XUFei1d3evpV6JyjE%2FPNETLRQAzasbf7f2nCJjncMDFQ1NJTTLaT9vEFsQCM9jCor1cRZqIwdFoz6Nv5nzyz68cBtn7OxSF6ibPgZjB1byxqwxvMnCSjSv9e4UNUJbuIqp8BEkSUmWlDb6WKWLmUXX%2FNMwBHewRIHgzlBiQY%2BNs9%2BX5&X-Amz-Signature=d29ac1241b5bc3379a58734fd17ca95557523306263cbc499b24d40b34c335fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
