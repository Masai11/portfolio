class CreateArchitecturals < ActiveRecord::Migration[7.0]
  def change
    create_table :architecturals do |t|

      t.string :title
      t.string :image_url
      t.string :content
      t.integer :budget

      t.timestamps
    end
  end
end
