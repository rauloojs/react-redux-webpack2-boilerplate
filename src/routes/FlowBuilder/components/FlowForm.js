import React, { Component } from 'react';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Anchor from 'grommet/components/Anchor';


export default class FlowForm extends Component {
  render() {
    return (
      <FormFields>
        <fieldset>

          <legend>Flow 1</legend>
          <FormField label='Nombre de la actividad'>
            <input type='text'
            value={'Flow 1'} />
          </FormField>
          <FormField label='Descripción'>
            <TextInput value={'Flow de prueba'}/>
          </FormField>
        </fieldset>
      </FormFields>
    );
  }
}
