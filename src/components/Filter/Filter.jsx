import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    
    return (
        <div className='filter_container'>
            <label>
               <span className='filter_title'>Find contacts by name</span> 
                <input className='filter_input' type="name" value={value} onChange={onChange}
                />
            </label>
        </div>
    );
};

Filter.protoType = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;