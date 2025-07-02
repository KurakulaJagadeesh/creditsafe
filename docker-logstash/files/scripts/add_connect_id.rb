def connect_id_based_numeric(country_code, numeric_identifier)
    value = numeric_identifier.to_s != '' ? numeric_identifier.to_i.to_s : ''
    country_code + '-X-' + value
end

def connect_id_based_id(country_code, id)
    country_code + '-X-' + id
end

def connect_id_based_type(country_code, numeric_identifier, company_type)
    value = numeric_identifier.to_s != '' ? numeric_identifier.to_i.to_s : ''
    company_type_mapping = 
        case country_code
            when 'NO' then  
                {
                    'limited' => '0',
                    'soleproprietor' => '2'
                }
            
            else {
                'limited' => '0',
                'nonlimited' => '1'
            }
        end

    mapping = company_type != '' &&  company_type_mapping[company_type.downcase] != nil ? company_type_mapping[company_type.downcase] : 'X'

    country_code + '-' + mapping + '-' + numeric_identifier 
end

def add_connect_id(country_code = '', org_number = '' , reg_number = '', company_id = '', company_type = '')
    case country_code
    when  'IT', 'GB'
        return connect_id_based_type(country_code, reg_number, company_type)
    when 'NO', 'DE'
        return connect_id_based_type(country_code, company_id, company_type)
    when 'FI'
        return connect_id_based_id(country_code, reg_number)
    when 'CA', 'DK', 'MX'
        return connect_id_based_id(country_code, company_id)
    end
    return 'default'
end

def filter(event)
    event.set('connectId', add_connect_id(
        event.get('countryCode') || '', 
        event.get('orgNumber') || '', 
        event.get('regNumber') || '', 
        event.get('companyId') || '', 
        event.get('regType') || ''
    ))
    return [event]
end