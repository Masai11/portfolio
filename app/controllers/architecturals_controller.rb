class ArchitecturalsController < ApplicationController
    def index
        architecturals = Architectural.all
        render json: architecturals, except: [:created_at, :updated_at]
    end

    def show
        architectural = architectural_finder
        if architectural
            render json: architectural, status: :ok
        else
            render_no_project_found_response
        end

    end

    def create
        architectural = Architectural.create(architectural_params)
        if architectural
            render json: architectural, status: :created
        else
            render_no_project_found_response
        end

    end

    private

    def architectural_finder
        Architectural.find_by(id: params[:id])
    end
    def architectural_params
        params.permit(:title, :image_url, :content, :budget)
    end 
    def render_no_project_found_response
        render json: {error:"Project not found"}, status: :not_found
    end
    
   
end
