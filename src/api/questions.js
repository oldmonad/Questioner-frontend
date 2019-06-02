import { http } from './client';

export const fetchQuestionRequest = async questionId => {
  return await http.get(`/questions/${questionId}`);
};

export const fetchQuestionsRequest = async meetupId => {
  return await http.get(`/meetups/${meetupId}/questions`);
};

export const createQuestionRequest = async questionData => {
  return await http.post('/questions', questionData);
};
