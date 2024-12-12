import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import Logo from '../assets/globallinkup.svg';
import Logo2 from '../assets/tablet-logo.svg';
import FormInput from './layouts/FormInput';
import Checked from '../assets/checked.svg';
import Unchecked from '../assets/unchecked.svg';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  cityOfOrigin: Yup.string().required('City of Origin is required'),
  currentCity: Yup.string().required('Current City is required'),
  interests: Yup.array().min(1, 'Please select at least one interest').required('Interests are required'),
});

const checkEmailExists = async (email: string) => {
  try {
    const q = query(collection(db, 'waitlist'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};

const WaitlistForm = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE;

  const initialValues = {
    name: '',
    email: '',
    gender: 'Male' as 'Male' | 'Female' | 'Prefer not to say',
    cityOfOrigin: '',
    currentCity: '',
    interests: [] as string[],
    otherInterests: '',
  };

  return (
    <div className="py-8 px-4 bg-white rounded-xl h-full md:px-8 overflow-auto">
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            const emailExists = await checkEmailExists(values.email);
            if (emailExists) {
              alert('Email already exists. Please use a different email.');
              return;
            }

            try {
              await addDoc(collection(db, 'waitlist'), values);
              console.log('Form submitted successfully!');
              alert('Form submitted successfully!');
              resetForm();
            } catch (error) {
              console.error('Error submitting form:', error);
              alert('An error occurred while submitting the form. Please try again later.');
            }
          }}
      >
        {({ errors, touched }) => (
            <div className="">
              <Link to='/'>
              <img src={Logo} alt={appTitle} className="w-40 mx-auto mb-8 hidden md:block"/>
              <img src={Logo2} alt={appTitle} className="w-10 mx-auto mb-8 md:hidden"/>
              </Link>
              <div className="w-full border-b border-gray-00 mb-6"></div>
              <h1 className="text-3xl font-bold text-center mb-4 md:hidden">Join The Waitlist</h1>
              <p className="text-base text-center mb-8 md:hidden">
                Join our platform and unlock a world of opportunities for networking, exploration, and community
                building as an immigrant.
              </p>
              <Form className="space-y-6">

                <FormInput label="Your name">
                  <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full outline-none pb-1 ${
                          errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder=" --- --- ---"
                  />
                </FormInput>
                {errors.name && touched.name && (
                    <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}

                <FormInput label="Your email">
                  <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full outline-none pb-1 ${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder=" --- --- ---"
                  />
                </FormInput>
                {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}

                <div>
                  <label className="block mb-4 text-gray-600 font-bold">Gender</label>
                  <div className="flex">
                    <Field name="gender">
                      {({field, form}: FieldProps) => (
                          <>
                            {['Male', 'Female', 'Prefer not to say'].map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    className={`flex items-center p-4 rounded-md ${
                                        field.value === option
                                            ? 'border-2 border-[#2B3660]'
                                            : 'border-0'
                                    }`}
                                    onClick={() => form.setFieldValue('gender', option)}
                                >
                                  <img
                                      src={field.value === option ? Checked : Unchecked}
                                      alt={field.value === option ? "Checked" : "Unchecked"}
                                      className="w-4 h-4 mr-2"
                                  />
                                  {option}
                                </button>
                            ))}
                          </>
                      )}
                    </Field>
                  </div>
                  {errors.gender && touched.gender && <div className="text-red-500 mt-1">{errors.gender}</div>}
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <FormInput label="City of Origin">
                    <Field
                        type="text"
                        id="cityOfOrigin"
                        name="cityOfOrigin"
                        className={`w-full pb-1 outline-none ${
                            errors.cityOfOrigin && touched.cityOfOrigin ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder=" --- --- ---"
                    />
                    </FormInput>
                    {errors.cityOfOrigin && touched.cityOfOrigin && (
                        <div className="text-red-500 text-sm mt-1">{errors.cityOfOrigin}</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <FormInput label="Current City">
                    <Field
                        type="text"
                        id="currentCity"
                        name="currentCity"
                        className={`w-full outline-none pb-1 ${
                          errors.currentCity && touched.currentCity ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder=" --- --- ---"
                    />
                    </FormInput>
                    {errors.currentCity && touched.currentCity && (
                        <div className="text-red-500 text-sm mt-1">{errors.currentCity}</div>
                    )}
                  </div>
                </div>
    
                <div>
                  <label className="block mb-1 text-gray-600 font-bold text-lg">What are you most interested in?</label>
                  <label className="block mt-2 mb-4 text-sm">
                    <span className="text-red-500">*</span> Select all that apply
                  </label>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    <Field name="interests">
                      {({field, form}: FieldProps) => (
                          <>
                            {[
                              'Share or find my experiences',
                              'Make new friends',
                              'Get recommendations',
                              'Find jobs and housing'
                            ].map((interest) => (
                                <label
                                    key={interest}
                                    className="flex items-center cursor-pointer"
                                    onClick={() => {
                                      const updatedInterests = field.value.includes(interest)
                                          ? field.value.filter((i: string) => i !== interest)
                                          : [...field.value, interest];
                                      form.setFieldValue('interests', updatedInterests);
                                    }}
                                >
                                  <div className="relative w-5 h-5 mr-3 flex-shrink-0">
                                    <img
                                        src={field.value.includes(interest) ? Checked : Unchecked}
                                        alt={field.value.includes(interest) ? "Checked" : "Unchecked"}
                                        className="w-5 h-5"
                                    />
                                  </div>
                                  <span className="text-gray-700 text-base">{interest}</span>
                                </label>
                            ))}
                          </>
                      )}
                    </Field>
                  </div>
                  {errors.interests && touched.interests && (
                      <div className="text-red-500 text-sm mt-1">{errors.interests}</div>
                  )}
                </div>
    
                <FormInput label="Others (Specify)">
                <Field
                      type="text"
                      id="otherInterests"
                      name="otherInterests"
                      className={`w-full outline-none pb-1 ${
                          errors.otherInterests && touched.otherInterests ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder=" --- --- ---"
                  />
                </FormInput>
                {errors.otherInterests && touched.otherInterests && (
                    <div className="text-red-500 mt-1">{errors.otherInterests}</div>
                )}
    
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4
                            rounded-md hover:bg-red-700 transition duration-300 mb-20"
                >
                  Submit
                </button>
              </Form>
            </div>
        )}
      </Formik>
    </div>
    );
    };
    
    export default WaitlistForm;