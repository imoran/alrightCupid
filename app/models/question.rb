class Question < ApplicationRecord
  validates :category, :title, presence: true
end
