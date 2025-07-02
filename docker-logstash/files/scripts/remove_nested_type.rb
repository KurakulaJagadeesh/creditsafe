require 'csv'
def remove_nested_type(event)
  ['phoneNumbers', 'activityCodes', 'previousNames', 'tradingNames', 'urls', 'taxIds'].each { |type| 
      if event.include?(type) then
          if event.get(type) == nil || event.get(type) == 'null' then
              event.remove(type)
          else
              # bin data if not valid CSV
              begin
                event.set(type, CSV.parse(event.get(type))[0])
              rescue 
                event.remove(type)
              end
          end
      end
  }
end

def filter(event)
  remove_nested_type(event)
  return [event]
end