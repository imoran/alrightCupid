require 'test_helper'

class Api::DescriptionResponsesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_description_responses_index_url
    assert_response :success
  end

  test "should get create" do
    get api_description_responses_create_url
    assert_response :success
  end

  test "should get update" do
    get api_description_responses_update_url
    assert_response :success
  end

end
