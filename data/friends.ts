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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645IUMBM3%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T142410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDrqDFbQGboM9dEiNb9FHFoKxGWV72B6VrViFU3vWfD1AIhAJ3gI1P35uXEDf%2FNdzt%2Bqp0%2FCfNSkFWJmzfHguFrnXTMKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8ABAKXa%2F5vF3DwEcq3AOn6xgGm5wE6MFyQWp4YcMqWK%2FFpxwO782Eh%2FbPP9xbmZ7ujYaUPx4SrFiVqkZqVNAlhcXzz39baQWUHnoKzTh%2BQNSEgBWaHGfxMMlZevx4F060i7mraZaYPzTqk3IVeesYfpTuUn3X4Ru2Yk4CbuonFBIGFpz%2FgACBEB%2B5Ooy1twBZ9jle3AMCVAJ9IRKNWozrm5UUjt02oPyH0Td32s51OKwtQCP4O1RRK1zIFCsi8Jr6Pje8AVxleI2g45XV7z1VC71wh0ibHVxgLzCJ6c5wrMekq83Own9aU8oR%2FkgtWo5SLrunGUpXvDUnGAHfbudqYDI6mKsdlVp%2F3pTWMC71ruzdS%2B5d4jc%2BsRja8WPvvoHjLebxU3Nw2JwGgXNCQz6oi0p3wDnJjW7CsRYfsOGCenXequA9xMLDwWNfuZNvKdifU1XnMFunf%2B8KkISC9gGvUewz%2Foy7Q2MVgjUa2kmm3B4NQCyuIh3ZiI0bP%2BGcfQu7EAJVG9JzLjZFg5X6eQtflFeA07CY4m8kwqWbDkm3MEG9wz2uTf1jCh%2BThjelkkw3GMKVHcQoXffRf%2FcECC%2F%2FRtgomgl178nUeFF8VD5mcFiZ03SUYLGGqnrncBFKtsMvmb5%2BzRZPoBSm5zClw6XRBjqkAdSzjlBin4%2FrqeluB5d3ajz%2Fw87EwJyOoxRoA%2FICUAUi7GQak0%2F%2BEGzKenD%2F9XChWqxAn625vqxSELOzhvz5mvfc%2BNKXUPF3oid2u%2FzIMALLP3nOzB6r2yCbOR7H8oiP%2B%2FJU%2FjVnw6OHxfH9WQSLWvQzxSarPYoDzpXVrKiTgBwF3O8Uprl6gz2uZOKEACzG5QD9NuFlvRw16BC2jrRgTCrd1dZ2&X-Amz-Signature=54bd445cc13b8b8ce5f18a8399c5902a77aea315a6bd99553333c994a260b9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
