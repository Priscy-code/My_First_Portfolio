import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../../components/layouts/FormInput';
import TrashIcon from '../../../../assets/manage-communities/trash-icon.svg';

const validationSchema = Yup.object().shape({
  rule: Yup.string().required('Rule is required'),
});

const AdminTools = () => {
  const [rules, setRules] = React.useState<string[]>([]);

  const addRule = (rule: string) => {
    setRules([...rules, rule]);
  };

  const removeRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Admin Tools</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Community Rules</h3>
        <div className="text-sm text-gray-600 mb-4">
            <p>
                It's important to establish clear community rules to ensure a positive and respectful environment for all members. 
                These rules should reflect the values of our platform and promote constructive engagement among users.
                However, please remember that community rules must not contradict the overarching rules and guidelines set 
                forth by our platform. Let's work together to cultivate welcoming and inclusive communities while upholding platform standards. 
                Thank you for your cooperation in maintaining a healthy online ecosystem.
            </p>
            <p className='my-3'>Read platform guidelines <span className='text-custom-red text-bold'>here</span>.</p>
        </div>

        <Formik
          initialValues={{ rule: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            addRule(values.rule);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormInput label="Rule">
                <Field name="rule" type="text" className="w-full outline-none pb-1" placeholder="Enter rule" />
              </FormInput>
              {errors.rule && touched.rule && (
                <div className="text-red-500 text-sm mt-1">{errors.rule}</div>
              )}
              <button type="submit" className="text-custom-red mt-2">Add Rule +</button>
            </Form>
          )}
        </Formik>
        <ul className="mt-4">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-center justify-between p-2 rounded mb-2">
              <span>{rule}</span>
              <button onClick={() => removeRule(index)} className="text-red-500">
                <img src={TrashIcon} alt="Remove Rule" className="w-4 h-4 bg-gray-100" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminTools;