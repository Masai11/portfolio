class WebdevsController < ApplicationController
    def index
        webdevs = Webdev.all
        render json:webdevs, except: [:created_at, :updated_at]
    end

    def create
        webdev = Webdev.create(webdev_params)

        if webdev
            render json: webdev, status: :created
        else
            render_no_project_found_response
        end
    end

    private

    def webdev_params
        params.permit(:title,:image_url,:web_url)
    end

    def render_no_project_found_response
        render json: {error:"Project not found"}, status: :not_found
    end
end
