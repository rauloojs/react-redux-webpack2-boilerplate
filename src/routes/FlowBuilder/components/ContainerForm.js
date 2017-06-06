import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
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

export default class ContainerForm extends Component {
  render() {

    return (
      <div>
        <fieldset>
          <FormField label='Tipo de contenedor'>
            <Select value={'Básico'} options={['Básico', 'Productos', 'Clientes', 'Empleados']}/>
          </FormField>
          <FormField label='Política de asignación'>
            <KQueryBuilder fields={fields} operators={operators}/>
          </FormField>
        </fieldset>
      </div>
    );
  }
}
