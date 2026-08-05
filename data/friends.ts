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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH66JMR4%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T151405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDxUpA7C8b7VLPCw1PA1ursCwwveca2pcqdD6dKFmjppgIhAMeOa44A6fmXDLC2PjQ5%2FhiNsiSMXJx1vnTHaqodJYPeKv8DCCcQABoMNjM3NDIzMTgzODA1IgwLOHXdXELQBq0s2nYq3AOM6wLjE1t27eENNJbaK5qLNwE2xeNvRwjB5SCSZ57tkgvGBVFOYIiUgSIRJpgQ%2FA095qkbgQHajb4MlPjPqsFvWkRuAJPGXJbg4dkYLZJ%2FaLNBbfzs9J4ENVJWNdiG8whZdhcu%2BhrgKuPAu1eIo7SFH7FBkUPN0kbphTGQGbhd9UPzX3Sn7R5X3QQJ4MFEDgvCl%2Fn8zGowHceLzQSETy7vpmDaPNmAsAYuONOnBxm2iKXiOcsKE2AE1WYiJvcAM3YcIy0%2BFaX%2F0DM0jHTvA0ipyaf4bBRZFgYxhMFTlUrF1%2BvP3qGI5cBYZNUFpyb9ELsqwcGdj70J2mNBymnh9K8GbDMLmqKu7SYD9iqK%2FKlR6Me%2FcpdQb9n1vEqOPNa5LrByx7ov%2FSiF09CvW8ROwjzNBaU%2Fz1PZsL8vsQV6D9H9ZezCCZy1Uqbor2S3Prfhq6wB1Rb4KJFNs1TZ3gpCVVTfhPLEZF2tGZF%2FHGu13sBJQnOwFO%2BHLh4JBmQeUBfLW3LaTsaEkOsxFmTA3S2mTbKlQH%2B1t3yXtLKXAXgJ9WUqGht4agovWcTVG8ZealPLSr%2BMnv4Yvh202qS7Ar7T7nn41K9LsVDh4W7Q4NDxIgV0GuKWwWKzhcttdAyhIjCIjM3TBjqkAaoCvyPf08XgOsaGHyqZzQUIAmOPgGKudYBVBwMhFJKET%2FRD14ihhW6%2FzS3D5N0rHF23g6c72FKt5jiwe8EHM%2FOLNIHwlihVQ%2BIsdaBGXGk%2F7NIN%2B1NyZlgISJJlA3kY5ycSceRXgmBCTW31KBM2Y1AoDSajlq%2FA1waaGGkW3tFijfLX%2F04x3CttiSuGexk4%2FZvuxaNT%2BVhLeP6oBvFAqoEvJTSQ&X-Amz-Signature=a11c9abb68121a8fd734b56ffae72ce16c044f03d5913345824c306c99bc304b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
