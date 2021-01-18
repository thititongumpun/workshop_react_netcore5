import React from 'react';
import { QuestionData } from './data/QuestionsData';

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

let arr: string[] = ['ไก่ย่าง', 'กระเพรา', 'ผงกะหรี่', 'ทอดกระเทียม', 'ขี้เมา', 'น้ำมันหอย'];
let randomArr: string = arr[Math.floor(Math.random() * arr.length)];

// function shuffleFood(arr: string[]) {
//     let i: number = arr.length - 1;
//     for (; i > 0; i--) {
//         const j: any = Math.random() * (i + 1);
//         const temp: any = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }



export const Question = ({ data, showContent }: Props) => (
    <div>
        <div>
            {data.title}
            </div>
            {showContent && (
            <div>
                {data.content.length > 50
                ? `${data.content.substring(0, 50)}...`
                : data.content}
            </div>
        )}
        {randomArr}
            <div>
            {`Asked by ${data.userName} on
                ${data.created.toLocaleDateString()} ${data.created
                .toLocaleTimeString()}`}
            </div>
    </div>
);

Question.defaultProps = {
    showContent: true,
}