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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW5GCOB%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T183846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9kZ7UXqNp4PNcektf71kUqpaf20BJtpehobr62zatQIhAKqr0GL%2FLJfElgZMytqJMQUu69xEZRyK59v1hnK3cS9nKv8DCHMQABoMNjM3NDIzMTgzODA1Igwx2Fw1vBIWuGL%2F3Wsq3ANoY7VgWiwkU83PhTsbzjwxQEL0HGpaI7lZRa%2BKATvY0WcZGG8bVQAo3sHLlw%2BNMewFEazS3xOC1%2FpJoB9hEOtl%2F%2B%2FmOcRKEN%2BOgJDHC3k1Bm8QeSFszy7ezZWEyy59ZXy2Bb0oCxln04LqoqGhTh%2FdOz52ZANWavTCgUvW9jzRHjup5aoJelOTiUbm8baQZZ%2Bg%2FzQyVYz9HYn9YM8eTLVtlK7xk4ffVMtUb3vSNGx3TCm4nR9%2Fl04iNKIv1rBkVzmUgzFCFTA73L4vjZ5mumNkiticO4zZb7T1%2BEtsS3oADgN35vT8K4d7hm3CsMy5Frrp15ILzMAqZwYiNHyDNLhHzpFkgEByLFL707%2BzAWE1R8HL0x4GK8R40gwH3IwGhd%2FZCflCX%2FxO%2BgQ21HEwbDnfNywyAT9UvY8Sjz%2FohoQeseVRBETe2sP5Mat25t%2Bp1Sbuss5ohuyJbFfSA8ApjKgJvZtEXdLxgBt%2Fssa4vQzhSB9OKKYZosDZqgxQueCHQ2%2Fi07WhrDLL4OIyMn8SknrFlTRUUGbMzkxISWqV%2BtiMXrhTPs8GGvuIG5meBTkLOmOS4RMr9q%2B9ZwSiu6IVeL2c%2FMkPCcPliZWE3CK7yghqWN6sNJK1GBiOQ%2BkbHDDT1N3TBjqkAcDzSMP9P3wuh2KFWyjrVsaH0nsRlgdhSrLjvezqIUSOGHhJ0NcD2uwUPXfLrolrUOxnRymrpbP7G8heSVAt9WbxsdlVOHBeQelJLUSpPXC7AbVX4SIt%2BdoNoKVF%2BihqXP4QG94aaHWOHXtSNUne2BjYM%2BXsy%2FJ65IyUTtQKD8%2BsRGB5CGNvjLL4AaUFsqFhe5puTK6uNbbEoKV57F%2FMMv17hakL&X-Amz-Signature=08c8f4baecf4fdded330e3b03f8b85c84ff01fedb37f08ba466f02535098b293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
