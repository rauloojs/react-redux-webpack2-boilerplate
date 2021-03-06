import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';


export default class ActionForm extends Component {
  render() {

    return (
      <Form compact={false} fill={false} pad='small'>
        <FormFields>
          <fieldset>
            <legend>Acción</legend>
            <FormField label='Expresión'>
              <TextInput defaultValue={null} />
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
