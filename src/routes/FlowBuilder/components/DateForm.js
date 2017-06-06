import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';


export default class DateForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Descripción'>
            <TextInput defaultValue={'Flow item de prueba'} />
          </FormField>
          <FormField label='Tipo de pregunta'>
            <Select value={'Booleana'} options={['Booleana', 'Selección múltiple']}/>
          </FormField>
        </fieldset>
      </div>
    );
  }
}
