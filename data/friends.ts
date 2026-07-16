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
		imgurl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/54a8b4df-81fb-415b-b2b5-1fdceeba0143/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJ5TQQ7%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T114057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIXO86Owb%2FA9Wy456eIvKDqy0uwegGVk9QXsGGelcIRQIhAIfgwKFOlHRGPVSEEM8%2FE0sFO8aMxh%2BNbH0ds2cffQapKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLiwxCQcENw77jJQgq3AM0r59Y%2FBTltuhlyRZLH0BX5vfQLfY4FJdTaoX7psIJFUTM%2BR6Cap%2FHA3f2iyqlSwBdzs6q2YHqEDObT6cUgdlPnujGbCII7tYYOtTJieD9pK2qg36a6GpNesEVpEQ%2B7hlB77K7GXgAS4UN2UiZstZvmm8ASKGjHama0x7UeNv2CoPV7SkygBirbd7SVZtAPHcn1v2Ic5C9wNX8bPMqX6JemWLSgY%2FwnZWlAnxS3KajmdgysYUffhOJozuUxs0RkcMRWlEa91b7s2mGxavDl3ZkcEQeoveoWiUwfurGicWkbdrXsvbThTASyRxxelJMS5NWcMIxPZT1pIQ8pjb4tQSGx9obiS6HepkKc%2BwKJvqeWQ3Ur4Wr%2Fpmvr8ycUVTQDMwv4Vdo%2BtSlAX%2Bx7How7d1eE13xk%2BNINlr%2FWaOmi6kTez2qDzuVGSqsgx%2FjTP9mldd1PWNG3DtPBg7ykwfA5fJm8dPs9RXqOti7sDfJXkiglPJ%2BybtbZNlWBow293YSFgIDmoxwQXCRPwE6%2B0vUbL1i%2FTpQ%2FIzUNFyKo9C1PABwVk79FtGQ9c8zW3wyLYYV8li3P3KefDbavnUJ4H6uywru6u2jhdzlq1QliSLQ1RigTXu8iFGdLc7q3rThfzCv3uLSBjqkAccaLDRvyhHNw3HEOVZygmi6ftT2TSkb4ftv845Nsv8Vne2qIuw86vuuppHdqpZJti6cCqLPq5cuY0sDAstyW%2FxjUAgODj%2BN8Xg4gGJaln6c01qSZBdRlztcZyjzql1HCCUxoZARdVYF7BETwm%2B8Qeh6lBLouqIEhZPmpzUoQjdrfjq4lpzq2W1XD3yJ2QoBL2vfm84aZj8f33ZD7npmUGy9i2xo&X-Amz-Signature=e19a4806cfde40e46c8fce6b8996f961bd75efcbed2f25c01d6f9d5f7bdaa61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
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
