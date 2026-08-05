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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APEZ63D%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T193639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDVytHNqxHhM98fdvMn5apddDYNWG6RFvcCp9X87TDMJwIhAJSXAhGYSeYHY2aAXQAROrWCfzTnnq5xd9j%2FRs98ZWB1Kv8DCCsQABoMNjM3NDIzMTgzODA1IgxRu6l8%2BcJeqZAv8dUq3AOr2PjGC9vkjLj5dqmIYVm1CtPeF2GKrKvjubzoiuL7zIVWgITJziSjNpybq%2FjVUpZYDqAqVrHm7dNPmfhbmJJrvqrgEw%2FFwIwVpO45srmayK2v2x%2BsMh%2B7%2FW6D9ikKScyqv3yQVMmIAiv37Y8GLngwnN7sEOBleqUEaEh2a4HS1MPkwTubfWzgtmyYpcBvx00sMdXXoKwMVYfn3ZzfsJ4h0Rae24UhRP9LxZDwB9PaA2FhItJpi2088eGBoSLcs7DdCYT1pjTQdux305GACArKGGOomRk%2Fyn%2F4fVp2oUi3qh1QVTUA39I3Rc8XhTYsxhT2OGSIWOMhYsbSfm8TeK5vNgrEFtUopa%2B3L2Ag4l%2BN5YalwSWK5n1tlS4mGYOx8NSrNNGxZ91T65lVKCXIZvE%2FNAx8d5wa%2B3DN0AodEGrCD%2BkECppkdsywICmE%2BP8M7iE49cLq1yfqf%2FKE5y78%2FPzqNeAAK2ceOnv17ayHZS4I126rCzHQbc5OUdjfymW65Avd7WFUz%2FyxyZpWpaMGyGjeeWtecrllvn6gv0N11%2FDhviBnD19ydrZzKDmWwUAxzad2iNNwXV11UUT0FX1E%2BU2P6K8LCOZk%2BaUpdSDJOsoo9e9NKdPT78hZio8l3zDVgM7TBjqkAaLtkLi4XMXsarNWcNDZa%2BfLWJK4GpNjQGJ%2Bp8B%2FoVZN2h7C7WreTO4ISCKz%2BGacf85ZbjXl2afevt4MOsEFPN3j7gjmOaWHgFvAMsU64mdTocQX7M654A2fFtThN4lDJPNJjjFEl7WYevx6tuiBpCcJMrL1JSAuk51P9QRUAVz9MUVM0uHN6LBoX71pYztHqW%2BIqG%2FaKth701QEP3jp%2FxJMdsdh&X-Amz-Signature=4b57a06b2a000a01e52bcf04ba86b99fa8df4dfde7bb264708e4ed498196c26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
