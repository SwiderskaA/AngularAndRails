class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.where(card_id: params[:card_id])
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      History.create(table_id: @comment.card.list.table.id, description: "User " + current_user.email + "created comment: " + @comment.name)
      render :show, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    if @comment.update(comment_params)
      render :show, status: :ok, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.permit(:name, :card_id)
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
