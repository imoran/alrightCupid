require 'test_helper'

class Api::DescriptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_descriptions_index_url
    assert_response :success
  end

end
