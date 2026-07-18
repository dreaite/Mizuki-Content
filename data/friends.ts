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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCYFQVGU%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T235501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCMtlwE0kCG8X8s283gjf%2BZA7UP47DaTMU7vqYAvyeQgIhAOtkx3U4ZFUzdE%2B8eMJ2fxCZzdzAITYLZMNYkKkUQRuOKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMrlBAfrxwQOjtGeYq3AMKJef5FG5Gl16scvnx%2B4OwgYhlFomeEWdYaLvoKr0YOYfVb4JpstTZXKszb0gTz7XLPC%2FLEDkaoy%2FIVIboJ35X41AxHTObhxTGo6K6mtch0LDy7XE%2FCN1ketnVE436SJQLbN38rn9qWU%2BGEvwmEENwztuUIeYAmLE4mt%2BIEdZiK2MC9%2BBm2rWGrPt3s%2F4uIslBTGHZGcWz4XEk1hxHsVrrRz6fReI120M4LjhNAJVtNtv7YmOvPtz2pk1qrbHMgcjmMFpEM0m30teZz39KV4hcvIuBkTvUWhLuS6Ev5eSZv0v%2BAJoubus2Ik38OlpMCYGjkV511UcBO2E9FNj0snhIBwvKDnNf1prsykT2JjjAkl63Jl8xfgHUy0wJz1F4r%2BFbtLuWi3ElU4HkuqaMIEm7C6aYR%2BODj4YC2053AfakrLd9g%2FAfmkqDFWdEMH3pZxVG%2BBdtTQk6nWRZJGsNZs5KP%2FQ8nb6IUf0QN13lG7XNZMIzmbeGQr0BaZL8JiAL575waRprrLsKy4aefAHVkFz%2FEJugk9ap27TcI%2BVN6epAtzM8T9XaExzSD1sAVZdxl2u8Qbamnwk6YZ1gcgbbH20s1bRgtDwkNysd4pZnKmeJrBbQFrcZpznwOnN%2BwzD4%2B%2B%2FSBjqkAUNoaveBEZjriZ6BruzHA%2BqkYJ5yryqBRlbEB0NZFuMtinNE8qD7JJ525S8eCBU67sHI10dtcFrnWGP2%2BQy%2FIhz9JjtRo%2FAjvg%2FMHmPIcR0PrX0QYCdddxBw1cPwbIcGIcLZDKQe4E696dOWzivcLnF4WAHkWi9QYWM%2B%2FqWwRXOL0qohYW3MD%2FxGNzUKZDmSYchrls1kMxxtcAQ%2BJw%2F7g63NfEiX&X-Amz-Signature=97b42a8b5d82ce9c845e5a64977858b10b42f13d541b667e8bb778ae86828951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
