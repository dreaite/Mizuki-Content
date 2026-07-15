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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY424Y5Y%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDs4Ly4chwcCTyhtEwB%2BD%2FXaR6RSpO02wR%2FIxMshuJp%2BAIhAPKrPMvisaB0G8AkgSXDMrwOyPF9%2BF12XJA8yDkXUvbQKv8DCCgQABoMNjM3NDIzMTgzODA1IgzC6Y2hT1zkQU1V9YAq3APohP%2Fc%2BM5Qxk9niXcgaOQwD%2Bfy7CvsHgd5%2F1XIYo%2Fy2eCL7cs5%2FB%2BQ1hkkfm%2Fev%2FPwslk1Yluet1CKXr4TGlLIAu4tJxkDc6lAYorWCcUM%2B47ztujGwZNXRRc2TuGM2oQNY27zGpUnEIns%2BpE3SuaFrnZ4BPVc0KZ2WNMv1r2k%2Bghe8vmGPF1chQR5r%2Fb0AQFueqG78mp84xmBMh65mwemDMc5Hz4t4bnpv%2FWnsktmHbbQLBQ6LuxCqUYyPxsvbrQd%2Fp5%2FQ3EHGgRMCV8H7g8K0yKmTuDmrYqa4nNCO%2FpsuXqJuDj7uIIDqOG0DON4QrmD0i2cD77tCK3i8Dlmga9Kt2ptKpOgdSrvU7fxhfxZlMIi8CJDJSYFHaEzoasYanhpIcfDm4hCouD0WnSq4euRDJoU65PrX5RL5YPRezEAo2tVSl0woCRG%2BOujbwlVRvHHM5Y%2BQ8JZuCt6lrIfKwLHn6IS%2F4vd7Z%2BCrZbXQCScQ1LhTutWgbHEhdV87olYBnCaLf96OAnzHv2duFSOUdRp2JcbQ67tiU4J9CD%2BTl8TsE8hbPCfXZjpnGSAzxN7iHp1JmJciuR6WXaK2lJAwLVghCWvVbwipAjzwXiiaD1GLYd6D47iwCM8GeiJxTDZ4NzSBjqkATDVr1DLMnjCOa9oV921M5bMtHMs%2BDeERvC%2FL63wjB3N7XwudBXMhPw3yUIkXCiEVXjvHHP5vVvk2PrU75LJRbTSnho7r8BB18ffmDEPZygp4CzT%2BoiK0haFDtH4S84sI0pF7fCc3uRV%2FfpJHuiunkYiaExzVoUuVuxK5hyr5rFmWL47itX7%2FOC4nvuuiDOFL08RWnmsNhowzA%2FzU2%2B3oX3hwwLD&X-Amz-Signature=94850d4cb6c873d68ca5d26614ecdf7c196d5a45a2d7c90987d84d231c23c749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
