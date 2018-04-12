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

User.create!([{
    username: 'demo@demo.com',
    first_name: 'demo_user',
    zipcode: 94102,
    gender: 'Other',
    orientation: 'Other',
    location: 'United States',
    age: 27,
    image_url: 'https://images.pexels.com/photos/818654/pexels-photo-818654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    password: 'password',
    motto: 'Pretending I know what I\'m doing'
  },
  {
    first_name: "Marie",
    username: "marie@gmail.com",
    zipcode: 94102,
    gender: "Woman",
    orientation: "Bisexual",
    location: "United States",
    age: 27,
    image_url: "https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Burning Man 2017'
  },
  {
    first_name: "Cassie",
    username: "cass@yahoo.com",
    zipcode: 94014,
    gender: "Woman",
    orientation: "Straight",
    location: "United States",
    age: 25,
    image_url: "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'My true form'
  },
  {
    first_name: "Andrea",
    username: "andreaaa@gmail.com",
    zipcode: 94110,
    gender: "Woman",
    orientation: "Other",
    location: "United States",
    age: 34,
    image_url: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Best Buddy!'
  },
  {
    first_name: "Marjorie",
    username: "cottoncandy@yahoo.com",
    zipcode: 94109,
    gender: "Other",
    orientation: "Bisexual",
    location: "United States",
    age: 29,
    image_url: "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'I think this speaks for itself'
  },
  {
    first_name: "Monica",
    username: "monica@gmail.com",
    zipcode: 94066,
    gender: "Woman",
    orientation: "Straight",
    location: "United States",
    age: 18,
    image_url: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Triangles yeah !'
  },
  {
    first_name: "Lana",
    username: "meow@yahoo.com",
    zipcode: 94102,
    gender: "Other",
    orientation: "Straight",
    location: "United States",
    age: 26,
    image_url: "https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'I like places that require hard hats'
  },
  {
    first_name: "Melissa",
    username: "coolbeans@gmail.com",
    zipcode: 94530,
    gender: "Woman",
    orientation: "Bisexual",
    location: "United States",
    age: 39,
    image_url: "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'Tahoe 2015'
  },
  {
    first_name: "Carly",
    username: "carly@carly.com",
    zipcode: 94132,
    gender: "Other",
    orientation: "Other",
    location: "United States",
    age: 20,
    image_url: "https://images.pexels.com/photos/264614/pexels-photo-264614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Being obnoxious'
  },
  {
    first_name: "Geraldine",
    username: "wooo@gmail.com",
    zipcode: 94565,
    gender: "Woman",
    orientation: "Other",
    location: "United States",
    age: 36,
    image_url: "https://images.pexels.com/photos/109851/pexels-photo-109851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'sick mirror door near work'
  },
  {
    first_name: "Julia",
    username: "juliaaa@yahoo.com",
    zipcode: 94111,
    gender: "Other",
    orientation: "Bisexual",
    location: "United States",
    age: 28,
    image_url: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'Metal'
  },
  {
    first_name: "Richard",
    username: "richh@yahoo.com",
    zipcode: 94115,
    gender: "Man",
    orientation: "Straight",
    location: "United States",
    age: 29,
    image_url: "https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'Not sure why I added this photo'
  },
  {
    first_name: "Noah",
    username: "nz@gmail.com",
    zipcode: 94160,
    gender: "Man",
    orientation: "Bisexual",
    location: "United States",
    age: 28,
    image_url: "https://images.pexels.com/photos/185847/pexels-photo-185847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'Books. Sleeping'
  },
  {
    first_name: "James",
    username: "jamess@yahoo.com",
    zipcode: 94188,
    gender: "Man",
    orientation: "Other",
    location: "United States",
    age: 35,
    image_url: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    password: "password",
    motto: 'Is any explanation needed?'
  },
  {
    first_name: "Rick",
    username: "dragon@gmail.com",
    zipcode: 94110,
    gender: "Man",
    orientation: "Straight",
    location: "United States",
    age: 34,
    image_url: "https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'rocking chair revolutionary'
  },
  {
    first_name: "Alexander",
    username: "alexandr@yahoo.com",
    zipcode: 94142,
    gender: "Man",
    orientation: "Bisexual",
    location: "United States",
    age: 30,
    image_url: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Trying to photograph a mongoose'
  },
  {
    first_name: "Jerry",
    username: "jerryrulez@gmail.com",
    zipcode: 94160,
    gender: "Other",
    orientation: "Other",
    location: "United States",
    age: 24,
    image_url: "https://images.pexels.com/photos/274593/pexels-photo-274593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Trying to make my friend look tall'
  },
  {
    first_name: "Jeremiah",
    username: "jj@yahoo.com",
    zipcode: 94122,
    gender: "Man",
    orientation: "Gay",
    location: "United States",
    age: 27,
    image_url: "https://images.pexels.com/photos/434704/pexels-photo-434704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Not my accordion )\':'
  },
  {
    first_name: "Johnathan",
    username: "wooot@gmail.com",
    zipcode: 94125,
    gender: "Man",
    orientation: "Straight",
    location: "United States",
    age: 20,
    image_url: "https://images.pexels.com/photos/819482/pexels-photo-819482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'I habitually climb things'
  },
  {
    first_name: "Connor",
    username: "ctothec@yahoo.com",
    zipcode: 94171,
    gender: "Man",
    orientation: "Straight",
    location: "United States",
    age: 38,
    image_url: "https://images.pexels.com/photos/7823/selfie.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'sunburn'
  },
  {
    first_name: "Ethan",
    username: "whosethan@yahoo.com",
    zipcode: 94107,
    gender: "Other",
    orientation: "Bisexual",
    location: "United States",
    age: 34,
    image_url: "https://images.pexels.com/photos/59576/pexels-photo-59576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    password: "password",
    motto: 'Sneaking some pets'
  }])

