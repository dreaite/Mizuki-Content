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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPOBPESM%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T000813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrZArBYNZtw%2BGzIr7kQlZ8ptrAwUhUFX2poYagBpH%2BLAIgJJ9LIj%2FvmLnPJJB9wNZbqJdko9F0Uv%2BdpUhf2Z7lyI4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDN5tIDbQCG4uC3prGircA6nikaCYBxsL0xrLODzfl%2FBN6DMwGNHZ1MrSixcJUTbIpycH%2FbiLdLvRJ5%2BJ64PtfTnvi7bPC3FqCI3%2BPTbDLNbVFzEJ2svuUnZFRf6lieVLJoDvqRMYWK7h3rkHshi0RX%2B8BzeEud6Ku6%2Fqx1T21oVSaP%2BhMaIREOxUpoAXA9nqKbQbwKDIHfGRnxKcmTrRLlvIibSRH3FMtIH4hHiwmphDdBT5HJCEABzgLOnJ28tCui4s30nYmxvXoC%2F%2FL7cQiu1SyIt3E7T5mPflEDdET1QkkNmeIOuPaoVMqZ%2Bs2F1g6xSBJmgWX0S%2Fh4qmGENbViyPW0UDvTLwIYrTI2R2tdPEdlLopF49HBLswB9NjWfMtUmfkxF0KiEIpz0Nz9ZDkd5T3cTIlkJ60BLxkbH1eS1Fd5Kp%2BO3zlCR9B5PIins4hwAd7f1P%2FlTjKRO3lBGnz3UNQzRrQ0%2FtUZSRl9IxBtpVDR%2F3TLLu9xDaQJxvcJdpI730Mlbo%2F3QOyjAwaUb5Qh5D5VkhfZ07GPaWD0vxYnyIR%2F6mP6D%2FkmeMqk9NNrPDkypweCftc7lW6F5HQoqpeHQ1AlPA5aYTPH8dsyjINpOdgKR3c5MYmvoVM6CFq1voKOvtnIMF4VynUUv7MKniq9IGOqUBS0uX29BM25%2BikLdUCk2lBif8rID7f9kB9Jp%2FbS042WsVFXR%2B%2FXTfddQO5XDFX%2Bs7EiwLwSGiGpJBb9fE4vfx51MCO9T6uxlL9OA5Q%2B%2Bd0qj5C4ZDpH0Li9Qk3um6kl67fLEQkPq3sQpYzLGu%2FIbPn9FFrPC75iYe7rGuRvIsNA7NAsMP31eUMhRzddJnnE5dKesgzmZFnOxtOm%2BE5aFrCMNUeB3o&X-Amz-Signature=e700f4b0d2c2fc75b55d821d20f1552f6111d7b3b4926c8e4bac6bb56a603cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
