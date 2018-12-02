class ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    tab = current_user.tables.where(id: params[:table_id]).first
    if tab
      @lists = tab.lists
      render json: @lists  
    else
      head(:not_found)
    end
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
      @list = List.find(params[:id])
      usr = @list.table.users.where(id: current_user.id)
      if usr
        render json: @list
      else
        head(:unauthorized)
      end
  end

  # POST /lists
  # POST /lists.json
  def create
      @list = List.new(list_params)
      lists = Table.find(params[:table_id]).lists
      @list.position = lists.length + 1

      if @list.save
        History.create(table_id: @list.table.id, description: "User " + current_user.email + "created list called " + @list.name)
        render :show, status: :created, location: @list
      else
        render json: @list.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /lists/1
  # PATCH/PUT /lists/1.json
  def update
      @list = List.find(params[:id])
      usr = @list.table.users.where(id: current_user.id)
      if usr
        if @list.update(list_params)
          History.create(table_id: @list.table.id, description: "User " + current_user.email + "updated list called " + @list.name)
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

  def change_position
    @list = List.find(params[:list_id])
    lists = @list.table.lists
    arr_ids = Array.new
    lists.each do |list|
      arr_ids.push(list.id)
    end
    arr_ids.delete_at(@list.position - 1)
    arr_ids.insert(params[:position].to_i, @list.id)

    arr_ids.each_with_index do |id, index|
      list = List.find(id)
      list.position = index + 1
      list.save
    end

    History.create(table_id: @list.table.id, description: "User " + current_user.email + "change position of card called " + @list.name + " from " + @list.position.to_s + " to " + params[:position])
    head(:ok)
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
    def record_not_found
      render :json => {:message => "record not found"}, status: :not_found
    end
end
