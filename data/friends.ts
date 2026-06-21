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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM24T4I%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T103052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCRCwdNV95V%2FFXU75Jgc1GM7YffjR6vDVej3%2BnAPxTX2gIhANhDn3HiXuM7sTwuBcENJB29HxMGgs83aCnGhjZcO27OKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMT3Dn0cPPrF0EZioq3AMo467%2FPFgvJUvcE%2F4smOkSOd2cXnv8XL8Uw%2FJYDV%2FdmPnXrzQMjywvgTF2OTFYRvGympSiamGH%2FgsFJwnr3%2Fzu5BKBgtnRE9pfPxTVQFCH8oViioYgbLKcaadTHbmLYJvz53GqODAFCom%2FQO%2Ftl4HJOP99sHOsZEFV6E4mxYfIvEjVpGEnOQ4IrxGJ%2F63btYb%2FwfPbamk9MXQCAyv9LHkl3s%2Bwi4Jq%2B4S85hrRbHuQCuZi%2Bkprrb%2BhOEfiG6T49J%2BYEBabQEJB%2F0kX7ol2AC8TQUZ5EEhZr0RY9eBKYfG8%2BJzwEE%2FG3qv2UhaoyA24l9gWTqeOG1nD8by9L4TpXyOv8UbUISBUteu9SL%2FrxN3hhu2EyG7Dh%2FaAeNDxflDxrdNUF0G8t4ow676T4um4QBfufydj1mKsvMdsjmspJ7AAQO8Fx6MfLSWXwkFFJ8TRP%2B5VPnd1e2taG332%2F6wjBWiP64uz6ESrvTZmUnOyL%2BIvOVPonpxCyaWj9ZMrbSW7l8%2FtkwtlvuAiOMzfEitj%2FkSxOJx6hbHJ0xBgNY3EuSMU1EnIfuieS8ecAcjAmfPTTJGFoW6iRanhXqVtRrlP6ENY1xv%2BZS02p07yEYCOu%2FfxDcxCs8oIGZK11HjekTDV%2F93RBjqkAcHDDLS7u8Jv14chhHLJIcR5gZl8J1pu%2FKEY6ld%2FKMqyJ3NK19x2szF4EnBHJI8v6IjPRkVXcJs7ha%2FzqAs73V6EO9shSzKSdsoZLtBztX9LHlzi5yqzPdFBy%2FC45xYadlHsgM9r%2FDKVWgsU9iBteehsKR%2FkQdNEtks%2Fr8d0iHSpMt9sT21O%2BoeByjYHlJc66Oc8lBSH7nJtrEnXcq%2F0qcJzxCmt&X-Amz-Signature=902e74150cc29cd4a22429fd596eb334ad8db28041fd534d23ee6def82b7779b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
