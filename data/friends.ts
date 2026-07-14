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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3HTAKJ%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T145308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC%2B0uwCpfgoyPAXYveLGwRNaGnLtNELsfTeIvl9QhzzSgIhAO5%2BwNNeu3xJMOe9iyoJpitljLq59RL43%2BSZ%2BknDiwbwKv8DCBcQABoMNjM3NDIzMTgzODA1IgwpEUWBWXF%2FeUr6t2oq3APC%2F%2BdmQY6wHIpthBMNZRrrudiIJNCyKF6iwai5KHuMuNIbj7DvYNQbZAl9%2B6Sc78CMHaV%2Fk3awuhEQm0ooY4dL%2B7vv3hgQ9pcLkXsD%2FHhoXmGnbLjgsA1Nk4%2F28f%2BquGJhQGDE0Nt%2BF%2Bu%2FvUcQDtO3uyuq4BRLW2gbW0NzPDpDFShvWkEpIPtnisX%2FniTTRbZR8MKCmnOdxMCIxUOIOS574eEzqlMFHmO0gxAV9udpDjwKN%2F5WUFPBuIY8DWk2zhoGwh13lMXHXvlRVVuqzAsGbOGtUMXt6QZhSzm%2FXMUfEVY4DyuqRZxIutsJ3hzEtWG2%2BpQZ0XwzWDfIKmJXwNgqbON4xS6jBzQ6qZqdxUbu7l9sPECZb0Ll%2BZs3C0BfMQUA%2F9c%2FQAzkE9gj4qT4d525nTXjhDQuGiae99nZrbP1H2vOs4TT1vh3rzIAJjye%2Bn3yRVMg814AcM9bqSIDbz0NoVUBYN3d2dcMThoOQlx9tCK1eC1vBL%2BZ56KqQMAWfyLmhDj4Z8Hqnl6LmFGb0kQbLbSQ3lJyQ%2BBk0E9jR045El6IRyJfIYsoi8b4%2BBD6Ybd8hQR8RXwuqUSJckd8ELgobYjEBevMj%2FQrhmFMoy1HUVw2L9QE4uUnZtS6yzCJ%2FdjSBjqkAfFdndeHPlugtM%2BMS7%2Bi3Bn2SPCyhN8Ud1ognazvdamTlCv2S2NE08fnFek9OE4NK5CPv7kxIbISa3MBfRRq30M5Y6pDT4PBRc%2BcREZyNHYireZt%2BoZtal6VJaRiqQx3cc390wUCHvqdu5pn8kSnV91lBVoGIgXSoR%2BfZCahJCBCd3rNsf%2BO0HmCSXuEAtswP%2B7gAk6h3Fo3yEaNKxVjafXCj6k9&X-Amz-Signature=b71605067bc7ebe2dc576c2972cdd3a1c5634ff357627d141793e6b7fcc4a47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
