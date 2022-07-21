class CommentsController < ApplicationController

    def update
      review = Comment.find(params[:comment_id])
      updated_review = review.update(description: review.description.reverse)
      render json: updated_review, status: :created
    end
  
    def create 
      comment = Comment.create!(description: params[:description], cat_id: params[:cat_id], user_id: session[:user_id])
      render json: comment, status: :created
    end
  
    def destroy 
      comment = Comment.find(params[:comment_id])
      comment.destroy
  
      head :no_content
    end
  
    private 
  
    def comment_params 
      params.permit(:description, :cat_id, :user_id)
    end
  end
