// 频道与候选来源唯一配置；来源池不是默认订阅。
export const DIRECTION = {
  "input": "llm-research",
  "slug": "llm-research-picks",
  "name": "大模型研究精选",
  "icon": "book-marked",
  "scope": "语言模型架构、训练、后训练与推理能力研究",
  "boundary": "不收通用 AI 新闻、未经筛选的每日论文流和视觉/视频/多模态文章。"
};
export const CURATED_FEEDS = [
  {
    "id": "llm-research-picks",
    "name": "大模型研究精选",
    "category": "article",
    "siteUrl": "https://github.com/Serennity007/llm-research-picks",
    "feedUrl": "https://serennity007.github.io/llm-research-picks/feed.xml",
    "note": "人工逐篇精选，附原创摘要与推荐理由；审核并提交后才更新"
  }
];
export const SOURCE_FEEDS = [
  {
    "id": "kalomaze",
    "name": "kalomaze's kalomazing blog",
    "siteUrl": "https://kalomaze.bearblog.dev/",
    "feedUrl": "https://kalomaze.bearblog.dev/feed/?type=rss",
    "note": "Prime Intellect 研究工程师的长篇 RL 与 LoRA 实验。低频更新：截至核验日，最近一篇是 2026-05-07。",
    "quality": "作者主页说明参与 Prime Intellect 的强化学习工作；文章给出实际模型、训练配置、实验曲线和失败现象。算法批评中明确区分机制推理与尚未证明的因果归因。",
    "evidenceUrl": "https://kalomaze.bearblog.dev/rl-for-knowledge-awareness/",
    "evidenceTitle": "Reinforcement Learning for Knowledge Awareness",
    "validation": {
      "httpStatus": 200,
      "format": "rss",
      "itemCount": 7,
      "bytes": 107999,
      "newestPublished": "2026-05-07T02:07:00Z"
    }
  },
  {
    "id": "thinking-machines",
    "name": "Thinking Machines Lab 技术研究",
    "siteUrl": "https://thinkingmachines.ai/blog/",
    "feedUrl": "https://thinkingmachines.ai/blog/index.xml",
    "note": "研究原作者的 LoRA 与 on-policy distillation 实验。整源还含公司文章和多模态发布，只人工纳入本清单中的文本模型技术文章。",
    "quality": "LoRA 文章来自 John Schulman 等研究者的实验，区分数据容量、batch size、训练矩阵和学习率条件；蒸馏文章提供损失、伪代码、对照实验及复现入口。Tinker 推广动机需要与研究结果分开看。",
    "evidenceUrl": "https://thinkingmachines.ai/blog/lora/",
    "evidenceTitle": "LoRA Without Regret",
    "validation": {
      "httpStatus": 200,
      "format": "rss",
      "itemCount": 7,
      "bytes": 1107382,
      "newestPublished": "2026-07-31T00:00:00Z"
    }
  },
  {
    "id": "ian-barber",
    "name": "Ian Barber's Blog",
    "siteUrl": "https://ianbarber.blog/",
    "feedUrl": "https://ianbarber.blog/feed/",
    "note": "选自模型训练与研究文章；整源也写 agent 和行业观察，只有逐篇核验的研究内容进入精选。",
    "quality": "MOPD 文章明确报告作者自建 FactWorld、Qwen3-1.7B 和 LoRA 实验；TTT 文章将快权重、慢权重和序列重置区分清楚，是有边界的技术解释而非新实验。",
    "evidenceUrl": "https://ianbarber.blog/2026/07/09/mopd/",
    "evidenceTitle": "MOPD",
    "validation": {
      "httpStatus": 200,
      "format": "rss",
      "itemCount": 15,
      "bytes": 118643,
      "newestPublished": "2026-10-01T22:55:20Z"
    }
  }
];
export const EXCLUDED_FEEDS = [
  {
    "name": "Thinking Machines: Interaction Models",
    "feedUrl": "https://thinkingmachines.ai/blog/index.xml",
    "reason": "2026-05-11 原文明确涉及实时音频、视频和文本交互，超出本轮排除视觉／视频／多模态的文章边界；同源其余技术精选不受影响。",
    "url": "https://thinkingmachines.ai/blog/interaction-models/"
  },
  {
    "name": "Thinking Machines 公司宣言及开源政策文章",
    "feedUrl": "https://thinkingmachines.ai/blog/index.xml",
    "reason": "A Safe Path to Open Weights / The Future Worth Building Is Human 属于政策或公司观点，未选入训练方法研究清单。"
  },
  {
    "name": "Transformer Circuits",
    "feedUrl": "https://transformer-circuits.pub/feed.xml",
    "reason": "高质量且已实测 HTTP 200、Atom 56 条、最新 2026-08-21；交由 AI 评测与安全方向收录，避免方向间重复。"
  },
  {
    "name": "Deep (Learning) Focus",
    "feedUrl": "https://cameronrwolfe.substack.com/feed",
    "reason": "实测 HTTP 200、20 条、最新 2026-09-28，当前内容高度相关；RSS 为 5.52 MB 全文，部分文章标注 Paid。已读 LLM RL guide 与 midtraining 原页，本版不为扩充数量追加同题综述，可作为后续候选。"
  },
  {
    "name": "Token for Token / Jack Morris",
    "feedUrl": "https://blog.jxmo.io/feed",
    "reason": "实测 HTTP 200、10 条、最新 2026-06-15；embedding 训练长文有价值，但整源包含较多 AGI 和职业观点，本版已有足够原创训练文章，不再增加。"
  },
  {
    "name": "科学空间 / 苏剑林",
    "feedUrl": "https://kexue.fm/feed",
    "reason": "实测 HTTP 200、RSS 10 条、最新 2026-10-03；收到的 UTF-8 XML 标题已包含大量 U+FFFD 字符，无法靠改解码恢复。本次不把损坏标题导入精选；站点研究质量本身不受此判断影响。"
  },
  {
    "name": "Neel Nanda mechanistic-interpretability RSS",
    "feedUrl": "https://www.neelnanda.io/mechanistic-interpretability?format=rss",
    "reason": "实测 HTTP 200、16 条，但该分类 RSS 最新停在 2023-07-18；不能把作者仍活跃与这条 RSS 仍更新混为一谈。"
  },
  {
    "name": "Artificial Fintelligence",
    "feedUrl": "https://www.artfintel.com/feed",
    "reason": "实测 HTTP 200、20 条，最新为 2025-06-26；新近 Making RL Fast 在作者另一站发布，不能把那篇误算进本订阅。"
  },
  {
    "name": "Finbarr Timbers 个人博客 RSS",
    "feedUrl": "https://finbarr.ca/feed.xml",
    "reason": "实测 HTTP 200、10 条、最新 2026-04-15；Making RL Fast 为强候选，但整源混有个人理财、通用工程与旧视觉内容，本轮已有更紧凑的模型训练选集。"
  },
  {
    "name": "Davis Summarizes Papers",
    "feedUrl": "https://dblalock.substack.com/feed",
    "reason": "搜索到的主站 archive 最新技术内容为 2024-08-26，主题为广泛 ML 论文综述；未实测本 RSS，不声称订阅已验证。"
  },
  {
    "name": "Sebastian Ruder / Yao Fu",
    "feedUrl": null,
    "reason": "搜索发现研究质量优秀，但目前所读页面较旧或含多模态主题，未核验合适 RSS，不为凑数加入。"
  }
];
