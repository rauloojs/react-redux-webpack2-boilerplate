import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';


export default class BlockForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Contenido'>
            <TextInput defaultValue={'Block de prueba'} />
          </FormField>
        </fieldset>
      </div>
    );
  }
}
