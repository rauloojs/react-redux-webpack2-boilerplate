import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextForm from './TextForm';
import BooleanForm from './BooleanForm';
import ChoiceForm from './ChoiceForm';
import BlockForm from './BlockForm';
import PhotoForm from './PhotoForm';


export default class QuestionForm extends Component {
  render() {
    let questionTypeForm = null;

    switch ('photo') {
      case 'text':
        questionTypeForm = <TextForm />;
        break;
      case 'boolean':
        questionTypeForm = <BooleanForm />;
        break;
      case 'single_choice':
      case 'multiple_choice':
        questionTypeForm = <ChoiceForm />;
        break;
      case 'block':
        questionTypeForm = <BlockForm />;
        break;
      case 'photo':
        questionTypeForm = <PhotoForm />;
        break;
      default:

    }
    return (
      <div>
        <fieldset>
          <FormField label='Tipo de pregunta'>
            <Select value={'Booleana'} options={['Booleana', 'Selección múltiple']}/>
          </FormField>
          <FormField label='Tipo de widget'>
            <Select value={'Predeterminado'} options={['Predeterminado']}/>
          </FormField>
        </fieldset>
        {questionTypeForm}
      </div>
    );
  }
}
