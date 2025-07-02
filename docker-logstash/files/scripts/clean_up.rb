def clean_up (event, hashed_val, prefix = '')
    hashed_val.each do |k,v|
        scopedPrefix = prefix + '[' + k + ']'
        if v == nil
            event.remove(scopedPrefix)
        elsif v.is_a?(Hash)
            clean_up(event, v, scopedPrefix)
            if event.get(scopedPrefix).empty?
                event.remove(scopedPrefix)
            end
        end
    end
end

def filter(event)
    clean_up(event, event.to_hash, '')
    return [event]
end