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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXS7WPK%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T202201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6maDpEe5HSm3GfdlfcyNg2Bue0jcdihMDbqiYB3zjwAiAf%2FHPY5qaq6%2BlWSC%2B60ymJEtNq0GIQgpgZzTZey0UTOCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvSjL6R9NFuq58uk8KtwDVDg3a0HA59o77dsLkkMjZTxm%2FiSGYSGOYeEYCzA2q7zCEDqNgbBZYaT0W6RW34lmTJDcuup69eAJMPT0E3XTr66vcdANTVnGeVNMi6hExMD%2BWr3n5b9NcgIROp1kjw72vIqhP8M4KL1rtffJNlc1h2628MhVJdHbkujrij9xo8AUSLEf4dwUkSb18qmxPEmYe3DeFFOHwlfS0dHmt3IYR1B2un8KJrs4nwLtjIYjWNEBQDCO4DYEjBwuyNM5fjFI4Rbeet6dE08f9qb2hDl%2Bh3GtWYWh6M7QBWdYPyYURfsZNtzTRop5lbnZk87Hi5fdZIHT52FWprQjkNKG195UXtFR2mRN6onNIrn8U4mr9Z2WhknFck4hG0DOnWJgLiSEt1CJHxgWhVx6KL%2Fs375xjtftL%2F%2B7ABnc9ePBGPG0E9re1Kk87P3ye%2FVB%2BaItrwLTF8HkNiF1csX82oMBiFloimSYV3EA%2BsW4%2FSA1XU9IqZs2J2NBUp1%2FEPJyIgmyvt8MvIWV8waVFKB7ObV3u69omKLCAu0OpRhq%2BHCpdiHcJgYs1GCUg6Vw9WQACJ3XC%2Bv8U3kSai1Ll5ZrIF6tN7%2FgXHr6ujSCqD%2Fn7uf8VCWerOGjOirNUEmAlyee9LUw59H50gY6pgGop3gGK0EUYMzqJ49Ni5mh2vpCv95k1%2Fkllu8XDmaBtmeaijCCeUfWvbdEbKSmPMYJAvk%2B83JAo5PpySZ9Nj9Uf0eyLHetZ1zXNkLr3QBZY%2FRYPEkKfCRY5zDcUyFS6jzAvK1spOfQt1gTFWwCK1CJPUrbQnkcN4IuZzNk8YQYhHEbFuKnY%2BsIvJNyhNx2VNb5wMHAL3VbaLLgJ3YMfoMrkCMf6TCq&X-Amz-Signature=a4bc696af6ba947749638bf23018f0346679d28bdb648799c5ca995a42b426b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
