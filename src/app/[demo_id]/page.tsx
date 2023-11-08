import styles from '@/styles/demo.module.css'
import '@/styles/markdown.css'
import Markdown from '@/components/Markdown'

import { Metadata } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

const all_demo: Record<string, { title: string; markdown: string }> = {
  gl_demo: {
    title: 'OpenGL Demo',
    markdown: `
# OpenGL Demo

1. In the course of Computer Programming, I developed a 2D game engine utilizing the OpenGL low-level API, featuring Order-Independent Transparency (OIT), numerical integration, keyframe animation, text rendering, and more, resulting in a codebase of 3000+ lines.
2. In the course of Freshman Seminar, I refactored the previously mentioned game engine code in C++ and extend it to incorporate 3D rendering capabilities. Then, I reconstructed three-dimensional facial meshes of my team members using open-source algorithms, and implemented facial expression control based on vertex coordinate interpolation.

![](${basePath}/assets/gl_demo1.gif)
![](${basePath}/assets/gl_demo2.gif)
`,
  },
  reddit_demo: {
    title: 'WebUI for Reddit Sentiment Annotation',
    markdown: `
## WebUI for Reddit Sentiment Annotation

As a Remote Research Assistant at UNC Charlotte, my responsibilities involve developing a web-based User Interface (UI) to facilitate data annotation and data analysis tasks. The technology stack for this project includes:

- Frontend: Typescript, React, Next.js, Zustand;
- Backend: Python, FastAPI, Pandas.

![](${basePath}/assets/reddit_demo.gif)
`,
  },
  sizerec_demo: {
    title: 'Cloth Size Recommendation',
    markdown: `
## Machine Learning Project: Cloth Size Recommendation

- Problem: Given user information and clothing size, determine whether the clothing is too small, a perfect fit, or too large. This can be framed as an ordinal regression or multi-class classification problem.

- Methods:
  1. Implement Stochastic Gradient Descent (SGD) and Broyden-Fletcher-Goldfarb-Shanno (BFGS) algorithms.
  2. Utilize clustering to obtain "prototypes" and enhance user representations.
  3. Fine-tune BERT and use text feedback to fill in missing labels, thus expanding the dataset.
  4. Develop two strategies to address data imbalance issues.

- Personal Contributions:
  1. Wrote the preprocessing code and established the basic gradient descent framework.
  2. Led the problem modeling efforts and integrated innovative solutions proposed by team members.
  3. Produced visualizations and formatted the research paper.

![](${basePath}/assets/sizerec_demo.svg)
  `,
  },
  uncc_content_moderation: {
    title: 'Analyzing the Effects of User Engagement on Content Moderation',
    markdown: `
## Analyzing the Effects of User Engagement on Content Moderation

- Paper (Published by IEEE): K. Wang, Z. Fu, L. Zhou, and <u>Y. Zhu</u>, “Content Moderation in Social Media: The Characteristics, Degree, and Efficiency of User Engagement,”2022.

- Abstract: Social media are important for sharing knowledge but also spread misinformation. Content moderation is crucial to combat this issue. However, the role of user engagement in content moderation is not well understood, and the efficiency of moderation needs improvement. This study explores user engagement in social media and uses advanced text analysis models for moderation. The findings show that user engagement's nature and timing impact moderation effectiveness. While using the entire history of user engagement can be impractical, the study suggests ways to enhance moderation efficiency without sacrificing effectiveness, offering insights for tackling misinformation in social media.

- Personal Contributions:

  1. Developed a data annotation tool.
  2. Accomplished the majority of data cleaning tasks.
  3. Identified errors in the formulas within the research paper and improved its language and grammar through proofreading and editing.

![](${basePath}/assets/roberta.png)
    `,
  },
  uncc_short_video: {
    title: 'Predicting Sales Lift of Short Video Advertisements',
    markdown: `
## Predicting Sales Lift of Short Video Advertisements

- Paper (Accepted by HICSS): Z. Fu, K. Wang, J. Wang, and <u>Y. Zhu</u>, “Predicting Sales Lift of Influencer-generated Short Video Advertisements: A Ladder Attention-based Multimodal Time Series Forecasting Framework,” 2023.


- Abstract: The rise of influencer-generated short video advertisements (ISAs) on platforms like TikTok has made them a vital marketing tool. However, predicting the sales impact of multiple ISAs is challenging due to their complex content. This study introduces a new forecasting framework that uses ladder attention and LSTM-based models to predict ISA sales lift. Experiments on TikTok data show that our approach outperforms baseline methods. This research provides a valuable tool for optimizing short video ads and contributes to multimodal prediction in marketing and information systems research.

- Personal Contributions:

  1. Participated in method discussions.
  2. Took responsibility for data scraping and feature preprocessing.
  3. Assisted in writing the introduction section of the research paper and contributed to correcting some errors.


![](${basePath}/assets/multimodal.png)
`,
  },
  diffusion_cf: {
    title: 'Towards Graph-Aware Diffusion Modeling for Collaborative Filtering',
    markdown: `
## Summer Research: Towards Graph-Aware Diffusion Modeling for Collaborative Filtering

- Abstract: Recovering masked feedback with neural models is a popular paradigm in recommender systems. Inspired by the success of diffusion models in solving ill-posed inverse problems, we introduce a conditional diffusion framework for collaborative filtering. This framework iteratively reconstructs hidden interactions guided by user historical behaviors. To better align with the intrinsic characteristics of implicit feedback data, we implement forward diffusion by applying synthetic smoothing filters to interaction signals on an item-item graph. The resulting reverse diffusion can be interpreted as a personalized process that gradually refines preference scores. Through an affine transformation, we equivalently characterize this model as an anisotropic Gaussian diffusion in the graph frequency domain, establishing both forward and reverse formulations. Our current model achieves state-of-the-art performance on one benchmark dataset and holds promise for generalization to larger datasets.

![](${basePath}/assets/diffusion_cf1.png)
![](${basePath}/assets/diffusion_cf2.png)

- Results on Movielens-1M:

|              |   Recall@10  |   Recall@20  |   NDCG@10  |   NDCG@20  |   MRR@10  |   MRR@20  |
|--------------|--------------|--------------|------------|------------|-----------|-----------|
|   MF         |   0.0885     |   0.1389     |   0.0680   |   0.0871   |   0.1202  |   0.1325  |
|   LightGCN   |   0.1112     |   0.1798     |   0.0838   |   0.1089   |   0.1363  |   0.1495  |
|   DLAE       |   0.1180     |   0.1867     |   0.0904   |   0.1165   |   0.1478  |   0.1607  |
|   MultVAE    |   0.1170     |   0.1833     |   0.0898   |   0.1149   |   0.1493  |   0.1616  |
|   DiffRec    |   0.1178     |   0.1827     |   0.0901   |   0.1148   |   0.1507  |   0.1630  |
|   L-DiffRec  |   0.1174     |   0.1847     |   0.0868   |   0.1122   |   0.1394  |   0.1520  |
|   LinkProp   |   0.1039     |   0.1509     |   0.0852   |   0.1031   |   0.1469  |   0.1574  |
|   BSPM       |   0.1107     |   0.1740     |   0.0838   |   0.1079   |   0.1388  |   0.1513  |
|   Ours (forward only)     |   0.1182     |   0.1869     |   0.0897   |   0.1153   |   0.1436  |   0.1559  |
|   Ours     |   **0.1236**     |   **0.1888**     |   **0.0957**   |   **0.1210**   |   **0.1561**  |   **0.1686**  |

    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: { demo_id: string }
}): Promise<Metadata> {
  const demo = all_demo[params.demo_id]

  return {
    title: `About Yunqin Zhu - ${demo.title}`,
  }
}

export async function generateStaticParams() {
  return Object.keys(all_demo).map((demo_id) => ({
    demo_id: demo_id,
  }))
}

export default function DemoPage({ params }: { params: { demo_id: string } }) {
  const demo = all_demo[params.demo_id]

  return (
    <main className={styles.main}>
      <Markdown content={demo.markdown} />
    </main>
  )
}
