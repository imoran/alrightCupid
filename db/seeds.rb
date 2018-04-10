require_relative 'seed_users'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Question.delete_all
Answer.delete_all
QuestionResponse.delete_all

User.create!(USERS)
Question.create!(QUESTIONS)

question_1 = Question.find_by(title: "Green or Blue?")
question_2 = Question.find_by(title: "Orange or Black?")
question_3 = Question.find_by(title: "Red or Teal?")
question_4 = Question.find_by(title: "Purple or Yellow?")
question_5 = Question.find_by(title: "Rock or Reggae?")
question_6 = Question.find_by(title: "Alternative or Hip-Hop?")
question_7 = Question.find_by(title: "EDM or Country?")
question_8 = Question.find_by(title: "Pop or Classical?")
question_9 = Question.find_by(title: "Breaking Bad or Sons of Anarchy?")
question_10 = Question.find_by(title: "Grey's Anatomy or House?")
question_11 = Question.find_by(title: "Bojack Horseman or Rick and Morty?")
question_12 = Question.find_by(title: "Black Mirror or The Walking Dead?")
question_13 = Question.find_by(title: "I am a morning person")
question_14 = Question.find_by(title: "I like pineapples on pizza")
question_15 = Question.find_by(title: "I prefer iPhones over Android Phones")
question_16 = Question.find_by(title: "I can recite the Pokemon theme song by memory")
question_17 = Question.find_by(title: "People deserve second chances")
question_18 = Question.find_by(title: "Everything happens for a reason")
question_19 = Question.find_by(title: "We all have a predetermined destiny")
question_20 = Question.find_by(title: "Life is a purposeless void")


question_1_response_1 = Answer.create!(question_id: question_1.id, response: "Green")
question_1_response_2 = Answer.create!(question_id: question_1.id, response: "Blue")
question_2_response_1 = Answer.create!(question_id: question_2.id, response: "Orange")
question_2_response_2 = Answer.create!(question_id: question_2.id, response: "Black")
question_3_response_1 = Answer.create!(question_id: question_3.id, response: "Red")
question_3_response_2 = Answer.create!(question_id: question_3.id, response: "Teal")
question_4_response_1 = Answer.create!(question_id: question_4.id, response: "Purple")
question_4_response_2 = Answer.create!(question_id: question_4.id, response: "Yellow")
question_5_response_1 = Answer.create!(question_id: question_5.id, response: "Rock")
question_5_response_2 = Answer.create!(question_id: question_5.id, response: "Reggae")
question_6_response_1 = Answer.create!(question_id: question_6.id, response: "Alternative")
question_6_response_2 = Answer.create!(question_id: question_6.id, response: "Hip-Hop")
question_7_response_1 = Answer.create!(question_id: question_7.id, response: "EDM")
question_7_response_2 = Answer.create!(question_id: question_7.id, response: "Country")
question_8_response_1 = Answer.create!(question_id: question_8.id, response: "Pop")
question_8_response_2 = Answer.create!(question_id: question_8.id, response: "Classical")
question_9_response_1 = Answer.create!(question_id: question_9.id, response: "Sons of Anarchy")
question_9_response_2 = Answer.create!(question_id: question_9.id, response: "Breaking Bad")
question_10_response_1 = Answer.create!(question_id: question_10.id, response: "Grey's Anatomy")
question_10_response_2 = Answer.create!(question_id: question_10.id, response: "House")
question_11_response_1 = Answer.create!(question_id: question_11.id, response: "Bojack Horseman")
question_11_response_2 = Answer.create!(question_id: question_11.id, response: "Rick and Morty")
question_12_response_1 = Answer.create!(question_id: question_12.id, response: "Black Mirror")
question_12_response_2 = Answer.create!(question_id: question_12.id, response: "The Walking Dead")
question_13_response_1 = Answer.create!(question_id: question_13.id, response: "Yes")
question_13_response_2 = Answer.create!(question_id: question_13.id, response: "No")
question_14_response_1 = Answer.create!(question_id: question_14.id, response: "Yes")
question_14_response_2 = Answer.create!(question_id: question_14.id, response: "No")
question_15_response_1 = Answer.create!(question_id: question_15.id, response: "Yes")
question_15_response_2 = Answer.create!(question_id: question_15.id, response: "No")
question_16_response_1 = Answer.create!(question_id: question_16.id, response: "Yes")
question_16_response_2 = Answer.create!(question_id: question_16.id, response: "No")
question_17_response_1 = Answer.create!(question_id: question_17.id, response: "Yes")
question_17_response_2 = Answer.create!(question_id: question_17.id, response: "No")
question_18_response_1 = Answer.create!(question_id: question_18.id, response: "Yes")
question_18_response_2 = Answer.create!(question_id: question_18.id, response: "No")
question_19_response_1 = Answer.create!(question_id: question_19.id, response: "Yes")
question_19_response_2 = Answer.create!(question_id: question_19.id, response: "No")
question_20_response_1 = Answer.create!(question_id: question_20.id, response: "Yes")
question_20_response_2 = Answer.create!(question_id: question_20.id, response: "No")


User.all.each do |user|
  Question.all.each do |question|
    answer_id = question.answers.sample(1).pluck(:id)[0]
    QuestionResponse.create!(question_id: question.id, user_id: user.id, answer_id: answer_id)
  end
end
