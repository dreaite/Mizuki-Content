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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHXTHF3%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T215732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIEoPKpCuT5%2BmEXGrU88z4GBz%2FnHT%2BvwNteqZGRMgXt1VAiAyR%2Bo%2BUzEPC%2FvA6BobNo%2B3pIFBzB4gRjXdWn0noc5giir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMFFjZbuR1oOweowoSKtwD6Cyev972qwhgwcainmsxwf3SqRSF0%2F5RFVrtrDIRdWW246LPJxf4VD8RZ6bVyPCKISO7%2FXAtcO2bET2zNbBNVLcAMO7M%2B7%2Fn%2BWaODIknYloDj98yKfn6TAnzTXZGsOsQi7qlXbYUTt6FtDDOAjEXUdtD2n%2F7oeBPQWvVW%2BZ2Y5oxyv9Q46HZAjChDK83FS%2Bex5YO%2B%2FuyjfWHA8fDFJPHg92E4yOMJ0Qeb%2FPLPs1HVw8bR5SUXacVyg%2Fbw9eiwzpSjrJVU5W5lo5Gpy0aJzYN4P2O1%2BbGevk%2FAoZlSP%2FeSxPRxSw34rBiLm3jiq38ijGvkJtWydMkZCzSFHC1JnNtDdKJJTAq42yrOpyqohx1RE1eBRnockgQRnID%2FzE6Cu%2FQRGwnRklSXfAlZCPM5ZHJJw%2FCXwtW02rcGBdBHcJKi2Pf97jqZ8PWj0GjcTqezGm%2BuCjbofeK3zE4ZmbQu2ZC3isujgEjtNt6dSXUOtQETL1D1TOVSecxVkFW5HT%2FPmTbjH%2F19nejJh9196qha2FTXw09gVVUgGLutrT3OpqlZtHurqf3dQOUvGNV2YjJioG4PPyWrgN3iF0xJyq04OQ7JRBNYIg67CP3AtJmee9oe0LaL5X4pP2p0CyJmiEwhI6U0wY6pgEKpbxXJQlXJ%2BKBcwstk8pWzUyCUD%2BgqpPIiQSlVjU8GO3SPUU8a85cKDwRnwHm8Mf1W3eGpZ4SoTF8FOS%2B2aFclr5ALKeO65FoTggIc8R1KGuJR7pVPR374yjdoiBifaWRAqBz%2FDvIN0Vie0VxG1C7ufbpZLtN1uDlk3Fl0D%2Bwc8mQz%2BHCFVAMLUXoev3abIcpR7uelJGOuHWQkFfs%2FrX8xTvSkfzG&X-Amz-Signature=0a1976f51661c673cc2472dd3da5727908b2f56050d6876f4c820b227716e063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
