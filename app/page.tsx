import styles from '@/styles/home.module.css'

import logoBadge from '@/assets/ustc-badge.svg'
import portrait from '@/assets/portrait_line.png'
import signature from '@/assets/sign.png'
import qqCode from '@/assets/qq_qr.jpg'
import wechatCode from '@/assets/wechat_qr.png'
import snapchatCode from '@/assets/snapcode.svg'

import {
  BsTools,
  BsGithub,
  BsWechat,
  BsTencentQq,
  BsStars,
  BsFileEarmarkSlides,
} from 'react-icons/bs'
import { FaSnapchat, FaLaptopCode } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoSchoolOutline } from 'react-icons/io5'
import {
  AiOutlineIdcard,
  AiOutlineExperiment,
  AiOutlineFlag,
} from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { GoRepoForked, GoChevronRight } from 'react-icons/go'
import {
  CplusplusOriginalIcon,
  OpenglOriginalIcon,
  MatlabOriginalIcon,
  PythonOriginalIcon,
  TypescriptOriginalIcon,
  ReactOriginalIcon,
  NumpyOriginalIcon,
  PandasOriginalIcon,
  TensorflowOriginalIcon,
} from 'react-devicons'

import Link from 'next/link'
import Image from 'next/image'
import HoverImage from '@/components/HoverImage'
import Expandable from '@/components/Expandable'

const PRINT_MODE = true

export default async function HomePage() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Profile />
      <Education />
      <Research />
      <Competition />
      <Coding />
      <Skills />
    </main>
  )
}

