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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOGKCJP%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T150100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ7da8j2KU0ebJnKLhfcflVOsPpdDpnOWj8HqtMTFJ7AIhAKcNFc2bJMDp9NlrZOczcADQjQI%2FsPYIMdixP30dMiA2KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDNBTaCOD4zBxICSYq3AO9wwUJcaNfqDxwto6iBzs3yUJP1Y7WZioYwB69MVeIYHffwB92RSTKItDqT934aw%2Fos%2BSr8AsmTVSB2Dc0Y3BBB6dtlFo%2BYvA%2B4Pm0cHIKm7wcyfMi4R2cLKOg29AnGOHL%2FIYhN39enZGhhSGKitBz3VbVyE5L%2Fta%2FsKvUbIMHbD7RuelRZwqzgvr0tU3mUq49c8WUak4v7R28ZE6mVmtmIBaEXHAW%2BPgTTAG7Zv7Sl5hyOjRC1scsu6cQMEnjltHctGVJhdPNQgEf1oAGcaNkYlT8jaEWpxFWCTS7Xi9TC0NuKyrhZsdHIyVxEGBUs3gtDbjGYUr6nsasyTHdsXOsEjv%2FxdMJOLdG3cquo6BtVFWovm9gK127M15p5iG1yOb4orTpyOGq1w%2FJBS32z8s5VDTu7I07K56iJKI6962w1yVwIdPate%2BIxkwG10VVE5ZH4fPNZbO4Q1U7NdWxjgdR40qotxLSJ%2FA6RngUV89rRaF9zY3%2FfK5fODQ48PtdlEj6BDLUI5LST1uR5dRyNDDy9eujoMkg67CmH%2BgGcmI62xfekNuMUZ%2FGdo%2ByzIcCiUiigbia4vhYXz8jvXp7PBEsgKo32Tkx20y0jL4bP1SfSXoNvTR%2FLHiQrPmDaTDU9rbTBjqkAe2xwNG6%2BjJO0H34y7AIQ0zNZrCeiu2uSQhlxXq5Dc%2B37hSRnrZLQ2JprV6c0K7wnPEMIdGhtr9AGA3B3g4qKxDFYgNIMDnh54gplwEU8aln4jnW0TN1Sqg%2FGFa5D86%2B00DILZoxpJXLFUc%2Fzn9cH4jPSxALwD38Db1bIzuJPO2NeWU7vdvxe2Eb9eMU%2B3j8W5rGBBlKWCmVbKUkjGn49kSS1TdF&X-Amz-Signature=ce229f4de1df35497032cdeb200461fa67fe665d7a12abb993d3414ab9397b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
