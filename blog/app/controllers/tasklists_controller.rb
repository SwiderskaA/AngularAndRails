class TasklistsController < ApplicationController
  before_action :set_tasklist, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  # GET /tasklists
  # GET /tasklists.json
  def index
    @tasklists = Tasklist.all
  end

  # GET /tasklists/1
  # GET /tasklists/1.json
  def show
  end

  # POST /tasklists
  # POST /tasklists.json
  def create
    @tasklist = Tasklist.new(tasklist_params)

    if @tasklist.save
      render :show, status: :created, location: @tasklist
    else
      render json: @tasklist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasklists/1
  # PATCH/PUT /tasklists/1.json
  def update
    if @tasklist.update(tasklist_params)
      render :show, status: :ok, location: @tasklist
    else
      render json: @tasklist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasklists/1
  # DELETE /tasklists/1.json
  def destroy
    @tasklist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tasklist
      @tasklist = Tasklist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tasklist_params
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
