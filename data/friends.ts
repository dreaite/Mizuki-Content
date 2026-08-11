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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZOXWJH%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T160526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2zA0ryDddCJ%2F3uhd5wbt2WG%2BTkiW%2BS28nbRP7PmeRawIhAOAqbMhXiw3rdRFyLSUywhBvH5H6CzvU5CO2nr9hGwKmKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUHNaGAVSwecVKOcq3AMZPfEyCt1gp7uQRLg1ET1LdtTEVPWQg6Qpi4p8%2Bdhw5oSjVPQWtIJkLmVMYPfwBHsCYJzWJMVc7jD6h%2FBzJ5mlEiEIWEdUSjAhRA1kuwngeMVJg0gAq9U1cDExekQvKwdibyF8ZGfMziCNVs48SMSX2PfuhKL%2FYMZUOqjRyo8r8mvCp3RwGk9%2FjgK68QvxpsAEftJCI5dkNXg%2BiYXQXRvbm%2B7q99rEGOecmX%2BvxRkpAYKF4fhMeUNqntIbv1DFqJKdsYX42gdkFKPYks0u6SVWyNsJH%2Bu%2FjbOro12OoozRCqbtFZmyD3YES6oJucxuosyQMZXNV4asHH5vfPLJRmhUG1iX4UThTRPnCt7j6bxfyTMFS%2BnjIn9OMlrop93Psb2nzfGgDK9n%2FuG%2BYU6F3Vk41Dz4niwRpyXcAdhxSztEjgB%2FxSME3BII1bCH10dbh5NuAyTo6rgr0XKZJATfADa1Cne04wtQBAkMBigqfPJ37B58cBDmO8fKETQhKPZOyltCPsd%2BTNaqxqe9ltWKzt9KTUqmuWjnmzd24AbOZGpC6D%2Fx6uG9IAD29wJez%2FLjN4z0j3tpPA5mmTuZaNDPHm3LXJo7nMMsTgsEGgqfLxea%2Fmiuq42OICi3mEANrTCMhu3TBjqkAYjhH2cEKxvog3R4LIQ2fGRHRDQVkz790%2B6PUL8TMar2YAWOal838lmcRr2tmDawD4u9%2FXSKCemA7PteVkCLokrx3oDJBE6ZKE%2F5tPj9k6QlaOINfTdsE9%2BFuQ0qEY%2FAtd1MJVfQiWzLH%2Fw8sv2jvoxvoQBp020wDytuPNYRrwVpxp6G9jLJxqDIa%2BL8Ns4lO134J205HRR7h%2BjtdQDl3Ots6p%2F5&X-Amz-Signature=442268e148a90e6a95080300f5d2549962b3e201aab694b4ab56abd1212abdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
