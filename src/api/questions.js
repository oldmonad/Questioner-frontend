import { http } from './client';

export const fetchQuestionRequest = async questionId => {
  console.log(questionId);
  return await http.get(`/questions/${questionId}`);
};
