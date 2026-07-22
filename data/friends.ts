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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUBD2GU%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T210952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3JxGbZRMiQmCUA%2BwWdYixQrFMWKzGtPTGMT%2Fl0hYcqwIhAPVO5a8o9Ta1gjoL%2FePPWJi6047o55CC%2B2rRMfXRr490KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKB3IbRT20SUDRkgEq3AMnS4iLBL%2FqKel%2BLx8l%2FzlOTGh6w%2FUIIgD4vBb6vK%2F6NVkEi%2FSbSXLhiqYNE3cSN7%2FO5HyZDl33dDKyM9%2FKYetZRdlOPtelivaw4z44FrFfmjIrtly3PtAi%2BRfSOrO77kq%2FLHMZsrPEPHDAjN84mL6XgTP4d7NZEQGkrNBo8lW0aXoPC4Y12qcvjMRCclGLnfywb0rBDnphu735qWeNfnD1x9kAin5jhCoA3UC9z43CGmUdYBXxe4GhSufRv4b3UWHAPTzba%2F%2FxvPxPUDHrIr2Gnme%2FOKY0b68ZwCviviHRo6ahwhemL6w8PPs4j0PqbchEul9S%2BabuMIrmaGZflvb5RGUatZ8YcRZgwEqZaM6HBAdiwFdJGzy%2FFeqUiBsQKs3jCZ6JJiH623HTuJqFbfeqqDo4K5E6gyS%2FrzbS3DevsSgPvu1xFxL8b8cEU3yqBnlkqfZaV%2FAv5jwN%2B2fVoF36dL%2FQRy9TJV43w8JNdZ1MYINuHNdL4xuv0N%2FGN742t7o3KULfOR1vy%2BEIYXvDlkB9Wh1ozPsylcNVqWb5gNFjcSXVxCCa8%2BIR%2F7ldjTmnDqxONqyAabBmX6o6Y4VV%2BXDDoZKvIHnO39zNJze1Sa0kTG9axialSJZmNwyFLTCewYTTBjqkAZbfXt2tefNo73PrjcTBi8xKG70ErSszEHMhhvL5l8Gw0xyEqm7MxMD0rrHIqwVBobCj%2FOYXgR%2B6n3381Xa4LFNbnRZMGSVDsjZyqUpw9Q8RtsN2q2y93F7uc5URznz%2Bfe8W9gnfx8R1gNq9gLQE4i6c85PQFPX3E9cC2q7ky8TM5VOptNXhgbQLn49AUO5FMCf%2BzykM%2Fgf7DlTA%2Bvm%2BlVdR8qEF&X-Amz-Signature=0f09f772add6d059a6384cb4559ed80ef11f53f03f3e118ed6c3756ac3a49c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
