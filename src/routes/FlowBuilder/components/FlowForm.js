import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Select from 'grommet/components/Select';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';


export default class FlowForm extends Component {
  render() {
    return (
      <Form compact={false} fill={false} pad='small'>
        <FormFields>
          <fieldset>
            <legend>Flow 1</legend>
            <FormField label='Nombre de la actividad'>
              <input type='text'
              defaultValue={'Flow 1'} />
            </FormField>
            <FormField label='Descripción'>
              <TextInput defaultValue={'Flow de prueba'} />
            </FormField>
            <FormField >
              <CheckBox label='Usar geocerca' toggle={true} checked={true} />
            </FormField>
            <FormField label='Departamento'>
              <Select value={'Promotoria'} options={['Promotoria', 'Ventas']}/>
            </FormField>
            <FormField label='Disponibilidad'>
              <input type='text'
              defaultValue={'{"weeks": [], "days": [], "months": []}'} />
            </FormField>
            <FormField label='Vigencia'>
              <input type='text'
              defaultValue={'{"end": null, "start": null}'} />
            </FormField>
            <FormField label='Tipo de actividad'>
              <Select value={'Actividad'} options={['Actividad', 'Incidencia']}/>
            </FormField>
            <FormField label='Icono'>
              <input type='text'
              defaultValue={'1'} />
            </FormField>
          </fieldset>
        </FormFields>
        <Footer pad={{vertical: 'medium'}}>
          <Button label="OK" primary={true} />
        </Footer>
      </Form>
    );
  }
}
