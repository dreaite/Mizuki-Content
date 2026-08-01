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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DA2P422%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDLFiAv034NN8oUvbRCR4VlfVaQI1TGC3QtX3RFIlcYJQIgAQ1ZgUqV%2FlTIfEN0b3zwnnVsRpAwrnjR5jUaeiHsSZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPS7xEs75qMFfDdwircA%2BJHpwKrz%2FeSqL0f6rxL4nt9331VaZrVtVlf%2BwPlOGMhGGCbLQt6GDde%2FOLWIlT2PItDZ52WZuHBEv6VMwsNKBafC%2F6dpqP%2BFzFcPfD%2Bour6TERAGuy7ENE6Ta177ndo2NEAZDcUw4p28oczNHqHNfPH7Fi0qQ8xvQBS6TKbglvU1sSYD%2BPeHJt1bhXTUZVoMn9Qo%2FUElr4RLMWeMcCTd79DNSqqWVtvp6qHSUpveqEXdMvjFhwKEcIiTKL1Iy2i21l%2FIeqNO4WKUmiw5BiptSFcIB%2Br2stRx07vdVWjZLdrFZqNb98bKCie42IJ%2F%2BfCfusji9JaYYj22hUMms4mwNeO2HGUneRWqej8Np1sdp3KG2hSTK0BIHKEZg0dr5HGz1aPqg5Kb4gFoAIljrt8zwgME9TMG5pCGCtY65%2BYyAnor2odE3FVP0YGBvuyTxloFLIQleHlXDmsuSHBtzl%2F7Ox8p3zpUIturSx8at1EU2lp4U3uGnroWJQ75xSmdVO0Ia%2BKeqAHnNfJWwgsYahGz1d5lgbTK5x6yp9cp%2FPrlavqGBAusiEIeqiGrBIDUqs9foVqMcM36ChJEzhRT%2B45T8JbCbMe6%2Bx7Xf3wpOQ%2Bm4htE3bUdPXJ1RoC5gfoMJ32uNMGOqUBW%2FvwrCNq4L%2FnNXzYg5hwDN4iZTznNp9SrN8nMkuGd1%2F0UF%2FOuIDaKiUgznnieUm%2FPDdpJZL8y8untmJp8gYH01U9cFZSGAvg9axxQC3YBDeSwytK0%2FkUKaMTRIxDdjGlEcn59wy8YEMRsYw%2F24tP%2BHpyDR1XttErispxxpQRX%2F9mlkJwPfuJO4vYnSSAlcIcSPQV5Rmiy6JAXw8onoj%2BH1j56O6Q&X-Amz-Signature=7091ba0d68b688846b5484dc46ab123cf6a2de2af44454840e9865db481df7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
