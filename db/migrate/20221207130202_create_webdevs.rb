class CreateWebdevs < ActiveRecord::Migration[7.0]
  def change
    create_table :webdevs do |t|

      t.string :title
      t.string :image_url
      t.string :web_url
      
      t.timestamps
    end
  end
end
