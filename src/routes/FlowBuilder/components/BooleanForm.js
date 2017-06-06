import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';


export default class BooleanForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Texto negativo'>
            <TextInput defaultValue={null} />
          </FormField>
          <FormField label='Texto positivo'>
            <TextInput defaultValue={null} />
          </FormField>
        </fieldset>
      </div>
    );
  }
}