Question.create!([
{
  category: "Colors",
  title: "I prefer Green over Blue"
},
{
  category: "Colors",
  title: "I prefer Orange over Black"
},
{
  category: "Colors",
  title: "I prefer Red over Teal"
},
{
  category: "Colors",
  title: "I prefer Purple over Yellow"
},
{
  category: "Music",
  title: "I prefer Rock over Reggae"
},
{
  category: "Music",
  title: "I prefer Alternative over Hip-Hop"
},
{
  category: "Music",
  title: "I prefer EDM over Country"
},
{
  category: "Music",
  title: "I prefer Pop over Classical"
},
{
  category: "TV Shows",
  title: "I prefer Breaking Bad over Sons of Anarchy"
},
{
  category: "TV Shows",
  title: "I prefer Grey's Anatomy over House"
},
{
  category: "TV Shows",
  title: "I prefer Bojack Horseman over Rick and Morty"
},
{
  category: "TV Shows",
  title: "I prefer Black Mirror over The Walking Dead"
},
{
  category: "Miscellaneous",
  title: "I am a morning person"
},
{
  category: "Miscellaneous",
  title: "I like pineapples on pizza"
},
{
  category: "Miscellaneous",
  title: "I prefer iPhones over Android Phones"
},
{
  category: "Miscellaneous",
  title: "I can recite the Pokemon theme song by memory"
},
{
  category: "Life",
  title: "People deserve second chances"
},
{
  category: "Life",
  title: "Everything happens for a reason"
},
{
  category: "Life",
  title: "We all have a predetermined destiny"
},
{
  category: "Life",
  title: "Life is a purposeless void"
}]
)

