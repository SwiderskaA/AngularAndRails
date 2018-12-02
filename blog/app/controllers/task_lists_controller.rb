class TaskListsController < ApplicationController
  before_action :set_task_list, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found


  # GET /task_lists
  # GET /task_lists.json
  def index
    @task_lists = TaskList.all
  end

  # GET /task_lists/1
  # GET /task_lists/1.json
  def show
  end

  # POST /task_lists
  # POST /task_lists.json
  def create
    @task_list = TaskList.new(task_list_params)

    if @task_list.save
      render :show, status: :created, location: @task_list
    else
      render json: @task_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /task_lists/1
  # PATCH/PUT /task_lists/1.json
  def update
    if @task_list.update(task_list_params)
      render :show, status: :ok, location: @task_list
    else
      render json: @task_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /task_lists/1
  # DELETE /task_lists/1.json
  def destroy
    @task_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task_list
      @task_list = TaskList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_list_params
      params.permit(:card_id, :name)
    end

    def login_required
        if current_user == nil
          head(:unauthorized)
        end
    end

    def record_not_found
      render :json => {:message => "record not found"}, status: :not_found
    end
end
