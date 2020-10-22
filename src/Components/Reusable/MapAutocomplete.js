import React, {useState} from 'react';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';


export const ReusableMapAutocomplete = ({form, addStyles, onSubmit, primary, children, errors, action}) => {

    const [value, setValue] = useState('')
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0])
                .then(lng => action(lng, address)))
    };
    return (
            <PlacesAutocomplete
                value={value}
                onChange={(e) => setValue(e)}
                onSelect={(e) => handleSelect(e)}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='input__item'>
                        <input
                            {...getInputProps({
                                placeholder: 'Поиск мест ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
    )
}

export default React.memo(ReusableMapAutocomplete);
