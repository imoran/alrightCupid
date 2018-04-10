@questions.each do |question|
  json.set! question.id do
    json.extract! question, :title, :category
  end
end
