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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZTNRLXW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T191736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF3Tbl%2FowvSI4ElaSEdbKzNM56nF8ka4nsqMWfyUyXLwIhAKkx%2BR20xIqiuqzwuPy%2FMY4ZvvoYwDNRoYbpdidLZCOHKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvn8xGtk%2BkP4VmIbMq3AOkkRvTMd2POFFg8TTuoSLu8nH3cUlX7HoH0O37PtSAxJVCh%2F56N4%2B21Dmb3kglvdWuZmxXY0PGh9T3HAJhIlCu8H7%2BdzwKm0zICdWbO%2Bw48XY56RC6b54%2FpYV6IdJs61GybQAtTvRQ5PwU3o1Yp9VBi52vNGY9ioPJhLMsSd7MfPE1QPtBHcM%2F8v4cxcqGJ%2BJwIPNt%2BthfJx1HBsL20SYX7yd6Kt34EkGQ1ywVKjm0q1Uvtzl%2BCcVkot0FqGIw2EgVo6EgQh9OPM9zSX2I9mcXCQ8ZUCdxeDOAgoGHx81SAga1WB77scpoU3UVgTTflds1gYj9O2V97tg0CP%2BGIvFwPmKmxwVFtoLq8FJakQaZde6iYWr1FjOCfnwnx54QVjr%2B2FhbCRc7OyQGbRNIfPyZWRiUrvg4fNGs%2Fpe%2BgtRyvVKgFyZQQzOYwcv1FzuCahNDFPo7wq24vMCSo%2BURO9Rw6l2aYLItEo58LP55Vf0tyno3WBGRMP8aVERYr79ubti7NhfLxLgg%2FmQzJfiQea%2F77N6mw0mqdnhdNSMdIJkRpyOxfMaHvVma0lmjmeMSMnO6%2BnVh6u5M1BchoQIvrKhT5TwMUaWSSS%2FcZFjxlF4kE6sANwaehNgdI1BZ%2BzC1wvTSBjqkAfuU0k%2FtaS5OTSFBYLuRFr3uW9PLjTTl6GpDyHE33%2BnYGNz6otrL4aRLZ4T8PrRn0O71TNrqsOEdE8bLnyXJ%2FCKFBZ36USaUgMdMzp9AWdpFN3RB6n2GniU%2BzoN0xdRkoWu8cxbvUw3k2PtzWSd20MAAT8CtZgcAm%2FruhDxGG3%2BXRO4TfSotAteE2DSUmfAUY9x6Swj0iasO8sBUh8%2FYqVfJeRCl&X-Amz-Signature=beb20dd457b375178e8ea2403927bdc6da5508c7d31bead1ae5305846c935c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
