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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6GQUCX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T181424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSoby8cFN55622tUndFZurc4wShsYkhAV6NaLOLdAbzAIhAK5eCkQmzxNfUi9hcKBUzK6fyyUlNVr66JVV6q4q4mMUKv8DCEcQABoMNjM3NDIzMTgzODA1IgynDf8bFHdyc%2BD0zH8q3ANwXa8oqJHKEUxCMb3dTnuQGwAWHp1JK2NREiLwAUXG4yQC78aICUCsQEvUqdJnkwtOyrZ9tKcO5fGRBadiyyUEZFczVuG%2FZa5pkUlnyN2fcWogVv0XXqaGRlmaPzMTVaqraJGezvKFtFK8Dhop%2F9TMygk32ABsShRMQN6zf6V%2FYPu6LmyrA6x5qz5QXecl9JQx1YU2o2tGbptYRnndPSLKWGOxZZf2Xh5Kkq61H8pMdaOSzzGRDF25%2F4OlezWEADLM6HIWDu4s8sdNj4FzAJnSPCFjhKNgVkquewvD3eHagg1DNoyfQCsI6yp%2BTYiXQK9jgrM9i5AC9%2FFqa7%2Bgsi2t%2BGKCRYGgpFPXIsLZONDDyqI%2BI2rFaQ5o8M%2FaFhgiInHq8ANIlu73SchrBwrH0fImTXz4RmcHHEsrNBIbgjNpj5buqTQduKzWsccet72aqCzyJynZj0taifbpNoa27%2FVMTyKeSzOv23YM%2BMV8pjKY5VhXr7iRrR5%2BXSc0i1LSX4twF8NwTYUas5eE4XNj%2BctCAQaUu1cFqyd4xtivG0o%2BfPgT7XmNJKTu2%2FUAIB7aLq3tXVPZVZm4cjopYzkFiTXf8gIJ1A7Sd2igCpY8ITttF5Ln4DloMu%2Bm9qM%2BWjCR6LrRBjqkAYp9bj4g%2Bfa5zUf7XULXPvWPaFoYCLcJEnQC4U7YDkLX7cm9O6RRGbJRjrEq4HEtYGJsumu8SbVFYUnKSH6tnLFLm6oEsTaKVqyqGCIbrK%2FTEF%2BUgXkWsWYxEZM1zwyUMzkdjPLX9K%2Fk1FJlRrout2gYACtpTzQosdWdxIAYno3Q%2FM8TIsFhYP4iS9x3V0uO131%2BF%2B0U2Scwx7BeqMyJySUm3cnf&X-Amz-Signature=84ff74f29fa8a19822a8d73e0ffdd45516b03005b9f8fa4e790a1d5be13bf1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
