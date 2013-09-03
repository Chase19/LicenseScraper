require 'open-uri'
require 'openssl'

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

class ScraperController < ApplicationController
  def scrape
  end
  
  def pull_url
  	file = open "https://interactive.web.insurance.ca.gov/webuser/LIC_STS_UTL.GET_LIC_DETAILS?P_IL_LIC_NBR=#{params['license']}"
  	render :text => file.read
  end
end
