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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOTLXZZ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T032706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSk0Yanafc3uYbLEwpTbhPQ2CeQHb595gKPh4pRCo%2FcwIhAMAnGYzKkq%2B4WfFTnGjYRQikSG5BEzSIEHUNOnhw%2BmChKv8DCGQQABoMNjM3NDIzMTgzODA1IgwYUJttScI%2Bo5mk8Rcq3AOavQbhlA9Yyp1HmMklyyNbmjSo8IwoD7CgDr4sUNxl14VT15%2FyR4avg3P5TxRmS4ogrIKHye5GR1jGCjhDL4Fxx%2BpuKWVmsqy1hYSSxTcKGy1ckC48Jnx8VKR6gF9AqdMsyOV%2FLeFO9kf52oSSIRSuSaRjxphcNrYvrO8Ab22APG2uPWvDopsC5jLBi3tQzuxnvPtWh8CEoIVxaTmg5n3b0Gehn2DD7wt%2BXif5E4ZCMS63bjB07mPEa2sZWH1XI6jZ1zy9k6WG6hebT%2Frj1hnnzkEsZM2Ohhgg2UIycdkK%2F%2B7bpOz9XhG76Izi5r4lvgljY0qTel%2F5th6MiqnpRwSJ9CzvIFLljVgIdaoPaxENFrEvCjUKfhOPt43fTwfIHsUU%2BfELrj%2FQyaH1IS0UgNpwXRKqApRy260JrCsoakVRcRIT%2FWeRD5QURQZDOkP3KJv4cLzOfv7rOeNnCLMCLkmWaBX0BQX6fnEhq6Ba%2Be19K0FwTq3vjUzEYrR0B%2FeKLOYY8pn8YTZ1vjO9uT8S3V3BPcXVZe4es0azpDy1Deht9i%2FKhQ8mimgOTmG6H3sHaEwFJoi81CGAa%2FIJ9hFmI%2B%2BdxzZfeoaxwpo5JazoXg46xWtv%2BSWS0m3EMCeFrjCmr9rTBjqkAf%2FknHMJqYWL3iij1HSwsAHLHVmwWDuMLgXmGA9ZIM5xRcwF7uChjQXDbEy7IFHZDQ4vihVndVPDP%2Bycu7wYrVbt%2Fe76ofVvZUw24BfxTMkwyqt2z4zAWWWsZR45QlMM%2Bi6iK8S3H7s9W1kXnvdxqSH%2BsRKub3c6SnqLUoz13MXBPEOiHf2tz2P%2BYqjLIDAO3CAoFXRjNGL2i8ibUCwn0VnaYu0C&X-Amz-Signature=f88458d4a0443db374d283e6788535d35de88dbfabeda75833ce6f41d9e2dcf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
