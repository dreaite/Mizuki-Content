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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4HQAK2%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T175735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRdwxmmmUIWeaXRQUrnReWGjX5CpQafM2PhqRioLHzngIhAPEks%2Bnz4u%2Fa8ABsfFekDcPOgL72XNuQ0BYaQZ22ypn%2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Py3Bl%2FxT63kFfKEq3APM4W5LdeKCK21Kq2W2BtutpvDVvVQ87Wp4%2BJPRo9HOc9rRmLfby0CCX0wCSHgocFBh%2F8WMQ%2FUv5pS5mMMqLLzeSC%2F7PkV4bBgtFG5FAgS3PIeG5F7KEsHgUOgkGiywbg4NX%2FvU09Bo7WKmiiyPw1gywSKg0%2B8dYGSvPRid0pv4kGjpwu7GuR8OM7JB6ALF7f2m2CWK0gW%2B9RMI6yLF0mABMQ7jc3EnGiIB%2Fjp3iCjDCaLysbBAqLf15HKjsd1M763fuSswCPlPUXgkIApaQlV0lf9A%2FdHthA6UxtGe%2Fzxm1SI969MBpsfUvnYoUJZQxtLlapcSQ19GZrlkMrprSTjNsZ7dz56taOudNHIW%2BkD4noGZwnypgtV6eUuaTWXSw%2B%2Bny3qBYf3McwGXIjAWAswYF%2Bly3QK5Bo8pxfaeKKpZkcWnuGiwBeUj7IJi%2FMy6hzqB%2BEKzYX4eRAsDjfU%2F7Hcic1PteTrSLf2pOHNv%2FPuU3oGm7gCt0px2HWbZ5JshVPXFvQcslxgkwDUJkkLMB3pkLUDYrdpcWgi4LdNjZLKho1H0cIQf7mQLPc7bKX1Zmp4%2FcY4DPq0Jc4uH860R%2BYVDamAXB4TlPV9irbDGzWc%2FSXSps90R57%2FWZwPvUzDniO3TBjqkAb8hXURHvWA3gydqqZejPwonE%2FwzXXOFF4YSFxdn71n%2BVx1JbnlEle1HphTghEuh2%2Fsz245H3Tlp6l6TFPpYAlZBHzEJWig0WQuci7tfAUCeBQfQVVE%2BkqKmzVlP3gLKwUJZxkZS6aBPJ%2FGwaMwwIjXIrGCIfBkqIuH04mSLDDTr2vpHZW9H0eBoXdJLk7svrx2haHcvqxd0s%2BlSRrW4mnEb58kh&X-Amz-Signature=bee20f48bee978af75e74bb0f094cdf81c75ca612327c0db448b6258deb452ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
