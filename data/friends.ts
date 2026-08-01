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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5VY3L75%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T132416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZtRqfX0hbbR4rIeoIm0qdGvOlE3sF5OORd5QAC5LNgIhANq7KE7OJqoQRqRxVrZEs7QU%2B4%2FKHEFu6XlHrwv1CogBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX%2Brca39RLTRu7onoq3AMOMUEbtPMkPfrPGehjmIv47kOO2%2B3ZV1DeVHaQfD9UOtGOLI92tCvE4eOqXmVpikbJKQV6AH1l%2BLuHixhe7BHUzlayzwWnuOdj%2BpOToKiVoBAGugnsqLerIT8nSAMAJAEYzT64GELCzxYLKBtvYL6aeZIU5uaq8u6kkYUrYyM9NUboA7NMr25B9DPFGoeEeqy4u8nFxwAXzDfCYlHNwlx27wgBA1y9hkCWFNixC0y09%2Be0cZU5b39ssEA0u1mOYGaZK191g5uzMcz637SWijViFuoE%2FWkf54nBzTNz8S4fhFx6%2BGtOS3VgM4Mv8HWtXg0EJCdQagGF3mmu%2FcePE1FiIXIw2z4CvsGNnxjJaf2wHG0VaaRkSdwFbfhzubsdd%2B6gYb4t4doy4RuF7yxHHdkyjHd6izbbrqqeu5w0V84QaFnOBNVmGsOGogEheA%2FfIwSHAoc%2F6AXrX6lRMS8CwfvAPpH93xRLOoVw20MPO6hnMZ0HnCIkw8oyrpFQ5NWq3uyK%2Fm1kko4AldlU74kyNVFr5xWcSyi%2BbVVHCXVhUdlKqLcRph13okTuFaXKmued7mlfiqfD9rBbWflCV612%2BudH4jgj89NuJAbx87CaGqgyt36TMVwrQZ2QjsM0RzDj97bTBjqkAZIS7zSskAJaIWyCAf8dNb%2FODLLzJtHowrABnPNDuRUfUOPdcKnIeDri7FIi%2BFscH0fZbqJo8xLoWvVQaTnE%2FzP9%2FA46JJhVlTHSJrnxOtTArAPKPVi7vg2ZIcCgt7KX24FHbYItkfrjXcLGo2AAKz8IVIf4OwbRp4IyzBYyXt7AI7umOOiJ4LkyNLUHURXRftMiO0s73P8eSHmafMOX6nkM35r6&X-Amz-Signature=1aa7a062bf64a45afd9c593c28a77ae81425d47b46325adb82e547e8ee34cda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
