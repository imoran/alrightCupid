class User < ApplicationRecord
  validates :username, :first_name, :password_digest, :session_token, presence: true
  validates :age, presence: true
  validates :zipcode, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  geocoded_by :zipcode
  before_validation :ensure_session_token, :geocode

  has_many :question_responses
  has_many :description_responses

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.search_by_name(name)
    #Active Record
  end
  #
  # def get_query
  #   geo_localization = "#{self.latitude}, #{self.longitude}"
  #   query = Geocoder.search(geo_localization).first
  # end
  #
  def get_city
    geo_localization = "#{self.latitude}, #{self.longitude}"
    query = Geocoder.search(geo_localization).first
    self.city = get_query.city
  end
  #
  def get_state
    geo_localization = "#{self.latitude}, #{self.longitude}"
    query = Geocoder.search(geo_localization).first
    self.state = get_query.state
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
