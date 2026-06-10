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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUEAFD7%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T212434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCwkMxod8llkYXJKVGWmDtRX6%2FOo1ox074%2F8oVpCtn2cgIhALEg%2FV0wfvoC8oSoYHtGTjgn6LYlfbduLOgnvDw8Uhk5KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaDGQI3Cmqsz0LOzsq3AMJBgH4lWFI%2FaGOdjIHhVn1BAzAqViSpi9bAN72%2BcsGG2IiSZ8lKgUepL1A060KmjAP48LUpiNY5pUkI0iT805UlZFT5eusWE3tCGEive2eB2HOxUm4%2FZRhsrgrSHtLFvfqBQtS54qMhgYpvmKhr03X4E89EdQ3%2BafuFO5kMcYeamVz%2BACasN4TisURQgvg2ksogIHasCMktqq9euVsfCT1sinB22NHlzbZw8%2FDWdEN%2BSb4OSlUw0nGwTGa3baudh3zVt8QzLo9AIFauLCGZTXGD%2BQt45LQJZ5M%2BrB5gJU2x65YS3IGy7IAHSANsvy3bcYJHiAB%2FkFhR1PyHLncFBW3XDggKe6Gvoh5Z7IhZHDAFG%2Bbq7j9IWijcNX8FNqnqACL%2BRweYI4HHFQ0u93Dp2pPeseYpZ9RK2beFwJUY5iGIWgJPBkKZJLxQBoU7jHTE%2BVqh6ZHJAx5fx7eKNGLja6E98Ev%2BQ95PM%2FHshPKqCjJKiZJAM%2BivUYmnWBAkNohb99b9aluxdnvpXOB4jIZItL5taogt6tJ%2But7Ds5Z61Zvuc40A9hw5jF6cYv0I8JjX6V1vDPUqXl4FPCC%2FA6rxxFWvapnFdy6OIrYqD7bG72IAp%2F3fk7aQ2IAOhDROzDr%2F6bRBjqkAYD7gV6ETW2be%2BWMt3kMJHjluDxigl4PwtPLB%2BNh%2BvTuaekCkWGm1HYb94pXe8kBrU85q6L6m%2Fl0iw5huwRSGoDCEdlkX6LHctMhx4QDd6j0rMxtQE5MbC%2Fvap0ZJnpEQrc5YJC4jz%2F9damtT5Sn%2Bau1rjuygbqYT9cZ8FRbrRi4nTObW1300suRxDYmzHyzm5UTCG45uUR7RXidul42fDPP%2BE4V&X-Amz-Signature=42865521b9e326e4a4490272e4501e163d611278dae8a78eafaeebfec158cfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
