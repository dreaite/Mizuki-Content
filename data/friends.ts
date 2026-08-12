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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPXEB6H%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T131220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCTi2nFnJtqXPc13hZDPrxpG5CdQPgqcifc2zJyUtSNpgIhAPf9uohfLsCPQgt7C3YYycnl1OSANhxwGpKvg65PirKRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy2Gf7x0OI73rGHDkq3APfTZKfn40gLgdlT3HioRd6AZ%2F%2Fccu0cmYrPVDKAQ9nFqu56cYm5i%2BI7ckn%2BeNjtueE2oHEY37U50RnwMnfy8Tx4wVLuo1EgQNFhjWak0ZRJeQQs%2BaKPuZaix6UZ%2B8LybP%2Buc8YW82rwJkus6wLuSLMZKlakUi2FJIrSPfZFTPRCuBc%2Bjavaf7gWnQabaQT3tGbb50BmGFOcXMI13ezug0uu3%2BrOnoIMSO%2BaeBdJ%2Bc%2Fuh8%2B0PL1fWkXkuyrhEa0hPRGiAkziK%2BzZHXC08yGFyv%2FbNH7U7kJ%2BLybSP11IobdufnN5i8qs3h5zweNgdnrG%2Fr23a6j3JHEujTegif%2ByiAQiqHKmIrAceGkUfV6ssijlSKCgaBBnX9PTt%2FxlZS7TjcEskjNSa3%2F2dD%2BP%2Faa3tO92%2F%2F6yVe1n3FzgJjOmfuVPELUdBTgVF%2BxNI3qlDYLuRcmbLF5VbCjmUpfYdLdy470Lg6NB53awwjz9y%2BLU349sOpOfJvIFRWz%2FxqtO0HtJW4wJ1ZiO0Wcr8H%2BsQEo0rXjJq1tvGlZvA2RZ1zy8ZUzGtl87OpbNnk3WARuKhQNmSqXj3Ao3uyR84tyMY3MOCg6oB4ckxPTcEary0oRR5OAY5al234md%2BS1QRUHKTD8nfHTBjqkAXCvObZykhZbBkaMprVHJ3DnLuhh0uL0u6L8SO4wHPdSZKX8i8gBDaL7peHPeeh1ALhzgVAA4rEV4BQicPE3apzBg5Xpxhjz2dHrsG98PGCJkryC%2FqABXILSUtbapj2kGUx1aCKElSQB0OwJaC03nzoJO2P5LJtL41vKXjvtgR2%2BM4iAu03S5J5V1MEa5mmaeD7AuP4JLamFcvLcgy%2Fpbo%2FZ0KQf&X-Amz-Signature=59daa0416d35f76da4bf96eacb9e36ad645160022f0f188300ec70d153eec2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
