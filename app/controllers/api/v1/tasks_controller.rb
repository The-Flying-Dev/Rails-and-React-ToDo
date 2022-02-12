class Api::V1::TasksController < ApplicationController
    before_action :set_task, only: [:show, :edit, :update, :destroy]
  
    # GET /beers
    # GET /beers.json
    def index
      @tasks = Task.all.order(title: :asc)
      render json: @tasks
    end
  
    # GET /tasks/1
    # GET /tasks/1.json
    def show
      if @task
        render json: @task
      else
        render json: @task.errors
      end
    end
  
    # GET /tasks/new
    def new
      @task = Task.new
    end
  
    # GET /tasks/1/edit
    def edit
    end
  
    # POST /tasks
    # POST /tasks.json
    def create
      @task = Task.new(task_params)
  
  
      if @task.save
        render json: @task
      else
        render json: @task.errors
      end
    end
  
    # PATCH/PUT /tasks/1
    # PATCH/PUT /tasks/1.json
    def update
    end
  
    # DELETE /tasks/1
    # DELETE /tasks/1.json
    def destroy
      @task.destroy
  
      render json: { notice: 'task was successfully removed.' }
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_task
        @task = Task.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def task_params
        params.permit(:title, :description)
      end
  end
  