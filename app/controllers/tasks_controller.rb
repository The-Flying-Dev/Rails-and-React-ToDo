class TasksController < ApplicationController
  before_action :set_task, only: [ :show, :edit, :update, :destroy ]

  # GET /tasks or /tasks.json
  def index        
  end

end