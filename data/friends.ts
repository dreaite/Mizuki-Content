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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJG45MP%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T165949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGWxbHPEW01ZO8fO%2Fk89GTSo2a9KonWB1nFK%2FCpFUE%2BbAiBJM8mXnPVfA%2BcjRRD%2Bmd1m0TYWYYG4xtKATAjal6UdDir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMgsiM1ALNrBHqmoFlKtwD18itmGGlskS35426B7xjIIBnGVdMgUQRJtV%2Fr6GGndbt07PvieDSjEAqEBq1BLkY20fHEi5fvdwpT06HgM8SspfsHXWyTRnjwbFel5lHEpARvmbWrZx%2FEvnPINJ1QOu3XWU7MUtivWTnNvWkzbbk5qLyrsXJi2lU84sJcf3%2BYzxBSkuceE8XS3V7CwqvbHOXQdlDV4f7E9OynpRRNtWtvQXBACQSRJhYaQNKdmv5M4EDAUxEbMsXKNCA8YMwCXtiUJqZ87kXgMtlxILKJSJBpdlw7zFZBZVS3iqCSizntpXodw2hHdtfJCurj6zIhsRo4SDLKE%2BjgwIfM32Zb6brUXyX6FuYzSbvprcci7T8Yk4G8JFcOUbztOMNcKVg%2B1Ayk7XNmFOwjlbvUPmEvB%2Bf%2F%2BhSLhHN2UDnNeFPjKS1VKziKPLw5zD8z5eWrnLdEBmyQhjCq0h1GAihl4ZED6rFCGmgheXiKfGJ4Dsvf8gZ0FFKANiyotfVtfaA1WQfWh42NeXbfI7OgQmM%2Ba7q8bhn4hS2U%2BIIFrhxtSaHiXPm50TeSiWtNpXfL%2F4m45WGwU3LDkcGjXxbtuWr015pSCY7bQTGaKOm6xBtVZ9HakbHBBvpAYFSiqc%2FVVOzFjkwiqGT0wY6pgE1mSM1eBmSwZZmYX5rKJrc36VXAXB5Wp9VtrjiukI5SAR382dkU%2BnFtCINwyEyoJlYyUeTShrMDLf984f3P5gXVNAa1bBp8%2FNKBe0zkq%2FIRO0M2ckIaae9b%2B9zWkxU1J9eKIqVnrdyqs9Owa7nfXMmxUOLIBYwAhFNr1mzWZqeX9GBjDNDR3mYn%2BhvmIRwiAx7gIyrRLDqfmygYfX75nyFI5X76s3M&X-Amz-Signature=d2e96078a777fc0e0a4d75432142506c63b07becb90b982596057c90966bbce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
