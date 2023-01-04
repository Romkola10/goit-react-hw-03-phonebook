import { Component } from 'react';
class ContactForm extends Component {
    state = {
        // contacts: [],
        name: '',
        number: ''
    };

    handleSubmit = e => {
        e.preventDefault();

        const { onSubmit } = this.props;
        onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState(() => ({
            name: '',
            number: '',
        }));
    };

    handleChange = name => e => {

        this.setState(() => ({
            [name]: e.target.value,
        }));
    };

    render() {
        return (
            <div className='form_container'>
                <form className='contact_form' onSubmit={this.handleSubmit}>
                    <lable className='label'>
                       <span>Name</span> 
                        <input
                           className='input_name'
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </lable>

                    <label className='label'>
                    <span >Number</span>
                        <input
                            className='input_number'
                            value={this.state.number}
                            onChange={this.handleChange('number')}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>

                    <button className='button' type='submit' >Add contact</button>
                </form>
            </div>
        );
    }

};

export default ContactForm;