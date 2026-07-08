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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNV5JFDX%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T055342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEob%2BolgnPGtGPcabb3YmCRa9Ff2OFLH2XKp0kj8CfQNAiAlE83lM3RPZZmgf0VzupYXMleMRaQHBrpRnrS7CJ%2Bqsyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8RgB4G%2F2HsV%2BdAIDKtwDS0Gt8wMOcIIeLuoaLOdPdjNpouy2RsbauWshj6VgjLPFCuWE3PQYEICgoehQRGmV01xtIb6vUPK2bV7gROKJYvpeO73CPc6ygNo11E4C7tJJIL2eOB9%2Fo52YWkejEet6pNLcV8kwL89ALaWxNIxdJx9Irx7iHSYJbNKF%2FLT05KgNa4Lj3M8rFgVlCETLkyFXarCIWp4z5r9pJghb9MwHRERiwPeEqdHMfYky60wh1ke77VRUlyY73ZRKryEPqVqq15eSyD%2FmBqYBSmZobicllbiUBRfceP3xBrPi122Qif%2F0C4hs9Z4fRY%2FgxsrZ3Q9Sww2o0q2QGpvYwZ4afx6MwFPZ7c5VPEXo8SAlAyEi%2FnGfhhv1LfYZ2%2BzrG4jsTjGZx42ROjVfhlGJ1cN%2B3ihF372NTrxE6APCyUPOf1cvf0wKaBYasB1KdDQMlDBy92POFdeJDFotBQXBNxXEoLkLF4vZ6%2FZTwW3OWRpjXlWs2cHJeM4B5N03dPyCgja%2Fcuk36d%2Fyr96PkZZaNQzTywvxs%2F8taoMqkAdO%2FYL0%2FQaz8M394jganf78iWr4dzs1WWgLh2Mttt5m1IHiLP8SCX2OrHShJAclXnCWUJp%2BkHVWEo6cKMFEig8Wgh%2BMvwgwgpq30gY6pgH%2B%2FZ5fxQ%2F2Ls0s0RAMXLWy2GlfnpUtxzl4q6L8PqfYlkYpu6F6hpXvqTLU10BzwhKixZpJsq73vVLZSjLPya5Y7Pr03XMXgvs6mjCkP%2BZmlkqSuuA7mup7Xd%2BD9aiej4sYwlxky9YtnpwnxuSZ1G6wJUQZkhTrbomMFyN4gZY6KQ4kJD0dMtCKyKCym77qlZ18hHi%2FX3ES%2FpcqobymMgvJt%2BDDVSNA&X-Amz-Signature=1eb0f1b9bc821051956f46579994450d2c4bb821d8227bf2845ad94df6cfc325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
