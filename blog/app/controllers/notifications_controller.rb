class NotificationsController < ApplicationController
  before_action :set_notification, only: [:show, :update, :destroy]

 before_action :login_required , only: [:index]
rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    @notifications = Notification.where.not(user_id: current_user.id)
    render :index
    else
  end

    

  # GET /notifications/1
  # GET /notifications/1.json
  def show
  end

  # POST /notifications
  # POST /notifications.json
  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render :show, status: :created, location: @notification
    else
      render json: @notification.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notifications/1
  # PATCH/PUT /notifications/1.json
  def update
    if @notification.update(notification_params)
      render :show, status: :ok, location: @notification
    else
      render json: @notification.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notifications/1
  # DELETE /notifications/1.json
  def destroy
    @notification.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = Notification.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def notification_params
      params.fetch(:notification, {})
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
