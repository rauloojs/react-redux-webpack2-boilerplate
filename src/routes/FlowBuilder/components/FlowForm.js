import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Select from 'grommet/components/Select';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import KQueryBuilder from './KQueryBuilder';


const fields = [
  {name: 'customer__first_name', label: 'First Name'},
  {name: 'customer__last_name', label: 'Last Name'},
  {name: 'code', label: 'Code'},
  {name: 'organization__store_format', label: 'Store format'},
  {name: 'organization__channel', label: 'Channel'},
  {name: 'organization__extra_field_values__value', label: 'Organization extra field'},
  {name: 'customer__extra_field_values__value', label: 'Customer extra field'},
  {name: 'memberships__role__id', label: 'Role'}
];

const operators = [
  {label: '=', name: '='},
  {label: '<', name: 'lt'},
  {label: '>', name: 'gt'},
  {label: '<=', name: 'lte'},
  {label: '>=', name: 'gte'},
  {label: 'contains', name: 'contains'}
];


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
            <FormField label='Asignación de clientes'>
              <KQueryBuilder fields={fields} operators={operators}/>
            </FormField>
            <FormField label='Asignación de empleados'>
              <KQueryBuilder fields={fields} operators={operators}/>
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
