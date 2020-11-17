import React from 'react';
import { mount } from 'enzyme';
import { AnswerForm } from '../src/components/AnswerForm';

// Test of AnswerForm component that doesn't work
it('Should update answer text when input is changed', () => {
    const wrapper = mount(<AnswerForm />);

    const inputField = wrapper.find('.answerInput');

    expect(inputField).value.toEqual('');

    inputField.simulate('change', 'Testanswer');

    expect(AnswerForm.current.Answer.answer_text).toEqual('Testanswer');
});
