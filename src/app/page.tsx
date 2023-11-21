import styles from '@/styles/home.module.css'

import badge from '@/assets/ustc-badge.svg'
import portrait from '@/assets/portrait.png'
import signature from '@/assets/signature.png'

import {
  AiOutlineIdcard,
  AiOutlineTrophy,
  AiOutlineExperiment,
} from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import { GrAttachment } from 'react-icons/gr'
import { IoSchoolOutline } from 'react-icons/io5'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { GoRepoForked, GoChevronRight } from 'react-icons/go'
import { BsTools, BsGithub, BsStars, BsLinkedin } from 'react-icons/bs'

import Link from 'next/link'
import Image from 'next/image'

const PRINT_MODE = true

export default async function HomePage() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Profile />
      <Education />
      <Awards />
      <Experience />
      <Skills />
      <Footer />
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
          <div className={styles.divider} />
          <a href="https://www.linkedin.com/in/hasi-ned/">
            <BsLinkedin className={styles.icon} />
            hasi-ned
          </a>
        </div>
      </div>
      <a href="https://en.ustc.edu.cn/">
        <Image className={styles.logo} src={badge} alt="" />
      </a>
    </nav>
  )
}

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <AiOutlineIdcard className={styles.icon} />
        About Me
      </div>
      <div className={styles.content}>
        <Image className={styles.portrait} src={portrait} alt="" />
        <article>
          <div>
            Hi there! I&apos;m Yunqin Zhu&nbsp;
            <Image className={styles.signature} src={signature} alt="朱云沁" />,
            a senior student in Artificial Intelligence, graduating from
            University of Science and Technology of China. My undergraduate
            research lies at the crossroads of machine learning and information
            systems, with applications in social media analysis, online
            marketing and recommender systems. In my future plans, I aim to
            delve deeper into the realm of AI for social good, laying
            theoretical foundations for explainable machine learning and
            offering reliable support to policy makers.
          </div>
          <div>
            At this moment, I am actively seeking a PhD/MPhil position in the
            fields of AI/ML/DS. If my academic pursuit aligns with yours, please
            do not hesitate to drop me an email. I am eagerly looking forward to
            potential opportunities and collaborations.
          </div>
        </article>
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
            Rank: <em>1/229</em>,&ensp;GPA: <em>4.06/4.3</em>,&ensp;Average
            Score: <em>93.33/100</em>
          </div>
          <div>
            Selected Courses:&ensp;
            <em>
              Machine Learning (98), Game Theory (97), Intro to Algorithms (96),
              Probability Theory (99)
            </em>
          </div>
          <div>
            Selected Projects:&ensp;
            <ul>
              <GoChevronRight className={styles.icon} />A from-scratch pipeline
              for cloth size recommendation.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://github.com/Dune-Z/Machine-Learning-Project">
                  Code
                </a>
                |<Link href="/sizerec_demo">Demo</Link>]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />A reinforcement learning
              approach to 0-1 knapsack problem.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://github.com/HasiNed/my-ustc/blob/main/Courses/Intro%20to%20Algorithms/labs/POMO.ipynb">
                  Code
                </a>
                ]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              An implementation of TransE for knowledge graph embedding.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://github.com/HasiNed/my-ustc/blob/main/Courses/Knowledge%20Engineering/Lab2-TransE/main.ipynb">
                  Code
                </a>
                ]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />A full-stack annotation
              tool for sentiment analysis research.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://github.com/HasiNed/sentiment-annotator">
                  Code
                </a>
                |<Link href="/reddit_demo">Demo</Link>]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              An experimental 2D/3D rendering engine in OpenGL.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://github.com/HasiNed/my-ustc/tree/main/Misc/opengl%20learning">
                  Code
                </a>
                |<Link href="/gl_demo">Demo</Link>]
              </div>
            </ul>
          </div>
          <div>
            References:&ensp;
            <a
              className={styles.attach}
              href="https://drive.google.com/file/d/13YQyZHucyaUeHw_fi6d2PY8cRRBE5Auj/view?usp=sharing"
            >
              <GrAttachment className={styles.icon} />
              <u>ranking.pdf</u>
            </a>
            &ensp;
            <a
              className={styles.attach}
              href="https://drive.google.com/file/d/1qaxfvxybTZSd1CHuMMdYPpkEMlHLivIx/view?usp=sharing"
            >
              <GrAttachment className={styles.icon} />
              <u>transcript.pdf</u>
            </a>
            &ensp;
            <a
              className={styles.attach}
              href="https://github.com/HasiNed/my-ustc"
            >
              <GoRepoForked className={styles.icon} />
              <u>github.com/HasiNed/my-ustc</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Awards() {
  return (
    <div className={styles.awards}>
      <div className={styles.title}>
        <AiOutlineTrophy className={styles.icon} />
        Honors & Awards
      </div>
      <div className={styles.content}>
        <div>
          Scholarships:&ensp;
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              (Candidate)&nbsp;
              <em>Guo Moruo Scholarship</em>, the highest honor for USTC
              students, 2024.
            </div>
          </ul>
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              <em>National Scholarship</em>, top 1% at USTC, 2022 & 2023.
            </div>
          </ul>
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              <em>Talent Program Scholarship</em>, 1st in AI at USTC, 2023.
            </div>
          </ul>
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              <em>Shenzhen Stock Exchange Scholarship</em>, top 1% in CS at
              USTC, 2022.
            </div>
          </ul>
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              <em>Outstanding Student Scholarship</em> at USTC, 2020 & 2021.
            </div>
          </ul>
        </div>
        <div>
          Competitions: &ensp;
          <ul>
            <GoChevronRight className={styles.icon} />
            <div>
              Silver Medal in Google Isolated Sign Language Recognition on
              Kaggle. (Rank: <em>13/1165</em>)
            </div>
          </ul>
          <ul>
            <GoChevronRight className={styles.icon} />
            National 2nd prize in the Contemporary Undergraduate Mathematical
            Contest in Modeling 2022.
          </ul>
        </div>
      </div>
    </div>
  )
}

