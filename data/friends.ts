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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVIRVOR%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T225422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKOVwDGVSBgn1XmzqlLaWCTnlKkvqSHA7K6Zszb%2FZ5SgIgcIS60qBl7zspi%2B9YmKcs6aNNyzP7VQMtiVBpjxZ0OlUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD3oL1secaFLrszGyrcA8zCZfIspTholt5J7MyrF0Mt7FZ7bN%2F9MAXfnQ%2Ftccc7ParDA0U4y%2FnyMtqMUnhZINdoAic0jxvx9PWKrX0598BuGOUUPznpytpA6BVPYF0G3XAbDPonxD9boAefsOSNlMXCNbyJ%2BavGUfFoJoRekWZ4HXl1sGQ0ceoPHqLz2safNKJNPlQj%2Fqt7QJgs8SabnTVRVFKpgAQQY9ZzawOGKYvhnZym2b7vork4HNsP7ywbsac3HjvKohULnUqn%2BpA4ImYcBpBtIEzfu6Wi7Jz2rhRhyog83fYngu3IBxLvW2kwVrhg02ytfYDfrQtq0%2FrGmktWZSO0KhEnxbiFYOEbxmztpKgRCpJgRTSOZITebwu5sep8L8b90AO1QgLwrzSJUv0%2BpNyWVTm7JIlgzs6zUgyEQNP3iZ41y1JTZZjPinGRH%2F5WRDtp86b2b7N5oL%2B5Dtjtq5F6NeorZ2PfCMbg6D3EUkx1xpW70vPUNy5xsQZZti7DYqicuel2HCO4knNq4s%2Fw43TM28jDB9Ev8bLQp%2FAiE5qdfn4i1yebM7PjN42Xpl3U0acidaHr37zRbgzFoT9iH9UNXw5aikkAmI534AtHIywycfFfAlSxgGlM7mpA1cRJ8ht5Yr1fki8sMJaC9dIGOqUBsiixsiUkzkg30oyFrrT4nwnal5adzx8QPkoG8m4YObs%2FWzY2RHosC4ps79Z4sZsQZR271hH%2Bb1VnDW1SBDa0zth%2BJVS3%2FZ%2FFWLmMdgDIuDuKkUTxun119PNJvnOIbinqogu5OWNd%2FhpFUYJWkYKPr8OCCysl3QBKC8f4bLOwT6YB52Lkblhf7DLbSlFNfaui3VA15ezN7rz1VfuYsAQtWm2BLfAA&X-Amz-Signature=3b32c95a3b3d7db43b97944955b3a690686d51d636734da2d6d5b575f21593b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
