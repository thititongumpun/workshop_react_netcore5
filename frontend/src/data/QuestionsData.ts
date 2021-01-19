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
    title: 'โตไปทำอะไร ??',
    content: 'โตไปทำอะไร ???',
    userName: 'ประยุทธ์',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'ขอทาน',
        userName: 'ยุทธ',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'programmer',
        userName: 'ลุงพล',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'กินไรดีวันนี้',
    content: 'วันนี้กินอะไรดี?',
    userName: 'ลุงพล',
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

export const getQuestion = async (
  questionId: number,
): Promise<QuestionData | null> => {
  await wait(500);
  const results = questions.filter((q) => q.questionId === questionId);
  return results.length === 0 ? null : results[0];
};

export const searchQuestions = async (
  criteria: string,
): Promise<QuestionData[]> => {
  await wait(500);
  return questions.filter(
    (q) =>
      q.title.toLowerCase().indexOf(criteria.toLowerCase()) >= 0 ||
      q.content.toLowerCase().indexOf(criteria.toLowerCase()) >= 0,
  );
};
