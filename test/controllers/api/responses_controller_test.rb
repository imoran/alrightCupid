require 'test_helper'

class Api::ResponsesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_responses_index_url
    assert_response :success
  end

end
