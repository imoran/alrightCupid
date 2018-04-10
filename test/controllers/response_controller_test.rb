require 'test_helper'

class ResponseControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get response_index_url
    assert_response :success
  end

  test "should get show" do
    get response_show_url
    assert_response :success
  end

end
