class CatsController < ApplicationController

    def index
      cats = Cat.all
      render json: cats, include:[:comments], status: :ok
    end
  
    def show
      cat = Cat.find_by!(id: params[:id])
      render json: cat, status: :ok
    end
  
  end
