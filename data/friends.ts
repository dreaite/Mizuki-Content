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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7PEEGB%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCp8FusdIfrnYWB19qNPCyVvO%2BtxvgjHkvFCgZfDaZs8gIhALBzaTTo1zWDXYGL5BU30g5Zqr%2BRep1ic3YrCDhNlUJVKv8DCC0QABoMNjM3NDIzMTgzODA1IgxueWdquHJ38EGsb5Iq3AOM6Y4%2BRRl0ea%2FSqDdkJpCD%2BWab0PE47X5PPpT75ZSWur2OXLEp5xlIZ5sgDtjjqTS7Z9ok1pLJWrVEZhaNyIIuex8oUWjqJ4o%2BZ6wbhH03RDZu0dqDKetoVcsQ3oB2JSsr8ykmTanuOsiWUcit%2FKu9Pv2V8oSPgTgjp3hjcGL9gGTx4DKXj4F%2FU01Uhu3952X5%2BvXPMsesAjWuSMdOQOFM4Fj2QdSxaOFLxMdCVKboulqGRbZd6pxeKkn5VmaReXwBqrpmJpKSFQvQM%2FOg772sXguzXxySOPoQVAe76p6%2BXkJM8ZTOj8dk71QtCLx7Nl1AeALxvhsZ7QAJIiWNTEyv%2B7qcGzpkd2xNvKVZhfxQPKvgV170RRWs%2FMuh4%2FoNyizRehlze043duILRbeOmogxWrhcQulL8aibqst76x0Y1HAsDPlrqNhqHK%2FA6lRKrkA%2B3sn4OP1EbMMeEd%2BwiQxscUZ70DLeuSfLaZMAd94NVuz9RwpI22m%2FTz1PhrOCAEZxn1%2BhW681zjGmExOHMJUhjmqIeREtwHaFOKDQPL4cMO1i%2FhcIJCWh3a77KTxxpni1OosSWzGL%2FCsmkcxBJs6gu%2B7y8fh6EbtenK%2ByWNUNwMDW7qGS4WC2FJIOeDDro%2B3RBjqkAa1ZFnEyVgVz8LhAoX%2FU%2FNRi5kE%2B7JrCxXSQwsjAOUyd8n7sMBL%2BKkUGlc3QoJoX1H%2FArq13%2BlZMnX8MbIKMO7CnW4or9%2Fh1eTXk%2FItv1mikN7gO2mFekAK1tlAN3cJT4wKDeuYgMoz5zbfXVehSU1lbPih00cb4qHuo9Ddfj0sZrt%2BLlWTiX8aXHlOIRZY8yYS61f2XP%2Ft9XiPnw%2F%2FmOEZjaSyY&X-Amz-Signature=70ec6b359ddfaa90530da152d7580e902b8284ef3869d7307f75f51614d5b0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
