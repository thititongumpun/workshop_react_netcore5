export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}
export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'โตไปทำอะไร ?',
    content:
      'ไม่รู้',
    userName: 'ประยุทธ์',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'ขอทาน',
        userName: 'ประวิทย์',
        created: new Date(),
      },
      {
        answerId: 2,
        content:
          'programmer',
        userName: 'ลุงพล',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'กินอะไรดีวันนี้',
    content:
      'วันนี้จะกินอะไรดีวะ ?',
    userName: 'ASDADAD@!E!EQQQQ',
    created: new Date(),
    answers: [],
  },
];

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter((q) => q.answers.length === 0);
};

const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};