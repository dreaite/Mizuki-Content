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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ASIIMM%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T074647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDmbRt7FEUO%2B9atrrOPxrqSep5UDZyfymDHPTesZOABJwIgDQLWhg0LHMq3Krq1LgoYNF%2BKIzHd5PCEPmzrvSCW77Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNZj9lEmU9EXsHX7PyrcA4apM4qEQEg2UESVU3HsTFTAfLBv2bWqXYpmALK4dsttFoWXsEEEHUUvBhG3cq0LujWRNAZTXcevuXOwXGtML5GVyJ5F8cM1KRgJ0jVaE8t3I4ZPNrjBmumDrTf50iVz4LroWFrfaKW2X7uz06DVCiWMhOogCACH3bMKhibLyIQwRo%2BiT9agMv3G50wOxpUMntzF0rUVEVt54GzAPQVYqIH9XhzGx%2BRHe%2F4neJa6q2oBNhc80xV2jEuq0YByXu1zsYtJ1Cou9YTBrkBwEyrAE266bFYbOnxz9f7gklYGnPvr5pyAojyNA62iRnCUwXTSO7KmqZqPc8ThTSiK8XlKjZcjZvwUPsn1GdQb9ZChTCqPF2B3pnq3IIc20FKU2V0sV4%2FoAJJhtzAkIOFrHtQBC3eV%2FQvLvHgHNbjaFKpdHLdTkS8E12XVReVEcMmRKWNLk%2BoD06QOdax%2BF%2B1tYH%2BOAnsig2qv4NbHKpwPBnOQ7mDoY2kJ4Vz62OcIz8vHVjblb1qJovcNxxlw9T4ym9plw9PimyzYHRu5pAl6lYX3Tyy2y9QFPwQGMCQ4cmbeZ2kNxixopKH%2BRdBfqFI5yEtZDBXPRuO%2FsKQrdRCYqLePKAtcHDxoZog5edGpGT9cMJKd89EGOqUBdcZ1rb4s93a7lMim0mTvMPIMX6JjywNdb3AseZJIYl%2BLSV6VboB7sxsMjjR3aj3ikpq5hhbOcn5yAZFyA%2FRXpl4vYzoqIw5xI2q9X0WoLNWQYkEVVBrQFCSm2ATUT9T0XK9%2BDsSCl1ebk3ZBaccHojx4wUq8rHnxrchSKhpYudN7xoLa4KDtkW%2BvlYh%2Fx2wBHWkpTk775NUwAwy43oVB63Psplte&X-Amz-Signature=33b3642154cb07c3551a8b73cbc4d7a6c995760acacd095a3b840a032a8a9c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
