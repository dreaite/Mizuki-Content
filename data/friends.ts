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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ER4LD6K%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T083904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCxzCsC5uwgU7czCIKRh30iQDiRMFKWVehHHw1Im3%2FQfwIhAI7Q7yPU%2F91Y5zuBaVDsNkS%2BhGDVStZqPXzKp13Nr57YKv8DCAkQABoMNjM3NDIzMTgzODA1Igx53jfJ9nrepDvXzSgq3ANdXVr%2BS7eg05U8MB4jD922XMH3j9T41MK2RT3%2B09LdMJLtjWhJA1lGUlT4mbdk0Qe%2FvnzBNVWU4sO1nCrPmjzPsGA6Chm4KlJjkqQEVtzDnCJmHgXU92hYec2V%2FDDkWeLn5L5MnMYmUPzD56NmjVO%2F0a7k7zqDRGz%2FlZFAQTmLb9Rq3mQ4FuACEn3mLYnGQPBmOy2Qaw%2Fip3YZp7n6awdTphNTk6UDHcmIj9Mu%2BhsUIYAvb1Kxqq62Xvyz7iiPWATENJlV5IYlrx%2BQRiAmW%2BK5D6d%2BVBN%2B01A9B5DgiOeE5YHUHupZTc%2FeBnp9Mb5qH94WQd%2BcvamRpRsX90jsyYAMZRusuMT1u0lymRakid21qOHsSWqDbRpVsc8Ozrcx7wIfH5W%2FHyp7b0GWiX5Tn8q09J%2FplaAbgxZgT5TXa0Y1w7geIT%2FCWTnbba92c%2Bn14dDroKTWCPRmCzXkJCW%2BtnGeXLsf%2FNOsLNcRq5dzkOj2kR1Chb%2F2zM6S%2FxttCYKeRNq%2BJJyFLjE42lKdcNK9PFXMtv0qrKFV%2FaH1%2BsNfCQISQauA3svnFsQk1Zf0%2FfxG%2FAeeyz6HwKP8xHW%2FCFZJxHI9kDqckM7t7CH07hklNG74bfQvbROkbguf%2BxADFTDMusbTBjqkAcMqUecMA8jbUYkW0%2BuSmXEHwHq0YczFlrEYFTpxtjkTALIk2NYdu17Dm%2BMG8gdjXcDSagWCMymQRAVAUhkN6B3yooeSDSCR3Yx04HAzMm%2BFr9gYJ%2B98UcdDMwMSt1MINxJKfgMYzOGebdThYUT1Z24spjoJOwxLkHBqWE2jcNECFOW5x9bYSFIiEwgW973N48O57M69e4f0pt%2BGTuZXHiWCLppz&X-Amz-Signature=5e42a0f863758324dc98c7541226faa481ca70ab0c5c30889b3e11c3c8cac565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
