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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YWYNTUO%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIA%2BgaOdHczV0oVCESS4k2duCKp4sQBQqgm6WpHS%2Fo546AiEAoWszFnSJSU7y28i8V8nunIx3HPdSl8NbTJJAj%2BmTKOoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBsfioulaX5mcHbiVCrcA1wUvmoGeB%2FKJkzxBeFszBRjqSjPWSg0PYSXClglxLa5Jtbj5UnNODdJiCEWWtHXgdcwu8fsofdq1lXR%2BOFHDQScN2HSTOwu0nNoLXjEsdiB%2FGid7QnWXAhvAa1UnwZiGX1hPlqpUqns2Yj4FgCdFKQyvUs1GwWnVVJX3u76VCXPhX0OOJ3ASbsYwqeyFMSgQQnyKNkaBIMalCfUdKmoRbC0VjYiB9K7zbZv7KmSVmdJkavGPcRg3aMAPMTGPz%2FPMVKyPXujzehKNy%2BhEt%2FwhqGwmwnkSVEG1SvFzSnlCTA4nwzFDr5RBX5vHPkd0PoH%2BE9arFIcQ7JiUQHKlpvY6uIVLKl5c2QCY6Di9B4lejm7FvOaqZiFZJ3Mfs2KzZTZ1oRRgKw4R01mWTqENJI%2BRNAwivBlSB7KfSq0N31ticfTbxyAiCKyh2mXIhr7KTNIlfEmX0MgA62LjTIjCgREsTUGtE2qqi4oLm4BGZhVY3EmmZTHkEzEZVcyeHzd015J3hJSjwRL6JAUeNaJWZTL%2BIUMZwC7Qlx8U7lCjsrr70KTHaB6BuCTaeRYn4UR%2BJ0g0A3OTpgMW0cnMJ4hq2b9A%2FH1rvBeq3OO3dod%2Fl%2BYmTNOsyDlSEL1J6B0QrfhMNep1NMGOqUBbcPjnjSuJ7UFYnmvhKj6%2F3Lmm6K7lSFVDqNtW%2FAOtrAjVnNxxk36IYpz4wGPZRioSWWAN8ad4L7wPUtyB%2BDQ%2F%2BDLptA%2BtxxD0YtsU%2BQTxMvX6PuWnOYyX2J9NUcpV0XISMj7HTS%2FabzJ52tv0A2UmChd0uTsrBbI6aA7P0GlvqYPsu%2F3qXOxyNt5lFbQjuzlWK7IpVdBiN9YB12udcqXVS4VjPYX&X-Amz-Signature=18ee9c5dfb01b326838366a846e4ab25f3c5ea6b9f70cf579b3fe25e5b47a775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
