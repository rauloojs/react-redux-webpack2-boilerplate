import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import CheckBox from 'grommet/components/CheckBox';
import Select from 'grommet/components/Select';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import QuestionForm from './QuestionForm';
import ContainerForm from './ContainerForm';
import BlockForm from './BlockForm';


export default class FlowItemForm extends Component {
  render() {
    let flowItemTypeForm = null;

    switch ('block') {
      case 'question':
        flowItemTypeForm = <QuestionForm />
        break;
      case 'container':
        flowItemTypeForm = <ContainerForm />
        break;
      case 'block':
        flowItemTypeForm = <BlockForm />
        break;
      default:

    }
    return (
      <Form compact={false} fill={false} pad='small'>
        <FormFields>
          <fieldset>
            <legend>Flow Item 1</legend>
            <FormField label='Nombre'>
              <input type='text'
              defaultValue={'Flow Item 1'} />
            </FormField>
            <FormField label='Descripción'>
              <TextInput defaultValue={'Flow item de prueba'} />
            </FormField>
            <FormField >
              <CheckBox label='Requerido' toggle={true} checked={true} />
            </FormField>
            <FormField >
              <CheckBox label='Usar expresión' toggle={true} checked={true} />
            </FormField>
            <FormField label='Peso'>
              <input type='text'
              defaultValue={'0'} />
            </FormField>
          </fieldset>
          {flowItemTypeForm}
        </FormFields>
        <Footer pad={{vertical: 'medium'}}>
          <Button label="OK" primary={true} />
        </Footer>
      </Form>
    );
  }
}
