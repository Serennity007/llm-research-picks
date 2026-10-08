# 大模型研究精选阅读清单

精选日期：2026-10-09。6 篇原站技术文章，按原文时间倒序；基础文章不伪装成新消息。摘要与推荐理由为原创，完整内容请访问原站。

## 1. [Test Time Training](https://ianbarber.blog/2026/09/02/test-time-training/)

来源：Ian Barber's Blog · 原文日期：2026-09-03

区分推理时更新模型参数的慢权重训练，与在前向过程中更新状态矩阵的快权重机制。说明部分 KV binding 型 TTT 可改写成线性注意力，而且状态会随新序列重置，不能据此宣称模型获得持续学习能力。

**精选理由：** “推理时训练”容易被混用；这篇把具体更新对象和重置边界讲清楚，能避免把新的模型状态机制当成持久知识更新。

## 2. [MOPD](https://ianbarber.blog/2026/07/09/mopd/)

来源：Ian Barber's Blog · 原文日期：2026-07-09

作者用 Qwen3-1.7B 和 LoRA 适配器，在自己的 FactWorld 任务中实践多教师 on-policy distillation：先各自强化两个能力，再让学生生成轨迹，由对应教师评分并共同更新一个学生适配器。

**精选理由：** 把“合并多个专长”落到小模型、教师路由和 KL／policy-gradient 两种训练目标，提供能读懂的实践入口；示例规模有限，不能直接推断前沿模型效果。

## 3. [Reinforcement Learning for Knowledge Awareness](https://kalomaze.bearblog.dev/rl-for-knowledge-awareness/)

来源：kalomaze's kalomazing blog · 原文日期：2026-05-07

用 Qwen3-8B 的单层线性打分器构造 Bradley–Terry 奖励模型，再做约 300 步 RL。通过真实人物与虚构人物问题的保留集，检查模型是否学会先判断自己知道什么，以及拒答、谨慎表达和误拒真实问题之间的变化。

**精选理由：** 用具体实验重看偏好建模和奖励信号，既看减少编造，也看泛化与真实问题上的代价，适合研究模型知识边界。

## 4. [Don't Exclude Rollouts From Your RL Training Runs](https://kalomaze.bearblog.dev/dont-exclude-rl-rollouts/)

来源：kalomaze's kalomazing blog · 原文日期：2026-02-20

分析 DAPO 等实现中丢弃超长 rollout 的问题：过滤样本和对长度塑造奖励并不等价，前者可能改变训练分布和组内优势基线。文章明确承认，现有公开曲线不足以证明某次评测崩溃由过滤单独造成。

**精选理由：** 关注训练奖励上升而评测下降的具体机制，保留作者对因果证据不足的限制；值得作为算法实现审查的反例阅读，而不是定论。

## 5. [On-Policy Distillation](https://thinkingmachines.ai/blog/on-policy-distillation/)

来源：Thinking Machines Lab 技术研究 · 原文日期：2025-10-27

由学生生成自己的轨迹，教师给出逐 token 的概率信号，再以反向 KL 更新学生。原作者解释它如何减轻离线模仿的状态分布偏差，并用推理任务和明确的训练伪代码比较蒸馏、SFT 与稀疏奖励 RL。

**精选理由：** 在同一篇里连接采样分布、密集反馈、损失函数和复现实验，是理解现代后训练的一篇基础读物；复现应以更新后的 cookbook 模型清单为准。

## 6. [LoRA Without Regret](https://thinkingmachines.ai/blog/lora/)

来源：Thinking Machines Lab 技术研究 · 原文日期：2025-09-29

通过模型、rank、数据量、batch size 和学习率对照，研究 LoRA 在哪些后训练条件下接近全量微调。结论强调适配器容量、MLP／MoE 层覆盖及优化配置；少量 RL 数据与大规模知识学习需要分别判断。

**精选理由：** 给出 LoRA 可行区间及失效条件，避免只凭单个 rank 或一张最终分数表作选择。虽然发表于 2025 年，仍是值得保留的研究方法基础文。
