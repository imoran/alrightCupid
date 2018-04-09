class Question < ApplicationRecord
  validates :category, :title, presence: true

  has_many :answers
  has_many :question_responses
end
