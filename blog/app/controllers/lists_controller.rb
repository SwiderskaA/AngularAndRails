class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update]


  def index
      @lists = Table.where(user_id: current_user.id).first.lists
      render json: @lists  
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
      @list = List.find(params[:id])
      tab = Table.find(@list.table_id)
      if tab.user_id == current_user.id

        render json: @list
      else
        head(:unauthorized)
      end
  end

  # POST /lists
  # POST /lists.json
  def create
      @list = List.new(list_params)

      if @list.save
        render :show, status: :created, location: @list
      else
        render json: @list.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /lists/1
  # PATCH/PUT /lists/1.json
  def update
      @list = List.find(params[:id])
      tab = Table.find(@list.table_id)
      if tab.user_id == current_user.id
        if @list.update(list_params)
          render :show, status: :ok, location: @list
        else
          render json: @list.errors, status: :unprocessable_entity
        end
      else
        head(:unauthorized)
      end
  end

  # DELETE /lists/1
  # DELETE /lists/1.json
  def destroy
    @list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def list_params
      params.require(:list).permit(:name, :table_id)
    end
        def login_required
        if current_user == nil
          head(:unauthorized)
        end
    end
end
