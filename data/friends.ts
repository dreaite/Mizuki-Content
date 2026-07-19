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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O62YBVZ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T055534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0KIssDTG%2Fsegzjz5BFs4m2Sre74ZSv6L6Fxj5xwBfnwIhAMZESthAF8nLFX%2BjXgdSvMl5FQZ92G%2B86ZMmYtMOIDBOKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYQa4iKAAGA7TtElsq3AMLkgQKk4yl2LsdT2ztAoSRt5FDjIvYOERoeHW37ADY7Htlj9IO6fzPesBCVa4bjgiKEMxEvVUO7B3J7I8t8CTZEuDOXkaOaX1oAEVISJgS4oWWEfUy%2By2eQNok8q%2FJdkCmk4kMMkRWETHvhseS0fW5tTSzA07pfLCa4C7o5WsFyC2GTPxIO5zliOIIzL8OC6sv3x1lmlh0ph7dW3COD0mlr00w6odxvGXTtR9Vr0a9F3bbYSS6tKqbri825oKBwgvZYcR9Atq4PGxcQgs5TfpIIspYUNUKamGnn8gvCM6o3pN909w%2BAjAQLoOgk92eWNV%2FqhmhnZk2QildurxIJ7bsSybhv%2FtaEujaf7BwCSJeBx0ZoOnY7vsiJTtfJD5p8G8HBllgycvwBqMFQIBnX4JIFFmgiLKd3otDSI3sjUNzIKPqLMmlF9%2BLW2ijFhw5QzQ%2Bi6cYOzmJDXKrlw6IJydmRkajCU0IIznBwfcpbuX4TPf67%2B2fRrhV4X7pxHyLFva65R0AX78LqaRxLVJ7wjeABbQ%2FM%2FRLjUOEoy%2FhYmJkwbBMttwXxtcUdMmow1lTFgvDuRN3lpA8sPbOggsLQDgQmWvmHAhKK%2FY9wY7SIQwRUlDmjY8e3WoINRW%2FajCUu%2FHSBjqkAbKsAk1BHp82L1OtYjunHv2a46todMOeItkC9Cgfigts405EkC9ek%2F8TLhbrAaPbWokmxVYfr%2ByrYCV0uMX6bqpDS%2FnEY79mziuVdUICHxlPOweNnLWWmzYB8DLwzjy6igI9mcObGmdlLAP0KOzJM3rc4IB6EnkLeIy%2BlbrPGPqD1FKIJ7PHppBFUK59iVlOqVJQAltfj%2B%2FqAgwZbQ1D6%2B2ZY0hW&X-Amz-Signature=47fc2a5fddc82388a1ecf28299db1e553eee989d12161af130ae2fb1e41cfed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
