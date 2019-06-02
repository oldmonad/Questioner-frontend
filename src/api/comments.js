import { http } from './client';

export const fetchCommentsRequest = async questionId => {
  return await http.get(`/questions/${questionId}/comments`);
};

export const createQuestionRequest = async commentData => {
  return await http.post('/comments', commentData);
};
