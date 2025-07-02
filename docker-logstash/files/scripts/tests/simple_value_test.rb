require "./add_simple_value.rb"
require "test/unit"

## Run Tests:
## ruby -w tests/simple_value_test.rb

class TestSimpleAddress < Test::Unit::TestCase

  def setup

     line1= 'Address Line 1'
     line2 = 'Line Two'
     line3 = 'Line Three'
     line4 = 'Line Four'
     postalCode = 'Postal Code'
     city = 'City'
     registeredCity = 'Registered City'
     county = 'County'
     province = 'Province'

    @simpleValueAllFieldsFI = get_simple_value(
        country_code = 'FI',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsFR = get_simple_value(
        country_code = 'FR',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsIT = get_simple_value(
        country_code = 'IT',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsUS = get_simple_value(
        country_code = 'US',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsCH = get_simple_value(
        country_code = 'CH',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsGB = get_simple_value(
        country_code = 'GB',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsIE = get_simple_value(
        country_code = 'IE',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsKR = get_simple_value(
        country_code = 'KR',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsNL = get_simple_value(
        country_code = 'NL',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )
    @simpleValueAllFieldsAU = get_simple_value(
        country_code = 'AU',
        line1,
        line2,
        line3,
        line4,
        postalCode,
        city,
        registeredCity,
        county,
        province
    )

  end

  def test_simple_value_FI
    assert_equal('Address Line 1, Line Two, Line Three, County, Postal Code, City', @simpleValueAllFieldsFI)
  end

  def test_simple_value_FR
    assert_equal('Address Line 1, Line Two, Line Three, City, Postal Code', @simpleValueAllFieldsFR)
  end

  def test_simple_value_IT
    assert_equal('Address Line 1, Line Two, Line Three, City, Postal Code, County', @simpleValueAllFieldsIT)
  end

  def test_simple_value_US
    assert_equal('Address Line 1, Line Two, Line Three, City, Postal Code, County', @simpleValueAllFieldsUS)
  end
  
  def test_simple_value_CH
    assert_equal('Address Line 1, Line Two, Line Three, City, Postal Code, County', @simpleValueAllFieldsCH)
  end

  def test_simple_value_GB
    assert_equal('Address Line 1, Line Two, Line Three, City, County, Postal Code', @simpleValueAllFieldsGB)
  end

  def test_simple_value_IE
    assert_equal('Address Line 1, Line Two, Line Three, City, County, Postal Code', @simpleValueAllFieldsIE)
  end

  def test_simple_value_KR
    assert_equal('Address Line 1, Line Two, City, County', @simpleValueAllFieldsKR)
  end

  def test_simple_value_NL
    assert_equal('Line Two, Address Line 1, Line Three, Postal Code, City', @simpleValueAllFieldsNL)
  end

  def test_simple_value_AU
    assert_equal('Postal Code, Province', @simpleValueAllFieldsAU)
  end

  def test_format_array
    assert_equal('this will be broken into segments, previous segments should be removed, no trailing whitespace, only one space after comma', format_array(["this will be broken into segments", " ", "", "previous segments should be removed", "no trailing whitespace ", "   only one space after comma"]))
  end

end