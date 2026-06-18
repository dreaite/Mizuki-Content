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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEK2LVY%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T091525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSfcZqu2XD%2FLeoaS4ppR2OjX0CCUElWmBoyhIS8fO99wIhALWfUSC7USsLITv%2FfNTCPRbxqkOXbMPQSBtZPqkqTZH1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww3LGeA3MT5m4sANQq3ANU9pAHTAKdxihrghE4EABKAUaO%2FxmWdNnVrtSsYQY1UJygA9nk1dmXTMhW9mxDIfOD8ZoyoMjnyJoSIlFSNBqQYbQYi3AGi7xxwrS7IqwQ9c7sUdlu8Ux9sGrOxqq73U1g4yPisGpU0S4nkQGHn7y4mPyanvZcppsqALtJBrlwxmaVyw1aeegaLT8GnsZLQQ8kgSpP00KIQgGS3ZCMQQZyFG2aseA555PtxjBs2N5MR5BKoKhJ7tVutu%2FZDHmYvSW7oSHSx8TCe0uhp9MPHL1DugGxECeuv%2BntduK70kf5VgL9F5sQ%2F9X%2BB28EXrghWF5QC%2FeoB2Qn525hVu6W5MgPBFUxz0lQuxvFxG5vWxMvTt22zC1ppYPNRH8HZvs9hvEXi3MI79sc%2FWjLvq0zDLnc6nnAORiTjypob47JOfC%2BCtAttZWfozIxTjE6zsF79KZ7nToSf0GS6S%2BF1q6ZTK2uKs9e9lp3BAxUcfyxm7QTCH3K8DcVME6AWT6NtVADZdjO1kHQYrdMe4H7W%2BXPkUpFAbWsqX7wVjyGS%2B2YidesEPRCBm8JHWlAb9CSa7zedMhrKFFNR35VzyngzWktGhjh5nNiouwy6ZmpC0Lm8yOyF5owJAbUabhdbESPMTDPu87RBjqkAUz64VDfZXAhdC39PhPUgIgLGTT7R%2FBWNVL%2BiVRDd6n5JOu%2Bv8Z2%2B%2FhsZyQaWPOgveBqCq3SA%2F4FUilP4tjS11LC6xyf67qwqPHZhWDNFI19qeCkDSSiM9wd0dnXqr8G8sD7jmHOR1CGPqPXVLaTgvC4LiUb5fpjijfEzeHxakO7%2FjB%2BZ9I661vtBoPBHehc%2BRLMTU7lSLVXx3%2FytHXgw%2BoVFOTF&X-Amz-Signature=46837229543dc12be39d1468cc20da7e1becdc446a8f2f26cb2088c9bb16f592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
