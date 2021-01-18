import React from 'react';
import { QuestionData } from './data/QuestionsData';
import { Question } from './Question';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: Props) => (
    <ul>
    {data.map((question) => (
        <li key={question.questionId}>
        {renderItem ? renderItem(question) : <Question data={question} />}
        </li>
    ))}
    </ul>
);