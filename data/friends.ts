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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSQKYZ5%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T144338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOIh%2BUUorTexWnmaJjv8TTXt8Ir%2BBlGNGwW7XoPeG6PAIgZwP%2Bgp55Hquen%2BJF5aCjX%2F2CF4ZC6EkLRRu1DrCVOOMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIBjei1XTaP%2BNFu7%2ByrcAzP80%2F%2BULWPOkVXdpzpv%2B46sdpJ9LDI3P4D%2FErWYpu32GxIaJ%2BXO551vBKt%2FgAmnvYRs%2B5tqTOJn87Pcs4GS5Q98xLbCQ4Ly3fsC1JJYxDwxRiua8R%2FhviM2G211bl46h4Rv%2Fq6JdKOCzpOIjUepoceiv1h74AiqiMEGez1MS9I5D%2B5RgKuAYFPXMrsGmCTc7rDCcaMPQL%2Ft5BAEubQeDIYs40CO4saHLBILfU%2FTeq58wJktr3MGxnuOD1OHCwaJJ7yKih0ihXA7Oy8AN83RHiDMemtwiDAwlc5nq5VWt8R6MFJFs9sSFChdr7fhWM3RDNpYNBQdzsy3Yr%2FBjyxrecxPGb%2F%2FKkvkZqmwzQnjmXem6ApRb4%2BFx2paeNFmkpDAlU0hY8jAnvxMnNw5fBxpZ1ZLCpdj05TpM6igx2qWFt%2FjtE9JKuS4D68rJeEQ1GjcQU5CGRNuzKbU8QFk%2FuKyNNinPMHSTVHFj1ZQCbRmYwFZ8K7Fx0grisT9zbT6WZRptyo4357b%2F8PRxh7lvKM1tF7i0T34%2FOKMx%2Fav7D0B63JtlJEu2O9dE%2Bu0wN%2BO6o22x29W8Z4LFlk49tAhLBq1Y54FrdVYjBKdCAyUJBJftDb0o%2BCrCcxeTVZuBsfAMPbG%2FtEGOqUBwz%2FAOVfq93Z1PqZFXiMwyKcPMD45feHdcJzMqIpP9ikc4QjSZ7KX%2BTB573kp%2FJ%2FFsgKSlOyE%2BBrPkDMOnlPc1HLoVnd%2BUzqFD4oH9enBC53apx29wuQ0vMC2zmS1Vmm8T3GXgrQbulwejnqMCeWmpZUNoPVh8TWpmRdLPD%2BRrSPeMIUhiQaVEvqNZEuobBlOD2gsugPiOWJU%2BaKwtOooahu7ieSu&X-Amz-Signature=beb4421a18441a82a6b49c77b007350bd61d60cb904e19d61732518e7a2b764c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
