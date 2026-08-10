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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJW34ND5%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T195702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtKe8aUisXb%2FuhjoGxiNs%2FZrnJ8%2FqUkCCZdewUB1fpxAiEA4nUV6NH0MWxE6kYSovzPEiMM67ZIwleLLlGpYI35gAIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBtuwh20W7l%2FQ5B4ircAxs75zOqwm%2B%2Bxw%2B7LwDBXtlXI%2FrHsQgUUxfiSYq5YYfpBQ%2Fd%2F50TknqfWgSYViwKCPp8dlYImRdUylXA%2FGdlbjR9KRNzUib3J34znokL%2ByLZtEjIYqdLXNfaFOXKSvNlnad87MThjZIhs43suR0w5Lok62qpzYfqlZ7AzgeyXodqpEvyEqYBAyCC%2BD4Au0LP8SRvPWsM8ixVXF8pBn7gEoKq%2BFdbsYYW5UxMsY5XTgpYw%2BJW%2FQDSVpT8lruWzk5JNkz4xtyOj2vf61vayB%2BPEu1A922ZIYoX7lCrWbV%2Bu4ArqCzrSp0kIibWjV2EZv8EpYMiwNcERM0ACAdWcuGeRIX9JenD4%2BVUlf3VJtt938jpR14luykTjXK7Ts9CUhbDAWjUL4HSB595mruyC13B0StoG2ikMmpw5lQ7%2FERY%2BUtRzTdxRtO5kl%2F9ymBcL3Fb9oZi4D6HvwjYIqPEbDdL%2F%2Fa%2BrGzxuw2%2Fruy8hV78E37b2GhBILRDpZQ%2FpqrnzHiExZAC3QWzDF6t1EFR8udZrxJ6Q5Y6sojC6xQBCu807Q5k4VJpvmX8Te97XVnHEBjlRiNcCx9UFfymIvxBNftEcRCMrNDpfTjKar6T99%2Fpy%2BV6FEAlUM0iq%2FRbywgUMLm56NMGOqUB1CyXQDWbKNBblF0FdZHS%2Fhwdv5VvcfooXnKSvgHr7miKB6L5BLEFVJXBJ81e1fjzO9Cw0dYU8FDDrOBabdzr8LJhEHIypDM%2Fzb2Hg9WIJe%2BrVpaY4u%2BXgnp5ItaeYZCAVrV4vvfXLKbJDKciX2uLL7MYSH2UyXvLNcfDnQakaFbEVhXlSYVhs6Rz3268zIi%2FlTFLIaFQgQPY%2FmVwMBE9KtUNfo%2Fl&X-Amz-Signature=6d32b8b0805e59fbde0ed72c6338d47a35aaaf397a24faa3e8fd5bb87461a92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
