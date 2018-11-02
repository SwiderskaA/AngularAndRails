class TablesController < ApplicationController
  before_action :set_table, only: [:show, :update, :destroy]

  # GET /tables
  # GET /tables.json
  def index
    if current_user
      @tables = Table.where(user_id: current_user.id)
      render json: @tables  
    else
      head(:unauthorized)
    end
    
    
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
    if current_user
      @table = Table.where(id: params[:id], user_id: current_user.id).first
        render json: @table
    else
      head(:unauthorized)
    end
  end

  # POST /tables
  # POST /tables.json
  def create
    #sbyebug
    if current_user
      @table = Table.new(table_params)
      @table.user_id = current_user.id

      @table.save
      render json: @table, status: :created
    else
      head(:unauthorized)
    end
      
  end

  # PATCH/PUT /tables/1
  # PATCH/PUT /tables/1.json
  def update
    if current_user
      tab = Table.find(params[:id])
      if tab.user_id == current_user.id
        if @table.update(table_params)
          render :show, status: :ok, location: @table
        else
          render json: @table.errors, status: :unprocessable_entity
        end
      else
        head(:unauthorized)
      end
    else
      head(:unauthorized)
    end
  end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    @table.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_table
      @table = Table.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def table_params
      params.require(:table).permit(:name)
    end
end
