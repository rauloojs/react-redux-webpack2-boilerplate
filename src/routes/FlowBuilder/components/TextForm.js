import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';


export default class TextForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Validación'>
            <TextInput defaultValue={'Ninguna'} />
          </FormField>
        </fieldset>
      </div>
    );
  }
}
