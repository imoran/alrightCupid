require 'test_helper'

class Api::QuestionResponsesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_question_responses_index_url
    assert_response :success
  end

end
