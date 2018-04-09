class Answer < ApplicationRecord
  validates :response, presence: true
  has_many :question_responses
end
