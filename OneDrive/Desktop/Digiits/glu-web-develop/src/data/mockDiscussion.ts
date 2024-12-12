import { DiscussionProps } from "../features/job-board/interfaces/JobBoardInterfaces";

export const mockDiscussion: DiscussionProps[] = [
  {
    id: 1,
    profile: "/src/assets/discussion/avatar.svg",
    name: "Chidimma Okereke",
    date: "26th May, 2024",
    comment:
      "Hello! I'm excited about the opportunity to join BitterLemon LTD as a Dynamics 365 & Business Central Developer. With my expertise in cloud computing, I'm confident I can contribute effectively to your team.",
    likes: false,
    likeCount: "86 Likes ",
    time: "2hr",
    replies: [],
  },
  {
    id: 2,
    profile: "/src/assets/discussion/avatar1.svg",
    name: "Minnie McKenzie",
    date: "26th May, 2024",
    comment:
      "I've been following BitterLemon LTD's innovative projects closely and am eager to bring my experience in Dynamics 365 and Business Central development to the table. I'm ready to hit the ground running and help drive your projects forward.",
    likes: true,
    likeCount: "86 likes",
    time: "2hr",
    replies: [],
  },

  {
    id: 4,
    profile: "/src/assets/discussion/avatar2.svg",
    name: "Chidimma Okereke",
    date: "26th May, 2024",
    comment:
      "BitterLemon LTD's commitment to excellence in technology solutions aligns perfectly with my career aspirations. I'm enthusiastic about the chance to utilize my skills as a Dynamics 365 & Business Central Developer to contribute to the company's success.",
    likes: false,
    likeCount: "86 Likes",
    time: "2hr",
    replies: [
      {
        id: 3,
        name: "Cynthia Morgana",
        profile: " /src/assets/discussion/avatar3.svg",
        date: "26th May 2024",
        comment: "Great!",
        likes: false,
        likeCount: "32 Likes",
        time: "2hr",
        replies: [],
      },
    ],
  },
];