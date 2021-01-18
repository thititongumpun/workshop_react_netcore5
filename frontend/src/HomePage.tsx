import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './data/QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
    const [questions, setQuestions] = React.useState<QuestionData[]>([]);
    const [questionsLoading, setQuestionsLoading] = React.useState(true);

    React.useEffect(() => {
        const doGetUnansweredQuestions = async () => {
            const unansweredQuestions = await getUnansweredQuestions();
            setQuestions(unansweredQuestions);
            setQuestionsLoading(false);
        };
        doGetUnansweredQuestions();
    }, []);
    const handleAskQuestionClick = () => {
        // console.log('TODO - move to the AskPage');
        window.location.reload(false);
    };

    return (
        <Page>
            <div>
                <PageTitle>...คำถาม...</PageTitle>
                {/* <button onClick={handleAskQuestionClick}>Ask a question</button> */}
                <button onClick={handleAskQuestionClick}>Re</button>
            </div>
            {questionsLoading ? (
                <div>Loading...</div>
            ) : (
                    <QuestionList data={questions} />
                )}
        </Page>
    );
};