require 'test_helper'

class TasklistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tasklist = tasklists(:one)
  end

  test "should get index" do
    get tasklists_url, as: :json
    assert_response :success
  end

  test "should create tasklist" do
    assert_difference('Tasklist.count') do
      post tasklists_url, params: { tasklist: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show tasklist" do
    get tasklist_url(@tasklist), as: :json
    assert_response :success
  end

  test "should update tasklist" do
    patch tasklist_url(@tasklist), params: { tasklist: {  } }, as: :json
    assert_response 200
  end

  test "should destroy tasklist" do
    assert_difference('Tasklist.count', -1) do
      delete tasklist_url(@tasklist), as: :json
    end

    assert_response 204
  end
end
