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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQWAJ3D%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T175719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDekCOL36iN6wuuaII0mxrkPYnCFzItK1%2FwmxX%2BOZHP8AIhAIqoxqKJk1GOlmbD3ZHMwu5Vhy%2BlcfHhpsg6JWOS88crKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTfEN7%2FcbnUXUoAFAq3AMV303yWG9slaYPpMgkcqCdQ0KkwK7EDXWM1rJODYnl63bURCB5xNR1%2BgmcO9%2Bq1lxy265l01%2F9yd%2B1SKya10ASI812R4HvFvL%2BHJoaFk1WdWMe1SINxaZ3J3ytCQbz5%2Fj%2B3TlyNEDoZtP%2BEnIPkiQr0GL9Cdvtp4fgaYTjDaM3Fq8uobpB4RNYoHohJXMNLfXNKN3gwZmdPGe4PljPLhnCZDeZBkHJyzzPS86vMb%2F3sB5pbDc%2FXxwCaKRqaqChExaFE684U7HCW20k%2FQX0Te4ji31JnHY9j9Q2iJOKP8eQAI6b0nRn6lukjK7B4krI5B1GWDJnloEtzDii03Mz3lYocfNz5kn0HHAll2ovj00IEs1sRdxqjddq3FBUDWeP5Ogl4tIsVKGnDUdagA%2Be26ankiLE2JHCeMgqPvyGke%2F%2BwfzoPsTgtaJ5BRBvMlV5NrymcBhL2NrrFDMYxQHOVp83m%2FDBwhygHSPpFVHih6mOiCE6HvsWkV0lABDRjemX42v6GMeAtRFTzghUpRPK4teCORpuH2vSr%2Bm%2BUNevNG4GmEKGJVMJHC69FC2tFby22JzMFPalVFuxSDM7JCcJxTsz7KBE7r0WWSanjFRQdTiBsLGaMPpMZx84blOK%2FTCh2PfTBjqkARe7eCmVlHblr%2BENPmZj9elN9P%2BfxygUQdDLHUZzHehPbz42uBu54zNOPkhThUy2BpMYyGx%2F%2F3yoUwUGnz9Z2xmju5Q8Jkmva1mZWn2rcxbzlGxA4Zpx%2FVNry5ghRA1JZWTG7Cyo%2BfN7n%2BstFe5AMP2%2FX7sz22SW%2FwLmWd7VaT20IGNKTs34dCDiK%2FrKoBVZS%2B12%2BkCYMnkIbdtKsS%2FoFI75ZFLG&X-Amz-Signature=2b55e24b58569857b127869d2cebe212f12149b54635c156e307dc2ade17efe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