function NavBar() {
  return (
    <nav>
      <div>
        <div className={styles.name}>Yunqin Zhu</div>
        <hr />
        <div className={styles.school}>
          University of Science and Technology of China
        </div>
        <div className={styles.contact}>
          <div>
            <HiBuildingOffice2 className={styles.icon} />
            No.96, JinZhai Road Baohe District, Hefei, Anhui, 230026, P.R.China
          </div>
          <a href="mailto:yqin02@mail.ustc.edu.cn">
            <IoIosMail className={styles.icon} />
            yqin02@mail.ustc.edu.cn
          </a>
          <div className={styles.divider} />
          <a href="https://github.com/HasiNed">
            <BsGithub className={styles.icon} />
            HasiNed
          </a>
          {PRINT_MODE ? null : (
            <>
              <div className={styles.divider} />
              <div className={styles.iconset}>
                <HoverImage className={styles.qrcode} src={qqCode} alt="">
                  <BsTencentQq className={styles.icon} />
                </HoverImage>
                <HoverImage className={styles.qrcode} src={wechatCode} alt="">
                  <BsWechat className={styles.icon} />
                </HoverImage>
                <HoverImage className={styles.qrcode} src={snapchatCode} alt="">
                  <FaSnapchat className={styles.icon} />
                </HoverImage>
              </div>
            </>
          )}
        </div>
      </div>
      <a href="https://en.ustc.edu.cn/">
        <Image className={styles.logo} src={logoBadge} alt="" />
      </a>
    </nav>
  )
}

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <AiOutlineIdcard className={styles.icon} />
        Profile
      </div>
      <div className={styles.content}>
        <Image className={styles.portrait} src={portrait} alt="" />
        <div>
          Hi there! I&apos;m Yunqin Zhu&nbsp;
          <Image className={styles.signature} src={signature} alt="朱云沁" />, a
          senior student majoring in AI at USTC. My research interest lies at
          the crossroads of machine intelligence and information systems, where
          data-driven models meet human-centered designs. My aspiration is for
          my research to empower innovative applications in marketing, social
          computing and beyond, offering visionary insights to decision-makers
          and fostering positive societal impacts.
        </div>
        <div>
          Currently, I am actively seeking a Ph.D. position in the fields of
          AI/CS/MIS. If my academic pursuit aligns with yours, please do not
          hesitate to drop me an email. I am eagerly looking forward to
          potential opportunities and collaborations.
        </div>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.title}>
        <IoSchoolOutline className={styles.icon} />
        Education
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div>
            <div className={styles.name}>
              <div className={styles.left}>
                University of Science and Technology of China
              </div>
              <div className={styles.right}>Hefei, China</div>
            </div>
            <hr />
            <div className={styles.subname}>
              <div className={styles.left}>
                Bachelor of Engineering in Artificial Intelligence, Talent
                Program
              </div>
              <div className={styles.right}>Expected July 2024</div>
            </div>
          </div>
          <div>
            <BsStars className={styles.icon} />
            GPA: <em>4.06/4.3</em>,&ensp;Rank: <em>1/229</em>
            {/* higher than 2nd - 5th place with statistical significance (p < 0.01)*/}
          </div>
          <div>
            Honors:&ensp;
            <ul>
              <GoChevronRight className={styles.icon} />
              <div>
                <em>Candidate of Guo Moruo Scholarship</em>&nbsp;(top 1%, the
                highest honor for undergraduates)
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              <div>
                <em>National Scholarship</em> (top 1%, 2 years)
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              <div>
                <em>Shenzhen Stock Exchange Scholarship</em> (&lt; top 1%)
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              <div>
                <em>Outstanding Student Scholarship</em> (2 years)
              </div>
            </ul>
          </div>
          <div>
            Relevant Courses:&ensp;
            <ul>
              <GoChevronRight className={styles.icon} />
              EE/CS:&ensp;
              <em>
                Machine Learning, Data Analysis, Knowledge Engineering, Signal
                Processing, etc.
              </em>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              Stats/MS:&ensp;
              <em>
                Game Theory, Operations Research, Microeconomics (ongoing),
                Stochastic Process, etc.
              </em>
            </ul>
          </div>
          <div>
            Links:&ensp;
            {PRINT_MODE ? (
              <a
                className={styles.attach}
                href="http://home.ustc.edu.cn/~hasined/misc/%E7%BB%A9%E7%82%B9%E6%8E%92%E5%90%8D%E8%AF%81%E6%98%8E_%E5%87%BA%E5%9B%BD%E7%94%A8_%E6%9C%B1%E4%BA%91%E6%B2%81%28PB20061372%29.pdf"
              >
                <GrAttachment className={styles.icon} />
                ranking.pdf
              </a>
            ) : null}
            &ensp;
            {PRINT_MODE ? (
              <a
                className={styles.attach}
                href="http://home.ustc.edu.cn/~hasined/misc/%E6%99%AE%E9%80%9A%E6%88%90%E7%BB%A9%E5%8D%95%E8%8B%B1%E6%96%87_%E5%87%BA%E5%9B%BD%E7%94%A8_%E6%9C%B1%E4%BA%91%E6%B2%81%28PB20061372%29.pdf"
              >
                <GrAttachment className={styles.icon} />
                transcript.pdf
              </a>
            ) : null}
            &ensp;
            <a
              className={styles.attach}
              href="https://github.com/HasiNed/my-ustc"
            >
              <GoRepoForked className={styles.icon} />
              github.com/HasiNed/my-ustc
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Research() {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>
        <AiOutlineExperiment className={styles.icon} />
        Research Experience
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div>
            <div className={styles.name}>
              <div className={styles.left}>
                Hong Kong University of Science and Technology
              </div>
              <div className={styles.right}>Guangzhou, China</div>
            </div>
            <hr />
            <div className={styles.subname}>
              <div className={styles.left}>
                Research Assistant, Thrust of Artificial Intelligence
              </div>
              <div className={styles.right}>July 2023 - Present</div>
            </div>
          </div>
          <div>
            Supervisors:&ensp;
            <em>
              <a href="http://datamining.rutgers.edu/">Prof. Hui Xiong</a>
              &nbsp;&&nbsp;
              <a href="https://scholar.google.com/citations?user=j08V64UAAAAJ">
                Dr. Chao Wang
              </a>
            </em>
          </div>
          <div>
            Fields of Study:&ensp;
            <em>Recommender System & Diffusion Model</em>
          </div>
          <div>
            Research Topic:&ensp;
            <em>
              Diffusion Recommender Modeling via Conditional Denoising and
              Deconvolution.
            </em>
            <div>(half-completed manuscript, available upon request)</div>
            <div className={styles.quote}>
              Abstract:&ensp;
              <em>
                We tailors conditional diffusion model for top-K recommendation.
                By progressively recovering user preferences from corrupted
                implicit feedbacks, our models demonstrate superior generative
                capability and outperform representative baselines on several
                benchmark datasets.
              </em>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <div className={styles.name}>
              <div className={styles.left}>
                University of North Carolina at Charlotte
              </div>
              <div className={styles.right}>Charlotte, USA</div>
            </div>
            <hr />
            <div className={styles.subname}>
              <div className={styles.left}>
                Remote Research Assistant, Belk College of Business&nbsp;
              </div>
              <div className={styles.right}>April 2022 - June 2023</div>
            </div>
          </div>
          <div>
            Supervisors:&ensp;
            <em>
              <a href="https://belkcollege.charlotte.edu/directory/lina-zhou">
                Prof. Lina Zhou
              </a>
              &nbsp;& her Ph.D. fellows
            </em>
          </div>
          <div>
            Fields of Study:&ensp;
            <em>Social Media Analytics & Multi-Modal Learning</em>
          </div>
          <div>
            Research Topic 1:&ensp;
            <em>
              Content Moderation in Social Media: The Characteristics, Degree
              and Efficiency <br /> of User Engagement.
            </em>
            &ensp;(published by IEEE,&ensp;
            <a
              className={styles.attach}
              href="https://doi.org/10.1109/ASSP57481.2022.00022"
            >
              doi
            </a>
            )
            <div className={styles.quote}>
              Abstract:&ensp;
              <em>
                We fine-tune RoBERTa, a state-of-the-art language model, to
                detect misinformation on a social media platform. By comparing
                model performance under different input settings, we show how
                the characteristics of user engagement affect automated content
                moderation.
              </em>
            </div>
          </div>
          <div>
            Research Topic 2:&ensp;
            <em>
              Predicting Sales Lift of Influencer-generated Short Video
              Advertisements: A Ladder Attention-based Multimodal Time Series
              Forecasting Framework.
            </em>
            &ensp;(accepted by HICSS &apos;24,&ensp;
            <a
              className={styles.attach}
              href="http://home.ustc.edu.cn/~hasined/misc/HICSS%202024%20Sales%20Lift%20Camera%20Ready.pdf"
            >
              pdf
            </a>
            )
            <div className={styles.quote}>
              Abstract:&ensp;
              <em>
                We extract multimodal features from short video advertisements
                and fuse them with ladder-shaped cross-attention layers to
                predict the sales lift of advertised products. Experiments
                demonstrate the superiority of our fusion method and the impacts
                of different modalities.
              </em>
            </div>
          </div>
        </div>
        {/* <div>
            Research Topic 3:&ensp;
            <em>
              Applying N-shot learning on semi-labeled data to deepen the
              understanding of public attitudes towards different post-pandemic
              trending topics on social media.
            </em>
            &ensp;(in progress)
            <ul>
              <GoChevronRight className={styles.icon} />
              Problem:&ensp;
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              Method:&ensp;
            </ul>
          </div> */}

        <div className={styles.item}>
          <div>
            <div className={styles.name}>
              <div className={styles.left}>
                University of Science and Technology of China
              </div>
              <div className={styles.right}>Hefei, China</div>
            </div>
            <hr />
            <div className={styles.subname}>
              <div className={styles.left}>
                Student Innovation Program, Department of Management Science
              </div>
              <div className={styles.right}>May 2023 - Present</div>
            </div>
          </div>
          <div>
            Supervisors:&ensp;
            <em>
              <a href="http://bs.ustc.edu.cn/English/profile-70.html">
                Prof. Yongjun Li
              </a>
              &nbsp;&&nbsp;
              <a href="https://bs.ustc.edu.cn/english/profile-1708.html">
                Dr. Lizheng Wang
              </a>
            </em>
          </div>
          <div>
            Fields of Study:&ensp;
            <em>Dynamic Pricing & Hierarchical Bayesian Model</em>
          </div>
          <div>
            Research Topic:&ensp;
            <em>
              Data-driven Dynamic Pricing Optimization under Consumers&apos;
              Learning Behaviors.
            </em>
          </div>
          <div className={styles.quote}>
            Main idea:&ensp;
            <em>
              Updating consumers&apos; belief about product quality under the
              signaling of price, sales and advertisements. To find the optimal
              pricing policy for sellers, we estimate the model with
              retrospective observational data and then perform dynamic
              programming.
            </em>{' '}
            <br />
          </div>
          I am attempting to expand upon this project for my undergraduate
          thesis, incorporating several new ideas.
        </div>
      </div>
    </div>
  )
}

