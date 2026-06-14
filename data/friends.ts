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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTUUZG5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T201914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfK5AByDOcmeW8%2BHpidroSZjdDreSV9lS8pxwOL1m54gIhALsH7iUpl7cz9D3wsJYnyyY6YL0l0g78hmRbiP2EmDt1Kv8DCE0QABoMNjM3NDIzMTgzODA1Igwv6%2BQ2KB7ahVOZLW0q3AN2VIFU%2FdkEjjSxveKInH8jURoIvf3IJXrdXfSXJcqLfQx6Wh8RhUo%2FpqRA%2FrZnoZXhJs35jKfxG5FrmtC5qzDcjNfpjg7Jg%2FLYj5BQAfYkZuQtnSTvPKRvAlMGIof2Gl%2B7aXxPVoly0UeJ6cFgb%2Fnk5%2BYJFbzF3%2F17xtoZl7wS11YkAkfF%2Bkg2qmnKQSLSmWK%2Bdg81LH6m5PWelZmd29zdbA4DC7w%2BWphbEKY1um%2FlUpysgsR9uNunTSLh7nSh6vLs2c7Y4ijd6EKMAEI%2FsizWrN%2Bl7AIZ7ZMLK6329wB83wTh3%2FoBbjM13Pp1aQTVozK6wJJfStGn97Z0PTlqhn0cHPA%2BUab7Kes2e%2FWbBS1xtt%2FThWJlEwKrDwMoUjKIwvH8GF8OZ6RBdXynjd9pykCdkvVFj4c79S2JJIQxbC1uuDi%2FaOaj32ACWvXmKtqdCl1Jde24W0%2Fd8YUSf1wJ%2FTvaIjTxj%2FWdYWz%2FQl22%2B9KUjZBR9ovrdkPYbo8j4W%2FXcoUAPuxTcKCplhafO%2B805%2FTAAzcfiFFN4ovABERPpJMRMmGzeJhqmJanwn6eGeq3DctvKiEK%2BSOmVphiCa3jXLpu7aGkPK2uhobg1f0LqY1oKAmQYuriB8JotowR5TCXlrzRBjqkAVpx%2BLGmfr84Xb0yEGKYMoszEEPslm9uPOfBZRSMGzCYI2nmlpEftbUff4EhXwTwtSPik0gX4%2BLoE%2ByvVBwuAPXmlBfc6r%2FjbC8uiYZUT2ddXNjpgsju7IssIS%2BVnFuT%2FvQ85dD5RgjMw4dvXJuZjng74FQrf0QA2WndPSvdkqdc0uLo5oWA3vxrb8gsZQaRh3xktKlziL%2FVQ4TXIJRwlMs8zBH8&X-Amz-Signature=cf4864b5b030620706fe6e4dbbbc222cccaaf71a17905ed3eef293c17839fa90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
