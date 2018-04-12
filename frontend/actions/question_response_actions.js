import * as APIUtil from '../util/session_api_util';

export const CREATE_RESPONSE = 'CREATE_RESPONSE';

export const createAResponse = response => ({
  type: CREATE_RESPONSE,
  response
});

export const postResponse = () => dispatch => {
  return APIUtil.postResponse()
  .then(res => dispatch(createAResponse(res)));
};
