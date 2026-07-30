// 日记数据配置
// 用于管理日记页面的数据

export type DataLanguage = "zh_CN" | "en" | "ja" | "zh_TW";

export interface DiaryTranslation {
	content: string;
	location?: string;
	mood?: string;
	tags?: string[];
}

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
	lang?: DataLanguage;
	translations?: Partial<Record<DataLanguage, DiaryTranslation>>;
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "真紅、お誕生日おめでとう🎂\n\nこれからの1年も幸せでありますように🥰\n\nホットケーキだよー🥞",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Happy birthday, Shinku 🎂\n\nMay the year ahead be filled with happiness too 🥰\n\nHere are some pancakes 🥞",
			},
			"ja": {
				content: "真紅、お誕生日おめでとう🎂\n\nこれからの1年も幸せでありますように🥰\n\nホットケーキだよー🥞",
			},
		},
		date: "2026-07-21T12:29:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/5ca528db95ec4845-shinku_birthday.png",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/89046353fe098e8e-IMG_4971.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/3a45465cca1780d28d8fc551b999f497/inline/012d7566129bedf8-IMG_4972.jpeg",
		],
	},
	{
		id: 2,
		content: "和真红的海边散步～\n\n个人第一幅画了XD",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "A seaside stroll with Shinku～\n\nMy very first drawing XD",
			},
			"ja": {
				content: "真紅と海辺をお散歩～\n\n自分にとって初めての絵ですXD",
			},
		},
		date: "2026-06-28T12:05:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/38d5465cca17806f8141fb6eea89de45/inline/27142b38d1064ac2-shinnku01_last.png",
		],
	},
	{
		id: 3,
		content: "仔细想想，现在的我应该才算是真正开始探索自我的下一步吧。我是谁，到我可以是谁，到我应该是谁；从脑内到思考，到行动的渴望，到溢出的开始改变的现实，我开始深刻感受到我这个存在。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Thinking about it carefully, perhaps only now am I truly beginning the next step in exploring myself. Who I am, who I can be, and who I should be—from thoughts within my mind to conscious reflection, from the desire to act to the reality that is beginning to change and overflow into the world, I am starting to feel the depth of my own existence.",
			},
			"ja": {
				content: "よく考えてみると、今の自分はようやく本当の意味で、自分自身を探求する次の一歩を踏み出したところなのだと思う。自分は誰なのか、自分は誰になれるのか、自分は誰になるべきなのか。頭の中から思考へ、行動への渇望へ、そして変化し始めた現実があふれ出すまで。私は、自分という存在を深く実感し始めている。",
			},
		},
		date: "2026-06-14T17:39:00.000Z",
	},
	{
		id: 4,
		content: "有一说一，最近开始学习区块链，没想到反而感觉更类似于当时打acm的时候学习的状态了。secp256k1要补各种数学知识和推论，再实际看ethers的实现的时候，结果又发现了熟悉的竞赛风味的代码（也是非常愉悦的了😊\n\n话说我本来以为会是学习java框架的那种感觉，现在想来从钱包这个主体来学，可能是个不错的选择。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Honestly, I recently started learning about blockchain, and unexpectedly, it feels more like the way I used to study when competing in ACM. secp256k1 requires catching up on all kinds of mathematical knowledge and proofs, and when I looked at the actual implementation in ethers, I found code with that familiar competitive-programming flavor again—which was also incredibly enjoyable 😊\n\nCome to think of it, I originally expected it to feel like learning a Java framework. Looking at it now, learning from the perspective of the wallet as the central subject may be a pretty good choice.",
			},
			"ja": {
				content: "正直なところ、最近ブロックチェーンを学び始めたのだけれど、意外にもACMをやっていた頃の学習状態に近い感覚がある。secp256k1ではさまざまな数学知識や推論を補う必要があり、実際にethersの実装を見てみると、またもや懐かしい競技プログラミング風のコードに出会った（これもすごく楽しい😊\n\nもともとはjavaフレームワークを学ぶような感覚になると思っていたけれど、今考えると、ウォレットを軸に学ぶのはなかなか良い選択かもしれない。",
			},
		},
		date: "2026-06-13T18:41:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/37e5465cca17806aa05ecbbfe728e0a5/inline/eb4331db2b71e582-image.png",
		],
	},
	{
		id: 5,
		content: "最近我稍微意识到了一点增量意识和存量意识的差别，虽然稳定的工资可以提供一份稳定的收入，但是这也会诱导人的思考局限在了这份开销水平之类。稳定的收入更应该作为一份心态的稳定剂，而不应该为此而把自己的行动边境就此限制。当今这个泡沫时代，依然还是有很多热钱可以赚到的，没有道理因为手上的一份收入就丢掉另一份。",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Recently, I have begun to notice the difference between an incremental mindset and a fixed-pie mindset. Although a stable salary provides a steady income, it can also lead people to confine their thinking to that level of spending and similar considerations. A stable income should serve as an anchor for peace of mind, not as a reason to limit the boundaries of one's actions. Even in today's bubble era, there is still plenty of hot money to be made. There is no reason to give up one source of income simply because you already have another.",
			},
			"ja": {
				content: "最近、フローを重視する意識とストックを重視する意識の違いに少し気づいた。安定した給与は安定した収入をもたらしてくれるが、その一方で、人の思考をその収入に見合った支出水準などに縛りつけてしまうこともある。安定した収入は心を安定させるものとして捉えるべきであり、そのために自分の行動範囲まで制限してしまうべきではない。今のようなバブルの時代にも、まだ稼げるホットマネーはたくさんある。手元に一つ収入源があるからといって、別の収入を手放す理由はない。",
			},
		},
		date: "2026-04-03T16:29:00.000Z",
	},
	{
		id: 6,
		content: "到达！\nねり真可爱",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "Arrived!\nNeri is so cute",
			},
			"ja": {
				content: "到着！\nねり、本当にかわいい",
			},
		},
		date: "2026-03-05T15:23:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/b07fdaea9d9e2b69-IMG_4504.jpeg",
			"https://r2.dreaife.tokyo/notion/covers/31a5465cca17800ea630ce1133d62da1/inline/af76c478fc5fd3ce-IMG_4502.jpeg",
		],
	},
	{
		id: 7,
		content: "正式搬到mizuki来了😊",
		lang: "zh_CN",
		translations: {
			"en": {
				content: "I've officially moved to mizuki 😊",
			},
			"ja": {
				content: "正式にmizukiへ引っ越してきました😊",
			},
		},
		date: "2026-02-24T08:48:00.000Z",
		images: [
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/5a79f9ca47c65d7f-MASHIRO_e102b.png",
			"https://r2.dreaife.tokyo/notion/covers/30f5465cca17802bbd27fbcc5d9068a4/inline/a38d26f4aaef1f93-SHINKU_AS_e01a1.png",
		],
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
