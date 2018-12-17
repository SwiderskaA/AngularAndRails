class CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]
  before_action :login_required , only: [:index, :show, :create, :update, :archived]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  # GET /cards
  # GET /cards.json
  def index
    list = List.find(params[:list_id])
    tab = list.table
    if current_user.tables.where(id: tab.id)
      @cards = list.cards
      render json: @cards
    else
      head(:unauthorized)
    end
  end

  # GET /cards/1
  # GET /cards/1.json
  def show
    @card = Card.find(params[:id])
    tab = card.list.table
    if table.users.where(id: current_user.id)
      render json: @card
    else
      head(:unauthorized)
    end
  end

  # POST /cards
  # POST /cards.json
  def create
        @card = Card.create(card_params)
        cards = List.find(params[:list_id]).cards
        @card.position = cards.length
        if @card.save
          History.create(table_id: @card.list.table.id, description: "User " + current_user.email + "created card called " + @card.name)
          render :show, status: :created, location: @card
        else
          render json: @card.errors, status: :unprocessable_entity
        end
  end

  # PATCH/PUT /cards/1
  # PATCH/PUT /cards/1.json
  def update
    if @card.update(card_params)
      History.create(table_id: @card.list.table.id, description: "User " + current_user.email + "updated card called " + @card.name)
      render :show, status: :ok, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cards/1
  # DELETE /cards/1.json
  def destroy
    @card.destroy
  end

  def change_position
    @card = Card.find(params[:card_id])
    cards = @card.list.cards
    arr_ids = Array.new
    cards.each do |card|
      arr_ids.push(card.id)
    end
    arr_ids.delete_at(@card.position - 1)
    arr_ids.insert(params[:position].to_i, @card.id)

    arr_ids.each_with_index do |id, index|
      card = Card.find(id)
      card.position = index + 1
      card.save
    end

    History.create(table_id: @card.list.table.id, description: "User " + current_user.email + "change position of card called " + @card.name + " from " + @card.position + " to " + params[:position])
    head(:ok)
  end

  def archive 
     @card = Card.find(params[:card_id])
     @card.archived = true
     if @card.save 
      head(:ok)
    else
      head(:forbidden)
    end
  end

  def copy
     card = Card.find(params[:card_id])
     cards = List.find(params[:list_id]).cards
     
     @card = Card.create(name: card.name, description: card.description, list_id: params[:list_id], position: cards.length)

     if @card.save
      if params[:position]
        #todo
      end
          render :show, status: :created, location: @card
      else
        render json: @card.errors, status: :unprocessable_entity
      end



  end

  def set_deadline
    @card = Card.find(params[:card_id])
    datetime = DateTime.new(params[:year].to_i, params[:month].to_i, params[:day].to_i, params[:hour].to_i, params[:minute].to_i, 0)
    @card.deadline = datetime
    @card.showdate = true;

    if @card.save
      render :show, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def unset_deadline
    @card = Card.find(params[:card_id])
    @card.showdate = false;

    if @card.save
      render :show, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def card_params
      params.permit(:list_id, :name, :description)
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
