def format_array(array)
    # remove whitespace
    # remove nulls
    # remove empty strings ""
    return array.collect(&:strip).compact.reject(&:empty?).join(', ')
end

def get_simple_value(
    country_code = '', 
    line1= '', 
    line2 = '', 
    line3 = '', 
    line4 = '',
    postalCode = '',
    city = '',
    registeredCity = '',
    county = '',
    province = ''
)
    case country_code
    when 'FR'
        return format_array([line1, line2, line3, city, postalCode])
    when 'IT', 'US', 'CH'
        return format_array([line1, line2, line3, city, postalCode, county])
    when 'GB', 'IE'
        return format_array([line1, line2, line3, city, county, postalCode])
    when 'KR'
        return format_array([line1, line2, city, county])
    when 'NL'
        return format_array([line2, line1, line3, postalCode, city])
    when 'AU'
        return format_array([postalCode, province])
    end
    return format_array([line1, line2, line3, county, postalCode, city])
end

def filter(event)
    simple_value = get_simple_value(
        event.get('countryCode') || '',
        event.get('[address][line1]') || '',
        event.get('[address][line2]') || '',
        event.get('[address][line3]') || '',
        event.get('[address][line4]') || '',
        event.get('[address][postalCode]') || '',
        event.get('[address][city]') || '',
        event.get('[address][registeredCity]') || '',
        event.get('[address][county]') || '',
        event.get('[address][province]') || ''
    )

    if simple_value.length > 0
        event.set('[address][simpleValue]', simple_value)
    end

    return [event]
end