question_1 = Question.find_by(title: "I prefer Green over Blue")
question_2 = Question.find_by(title: "I prefer Orange over Black")
question_3 = Question.find_by(title: "I prefer Red over Teal")
question_4 = Question.find_by(title: "I prefer Purple over Yellow")
question_5 = Question.find_by(title: "I prefer Rock over Reggae")
question_6 = Question.find_by(title: "I prefer Alternative over Hip-Hop")
question_7 = Question.find_by(title: "I prefer EDM over Country")
question_8 = Question.find_by(title: "I prefer Pop over Classical")
question_9 = Question.find_by(title: "I prefer Breaking Bad over Sons of Anarchy")
question_10 = Question.find_by(title: "I prefer Grey's Anatomy over House")
question_11 = Question.find_by(title: "I prefer Bojack Horseman over Rick and Morty")
question_12 = Question.find_by(title: "I prefer Black Mirror over The Walking Dead")
question_13 = Question.find_by(title: "I am a morning person")
question_14 = Question.find_by(title: "I like pineapples on pizza")
question_15 = Question.find_by(title: "I prefer iPhones over Android Phones")
question_16 = Question.find_by(title: "I can recite the Pokemon theme song by memory")
question_17 = Question.find_by(title: "People deserve second chances")
question_18 = Question.find_by(title: "Everything happens for a reason")
question_19 = Question.find_by(title: "We all have a predetermined destiny")
question_20 = Question.find_by(title: "Life is a purposeless void")


question_1_response_1 = Answer.create!(question_id: question_1.id, response: "Yes")
question_1_response_2 = Answer.create!(question_id: question_1.id, response: "No")
question_2_response_1 = Answer.create!(question_id: question_2.id, response: "Yes")
question_2_response_2 = Answer.create!(question_id: question_2.id, response: "No")
question_3_response_1 = Answer.create!(question_id: question_3.id, response: "Yes")
question_3_response_2 = Answer.create!(question_id: question_3.id, response: "No")
question_4_response_1 = Answer.create!(question_id: question_4.id, response: "Yes")
question_4_response_2 = Answer.create!(question_id: question_4.id, response: "No")
question_5_response_1 = Answer.create!(question_id: question_5.id, response: "Yes")
question_5_response_2 = Answer.create!(question_id: question_5.id, response: "No")
question_6_response_1 = Answer.create!(question_id: question_6.id, response: "Yes")
question_6_response_2 = Answer.create!(question_id: question_6.id, response: "No")
question_7_response_1 = Answer.create!(question_id: question_7.id, response: "Yes")
question_7_response_2 = Answer.create!(question_id: question_7.id, response: "No")
question_8_response_1 = Answer.create!(question_id: question_8.id, response: "Yes")
question_8_response_2 = Answer.create!(question_id: question_8.id, response: "No")
question_9_response_1 = Answer.create!(question_id: question_9.id, response: "Yes")
question_9_response_2 = Answer.create!(question_id: question_9.id, response: "No")
question_10_response_1 = Answer.create!(question_id: question_10.id, response: "Yes")
question_10_response_2 = Answer.create!(question_id: question_10.id, response: "No")
question_11_response_1 = Answer.create!(question_id: question_11.id, response: "Yes")
question_11_response_2 = Answer.create!(question_id: question_11.id, response: "No")
question_12_response_1 = Answer.create!(question_id: question_12.id, response: "Yes")
question_12_response_2 = Answer.create!(question_id: question_12.id, response: "No")
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



description_question_1 = Description.create!(title: "Favorite thing about the place that I live")
description_question_2 = Description.create!(title: "What I'm doing with my life")
description_question_3 = Description.create!(title: "My weirdest quirk")
description_question_4 = Description.create!(title: "I couldn't function without this app")
description_question_4 = Description.create!(title: "I couldn't function without this app")
description_question_5 = Description.create!(title: "A perfect day")



User.all.each do |user|
  Question.all.each do |question|
    answer_id = question.answers.sample(1).pluck(:id)[0]
    QuestionResponse.create!(question_id: question.id, user_id: user.id, answer_id: answer_id)
  end
end