function Experience() {
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
                The Hong Kong University of Science and Technology
              </div>
              <div className={styles.right}>Guangzhou, China</div>
            </div>
            <hr />
            <div className={styles.subname}>
              <div className={styles.left}>
                Undergraduate Research Assistant, Artificial Intelligence Thrust
              </div>
              <div className={styles.right}>July 2023 - Present</div>
            </div>
          </div>
          <div>
            Summary: Mentored by&nbsp;
            <a href="http://datamining.rutgers.edu/">Prof. Hui Xiong</a>
            &nbsp;and&nbsp;
            <a href="https://scholar.google.com/citations?user=j08V64UAAAAJ">
              Dr. Chao Wang
            </a>
            , I initiated my own research projects on two data mining topics and
            conducted literature reviews, theoretical analysis and experiments
            to validate my ideas.
          </div>
          <div>
            Research Topics:
            <ul>
              {/* <GoChevronRight className={styles.icon} /> */}
              <BsStars className={styles.icon} />
              Towards Graph-Aware Diffusion Modeling for Collaborative
              Filtering.&ensp;
              <div className={styles.attach}>
                [<a href="https://arxiv.org/abs/2311.08744">Preprint</a>|
                <Link href="diffusion_cf">Demo</Link>]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              Dynamic and Explainable Sales Forecasting under Influencer
              Marketing. (<em>In preparation for undergrad thesis</em>)
            </ul>
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
                (Remote) Undergraduate Research Assistant, Belk College of
                Business&nbsp;
              </div>
              <div className={styles.right}>April 2022 - June 2023</div>
            </div>
          </div>
          <div>
            Summary: From several research projects led by&nbsp;
            <a href="https://belkcollege.charlotte.edu/directory/lina-zhou">
              Prof. Lina Zhou
            </a>
            &nbsp;and her PhD fellows at{' '}
            <a href="https://belkcollegeofbusiness.charlotte.edu/kaim/team/">
              KAIM Lab
            </a>
            , I learned the basics of information systems research and
            contributed to discussions, data visualization, and paper writing.
          </div>
          <div>
            Research Topics:
            <ul>
              <GoChevronRight className={styles.icon} />
              Analyzing the Effects of User Engagement on Content
              Moderation.&ensp;
              <div className={styles.attach}>
                [
                <a href="https://ieeexplore.ieee.org/document/10121711/">
                  Paper
                </a>
                |<Link href="uncc_content_moderation">Demo</Link>]
              </div>
            </ul>
            <ul>
              <GoChevronRight className={styles.icon} />
              Predicting Sales Lift from Short Video Advertisements Using
              Multi-Modal Deep Learning.&ensp;
              <div className={styles.attach}>
                [
                <a href="http://home.ustc.edu.cn/~hasined/misc/HICSS%202024%20Sales%20Lift%20Camera%20Ready.pdf">
                  Paper
                </a>
                |<Link href="uncc_short_video">Demo</Link>]
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div>
      <div className={styles.title}>
        <BsTools className={styles.icon} />
        Professional Skills
      </div>
      <div className={styles.content}>
        <ul>
          <GoChevronRight className={styles.icon} />
          Programming Languages:&ensp;Python, Typescript, C/C++
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Deep Learning Frameworks:&ensp;Keras/Tensorflow, PyTorch
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Data Analysis Toolkits:&ensp;Pandas, Numpy, Matplotlib, Jupyter
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Writing & Typesetting:&ensp;LaTeX, Markdown, HTML+CSS, Office
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          Developer Skills:&ensp;Linux, Git, Docker, VSCode, Next.js, OpenGL
        </ul>
        <ul>
          <GoChevronRight className={styles.icon} />
          English Proficiency:&ensp;TOEFL iBT:&nbsp;<em>104 (30+27+23+24)</em>
          ,&ensp;GRE General: &nbsp;<em>329 (159+170+4.0)</em>
        </ul>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div>Last updated on {process.env.NEXT_PUBLIC_LAST_COMMIT_DATE}</div>
    </footer>
  )
}