function Competition() {
  return (
    <div>
      <div className={styles.title}>
        <AiOutlineFlag className={styles.icon} />
        Competition
      </div>
      <div className={styles.content}>
        <ul>
          <GoChevronRight className={styles.icon} />
          <div>
            Ranked <em>13/1165</em> in Google Isolated Sign Language Recognition
            Competition on Kaggle.
          </div>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          National 2nd prize in the Contemporary Undergraduate Mathematical
          Contest in Modeling 2022.
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          National 2nd prize in the 14th Chinese College Mathematics
          Competition.
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Prizes in school-level programming competitions and hacker games.
        </ul>
      </div>
    </div>
  )
}

function Coding() {
  return (
    <div>
      <div className={styles.title}>
        <FaLaptopCode className={styles.icon} />
        Coding Projects
      </div>
      <div className={styles.content}>
        <ul>
          <GoChevronRight className={styles.icon} />A policy gradient
          reinforcement learning method for combinatorial optimization
          problems.&nbsp;
          <a href="https://github.com/HasiNed/my-ustc/tree/main/Courses/Intro%20to%20Algorithms">
            <BsGithub className={styles.icon} />
          </a>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Implementation of TransE and related techniques for knowledge graph
          embedding.&nbsp;
          <a href="https://github.com/HasiNed/my-ustc/tree/main/Courses/Knowledge%20Engineering">
            <BsGithub className={styles.icon} />
          </a>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />A from-scratch ordinal
          regression pipeline for cloth size recommendation.&nbsp;
          <a href="https://github.com/Dune-Z/Machine-Learning-Project">
            <BsGithub className={styles.icon} />
          </a>
          <Link href="/MLProjectModel.svg">
            <BsFileEarmarkSlides className={styles.icon} />
          </Link>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />A full-stack annotation tool
          to assist the research of sentiment analysis.&nbsp;
          <a href="https://github.com/HasiNed/sentiment-annotator">
            <BsGithub className={styles.icon} />
          </a>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Classical algorithms for stereo matching.&nbsp;
          <a href="https://github.com/HasiNed/my-ustc/tree/main/Courses/Intro%20to%20Artificial%20Intelligence">
            <BsGithub className={styles.icon} />
          </a>
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          An experimental 2D/3D rendering engine.&nbsp;
          <a href="https://github.com/HasiNed/my-ustc/tree/main/Misc/opengl%20learning">
            <BsGithub className={styles.icon} />
          </a>
        </ul>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div>
      <div className={styles.title}>
        <BsTools className={styles.icon} />
        Skills
      </div>
      <div className={styles.content}>
        <ul>
          <GoChevronRight className={styles.icon} />
          Programming Languages:&ensp;Python, Typescript, C++
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Deep Learning Frameworks:&ensp;Keras, Tensorflow, PyTorch
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Data Analysis Toolkits:&ensp;Pandas, Numpy, Scikit-learn, Matplotlib
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Writing & Typesetting:&ensp;LaTeX, Markdown, HTML+CSS, Microsoft
          Office
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Developer Skills:&ensp;Linux, Git, Docker, Next.js for web
          development, OpenGL for computer graphics
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          TOEFL:&ensp;104;&ensp; CET-4/6:&ensp;638/625
        </ul>
      </div>
    </div>
  )
}
