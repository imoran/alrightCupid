require 'test_helper'

class Api::AnswerQuestionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_answer_question_index_url
    assert_response :success
  end

  test "should get create" do
    get api_answer_question_create_url
    assert_response :success
  end

end
