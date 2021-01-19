/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from './Styles';
import { PrimaryButton } from './Styles';

import React from 'react';
import { QuestionData } from './data/QuestionsData';

import { Link } from 'react-router-dom';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: Props) => {
  const food: string[] = [
    'ไก่ย่าง',
    'กระเพรา',
    'ผงกะหรี่',
    'ทอดกระเทียม',
    'ขี้เมา',
    'น้ำมันหอย',
    'pizza',
    'kfc',
  ];
  const [random, setRandom] = React.useState('บุฟเฟ่');

  React.useEffect(() => {
    console.log(random);
  });

  const randomFoods = (e: any) => {
    const len = food.length;
    setRandom(food[Math.floor(Math.random() * len)]);
  };
  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
        to={`/questions/${data.questionId}`}
      >
        {data.title}
      </Link>

      {showContent && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 15px;
            color: ${gray2};
          `}
        >
          {data.content.length > 50
            ? `${data.content.substring(0, 50)}...`
            : data.content}
        </div>
      )}
      <h2>{random}</h2>
      <PrimaryButton onClick={randomFoods}>Random</PrimaryButton>
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${data.userName} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
