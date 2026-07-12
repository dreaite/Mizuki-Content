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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSVOLLG%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T191817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCDWKreqEq95VNhMCK4chWKSKda%2F%2F8XX2v%2BVs4AJQCnDQIhAJ1RkvmdSq259RZ5B2lc%2FsnbItVXLmSW7T2N24qFMblHKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvxR9N0F0aAs8TLKYq3AP5nzifH9EmVKrEI0v1zIDOb7IT4OcTVqNdLyRU0z%2FTJUbT7%2BePAiQEYiYLA1QsToRAkGFTM6JXw2X2Ry%2FgnN7iLIMasl60%2Fq%2B7Og%2BLPn2itzXPxzUgh%2BrIlaJShjHh8TqCB%2B7znJdGFRA3p5OLrUD%2BtruSXcwouGPWYgDBu4Qc2cJ%2BoC4HfsuiUmPgquTyKWadlPVyMZD8Wvq2agpbjNLhcoeD5mVvJcyh1kmuk4ltQSgENTlIPjva3XYqbiZ8On%2BteKlujMSCekK6iriBgXsPRZOYwe43EgwMZu2XWxZQ1AxaiKKMB3fyvfuMg1dtgAun24O1YOI3Un24unzEPcPCgw1bYWLPYNAtkdek3Qg2JCQEYD7HXxwngabyo%2Bcpx%2BsPVMYyHHPScWpUqOMjRmDZwNDSryQfiFdCrbDqBSSRqnX%2FSc%2F%2BOs4fwp0L4a25ZQVMjq8hnCEe3DpS092ZfF5YQFvzsTWO9070pO4ySJSBhl7LANbOlmr2JFnDf3p9Qchm8%2FpzoYx%2FFqcvWCmHC4IZPxQQcAmn3CsjTlNieuiRW43C85pfjts0Z%2FJ0NmWh2fSQSbrxlxU5346VxTV50YIT00uSczHnwm0NgrWgpxBvvW75%2BMIQPiblSbxVsjCqjc%2FSBjqkAQNr8BBxeqitRjoQbNC8OLiAMa7UTU9RB75cY%2BidJL8NcZ463imu6%2BVa5ChJGiTmxDvGGUKXXbCshxNMBOWsbHFtpTyf23vc1hDIg3JCofrkyEErVO51NAYXWDmfgh8hJvpzEklQLcdU1r6xvOJgaseUB%2BOS%2FPSLKQvIMigbGOs6l3vfkocOBe8agaEQijzyh%2Bri5pF91bw%2B7zb66QqBXeeiVOh%2B&X-Amz-Signature=78d6467f2be59a9c9f9c6eae7827253ec672e1c3ba2d7d82fe0736b8b71ca0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
