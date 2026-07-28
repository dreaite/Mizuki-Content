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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIH7KPIT%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGFDPMIDckQGY7qIobT96sGlUsmy3%2Fnpujmqw0NIktPAiBbI%2FZxtLGyjvIO3GBuP3WeijX2Q0Ex1x4eU68BHidYySr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMrxE%2FcsiTM8hVOqC2KtwD%2BDLBMt3pttmIL7Oc6O%2FNhNhfFn5wNvKS%2Baa%2FRO9tcgYNmoYYp7LEVOU5pxjndWZxBZ8NeSYuAMwXv7z88oHL97CVo4G8TXMYeFY4Il4FaThpJjY%2BgusFsL9padBKXblcw421TPcUB0Wi6in1XPPRLQpxjTjhCqmQMQnIqpVenvE4vrFd1x%2BcGqNwYI%2FbSk3VEoDiXnzzMF62SFM8jssizGSz3xXrZZdfTImSRQuNS%2FvwhxLHBKjfy5CvrAxpQ8%2BFyRIjUR32vnqxAubDeqrn0O%2Fag0nmbG9ua%2BZlceT%2BQXM8VdQjS7h4VV56gmmVy8%2F3Pfvy41eyDb%2FVNuPznsc1XWb07ngiKd3f6JtgFK%2FsMBsFy3hmDQOfanmt14G5ASxH5TlXq%2BVNDy%2B%2FPVdbl39UIPIpTXT82PvuCSOHDUzV79la3vffnkIZRW6jz5pybV%2FHhpcGO%2FeujuZd9t3SJJbrlej9MGzFIfUsdYflRHFQKA5qbWPJ75ablD3qffVoYht7SUlyvrpfTtul9MgQNBC5OqoCQA0EASlvAl6JUEwP0oaxXoXWGsNYoxBfD6jaSEIwygVhMhD1Fy0V1iMlz5zzA4gRh69I1eCRTV%2FuQrp0f3pblJadQqzKwUU3CM4w09Gi0wY6pgFhE%2BLa99Ck91azLADDaln9a5hmwNZ%2FWY%2B0QOJHDvTO7bebozfUpFLKx4gjTcg%2Bb%2FzpGNVcSBd68tVbporCgW%2BmPY%2FtHGoHTN0FH%2BfZ7PwPak%2BGfLavJcNuvon%2FHbkfLI9LY9ex3JfCU0Rc402W64rAV%2BKz2IxDoluoQBccQMgLVtn6XrQn5W5VJRsUwB4WlXMQrVeucyS1I2tLWQ9Jqco5pJdnnK0B&X-Amz-Signature=40eb0fadae44dece8c68514822b0d2fc04c47a32d3ea3e388e12b444c5a6871b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
