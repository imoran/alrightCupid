class User < ApplicationRecord
  validates :username, :first_name, :password_digest, :session_token, presence: true
  validates :age, presence: true
  validates :zipcode, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  geocoded_by :zipcode
  before_validation :ensure_session_token, :geocode
  after_initialize :ensure_geocode

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
    search_name = "%#{name.downcase}%"
    User.where('LOWER(first_name) LIKE ?', search_name)
  end

  def ensure_geocode
    return if valid_location?
    self.geocode
    self.save!
  end

  def get_city
    return self.city if self.city
    return "city" unless valid_location?
    geo_localization = "#{self.latitude}, #{self.longitude}"
    self.city = Geocoder.search(geo_localization).first.city
    self.save!
  end

  def valid_location?
    self.latitude && self.longitude
  end

  def get_state
    return "state" unless self.valid_location?
    return self.state if self.state
    geo_localization = "#{self.latitude}, #{self.longitude}"
    self.state = Geocoder.search(geo_localization).first.state
    self.save!
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
