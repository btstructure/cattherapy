class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :comments

  has_many :comments
end
