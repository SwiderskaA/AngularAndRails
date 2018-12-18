class TablesController < ApplicationController
  before_action :set_table, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update, :close]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  # GET /tables
  # GET /tables.json
  def index
      @tables = current_user.tables
      render json:@tables
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
      render json: @table
  end

  # POST /tables
  # POST /tables.json
  def create
    #sbyebug
      @table = Table.new(table_params)
      @table.users << current_user

      @table.save
      History.create(table_id: @table.id, description: "User " + current_user.email + "created table called " + @table.name)
      render json: @table, status: :created
  end

  # PATCH/PUT /tables/1
  # PATCH/PUT /tables/1.json
  def update
      if @table.update(table_params)
        History.create(table_id: @table.id, description: "User " + current_user.email + "updated table called " + @table.name)
        render json: @table, status: :ok, location: @table
      else
        render json: @table.errors, status: :unprocessable_entity
      end
  end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    @table.destroy
  end

  def close
    @table = current_user.tables.where(id: params[:id])
    table.closed = true
    table.save
    head(:ok)
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

    def login_required
        if current_user == nil
          head(:unauthorized)
        end
    end


end
