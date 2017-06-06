import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';


export default class PhotoForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Formato'>
            <Select value={'jpg'} options={['jpg', 'png']}/>
          </FormField>
          <FormField label='Ancho'>
            <NumberInput defaultValue={480} />
          </FormField>
          <FormField label='Alto'>
            <NumberInput defaultValue={640} />
          </FormField>
          <FormField label='Calidad'>
            <NumberInput type='range' defaultValue={89} />
          </FormField>
        </fieldset>
      </div>
    );
  }
}
