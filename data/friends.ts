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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FIBHICN%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T001031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEfGacORCBNfA7s9gsFdYAp7YE034%2BLC69DjkK0gKIuXAiEA9Qm%2B6hPci90bpmpHab1DoZEmV1QLEFltUpfnMb8uQI4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG79pwKqQ3RB13F6NyrcA7aYGmMtiZBQgL7hNbgudldClSZdpV0CwWgqrD2twrv64MrMAgAqFAZnI7goU0yLnyyTanUXENNsvFTP35g7OcUKCL9luxgQ%2F0ePhet6SSk216esHfjb2AZn64ODklSuyJjPrtTI7hBpziTZgUseYFh7cD05ktjvG%2F%2Bn%2BsgUpTQNWfafGk9Q8tLICh5SQ2JAe3TkGraSa08zl5eIMkEBXwLA%2FAC%2BsJ3lkaNBGCjo9F6snrJJNQl3GGdKWLplp672%2BmMxU75VUD3lDD6huQjmLZeOwphe%2BNDZsdDTjEmcMpIpQ2Htf5OwMx3t0tN77aYjLmkBzREcU1ly5A3S9FW9mEViVqKtP7yFABxYysq12t1wdtNzoI1qDgoy63VjZ90lQrtb%2FQtmQ6whAWBI%2Fs%2FMKMGh9jf0HNOFn%2Bm7O44BpOFX%2BmTVtFwhh5IRMylEfhSSQyXj83gNbzvGZMllTcZxNFfclh2Qy4sv8iJla6LQ9cfKapCyy074AQPfPzcRAg2C2ivXF1jOS%2FRa2whFCUjIO2QZ9OkeT1JM4R3O1QbcqAgkvqeud3Q3KjqXAvFvsvVFLgbiGYKggMa3SLPOdRQpqHEmggjOy1PhSl%2FS7kJS2oxscqlbalWAS6eCB8f4MISy19EGOqUBWT7wT6%2BC7VbMD0UYu3m9YvARpXbYDLTLuik%2BLTBws431Y2%2FTxJMCx%2FoY8DkaWV0vG8lGqd3uzircRRq5k174aPETyZzcEQsWrC4noo1Ah9U6%2FdiGtfqrUovV18Or%2Fpr7R2h8Eyxi2ePMhK5i2AqTDCrh4va%2FsJ0g6ET1XpEIpuRDNbhrysrri5nr4Ho9KHIcgZ7zMOgJdUVL1WWXW9fHj5ux6R%2B0&X-Amz-Signature=18a0901997c129a04f734b3f1a2e63e94b92f16e05594eadb5608846a65f0be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
