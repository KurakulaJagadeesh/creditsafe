def filter(event)
    status = event.get('status')
    case status
        when '1' then event.set('status', 'Active')
        when '2' then event.set('status', 'Pending')
        when '3' then event.set('status', 'NonActive')
    end
    return [event]
end 