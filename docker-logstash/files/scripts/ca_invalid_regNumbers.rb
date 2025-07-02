def clean_up (event, hashed_val, prefix = '')
    hashed_val.each do |k,v|
        scopedPrefix = prefix + '[' + k + ']'
        if scopedPrefix=='[regNumber]'
            if v == nil || ["38D", "MOTEL","RTESY AUTO SALES","REST","2","MARCH 88","CELIA HAIR DESIGN","25","NA/","Q","72","70","NON IMMATRICULEE","GENERAL CO","61D","SASKATOON","XXX","SEPT 91","WHOLESALE","SALABERRY-DE-VALLEYF","82","JAN 92","PAS IMMATRICULEE.","MARCH 89","PENDING CORP.SEARCH","NOV 89","KITCHENER","OCT 93","NONE","13","89",".","75I","27I","72I","GRAHAM KELLY","JULY 90","89I","--","9","30D","F","91","MAY 85","NOV 82","SILVERADO OIL TOOLS","78","98","1","81","94F","24","COUVRE PLANCHERS YVE","12","9M","29F","OCT 91","29I","57","OCT 85","AUG 92","65","V","87","FEB 74","APRIL 60","DEC 84","NON DISPONIBLE","N/A.","NONE REPORTED","0","ISTE DE BO","YES","NA","N/A","PROP","NOT AVAILABLE38D","MOTEL","RTESY AUTO SALES","REST","2","MARCH 88","CELIA HAIR DESIGN","25","NA/","Q","72","70","NON IMMATRICULEE","GENERAL CO","61D","SASKATOON","XXX","SEPT 91","WHOLESALE","SALABERRY-DE-VALLEYF","82","JAN 92","PAS IMMATRICULEE.","MARCH 89","PENDING CORP.SEARCH","NOV 89","KITCHENER","OCT 93","NONE","13","89",".","75I","27I","72I","GRAHAM KELLY","JULY 90","89I","--","9","30D","F","91","MAY 85","NOV 82","SILVERADO OIL TOOLS","78","98","1","81","94F","24","COUVRE PLANCHERS YVE","12","9M","29F","OCT 91","29I","57","OCT 85","AUG 92","65","V","87","FEB 74","APRIL 60","DEC 84","NON DISPONIBLE","N/A.","NONE REPORTED","0","ISTE DE BO","YES","NA","N/A","PROP","NOT AVAILABLE"].include?(v)
                event.remove(scopedPrefix)
            end
        end
    end
end

def filter(event)
    clean_up(event, event.to_hash, '')
    return [event]
end