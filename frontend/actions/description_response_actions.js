import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_DESCRIPTION_RESPONSES = 'RECEIVE_ALL_DESCRIPTION_RESPONSES';
export const RECEIVE_ONE_DESCRIPTION_RESPONSE = 'RECEIVE_ONE_DESCRIPTION_RESPONSE';

export const receiveAllDescriptionResponses = description_responses => ({
  type: RECEIVE_ALL_DESCRIPTION_RESPONSES,
  description_responses
});

export const receiveSingleDescriptionResponse = description_response => ({
  type: RECEIVE_ONE_DESCRIPTION_RESPONSE,
  description_response
});

export const createDescriptionResponse = response => dispatch => {
  return APIUtil.postDescriptionResponse(response)
  .then(res => dispatch(receiveSingleDescriptionResponse(response)));
};

export const updateDescriptionResponse = response => dispatch => {
  return APIUtil.updateDescriptionResponse(response)
  .then(res => dispatch(receiveSingleDescriptionResponse(res)));
};
