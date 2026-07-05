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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2GVKGE%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD9pAIFftyeayyjrHZ7xC26pOxH%2BqXGW%2Bi5ibPcnasvFwIhALkkYVbRLe2i7wB9pXFhdBIr4eADbsOK4RUZifTpVk3bKv8DCDIQABoMNjM3NDIzMTgzODA1Igw32r0v4y4rLTa2kY8q3AOxNL1dQrx%2FE%2BIf1aayZOvGYFhACip0fENMa%2BLQSsHuMQ9f51xRHOH9YKidG0s38PS9uNrRHS4uqzA3tesHHWeML5T0izU6VPEVVNimErrWbm62XlSaz410xnSxYECVJhFdDpsHFRUZRkZEfr7og2YDdMUAZuxXt8Xy1%2F8EwIPcW2gy8lueCN8y7MhEkalInGPyCbXVy%2Fd2yO%2FKVc0%2BGjqGwMwKeaJHkguk0CVEd%2BXnFCHO1kktD67kQSynvv5j30TzEHQM%2B86H20LQsHHHeLYhDvKlan%2FxIWr6FgO%2Fqob37CoYrAVagd8wsTd3OoSnBedWt7UYTOvWUMyALyiG%2B0eZuSp%2BDF705mKHeEupoOyJ0gJcFI5zWVuNArpssZWFgHGzUrAQB11lmcav0xPOJ8EuSZYlRQ8cbnQ%2BqGJnhtQp4FXXi8qSBtSWNwmtWNeWjg40GwGdiQMefhPfhJQXDTZpLOiCZZtPgPO0wOPrZTTTW79msqvLRl1HSCjYElhoegiQD%2BycxpUZ5CjeHEyQt%2BJjKZ7lvd34qYmzgA4FixhZxz3lyELz4XXDseqGiRd5%2FCv2yp1brE0mXTZorqqUPxDVSNNv4Fb1as%2F%2BBQfdlbzlUbrfEcxUZOgja4vBdTCi3KbSBjqkAXjoZCNHRkKS5oafSN%2FVDcEqpL7FE3%2BZ%2Bk1FgOBJq%2BMEZ3fhxCT88qXztGaYUKXoILB70DfmT6TWzvE94jFMB51I2pjJBiwXjmoBWYTZ2EFFlhDifW2HkmvLMA81eMdo2gt6%2F6gOMFLah8M7M0rKH8k5TvneoVsJCmbsumtawrXsm3lvP%2BY3FBF4uCorEeCtwYPFreKD5cyYFVfdxKEWkMdY9DWb&X-Amz-Signature=9c473e4645a0538a5cb09805f7c849b337947ba720ba40865e348bc980fdaf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
