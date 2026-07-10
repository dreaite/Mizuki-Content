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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQ47XKU%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T000555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8Hm7UKJjCi7hS139KzhXNzTBryYt0kxc6BEjIosBYuAiEA%2F92dvkPH4oCCe0dSGOeVws87ev0ByDeQUe352WPJ9L0qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiuUhp2ATf%2BcHiyZSrcA414alnzbN3NueGrA%2B5HVC9pAvSFxj%2FYyMu7DkglZSbSEuFysFbiCAVfTrNy5eLqx7acmQMCkFfldaHGe5wwoNxQwFoi9OefYOTicxSSRre2%2FwTM6SaLzWwEkD1aCvutDDkT1qVpD59xXv2S0Gy3thwhDGIx6YQMTky811UH9Kf4rITIlG8d2tL0%2BMtsWtuSZtMipJRuXYvYpW8sHwQKECz1R4TOKsQ8sNhwr0%2BKoY14Gpz5Zmz6qPuURhFub1gApk6tVPC74qQqggs77pYAu2sUdDD91Bi1Y8TuF1xpDWtQoX%2BX7XUMVvWbwbeEX9XP1EHchSzyAL4wAQoZnfsCzMup9hm5FYyYnFo%2Fx6y2xhIgkBwnV0alq6f44wysgxphqNeodpyvikb9mNVCsCs4pWOkAxjI%2FamMjygruN4QrvxNmgxWTGwYoF4GXDtAwYaoMmY%2FgQvKqVagFDn3W%2BJPWJp%2FyD91AUp3ae0uzdFoTowsAql%2BIgTdJalVKHoO5A1CctEtpTtafOt2DuRY8br4HnfuSph0dxoJSMZ%2BLSzV8oJ2nydI6QeIgc7wAKRYmBJSDTU48EIJag5PeAStvwjsmZlJ5%2BjgKAy0cZA8cq5q9GdTt5fMCJ5bZSWznr9FMODCwNIGOqUBi0fNNh2FjvgSkxEggu%2F%2FDlAh4jvhK6SPtWx8yt%2B%2FPMVIEd4V5pLOcCWl1TA%2BkaLNY84swyjWfYCPNYsyfvqundlzyEijALB7Kzqo2Scb9YbPrp07gNkhCVpJikl3hrKAcnTDeGTk0swJvK0O923nmJmZsOqsRAoLG6ayt%2Bfb2TMjzQmiwC3DAx7cwveRzoifskwpLY7Zq2N%2FQ%2FQ6xFLtU7KfN3Lc&X-Amz-Signature=fb68392768820c4a51349a3f21ff5d89346b399e0d171159ad41de849633eec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
